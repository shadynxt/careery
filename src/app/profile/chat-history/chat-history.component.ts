import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
@Component({
	selector: 'app-chat-history',
	templateUrl: './chat-history.component.html',
	styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {
	messagesList: Array<any> = [];
	paginationConfig: any = null; // set pagination config
	totalRows: any = null;
	currentPage: any = 1; // set current page
	loggedUser: any = null;
	constructor(
		private uService: UsersService,
		private cService: CommonService,
		private translate: TranslateService
	) {
		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			this.translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			this.translate.use(lang);

		});
	}

	ngOnInit() {
		
		this.loggedUser = this.cService.getLoggedUserData();

		this.getMessages();
	}
	/* Function Name : getMessages
  * Author : 
  * Created Date : 26-06-2019 
  * Modified Date : *
  * Purpose : get the messages 
  * PARAMS :  
  */
	getMessages() {
		let user = this.loggedUser;
		this.messagesList = [];
		this.paginationConfig = {
			perPage: 10,
			render: (page) => {
				this.uService.getChatNotification({
					cpp: user._cpp,
					"page": page
				}).subscribe((responseData: any) => {
					if ((responseData['statustext'] === 'success')) {
						this.totalRows = responseData.data.pagination.rowCount;
						this.messagesList = responseData.data.list.map((item) => {
							let msg = item;
							msg.message = (item.type == 0) ? decodeURIComponent(item.message) : item.message;
							return msg;
						});
					}

				})
			}
		};
	}


	/* Function Name : setChatPerson
* Author :
* Created Date : 24-04-2019
* Modified Date : *
* Purpose : to set the current chat config
* PARAMS :
*/
	setChatPerson(room) {
		this.cService.setChatRoomEmit(room);
	}
}
