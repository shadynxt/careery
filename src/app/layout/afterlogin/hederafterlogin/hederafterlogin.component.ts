/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-02-2019
# Module                : HederafterloginComponent                     
# Object name           : HederafterloginComponent    
# Functionality         : All application header functions
# Purpose               : constructor, ngOnInit, doLogout, getlanguage, langChange, searchUser, getNotification, openMenuModal, closeViewMenuModel, blockAction, submitBlockReasonFrom, hideNotificationAction
*******************************************************/

import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as global from '../../../globalConfig';
import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
import { UsersService } from '../../../services/users.service';
import { Router } from "@angular/router";
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BlocksmodalComponent } from '../../../global/blocksmodal/blocksmodal.component';
import { PicturepathPipe } from '../../../global/picturepath.pipe';

@Component({
	selector: 'app-hederafterlogin',
	templateUrl: './hederafterlogin.component.html',
	styleUrls: ['./hederafterlogin.component.scss'],
	providers: [PicturepathPipe]
})
export class HederafterloginComponent implements OnInit {
	@ViewChild(BlocksmodalComponent) blockModal: BlocksmodalComponent;
	setUpporfileStatus: any = null;
	successMessage: string; // to assign success message
	errorMessage: string = '';// to assign error message
	allLanguage: any[]; // to assign all languages
	activeLang: string = ''; // to assign active language
	loggedUser: any = null;
	activeUser: any = {
		name: '',
		gender: '',
		level: ''
	}; // to assign active user
	profilePic: any = null; // to assign user profile pic

