/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 05-02-2019
# Module                : ConnectionsComponent                     
# Object name           : ConnectionsComponent    
# Functionality         : get connection list of a user
# Purpose               : constructor, ngOnInit, getConnectionList, getMutualFriend, clickPager, gotoProfile
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router";
import * as global from '../../globalConfig';
import swal from 'sweetalert';
@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
  paginationConfig: any = null; // set pagination config
  totalRows: any = null;
  currentPage: any = 1; // set current page
  connectionList: Array<any> = []; // set connection list
  currentUserData: any = null; // set current user data
  currentTime: any = null; // set current time
  profile_image_path: string = global.s3URL + 'userspic/'; // set user profile image path
  /* Function Name : constructor
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : uService, cService, translate, route
	*/
  constructor(
    private uService: UsersService,
    private cService: CommonService,
    private translate: TranslateService,
    private route: Router) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });

  }
  /* Function Name : getConnectionList
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get all connection list of a user
	* PARAMS : 
	*/
  getConnectionList() {
    this.uService.userConnectionList(this.currentPage)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          this.defineConnections(responseData.data.connections.list, responseData.data.user);
        }
      })
  }

  defineConnections(list, user) {
    this.connectionList = list;
    // this.paginationConfig = responseData.data.connections.pager;
    this.currentUserData = user;
    this.getMutualFriend();
  }
  /* Function Name : getMutualFriend
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to calculate multal connections
	* PARAMS : 
	*/
  getMutualFriend() {
    let userFriendIdList: any = [];
    let currentUserId = this.currentUserData.id.toString();
    if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
      userFriendIdList = this.currentUserData.friendsIds.friend_ids;
      userFriendIdList = userFriendIdList.split(",");
    }
    this.currentTime = (new Date()).getTime() / 1000;

    this.connectionList.forEach((item, index) => {
      this.connectionList[index]['mutualFriendCount'] = 0;
      if (item.allFriends.friend_ids) {
        let friendList = item.allFriends.friend_ids;
        friendList = friendList.split(",");
        friendList.splice(friendList.indexOf(currentUserId), 1);

        let mutualFriendList = userFriendIdList.filter(function (obj) { return friendList.indexOf(obj) > -1; });
        this.connectionList[index]['mutualFriendCount'] = mutualFriendList.length;

      }
    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    localStorage.setItem('_sp', 'connection');
    this.paginationConfig = {
      perPage: 10,
      render: (page) => {
        this.currentPage = page;
        this.cService.listData.subscribe((listData: any) => {
          if (listData && listData.data) {
            this.defineConnections(listData.data.list.list, listData.data.user);
            this.totalRows = listData.data.list.pager.rowCount;
          }
        });
        this.uService.userConnectionList(this.currentPage)
          .subscribe((responseData: any) => {
            if (responseData.statustext == 'success' && responseData.data.connections) {
              this.defineConnections(responseData.data.connections.list, responseData.data.user);
              this.totalRows = responseData.data.connections.pager.rowCount;
            }
          })

      }
    }
  }
  /* Function Name : clickPager
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to click on pagination page
	* PARAMS : e
	*/
  clickPager(e) {
    this.currentPage = e;
    this.getConnectionList();
  }
  /* Function Name : gotoProfile
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to go to a user profile
	* PARAMS : friendCpp
	*/
  gotoProfile(friendCpp) {
    this.route.navigate(['/', friendCpp]);
  }
  /* Function Name : removeConnection
	* Author : 
	* Created Date : 09-07-2019 
	* Modified Date : *
	* Purpose : to remove connection
	* PARAMS : connection
	*/
  removeConnection(connection, connectionIndex) {
    this.connectionList[connectionIndex]['loader'] = true;
    this.uService.userConnectionRemove({
      c_u_id: btoa(connection.friend_id)
    }).subscribe((responsData: any) => {
      this.connectionList[connectionIndex]['loader'] = false;
      if (responsData.statustext == 'success') {
        this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          swal({
            title: tData['COMMON.SUCCESS'],
            text: responsData.message,
            icon: 'success'
          }).then(()=>{
            this.getConnectionList();
          });
        });
      } else {
        this.translate.get(['COMMON.ERROR']).subscribe((tData) => {
          swal({
            title: tData['COMMON.ERROR'],
            text: responsData.message,
            icon: 'error'
          });
        });
      }
    });
  }

}
