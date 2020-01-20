/*****************************************************
# Company Name          : 
# Author                :
# Created Date          : 10-02-2019
# Module                : NotificationsComponent
# Object name           : NotificationsComponent
# Functionality         : All notification
# Purpose               : constructor, ngOnInit, changeNotification, getNotification, openContactModal, getCityList, saveConnectFrom, mayContactList, contectList, connectionSend
*******************************************************/


import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from "../../services/common.service";
import { UsersService } from "../../services/users.service";
import { ChatService } from "../../global/chat/chat.service";
import * as global from '../../globalConfig';
import { PicturepathPipe } from '../../global/picturepath.pipe';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [PicturepathPipe]
})
export class NotificationsComponent implements OnInit {
  @Input() nonvisable: any = ''; // set the nonvisable item (EX: 'notification, connection, may-connect')
  @ViewChild('connectModal') connectModal;
  chatwithUserCpp: any = '';
  notificationCount: any = null; // notification count
  senderDetails: any = null; // sender details
  imagePath: any = null; // set image path

  connectDetails: Array<any> = []; // get contact details
  positions: Array<any> = []; // set positions
  degrees: Array<any> = []; // set degrees
  countries: Array<any> = []; // set countries
  cityList: Array<any> = []; // set city list
  mayList: Array<any> = []; // set may setting list
  notifyConnectionList: Array<any> = []; // get connections list
  settings: any = null; // set settings
  currentTime = null; // set current time
  paginations: any = { // set paginations
    notification: null,
    mayContact: null,
  }
  scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // set scrollbar options
  // PERSONAL CONFIG //
  connectForm: any = { // set connect form
    "positions": null,
    "degree": null,
    "country": null,
    "city": null,
    "error": 0,
    "submit": false
  };

  successMsg: string = ''; // set success message
  errorMsg: string = ''; // set error message
  connectionMsg: any = {
    success: '',
    error: ''
  };
  mayConnectionMsg: any = {
    success: '',
    error: ''
  }
  loader: any = {
    'mayconnect': false
  };