	notificationCount: any = ''; // to assign notification cont for profile view
	totalProfileViewCount: any = null; // to get total user view profile count
	senderDetails: any = ''; // to assign sender user details
	imagePath: any = ''; // to assign user profile image path
	block_user_id: any = null;// to assign block user id
	reasonList: Array<any> = [];// to assign all block reason list
	notificationId: any = null;// to assign notification id
	senderCpp: any = null;
	blockForm: any = { // to assign block form data
		"id": null,
		"block_reason_id": null,
		"block_comment": '',
		"error": 0,
		"submit": false
	};
	messageCount: any = null;
	messagesList: any = [];
	displayButton: any = {
		connection: true,
		block: true
	}
	loader: any = {
		connect: false
	}
	connectionSendError: any = null;
	allInvitations: Array<any> = [];
	totaAllInvitations: any = 0;
	chatConfig: any = null;
	/* Function Name : constructor
	* Author : 
	* Created Date : 10-02-2019 
	* Modified Date : *
	* Purpose : to define all used class object
	* PARAMS :  route, authService, uService, translate, cService, sanitizer, modalService
	*/
	constructor(
		private route: Router,
		public authService: AuthService,
		private uService: UsersService,
		translate: TranslateService,
		private cService: CommonService,
		private sanitizer: DomSanitizer,
		private modalService: NgbModal,
		private picPathPipe: PicturepathPipe
	) {

		// this.cService.setupProfile.subscribe((status)=>{
		// 	this.setUpporfileStatus = status;
		// })
		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);
		});

		this.cService.profilePic.subscribe((pic) => {
			if (pic) {
				this.profilePic = this.sanitizer.bypassSecurityTrustUrl(pic);
			} else {
				this.profilePic = "";
			}
		});

		this.cService.profileName.subscribe((name) => {
			if (name) {
				this.activeUser.name = name;
			}
		});
		this.imagePath = global.s3URL + "userspic/";

	}

	keyword: string = "";
	/* Function Name : ngOnInit
	* Author : 
	* Created Date : 10-02-2019 
	* Modified Date : *
	* Purpose : to get content after html load
	* PARAMS :  
	*/
	ngOnInit() {
		if (localStorage.getItem("_cp") && localStorage.getItem("_cp") == '/setup-profile') {
			this.setUpporfileStatus = 1;
		}
		
		this.activeLang = localStorage.getItem("_lang");
		// this.activeUser.name = localStorage.getItem("_un");
		if (localStorage.getItem("_user")) {
			
			this.loggedUser = this.cService.getLoggedUserData();;
			this.activeUser.name = this.loggedUser._n;
			if(this.loggedUser) {

				this.activeUser.gender = this.loggedUser._g;
				this.activeUser.level = this.loggedUser._ex_l;
	
				this.cService.addUserToRoom(this.loggedUser._cpp);
				this.cService.notificationEmit.subscribe((emitData: any) => {
					let notifytype = ['PS', 'CS'];
					if (emitData && notifytype.indexOf(emitData.type) > -1) {
						this.getNotification();
						this.connectionInvitations();
					}
					if (emitData && emitData.type == 'CHAT') {
						this.getMessages();
					}
	
				});
				this.getNotification();
				this.connectionInvitations();
		
				this.cService.chatRoomEmit.subscribe((room) => {
					if (room) {
						this.setChatPerson(room);
					}
				});
			}
		}
		this.getlanguage();

	}


	/* Function Name : doLogout
	* Author : 
	* Created Date : 10-02-2019 
	* Modified Date : *
	* Purpose : to logout a user
	* PARAMS :  
	*/
	doLogout() {

		localStorage.removeItem("_token");
		// localStorage.removeItem("_un");
		localStorage.removeItem("_propic");
		localStorage.removeItem("_user");
		localStorage.setItem("_lang", "EN");
		this.cService.setActiveLang(localStorage.getItem("_lang"));

		this.route.navigate(['/']);
	}

	/* Function Name : getlanguage
	* Author : 
	* Created Date : 10-02-2019 
	* Modified Date : *
	* Purpose : to get all language data
	* PARAMS :  
	*/
	getlanguage() {
		this.cService.getLanguages().subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {

				this.allLanguage = response['data'];
				this.cService.setActiveLang(localStorage.getItem("_lang"));
			} else {

				console.log('language error');
			}

		});

	}

	/* Function Name : langChange
  * Author : 
  * Created Date : 12-02-2019 
  * Modified Date : *
  * Purpose : to change the language for all application
  * PARAMS :  lang
  */
	langChange(lang) {
		localStorage.setItem("_lang", lang);
		window.location.reload();

	}

	/* Function Name : searchUser
  * Author : 
  * Created Date : 12-02-2019 
  * Modified Date : *
  * Purpose : to search user 
  * PARAMS :  
  */
	searchUserList: any = [];
	activeSearchIndex: any = -1;
	searchUser(event) {

		if (event.which != 40 && event.which != 38 && event.which != 13) {
			// let pageName = localStorage.getItem('_sp');
			let pageName = 'user';
			this.loader.search = true;
			if (this.keyword) {
				let postData = {
					"page_name": pageName,
					"keyword": this.keyword
				}
				this.uService.searchUsers(postData)
					.subscribe((responseData: any) => {
						this.loader.search = false;
						this.searchUserList = responseData.data.result.list;
					});
			} else {
				this.loader.search = false;
				this.searchUserList = [];
			}
		} else {
			if (event.which === 40 && this.activeSearchIndex < (this.searchUserList.length - 1)) {
				this.activeSearchIndex += 1;
			} else if (event.which === 38 && this.activeSearchIndex > 0) {
				this.activeSearchIndex -= 1;
			} else if (event.which === 13) {

				if (this.activeSearchIndex == -1) {
					this.route.navigate(['/search'], { queryParams: { key: this.keyword } });
				} else {
					this.goToProfile(this.searchUserList[this.activeSearchIndex]);
				}
				this.keyword = '';
			}
			if (this.searchUserList[this.activeSearchIndex]) {
				this.keyword = this.searchUserList[this.activeSearchIndex].first_name + ' ' + this.searchUserList[this.activeSearchIndex].last_name;
			}

		}

	}

	/* Function Name : goToProfile
  * Author : 
  * Created Date : 12-02-2019 
  * Modified Date : *
  * Purpose : to go to a user public profile
  * PARAMS : user
  */
	goToProfile(user: any) {

		this.searchUserList = [];
		this.keyword = '';
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

					// this.modalService.open(this.askForSignUpModal, { size: 'sm', centered: true, windowClass: 'DefaultModal' })
				}
			}
		}
	}

	/* Function Name : getNotification
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : get the profile view notifications
	* PARAMS :  
	*/
	getNotification() {

		let formPostData = {
			"type": "PS,DCV,DCA",
			"status": 0,
			"date": 1,
		};
		this.cService.notificationsSubmit(formPostData).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {

				this.notificationCount = response.data.list.length;
				this.senderDetails = response.data.list;
				this.totalProfileViewCount = (response.data.count) ? response.data.count : 0;

			}
		});
		this.getMessages();
	}

	/* Function Name : getMessages
	* Author : 
	* Created Date : 02-04-2019 
	* Modified Date : *
	* Purpose : get the messages 
	* PARAMS :  
	*/
	getMessages() {
		
		let user = this.cService.getLoggedUserData();
		this.messagesList = [];
		this.uService.getChatNotification({
			cpp: user._cpp
		}).subscribe((responseData: any) => {
			if ((responseData['statustext'] === 'success')) {
				let unreadMsg = responseData.data.list.filter((item) => {
					return item.status == '0';
				});
				if (unreadMsg) {
					this.messageCount = unreadMsg.length;
				}
				this.messagesList = responseData.data.list.map((item) => {
					let msg = item;
					msg.message = (item.type == 0) ? decodeURIComponent(item.message) : item.message;
					return msg;
				});
			}

		})

	}

	/* Function Name : openMenuModal
	* Author : 
	* Created Date : 20-02-2019 
	* Modified Date : *
	* Purpose : to open menu modal
	* PARAMS : content,sender
	*/

	openMenuModal(content, sender) {

		this.senderCpp = sender.sender.cpp;
		this.notificationId = sender.id;
		// this.getNotification();
		this.uService.userDetailsByCPP(this.senderCpp).subscribe((userData: any) => {
			if (userData) {
				this.block_user_id = userData.data.id;
				if (userData.data.friendsIds) {
					let friendsId = userData.data.friendsIds.friend_ids.split(",");
					if (friendsId.indexOf(atob(localStorage.getItem('_u'))) > -1) {
						this.displayButton.connection = false;
					}
				}
			}
		});
		// this.hideNotificationAction();

		this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
	}

	/* Function Name : closeViewMenuModel
	* Author : 
	* Created Date : 20-02-2019 
	* Modified Date : *
	* Purpose : to close model after click
	* PARAMS : 
	*/
	closeViewMenuModel() {

		this.modalService.dismissAll();
	}




	/* Function Name : blockAction
	* Author : 
	* Created Date : 20-02-2019 
	* Modified Date : *
	* Purpose : to block a user
	* PARAMS : block_user_id
	*/
	blockAction(block_user_id) {


		this.modalService.dismissAll();
		this.blockModal.openBlockReasonModal(block_user_id);
	}



	/* Function Name : hideNotificationAction
  * Author : 
  * Created Date : 20-02-2019 
  * Modified Date : *
  * Purpose : to change a notificationa nd hide it
  * PARAMS :
  */
	hideNotificationAction() {
		// this.modalService.dismissAll();
		let formPostData = {
			"id": btoa(this.notificationId)
		};

		this.cService.hideNotification(formPostData).subscribe((hideData: any) => {
			// this.modalService.dismissAll();
			this.getNotification();
		});
	}


	navigateToPage(message) {
		if (message.cv_id) {
			this.notificationId = message.id;
			// this.hideNotificationAction();
			this.route.navigate(['/cv/consulting', message.cv_id]);
		}
	}

	/* Function Name : connectionSend
  * Author :
  * Created Date : 05-03-2019
  * Modified Date : *
  * Purpose : to send connection request
  * PARAMS : toId, senderCpp
  */
	connectionSend(toId, senderCpp) {
		this.loader.connect = true;
		this.connectionSendError = "";
		this.uService.connectionRequestSend(toId)
			.subscribe((responseData: any) => {
				this.loader.connect = false;
				if (responseData.statustext == 'success') {
					this.cService.emitNotification(senderCpp, 'CS');
					this.displayButton.connection = false;
				} else {
					this.connectionSendError = responseData.message;
					setTimeout(() => {
						this.connectionSendError = '';
					}, 5000)
				}
			});
	}

	setChatConnection(message) {
		this.cService.setChatConnection({
			id: message.user_id,
			first_name: message.first_name,
			last_name: message.last_name,
			profile_pic: message.profile_pic,
			cpp: message.cpp
		});
	}

	/* Function Name : connectionInvitations
  * Author : 
  * Created Date : 25-06-2019 
  * Modified Date : *
  * Purpose : to get all connection invitations
  * PARAMS :
  */

	connectionInvitations() {

		this.cService.connectionInvitationList().subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allInvitations = response.data.list;
				this.totaAllInvitations = response.data.list.length;
			}

		});
	}

	dropDownClickHandeler(type) {
		if (type == 'C') {
			this.messageCount = 0;
		} else if (type == 'N') {
			this.notificationCount = 0;
		} else if (type == 'I') {
			this.totaAllInvitations = 0;
		}
	}

	/* Function Name : setChatPerson
  * Author :
  * Created Date : 24-04-2019
  * Modified Date : *
  * Purpose : to set the current chat config
  * PARAMS :
  */
	setChatPerson(room) {
		let roomArr = room.split('-');
		roomArr.splice(roomArr.indexOf(this.loggedUser._cpp), 1);
		let connectionCpp = roomArr[0];
		this.uService.getUserDataByCpp({ cpp: connectionCpp })
			.subscribe((responseData: any) => {
				let connection = responseData.data;
				this.chatConfig = {
					request: connection.chatRequest,
					room: this.cService.getRoomData(this.loggedUser,connection),
					user: {
						id: this.loggedUser._i,
						cpp: this.loggedUser._cpp
					},
					chatwith: {
						id: connection.id,
						name: connection.first_name + ' ' + connection.last_name,
						picture: (connection.profile_pic) ? this.picPathPipe.transform(connection.profile_pic, 'users') : null,
						cpp: connection.cpp
					}
				};
			});



	}

}
