/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 18-02-2019
# Module                : BlocksComponent                     
# Object name           : BlocksComponent    
# Functionality         : Block users list
# Purpose               : constructor, ngOnInit, getConnectionList, gotoProfile
*******************************************************/

import { Component, OnInit,ViewChild  } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {CommonService} from "../../services/common.service";
import {TranslateService} from '@ngx-translate/core';
import { Router } from "@angular/router";
import * as global from '../../globalConfig';
import {BlocksmodalComponent} from '../../global/blocksmodal/blocksmodal.component';
import swal from 'sweetalert';
@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
  @ViewChild(BlocksmodalComponent) blockModal:BlocksmodalComponent; // get the block component obj
  paginationConfig : any = null; // pagination config
  currentPage : any = 1; // set current page
  connectionList: Array<any> = []; // set connection list
  currentUserData: any = null; // set current user data
  currentTime : any = null; // set current time
  profile_image_path: string = global.s3URL+'userspic/'; // user profile pic path
  
    // BLOCKFORM CONFIG //
  blockForm :any =  { // block form
    "id":null,
    "block_reason_id":null,
    "block_comment":'',
    "error":0,
    "submit":false
  };
  /* Function Name : constructor
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : uService, cService, modalService, translate,route
	*/
  constructor(
    private uService: UsersService, 
    private cService:CommonService, 
    private translate: TranslateService,
    private route: Router) {
    this.cService.activelang.subscribe((lang)=>{

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    this.cService.listData.subscribe((listData:any)=>{
      if (listData ) {
        this.connectionList = listData.data.list.list;
        this.paginationConfig = listData.data.list.pager;
        this.currentUserData = listData.data.user;
        this.getMutualFriend();
      }
    });


  }
  /* Function Name : getConnectionList
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to get all connection list
	* PARAMS : 
	*/
  getConnectionList() {
    this.uService.userConnectionList(this.currentPage)
    .subscribe((responseData:any)=>{
      if (responseData.statustext == 'success') {
        this.connectionList = responseData.data.connections.list;
        this.paginationConfig = responseData.data.connections.pager;
        this.currentUserData = responseData.data.user;
        if (this.currentUserData.blocksIds.blocks_ids) {
          let blockIds = this.currentUserData.blocksIds.blocks_ids.split(",");
          //console.log(blockIds);
          this.connectionList.forEach((item, index)=>{
            this.connectionList[index]['already_block'] = 0; 
            if (blockIds.indexOf(item.friend_id.toString()) > -1) {
              this.connectionList[index]['already_block'] = 1;
            }
          });
          // console.log(this.connectionList);
        }

        this.getMutualFriend();
      }
    })
  }
  /* Function Name : getMutualFriend
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to calculate the mutural connections
	* PARAMS : 
	*/  
  getMutualFriend() {
    let userFriendIdList:any = [];
    let currentUserId = this.currentUserData.id.toString();
    if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
      userFriendIdList = this.currentUserData.friendsIds.friend_ids;
      userFriendIdList = userFriendIdList.split(",");
    }
    this.currentTime = (new Date()).getTime()/1000;
    
    this.connectionList.forEach((item, index)=>{
      this.connectionList[index]['mutualFriendCount'] = 0;
      if (item.allFriends.friend_ids) {
        let friendList = item.allFriends.friend_ids;
        friendList = friendList.split(",");
        friendList.splice( friendList.indexOf(currentUserId), 1 );

        let mutualFriendList = userFriendIdList.filter(function(obj) { return friendList.indexOf(obj) > -1; });
        this.connectionList[index]['mutualFriendCount'] = mutualFriendList.length;

      }
    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/  
  ngOnInit() {
    localStorage.setItem('_sp', 'connection');
    this.getConnectionList();
    this.blockModal.closeBlock.subscribe((res)=>{
      this.getConnectionList();
    });
  }
  /* Function Name : clickPager
	* Author : 
	* Created Date : 19-02-2019 
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
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to go to a user profile
	* PARAMS :  friendCpp
	*/
  gotoProfile(friendCpp) {
    this.route.navigate(['/', friendCpp]);
  }

    /* Function Name : openBlock
	* Author : 
	* Created Date : 04-02-2019 
	* Modified Date : *
	* Purpose : open block modal
	* PARAMS : userId
	*/
  openBlock(userId) {
    this.blockModal.openBlockReasonModal(userId);
  }
  /* Function Name : unblock
	* Author : 
	* Created Date : 04-02-2019 
	* Modified Date : *
	* Purpose : to unblock a user
	* PARAMS : userId
	*/  
  unblock(userId) {
    this.blockModal.unblockUser(userId);
  }

  /* Function Name : removeConnection
	* Author : 
	* Created Date : 09-07-2019 
	* Modified Date : *
	* Purpose : to remove connection
	* PARAMS : connection
	*/
  removeConnection(connection, connectionIndex) {
    this.uService.userConnectionRemove({
      c_u_id: btoa(connection.friend_id)
    }).subscribe((responsData: any) => {
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