  chatConfig: any = null;
  loggedUser: any = null;
  /* Function Name : constructor
	* Author :
	* Created Date : 10-02-2019
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : cService, translate, modalService,userSerivce
	*/
  constructor(
    private cService: CommonService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private userSerivce: UsersService,
    private chatService: ChatService,
    private picPathPipe: PicturepathPipe
  ) {
    let user:any =  localStorage.getItem("_user");
		user = CryptoJS.AES.decrypt(user, 'careery');
    this.loggedUser = JSON.parse(user.toString(CryptoJS.enc.Utf8));
    
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });

    this.cService.chatConnection.subscribe((connection) => {
      if (connection) {
        this.setChatPerson(connection);
      }
    });
    var loggedUser = this.loggedUser;
    this.chatService.getInvitation.subscribe((invitation: any) => {
      if (invitation) {

        let room = invitation.room;
        let inviteRow = this.notifyConnectionList.findIndex((item) => {
          return item.room == room;
        });
        if (inviteRow != -1) {
          if (loggedUser._i != invitation.sendBy.id) {
            this.chatService.addUserToRoom({
              "id": loggedUser._i
            }, room, true);
          }
          this.notifyConnectionList[inviteRow].chatRequest = true;
        }
      }

    });
    this.cService.addUserToRoom(loggedUser._cpp);
    if (this.nonvisable.indexOf('notification') == -1) {
      this.cService.notificationEmit.subscribe((emitData: any) => {
        let notifytype = ['T', 'PS', 'DCV', 'DCA', 'R', 'CS', 'CA', 'CD', 'MCB'];
        if (emitData && notifytype.indexOf(emitData.type) > -1) {
          this.getNotification();
        }
      });
    }

  }
  /* Function Name : ngOnInit
	* Author :
	* Created Date : 10-02-2019
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS :
	*/
  ngOnInit() {
    this.imagePath = global.s3URL + "userspic/";
    this.currentTime = (new Date()).getTime() / 1000;
    // this.changeNotification();
    if (this.nonvisable.indexOf('notification') == -1) {
      this.getNotification();
    }

    this.mayContactList();
    this.connectionList();

    this.cService.sendBirthdayNotifications()
      .subscribe((responseData) => { });

    this.cService.mayContactSettings().subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.positions = response.data.positions;
        this.degrees = response.data.degree;
        this.countries = response.data.country;
        //console.log(this.degrees);

      }

    });
  }

  /* Function Name : changeNotification
  * Author :
  * Created Date : 19-02-2019
  * Modified Date : *
  * Purpose : to refesh api after 5 seconds
  * PARAMS :
  */

  changeNotification() {
    // setInterval(() => {
    //   this.getNotification();
    //   this.connectionList();
    //   this.mayContactList();
    //   // call functions
    // }, 1 * 60 * 1000); // every 1 min
  }

  /* Function Name : getNotification
  * Author :
  * Created Date : 19-02-2019
  * Modified Date : *
  * Purpose :
  * PARAMS :
  */
  getNotification() {

    let formPostData = {
      "type": "T,TR,PS,DCV,DCA,R,CS,CA,CD,MCB",
      "page": 1
    };
    this.cService.notificationsSubmit(formPostData).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        //console.log(response);
        this.notificationCount = response.data.list.length;
        this.senderDetails = response.data.list;
        this.paginations.notification = response.data.pagination;
      }

    });
  }

  /* Function Name : openContactModal
  * Author :
  * Created Date : 28-02-2019
  * Modified Date : *
  * Purpose : to open connect modal
  * PARAMS : connectModal
  */

  openContactModal() {

    this.mayContactList();
    this.modalService.open(this.connectModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
  }

  /* Function Name : getCityList
  * Author :
  * Created Date : 28-02-2019
  * Modified Date : *
  * Purpose : to get city list
  * PARAMS :
  */
  getCityList() {
    this.cityList = [];
    this.connectForm.city = null;
    let countryId = this.connectForm.country;
    if (countryId) {
      this.cService.getCityList(countryId)
        .subscribe((responseData: any) => {
          if (responseData.statustext === 'success') {
            this.cityList = responseData.data;
          }
        })
    }
  }

  /* Function Name : saveConnectFrom
  * Author :
  * Created Date : 28-02-2019
  * Modified Date : *
  * Purpose : to save connect form
  * PARAMS :
  */

  saveConnectFrom() {

    this.connectForm.submit = true;
    let formPostData = this.connectForm;
    if (this.connectForm.positions == null &&
      this.connectForm.degree == null &&
      this.connectForm.country == null &&
      this.connectForm.city == null
    ) {
      this.connectForm.error = 1;
      this.errorMsg = 'NOTIFICATIONS.ERROR';
      setTimeout(() => {
        this.errorMsg = '';
      }, 5000);
    } else {
      this.connectForm.error = 0;
    }
    //console.log(formPostData); return false;
    //saveContactSettings
    if (this.connectForm.error == 0) {
      this.cService.addContactSettings(formPostData).subscribe((response: any) => {
        if (response.statustext === 'success') {
          this.successMsg = response.message;
          this.modalService.dismissAll();
          setTimeout(() => {
            this.successMsg = '';
          }, 5000);
        }

      });
    }
  }

  /* Function Name : mayContactList
  * Author :
  * Created Date : 28-02-2019
  * Modified Date : *
  * Purpose : to get may  contact list
  * PARAMS :
  */

  mayContactList() {

    let formPostData = {
      "page": 1
    };
    this.cService.mayContactList(formPostData).subscribe((responseData: any) => {
      if (responseData.statustext === 'success') {
        this.mayList = responseData.data.list;
        this.imagePath = global.s3URL + 'userspic/';
        // this.paginations.mayContact = responseData.data.pager;
        this.settings = responseData.data.settings;
        if (responseData.data.settings && responseData.data.settings.positions_ids) {
          let setectPositionList = responseData.data.settings.positions_ids.split(',').map((item) => {
            return parseInt(item);
          });
          this.connectForm.positions = setectPositionList;
        }
        if (responseData.data.settings && responseData.data.settings.degree_ids) {
          let setectDegreeList = responseData.data.settings.degree_ids.split(',').map((item) => {
            return parseInt(item);
          });
          this.connectForm.degree = setectDegreeList;
        }
        if (responseData.data.settings && responseData.data.settings.country_ids) {

          this.connectForm.country = responseData.data.settings.country_ids;
          this.getCityList();
        }
        if (responseData.data.settings && responseData.data.settings.city_ids) {
          let setectCityList = responseData.data.settings.city_ids.split(',').map((item) => {
            return parseInt(item);
          });
          this.connectForm.city = setectCityList;
        }
      }
    })
  }

  /* Function Name : connectionList
  * Author :
  * Created Date : 04-03-2019
  * Modified Date : *
  * Purpose : to get user current contact list
  * PARAMS :
  */

  connectionList() {
    this.cService.userNotifyConnectionList({
      userCpp: this.loggedUser._cpp
    })
      .subscribe((responseData: any) => {
        // console.log(responseData);
        if (responseData.statustext == 'success') {
          let msgCountArr = responseData.data.msgCount;
          let msgLastChatArr = responseData.data.lastChatTimeList;
          this.notifyConnectionList = responseData.data.list.map((item) => {
            let rowData = item;
            rowData['room'] = this.cService.getRoomData(this.loggedUser, item);
            let sendMsgUser = msgCountArr.find((itemMsg) => {
              return itemMsg.send_user_id == item.id
            });
            if (sendMsgUser) {
              rowData["unreadMsgCount"] = sendMsgUser.msg_count;
            }

            let lastMsgUserTime = msgLastChatArr.find((itemMsg) => {
              return rowData['room'] == itemMsg.room
            });
            if (lastMsgUserTime) {
              rowData["lastChatTime"] = lastMsgUserTime.last_chat_time;
            }

            if (item.friendsIds && item.friendsIds.friend_ids) {
              let friends = item.friendsIds.friend_ids.split(',');
              if (friends.indexOf(this.loggedUser._i.toString()) > -1) {
                rowData['is_friend'] = 1;
              }
            }
            return rowData;
          });
        }
      })
  }
  /* Function Name : connectionSend
  * Author :
  * Created Date : 05-03-2019
  * Modified Date : *
  * Purpose : to send connection request
  * PARAMS :
  */
  connectionSend(type, connectionItem) {
    this.loader.mayContact = true;
    this.userSerivce.connectionRequestSend(connectionItem.id)
      .subscribe((responseData: any) => {
        this.loader.mayContact = false;
        if (type == 'connection') {
          if (responseData.statustext == 'success') {
            this.cService.emitNotification(connectionItem.cpp, 'CS');
            this.connectionMsg.success = responseData.message;
          } else {
            this.connectionMsg.error = responseData.message;
          }
        } else {
          if (responseData.statustext == 'success') {
            `this.cService.emitNotification(connectionItem.cpp, 'CS');`
            this.mayConnectionMsg.success = responseData.message;
          } else {
            this.mayConnectionMsg.error = responseData.message;
          }
        }
        setTimeout(() => {
          this.connectionMsg.success = '';
          this.connectionMsg.error = '';
          this.mayConnectionMsg.success = '';
          this.mayConnectionMsg.error = '';
        }, 5000);
      });
  }
  /* Function Name : setChatPerson
  * Author :
  * Created Date : 24-04-2019
  * Modified Date : *
  * Purpose : to set the current chat config
  * PARAMS :
  */
  setChatPerson(connection) {
    let room = this.cService.getRoomData(this.loggedUser, connection);

    this.cService.setChatRoomEmit(room);

    // this.chatConfig = {
    //   request: connection.chatRequest,
    //   room: this.getRoomData(connection),
    //   user: {
    // id: this.loggedUser._i,
    // cpp: this.loggedUser._cpp
    //   },
    //   chatwith: {
    //     id: connection.id,
    //     name: connection.first_name + ' ' + connection.last_name,
    // picture: (connection.profile_pic) ? this.picPathPipe.transform(connection.profile_pic, 'users') : null,
    // cpp: connection.cpp
    //   }
    // };
    // if (this.notifyConnectionList) {
    //   let connectionIndex = this.notifyConnectionList.findIndex((item) => {
    //     return item == connection;
    //   });
    //   if (this.notifyConnectionList[connectionIndex]) {
    //     delete this.notifyConnectionList[connectionIndex]["unreadMsgCount"];
    //   }
    // }

  }
  /* Function Name : getRoomData
  * Author :
  * Created Date : 24-04-2019
  * Modified Date : *
  * Purpose : to get the room name
  * PARAMS :
  */



}
