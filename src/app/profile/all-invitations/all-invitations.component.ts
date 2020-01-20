import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as global from '../../globalConfig';
import swal from 'sweetalert';
import * as CryptoJS from 'crypto-js';
@Component({
	selector: 'app-all-invitations',
	templateUrl: './all-invitations.component.html',
	styleUrls: ['./all-invitations.component.scss']
})
export class AllInvitationsComponent implements OnInit {

	allInvitations: Array<any> = []; // all invitaions
	allNotifications: Array<any> = []; // all notifications 
	paginationConfig: any = null; // set pagination config
	totalRows: any = null;
	successMessage: string = ''; // set success message
	loggedInUser: any = null;
	activeLoggedUser:any = null;
	constructor(
		private activatedRoute: ActivatedRoute,
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

	ngOnInit() {
		this.loggedInUser = this.cService.getLoggedUserData();
		this.connectionInvitations();

	}


	/* Function Name : connectionInvitations
	* Author : 
	* Created Date : 25-03-2019 
	* Modified Date : *
	* Purpose : to get all connection invitation list
	* PARAMS :
	*/

	connectionInvitations() {

		this.cService.connectionInvitationList().subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allInvitations = response.data.list;
				this.activeLoggedUser = response.data.user;
				this.totalRows = response.data.list.length;
				this.getMutualFriend();
				setTimeout(() => {
					this.activatedRoute.fragment.subscribe((fragement) => {
						window.scrollTo(0, document.getElementById(fragement).scrollHeight + 100);
					});

				}, 1000);
			}

		});
	}

	getMutualFriend() {
		let userFriendIdList: any = [];
		let currentUserId = this.activeLoggedUser.id.toString();
		if (this.activeLoggedUser.friendsIds) {
			userFriendIdList = this.activeLoggedUser.friendsIds.friend_ids;
			userFriendIdList = userFriendIdList.split(",");
		}
		let listData = null;
		listData = this.allInvitations;

		if (listData.length > 0) {

			listData.forEach((item, index) => {
				listData[index]['mutualFriendCount'] = 0;
				if (
					item &&
					(localStorage.getItem('_user') && this.activeLoggedUser.id != item.id) &&
					(item.friendsIds && item.friendsIds.friend_ids)) {
					let friendList = item.friendsIds.friend_ids;
					friendList = friendList.split(",");
					friendList.splice(friendList.indexOf(currentUserId), 1);

					let mutualFriendList = userFriendIdList.filter(function (obj) { return friendList.indexOf(obj) > -1; });
					listData[index]['mutualFriendCount'] = mutualFriendList.length;

				}
			});
		}
		this.allInvitations = listData;

	}

	/* Function Name : acceptInvitation
	* Author : 
	* Created Date : 25-03-2019 
	* Modified Date : *
	* Purpose : to accept invitaion
	* PARAMS : formPostData,friend
	*/

	acceptInvitation(friend: any) {
		let formPostData = {
			"to_id": btoa(friend.friend_id),
			"status": 1
		};
		this.cService.connectionRequest(formPostData).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
					swal({
						title: tData,
						text: response['message'],
						icon: 'success'
					});
				});

				this.cService.emitNotification(friend.friend_cpp, 'CA');
				this.cService.emitNotification(this.loggedInUser._cpp, 'CA');
				this.connectionInvitations();

			}
		});
	}

	/* Function Name : ignoreInvitation
	* Author : 
	* Created Date : 25-03-2019 
	* Modified Date : *
	* Purpose : to ignore invitaion
	* PARAMS : friend
	*/

	ignoreInvitation(friend: any) {
		let formPostData = {
			"to_id": btoa(friend.friend_id),
			"status": 2
		};
		this.cService.connectionRequest(formPostData).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
					swal({
						title: tData,
						text: response['message'],
						icon: 'success'
					});
				});

				this.cService.emitNotification(friend.friend_cpp, 'CD');
				this.cService.emitNotification(this.loggedInUser._cpp, 'CD');
				this.successMessage = response.message;
				this.connectionInvitations();
				setTimeout(() => {
					this.successMessage = '';
				}, 5000);
			}
		});
	}


}
