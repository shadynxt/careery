/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 22-02-2019
# Module                : TestimonialComponent                     
# Object name           : TestimonialComponent    
# Functionality         : user testimonials
# Purpose               : constructor, ngOnInit, 
*******************************************************/

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialService } from '../../services/testimonial.service';
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router";
import * as global from '../../globalConfig';
import swal from 'sweetalert';
@Component({
	selector: 'app-testimonial',
	templateUrl: './testimonial.component.html',
	styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

	@ViewChild('editModal') editModal; // edit testimonial modal
	@ViewChild('replyModal') replyModal; // reply testimonial modal
	allTestimonials: any = []; // all testimonials 
	acceptedTestimonials: any = []; // all accepted testimonials 
	ownTestimonials:any = [];// all own posted testimonials 
	imagePath: any = null; // set image path
	message: any = ''; // set message
	editData: any = null; // get edit data of a testimonial
	successMessage: string = ''; // set success message

	errorMessage: string = ''; // set error message
	showMessage: string = ''; // show message
	hideMessage: string = ''; // hide message
	currentTime = (new Date()).getTime() / 1000; // set current time
	paginationConfigIncoming: any = null;
	paginationConfigAccepted: any = null;
	paginationConfigOwn: any = null;
	activeTab: any = 'incoming';
	totalRows: any = null;
	testimonialForm: any = { // testimonial form
		"id": null,
		"message": '',
		"error": 0,
		"submit": false
	};
	testimonialReplyForm: any = { // testimonial form
		"id": null,
		"message": '',
		"error": 0,
		"submit": false
	};

	loader: any = { // loader data
		'testimonial': {
			'incoming': false,
			'accepted': false,
			'own': false,
			'accepteorrefuse': false,
			'edit': false,
			'delete': false,
			'reply': false,
		}
	};
	todayTimeStampGroup:any = {};
	yesterdayTimeStampGroup:any = {};
	yesterdayStartTimestamp: any = null;
	/* Function Name : constructor
	  * Author : 
	  * Created Date : 22-02-2019 
	  * Modified Date : *
	  * Purpose : to define the all helpful objects and define the languages data
	  * PARAMS : tService, cService, modalService, route, translate
	  */
	constructor(
		public tService: TestimonialService,
		private cService: CommonService,
		private modalService: NgbModal,
		private route: Router,
		private translate: TranslateService
	) {

		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);

		});
		this.yesterdayStartTimestamp = new Date();
		this.yesterdayStartTimestamp = this.yesterdayStartTimestamp.setDate(this.yesterdayStartTimestamp.getDate() - 1);
		this.yesterdayStartTimestamp = new Date(new Date(this.yesterdayStartTimestamp).setHours(0, 0, 0, 0)).getTime() / 1000;

		this.todayTimeStampGroup = {
			start : new Date(new Date().setHours(0,0,0,0)).getTime()/1000 ,
			end : new Date(new Date().setHours(23,59,59,0)).getTime()/1000
		  }
		this.yesterdayTimeStampGroup = {
		start :this.todayTimeStampGroup.start - 86400 ,
		end :  this.todayTimeStampGroup.end - 86400,
		}

	}
	/* Function Name : ngOnInit
	  * Author : 
	  * Created Date : 22-02-2019 
	  * Modified Date : *
	  * Purpose : to get data after html load
	  * PARAMS : 
	  */
	ngOnInit() {

		//localStorage.setItem('_sp', 'profile_user');
		this.testimonialDetails();

		localStorage.setItem('_sp', 'profile_user');
		this.paginationConfigIncoming = {
			perPage: 10,
			render: (page) => {
				this.testimonialDetails(page);
			}
		}
		this.paginationConfigAccepted = {
			perPage: 10,
			render: (page) => {
				this.acceptedTestimonial(page);
			}
		}
		this.paginationConfigOwn = {
			perPage: 10,
			render: (page) => {
				this.ownTestimonial(page);
			}
		}
	}

	/* Function Name : changeTabEvent
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to get data on tab change
	* PARAMS : e
	*/
	changeTabEvent(e) {

		this.activeTab = e.nextId;
		localStorage.removeItem('_nxp');
		// switch (e.nextId) {
		// 	case "incoming":
		// 		this.testimonialDetails();
		// 		break;
		// 	case "accepted":
		// 		this.acceptedTestimonial();
		// 		break;
		// 	case "own":
		// 		this.ownTestimonial();
		// 		break;

		// }
	}


	/* Function Name : testimonialDetails
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to get all testimonials
	* PARAMS : 
	*/

	testimonialDetails(page = 1) {
		let formPostData = {
			"type": "pending",
			"page": page
		};
		this.loader.testimonial.incoming = true;
		this.tService.listTestimonial(formPostData).subscribe((response: any) => {
			this.loader.testimonial.incoming = false;
			if ((response['statustext'] === 'success')) {

				this.allTestimonials = response.data.list;
				this.totalRows = response.data.pager.rowCount;
			}

		});
	}

	/* Function Name : acceptedTestimonial
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to get accepted testimonial
	* PARAMS :  
	*/
	acceptedTestimonial(page = 1) {

		let formPostData = {
			"type": "accepted",
			"page": page
		};
		this.loader.testimonial.accepted = true;
		this.tService.listTestimonial(formPostData).subscribe((response: any) => {
			this.loader.testimonial.accepted = false;
			if ((response['statustext'] === 'success')) {

				this.acceptedTestimonials = response.data.list;
				this.totalRows = response.data.pager.rowCount;
				this.imagePath = global.s3URL + 'userspic/';
				//this.testimonialDetails();
			}

		});
	}

	/* Function Name : ownTestimonial
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to check own testimonial
	* PARAMS : 
	*/
	ownTestimonial(page = 1) {

		let formPostData = {
			"type": "own",
			"page": page
		};
		this.loader.testimonial.own = true;
		this.tService.listTestimonial(formPostData).subscribe((response: any) => {
			this.loader.testimonial.own = false;
			if ((response['statustext'] === 'success')) {

				this.ownTestimonials = response.data.list;
				this.totalRows = response.data.pager.rowCount;
				this.imagePath = global.s3URL + 'userspic/';
				//console.log(this.ownTestimonials);
			}

		});
	}

	clickPager(type, event) {
		let page = event;
		if (type == 'accept') {
			this.acceptedTestimonial(page);
		} else if (type == 'pending') {
			this.testimonialDetails(page);
		} else if (type == 'own') {
			this.ownTestimonial(page);
		}
	}

	/* Function Name : openEditTestimonial
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : open edit testimonial modal
	* PARAMS :  editId,content
	*/

	openEditTestimonial(editId, content) {
		//this.loader.testimonial.edit = true;
		let formPostData = {
			"id": btoa(editId),
			"message": content
		};

		this.tService.editTestimonial(formPostData).subscribe((responseData: any) => {
			if (responseData) {
				this.editData = responseData.data;
				this.testimonialForm.message = responseData.data.message;
				this.testimonialForm.id = responseData.data.id;
				//console.log(responseData);
			}
		});

		this.modalService.open(this.editModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });

	}

	/* Function Name : submitEditTestimonialForm
	 * Author : 
	 * Created Date : 22-02-2019 
	 * Modified Date : *
	 * Purpose : to update testimonial
	 * PARAMS :  id
	 */
	submitEditTestimonialForm(id: any) {
		this.loader.testimonial.edit = true;
		this.testimonialForm.submit = true;
		this.testimonialForm.message = this.testimonialForm.message.trim();

		if (this.testimonialForm.message == '') {
			this.testimonialForm.error = 1;

		} else {
			this.testimonialForm.error = 0;
			this.errorMessage = '';

		}

		//console.log(this.testimonialForm.message); return false;

		if (this.testimonialForm.error == 0) {

			let formPostData = {
				"id": btoa(id),
				"message": this.testimonialForm.message
			};
			//console.log(formPostData); return false;
			this.tService.editTestimonial(formPostData)
				.subscribe((response: any) => {
					if (response.statustext === 'success') {
						this.modalService.dismissAll();
						this.errorMessage = '';
						this.ownTestimonial();
					}

				});

		}

	}

	/* Function Name : deleteTestimonial
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to soft delete testimonial
	* PARAMS :  id
	*/

	deleteTestimonial(id: any) {

		this.translate.get('Are you sure delete testimonmial').subscribe((tData) => {
			let c = confirm(tData);
			if (c) {
				this.loader.testimonial.delete = true;
				let formPostData = {
					"id": btoa(id)
				};

				this.tService.deleteTestimonial(formPostData).subscribe((responseData: any) => {
					if (responseData.statustext === 'success') {
						this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
		
						swal({
							title: tData['COMMON.SUCCESS'],
							text: responseData.message,
							icon: 'success'
						});
						});
					}
				});
			}
		});
	}

	/* Function Name : acceptRefuseTestimonial
	* Author : 
	* Created Date : 22-02-2019 
	* Modified Date : *
	* Purpose : to accept or refuse a testimonial 
	* PARAMS :  testimonial, status
	*/
	acceptRefuseTestimonial(testimonial: any, status: any) {

		let msg = '';
		if (status === 1) {
			msg = 'TESTIMONIALS.ACCEPTED_CONFIRM_MSG';
		} else {
			msg = 'TESTIMONIALS.REFUSE_CONFIRM_MSG';
		}

		this.translate.get(['COMMON.ARE_YOU_SURE', msg]).subscribe((tData) => {

			swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData[msg],
				icon: 'warning',
				buttons : {
					cancel: true,
    				confirm: true
				}
				
			}).then((result) => {
				
				if (result) {
					this.loader.testimonial.accepteorrefuse = true;
					let formPostData = {
						"id": btoa(testimonial.id),
						"type": "status",
						"status": status
					};

					this.tService.acceptTestimonial(formPostData).subscribe((responseData: any) => {
						this.loader.testimonial.accepteorrefuse = false;
						if (responseData.statustext === 'success') {
							this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          
								swal({
								  title: tData['COMMON.SUCCESS'],
								  text: responseData.message,
								  icon: 'success'
								});
							  });
							this.testimonialDetails();
						}
					});
				}

			})
		});
	}


	/* Function Name : showHideTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to show hide testimonial in profile
	* PARAMS :  id, is_show
	*/

	showHideTestimonial(id: any, is_show: number) {

		if (is_show == 1) {

			this.showMessage = 'TESTIMONIALS.SHOW';

		} else {

			this.showMessage = 'TESTIMONIALS.HIDE';
		}

		this.translate.get(this.showMessage).subscribe((tData) => {
			swal({
				title: '',
				text: tData,
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
				if (willDelete) {
					let formPostData = {
						"id": btoa(id),
						"type": "profile",
						'status': is_show
					};
					this.tService.acceptTestimonial(formPostData).subscribe((responseData: any) => {
						if (responseData.statustext === 'success') {
							this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          
								swal({
								  title: tData['COMMON.SUCCESS'],
								  text: responseData.message,
								  icon: 'success'
								});
							  });
							this.acceptedTestimonial();
							setTimeout(() => {
								this.successMessage = '';
							}, 5000);
							this.testimonialDetails();
	
						}
					});
	
				}
			})

		});
	}

	/* Function Name : replyTestimonial
	* Author : 
	* Created Date : 17-06-2019 
	* Modified Date : *
	* Purpose : to reply a incoming testimonial
	* PARAMS :  testimonial
	*/
	replyTestimonial(testimonial) {
		this.testimonialReplyForm.id = testimonial.id;
		this.testimonialReplyForm.submit = false;
		this.modalService.open(this.replyModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
	}
	/* Function Name : submitReplyTestimonialForm
	* Author : 
	* Created Date : 17-06-2019 
	* Modified Date : *
	* Purpose : to submit reply of a incoming testimonial
	* PARAMS :  
	*/
	submitReplyTestimonialForm() {
		this.loader.testimonial.reply = true;
		
		this.testimonialReplyForm.message = this.testimonialReplyForm.message.trim();

		if (this.testimonialReplyForm.message == '') {
			this.testimonialReplyForm.error = 1;

		} else {
			this.testimonialReplyForm.error = 0;
			this.errorMessage = '';
		}
		if (this.testimonialReplyForm.error == 0) {
			this.testimonialReplyForm.submit = true;
			let formPostData = {
				"id": btoa(this.testimonialReplyForm.id),
				"message": this.testimonialReplyForm.message
			};
			//console.log(formPostData); return false;
			this.tService.replyTestimonial(formPostData)
				.subscribe((response: any) => {
					this.testimonialReplyForm.submit = false;
					
					if (response.statustext === 'success') {
						
						let selectedTestimonialIndex = this.acceptedTestimonials.findIndex((item)=>{
							return item.id ==  this.testimonialReplyForm.id;
						});
						this.acceptedTestimonials[selectedTestimonialIndex]['reply']['id'] = this.testimonialReplyForm.id+'-'+selectedTestimonialIndex;

						this.modalService.dismissAll();
						this.errorMessage = '';
						this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          
							swal({
							  title: tData['COMMON.SUCCESS'],
							  text: response.message,
							  icon: 'success'
							});
						  });
						this.testimonialDetails();
						setTimeout(() => {
							this.successMessage = '';
						}, 5000);
					}

				});

		}
	}
	//============ End ===========
}
