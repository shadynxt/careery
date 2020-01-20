/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 07-02-2019
# Module                : ListComponent                     
# Object name           : ListComponent    
# Functionality         : get search user list
# Purpose               : constructor, ngOnInit, defineSearchResult, goToProfile, goToHomePage, getMutualFriend
*******************************************************/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { BlocksmodalComponent } from '../../global/blocksmodal/blocksmodal.component';
import * as global from '../../globalConfig';
import { OwlCarousel } from 'ngx-owl-carousel';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('askForSignUpModal') askForSignUpModal; // reference of sign modal
  @ViewChild(BlocksmodalComponent) blockModal: BlocksmodalComponent; // block component obj
  @ViewChild('recentCarousel') recentCarousel: OwlCarousel;
  searchList: Array<any> = []; // get search user list
  paginationConfig: any = null; // pagination config
  totalRows: any = null;
  currentPage: any = 1; // set current
  currentUserData: any = null; // set current user data
  loggedInUser: any = null; // loggedin user data
  currentTime: any = null; // set current time
  keyword: string = ""; // search keyword
  scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // set scroll config
  recentSearchCaro = { items: 3, dots: false, nav: true, responsive: { 0: { items: 1 }, 568: { items: 2 }, 768: { items: 3 }, 1024: { items: 2 }, 1138: { items: 3 } } }; // recent search slider config
  closeResult: string; // close the result
  images: any = null; // get images
  activeListItemIndex: any = null;
  recentSearchList: any = [];
  /* Function Name : constructor
	* Author : 
	* Created Date : 07-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : route, activeRoute, userService, modalService, cService
	*/
  constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UsersService, private modalService: NgbModal, private cService: CommonService, private translate: TranslateService,) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(lang);

    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 07-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    localStorage.setItem('_sp', 'user');


    this.paginationConfig = {
      perPage: 10,
      render: (page) => {
        this.currentPage = page;
        this.cService.listData.subscribe((listData: any) => {
          if (listData) {
            this.defineSearchResult(listData);
            this.totalRows = listData.data.result.pager.rowCount;
          }
        });
        this.activeRoute.queryParams.subscribe(params => {
          let pageName = localStorage.getItem('_sp');
          let postData = {
            "page_name": pageName,
            "keyword": params["key"],
            "page": this.currentPage
          }

          this.userService.searchUsers(postData).subscribe((responseData: any) => {
            this.defineSearchResult(responseData);
            this.totalRows = responseData.data.result.pager.rowCount;
          });

        });

      }
    }

    this.currentTime = (new Date()).getTime() / 1000;

    this.blockModal.closeBlock.subscribe((res) => {
      let connectionStatus = this.checkConnectionButtonStatus(this.searchList[this.activeListItemIndex]);
      if (res == 'unblock') {
        this.searchList[this.activeListItemIndex]['buttons']['unblock'] = false;
        this.searchList[this.activeListItemIndex]['buttons']['block'] = true;
        if (connectionStatus) {
          this.searchList[this.activeListItemIndex]['buttons']['connection'] = true;
        } else {
          this.searchList[this.activeListItemIndex]['buttons']['connection'] = false;
        }
      } else {
        this.searchList[this.activeListItemIndex]['buttons']['unblock'] = true;
        this.searchList[this.activeListItemIndex]['buttons']['block'] = false;
        if (connectionStatus) {
          this.searchList[this.activeListItemIndex]['buttons']['connection'] = false;
        } else {
          this.searchList[this.activeListItemIndex]['buttons']['connection'] = true;
        }
      }
    });


  }
  /* Function Name : defineSearchResult
	* Author : 
	* Created Date : 07-02-2019 
	* Modified Date : *
	* Purpose : to get search user result
	* PARAMS : listData
	*/
  defineSearchResult(listData: any) {
    if (listData) {
      this.searchList = listData.data.result.list;
      if (listData.data.user) {
        this.loggedInUser = listData.data.user;

        this.getMutualFriend('search');
        this.listButtonDisplay();
      }
      this.recentSearchData();


    }
  }

  // recentSearchList() {
  //   let postData = {
  //     "page_name": 'user',
  //     "keyword": this.loggedInUser.last_search_keyword
  //   }
  //   this.userService.searchUsers(postData).subscribe((responseData:any)=>{
  //     this.defineSearchResult(responseData);
  //   })
  // }
  /* Function Name : goToProfile
  * Author : 
  * Created Date : 07-02-2019 
  * Modified Date : *
  * Purpose : to go to a user profile
  * PARAMS :  user
  */

  goToProfile(user: any) {

    if (localStorage.getItem("_user")) {
      this.route.navigate(['/', user.cpp]);
    } else {
      if (user.privacySettings) {
        let guestViewProfile = user.privacySettings.find((item) => { // is guest view user profile
          return item.options_id == 9;
        });
        if (guestViewProfile === undefined || guestViewProfile.show_status === 1) {
          this.route.navigate(['/', user.cpp]);
        } else {
          this.keyword = '';
          this.modalService.open(this.askForSignUpModal, { size: 'sm', centered: true, windowClass: 'DefaultModal' })
        }
      }
    }
  }
  /* Function Name : goToHomePage
  * Author : 
  * Created Date : 07-02-2019 
  * Modified Date : *
  * Purpose : to go to home page
  * PARAMS :  
  */
  goToHomePage() {
    this.modalService.dismissAll();
    this.route.navigate(['/']);
  }
  /* Function Name : getMutualFriend
  * Author : 
  * Created Date : 07-02-2019 
  * Modified Date : *
  * Purpose : to calculate the mutual connection
  * PARAMS :  
  */
  getMutualFriend(type) {
    let userFriendIdList: any = [];
    let currentUserId = this.loggedInUser.id.toString();
    if (this.loggedInUser.friendsIds) {
      userFriendIdList = this.loggedInUser.friendsIds.friend_ids;
      userFriendIdList = userFriendIdList.split(",");
    }
    let listData = null;
    if (type == 'search') {
      listData = this.searchList;
    } else if (type == 'recent') {
      listData = this.recentSearchList;
    }
    if (listData.length > 0) {

      listData.forEach((item, index) => {
        listData[index]['mutualFriendCount'] = 0;
        if (
          item &&
          (localStorage.getItem('_user') && this.loggedInUser.id != item.id) &&
          (item.friendsIds && item.friendsIds.friend_ids)) {
          let friendList = item.friendsIds.friend_ids;
          friendList = friendList.split(",");
          friendList.splice(friendList.indexOf(currentUserId), 1);

          let mutualFriendList = userFriendIdList.filter(function (obj) { return friendList.indexOf(obj) > -1; });
          listData[index]['mutualFriendCount'] = mutualFriendList.length;

        }
      });
    }
    if (type == 'search') {
      this.searchList = listData;
    } else if (type == 'recent') {
      this.recentSearchList = listData;
    }
  }

  checkConnectionButtonStatus(item) {
    let currentUserId = this.loggedInUser.id.toString();
    let connectionStatus = true;
    if (item.friendsIds) { // check connection button exist or not if item user is alreday in user connections

      let friendList = item.friendsIds.friend_ids;
      if (friendList) {
        friendList = friendList.split(",");
        if (friendList.indexOf(currentUserId) > -1) {
          connectionStatus = false;
        }
      }
    }

    if (item.friendsPendingIds) { // check connection button exist or not loggedin user already sent request and it is in pending mode

      let friendList = item.friendsPendingIds.friend_ids;
      if (friendList) {
        friendList = friendList.split(",");
        if (friendList.indexOf(currentUserId) > -1) {
          connectionStatus = false;
        }
      }
    }

    if (item.friendsRejectedIds) { // check connection button exist or not if item user already rejected the connection

      let friendList = item.friendsRejectedIds.friend_ids;
      if (friendList) {
        friendList = friendList.split(",");
        if (friendList.indexOf(currentUserId) > -1) {
          connectionStatus = false;
        }
      }
    }
    if (item.blocksIds) { // check connection button exist or not if search item user block the loggedin user

      let blockList = item.blocksIds.blocks_ids;
      if (blockList) {
        blockList = blockList.split(",");
        if (blockList.indexOf(currentUserId) > -1) {
          connectionStatus = false;
        }
      }
    }

    if (this.loggedInUser.friendsPendingIds) { // check connection button exist or not

      let friendList = this.loggedInUser.friendsPendingIds.friend_ids;
      if (friendList) {
        friendList = friendList.split(",");
        if (friendList.indexOf(item.id.toString()) > -1) {
          connectionStatus = false;
        }
      }
    }
    return connectionStatus;
  }
  /* Function Name : listButtonDisplay
  * Author : 
  * Created Date : 05-03-2019 
  * Modified Date : *
  * Purpose : to display button of users
  * PARAMS :  
  */
  listButtonDisplay() {
    let currentUserId = this.loggedInUser.id.toString();
    this.searchList.forEach((item, index) => {
      this.searchList[index]['buttons'] = {
        "block": false,
        "unblock": false,
        "connection": false,
        "acceptConnection": false
      };
      if (localStorage.getItem("_user")) {

        
        let connectionStatus = this.checkConnectionButtonStatus(item);



        let blockStatus = true;
        let unblockStatus = false;
        if (this.loggedInUser.blocksIds && this.loggedInUser.blocksIds.blocks_ids) { // check block button exist or not
          let blockList = this.loggedInUser.blocksIds.blocks_ids.split(",");
          if (blockList.indexOf(item.id.toString()) > -1) {
            blockStatus = false;
            unblockStatus = true;
            connectionStatus = false;
          }
        }
        if (this.loggedInUser.id != item.id) {
          this.searchList[index]['buttons']['connection'] = connectionStatus;
          this.searchList[index]['buttons']['block'] = blockStatus;
          this.searchList[index]['buttons']['unblock'] = unblockStatus;
        }
      }
    });
    // console.log(this.searchList);
  }

  /* Function Name : recentSearchButtonDisplay
  * Author : 
  * Created Date : 22-07-2019 
  * Modified Date : *
  * Purpose : to display button of users
  * PARAMS :  
  */
 recentSearchButtonDisplay() {
  let currentUserId = this.loggedInUser.id.toString();
  
  this.recentSearchList.forEach((item, index) => {
    this.recentSearchList[index]['buttons'] = {
      "block": false,
      "unblock": false,
      "connection": false,
      "acceptConnection": false
    };
    if (localStorage.getItem("_user")) {


      let connectionStatus = this.checkConnectionButtonStatus(item);
      let blockStatus = true;
      let unblockStatus = false;
      if (this.loggedInUser.blocksIds && this.loggedInUser.blocksIds.blocks_ids) { // check block button exist or not
        let blockList = this.loggedInUser.blocksIds.blocks_ids.split(",");
        if (blockList.indexOf(item.id.toString()) > -1) {
          blockStatus = false;
          unblockStatus = true;
          connectionStatus = false;
        }
      }
      if (this.loggedInUser.id  != (item.id)) {
        this.recentSearchList[index]['buttons']['connection'] = connectionStatus;
        this.recentSearchList[index]['buttons']['block'] = blockStatus;
        this.recentSearchList[index]['buttons']['unblock'] = unblockStatus;
      }
    }
  });
  // console.log(this.searchList);
}

  /* Function Name : openBlock
* Author : 
* Created Date : 05-03-2019 
* Modified Date : *
* Purpose : to open block modal
* PARAMS : userId, index
*/
  openBlock(userId, index) {
    this.activeListItemIndex = index;
    this.blockModal.openBlockReasonModal(userId);
  }
  /* Function Name : unblock
	* Author : 
	* Created Date : 05-03-2019 
	* Modified Date : *
	* Purpose : to unblock a user
	* PARAMS : userId, index
	*/
  unblock(userId, index) {
    this.activeListItemIndex = index;
    this.blockModal.unblockUser(userId);
  }

  /* Function Name : connectionSend
* Author : 
* Created Date : 05-03-2019 
* Modified Date : *
* Purpose : to send connection request
* PARAMS : toid, index, type
*/
  connectionSend(connectionItem, index, type) {
    this.userService.connectionRequestSend(connectionItem.id)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          this.translate.get('COMMON.SUCCESS').subscribe((tData)=>{
            swal({
              title: tData,
              text: responseData.message,
              icon: 'success'
            }).then(()=>{

              if (type == 'searchitem'){
                this.cService.emitNotification(connectionItem.cpp, 'CS');
                this.searchList[index]['buttons']['connection'] = false;
              } else if(type == 'recentsearch') {
                this.recentSearchData();
              }
            });
          });
        } else if (responseData.statustext == 'error') {
          this.translate.get('COMMON.ERROR').subscribe((tData)=>{
          swal({
            title: tData,
            text: responseData.message,
            icon: 'error'
            
          })
        });
        }
      });
  }

  recentSearchData() {
    this.recentSearchList = [];
    this.userService.getRecentSearchList()
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          this.recentSearchList = responseData.data;
          if (this.loggedInUser) {
            this.getMutualFriend('recent');
            this.recentSearchButtonDisplay();
          }
          // console.log(this.recentSearchList);
          this.recentCarousel.reInit();
        }
      });
  }
}
