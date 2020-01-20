import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import { BlocksmodalComponent } from '../../global/blocksmodal/blocksmodal.component';
import swal from 'sweetalert';

@Component({
	selector: 'app-myblocklist',
	templateUrl: './myblocklist.component.html',
	styleUrls: ['./myblocklist.component.scss']
})
export class MyblocklistComponent implements OnInit {
	@ViewChild(BlocksmodalComponent) blockModal: BlocksmodalComponent; // get the block component obj
	paginationConfig: any = null; // pagination config
	currentPage: any = 1; // set current page
	currentTime: any = null; // set current time
	blockedUserList: Array<any> = []; // set blocked users list
	totalRows: any = 0;


	constructor(
		private uService: UsersService,
		private cService: CommonService,
		private translate: TranslateService) {

		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);

		});
	}


	ngOnInit() {
		this.getBlockedUsers();
		this.paginationConfig = {
			perPage: 10,
			render: (page) => {
				this.currentPage = page;
				this.getBlockedUsers();

			}
		}
		this.blockModal.closeBlock.subscribe((res) => {
			if (res) {
				this.getBlockedUsers();
			}
		});
	}

	getBlockedUsers() {
		this.uService.blockedUserList(this.currentPage)
			.subscribe((responseData: any) => {
				if (responseData.statustext == 'success') {
					this.blockedUserList = responseData.data.list;
					this.totalRows = responseData.data.paginate.rowCount;
				}
			})
	}

  /* Function Name : unblock
	* Author : 
	* Created Date : 04-02-2019 
	* Modified Date : *
	* Purpose : to unblock a user
	* PARAMS : userId
	*/
	unblock(userId) {
		this.translate.get(['COMMON.ARE_YOU_SURE', 'BLOCKS.WANT_TO_UNBLOCK']).subscribe((tData) => {
			swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['BLOCKS.WANT_TO_UNBLOCK'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
				if (willDelete) {
					this.blockModal.unblockUser(userId);
					// this.blockModal.closeBlock.subscribe((res)=>{
					//   	this.getBlockedUsers();
					// });					
				}
			});

		});


	}


}
