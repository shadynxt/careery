/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 04-02-2019
# Module                : PublicprofileComponent                     
# Object name           : PublicprofileComponent    
# Functionality         : public user profile details
# Purpose               : constructor, ngOnInit, checkDisplayMode, testimonialAction, educationDetails, skillDetails, experienceDetails, certificateDetails
*******************************************************/

import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as global from '../../globalConfig';
import { TestimonialService } from '../../services/testimonial.service';
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { CvcardService } from '../../services/cvcard.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { BlocksmodalComponent } from '../../global/blocksmodal/blocksmodal.component';
import { PicturepathPipe } from "../../global/picturepath.pipe";
import * as CryptoJS from 'crypto-js';
import swal from 'sweetalert';
import { LoaderService } from '../../loader/loader.service';
import { OwlCarousel } from 'ngx-owl-carousel';
@Component({
	selector: 'app-publicprofile',
	templateUrl: './publicprofile.component.html',
	styleUrls: ['./publicprofile.component.scss'],
	providers: [PicturepathPipe]
})
export class PublicprofileComponent implements OnInit {
	@ViewChild(BlocksmodalComponent) blockModal: BlocksmodalComponent; // block component obj
	@ViewChild('pointsModal') pointsModal; // point modal reference
	@ViewChild('careeryPathModal') careeryPathModal; // careery path reference
	@ViewChild('careeryMyVideoModal') careeryMyVideoModal; // careery path reference
	@ViewChild('cardOwl') cardOwl: OwlCarousel;
	pieChartLabels: Array<any> = [];
	pieChartData: Array<any> = [];
	pieChartColors: Array<any> = [];
	pieOptions: any = null;
	pieChartType: string = 'pie'; // points chart type
	testimonialForm: FormGroup; // set testimonial form
	testimonailFormSubmitStatus: boolean = false;
	errorMessage: string = ""; //set error message
	successMessage: string; // set success message
	currentDate: any = new Date(); // set current date
	activeUserId: string = ''; // set active user id
	userId: any = null; // set user id
	userCPP: string; // set user cpp
	userData: any = {}; // set user data
	profilePic: string = ''; // set profile pic
	connection_count: any = null; // connection count
	points: any = null; // user points 
	rank: any = null; // get user rank
	recommendations: any = null; // user recommendations count
	userPrivicySettings: Array<any> = []; // set user privicy settings
	allEducations: Array<any> = []; // all user education data
	allSkills: Array<any> = []; // all user skills data
	allExperiences: Array<any> = []; // all user experience data
	allCertificates: Array<any> = []; // all user certificate data
	allProjects: Array<any> = []; // all projects data
	imagePath = global.s3URL + 'userspic/'; // set image path

	errorMsg: string = ""; // set error message 
	successMsg: string; // set success message

	anonymous: boolean; // set anouymous  data
	is_anonymous: any = null; // check anouymous
	currentDay: any = new Date(); // set current date

	allTestimonials: any[]; // get all testimonials 
	images: any = null;  // set images
	siteSettings: any = null;
	public profile_video_link:any = ''; 
	display: any = { // display settings
		"block": true,
		"personalInfo": true,
		"education": true,
		"skill": true,
		"experience": true,
		"certificate": true,
		"project": true,
		"cv": true,
		"card": true
	}
	loader: any = { // set loaders
		'personal': false,
		'education': false,
		'skills': false,
		'experience': false,
		'certificate': false,
		"stat": false,
		"messageSend": false,
		"card": false
	};

	messageForm: any = {
		"id": null,
		"message": ""
	}
	messageErrorMsg: string = "";
	messageSuccessMsg: string = "";
	userCardList: Array<any> = [];
	mySlideOptions = { items: 1, dots: false, nav: true }; // slider settings
	testimonialCaro = { items: 1, dots: true, nav: true }; // set testimonial slider settings 
	public isCollapsed = true; // check is collapsed
	baseOrigin: any = null;
	qrCodeUrl:any = document.location.origin ;
	/* Function Name : constructor
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : to define the all helpful objects and define the languages data
	  * PARAMS : route, authService, fb, testimonialService, usersService, translate, cService
	  */
	constructor(
		private route: Router,
		private activeRoute: ActivatedRoute,
		private fb: FormBuilder,
		public testimonialService: TestimonialService,
		public usersService: UsersService,
		private translate: TranslateService,
		private cService: CommonService,
		private modalService: NgbModal,
		private filePathPipe: PicturepathPipe,
		private cvCardService: CvcardService,
		private sanitizer: DomSanitizer,
		private loderService: LoaderService
	) {


		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);
		});

		this.createTestimonialForm();
		let loggedUserData = this.cService.getLoggedUserData();
		if (loggedUserData) {
			this.activeUserId = loggedUserData._i;
		}


	}
	/* Function Name : checkDisplayMode
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : to check block privacy 
	  * PARAMS : blockName
	  */
	checkDisplayMode(blockName) {
		let loggedInUser = this.cService.getLoggedUserData();
		let option = this.userPrivicySettings.find((e) => {
			return e.option == blockName;
		});
		if (option === undefined) {
			return true;
		}
		if (option && option.option === 'view-my-profile' && option.show_status == 0) {
			this.route.navigate(["access-deny"]);
		}
		if (!loggedInUser && option && option.option === 'guest-view-my-profile' && option.show_status == 0) {
			this.route.navigate(["access-deny"]);
		}
		if (option && (option.settings === 'public' || option.settings === '')) {
			return true;
		}
		if (option && option.settings === 'only-for-me' && loggedInUser && loggedInUser._i == this.userData.id) {
			return true;
		}

		if (option && option.settings === 'my-connections' && loggedInUser && this.userData.connectionExist == 1) {
			return true;
		}

		if (option && option.settings === 'specific' && loggedInUser) {
			let specificUser = option.specific_users;
			if (specificUser) {
				let specificUsers = JSON.parse(specificUser);
				let checkUser = specificUsers.find((item) => {
					return item.id == loggedInUser._i;
				});
				if (checkUser) {
					return true;
				}
			}
		}

		return false;
	}
	/* Function Name : ngOnInit
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : to get data after html load
	  * PARAMS : 
	  */
	ngOnInit() {
		this.baseOrigin = window.location.origin;
		localStorage.setItem('_sp', 'profile_user');
		this.loader.personal = true;
		this.activeRoute.params.subscribe((params) => {
			this.usersService.userDetailsByCPP(params.userCPP).subscribe((response: any) => {
				this.userCPP = params.userCPP;
				if (response.statustext == 'success') {
					this.userData = response.data;
					if (response['data'].video_link) {
					let videoUrl = this.cService.getYoutubeEmbedUrl(response['data'].video_link);
					this.profile_video_link = (response['data'].video_link)? this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl): '';
					}
					if (this.userData.id) {
						this.userPrivicySettings = this.userData.settings;
						this.siteSettings =  this.userData.site_settings.user_point_tooltip_text;
						// console.log(this.userPrivicySettings);

						
						//*****///

						this.display.personalInfo = this.checkDisplayMode('see-personal-info-tab');
						this.display.education = this.checkDisplayMode('see-education-tab');
						this.display.skill = this.checkDisplayMode('see-skill-tab');
						this.display.experience = this.checkDisplayMode('see-experience-tab');
						this.display.certificate = this.checkDisplayMode('see-certificates-tab');
						this.display.project = this.checkDisplayMode('see-project-tab');
						this.display.cv = this.checkDisplayMode('download-cv');
						this.display.card = this.checkDisplayMode('download-business-card');
						if (this.display.education) {
							this.educationDetails();
						}
						if (this.display.experience) {
							this.experienceDetails();
						}
						if (this.display.skill) {
							this.skillDetails();
						}
						if (this.display.certificate) {
							this.certificateDetails();
						}
						if (this.display.project) {
							this.projectDetails();
						}
						this.getTestimonials();
						this.statDetails();

						if (this.userData.profile_pic) {
							this.profilePic = global.s3URL + 'userspic/' + this.userData.profile_pic;
						}
						this.usersService.updateProfileViewer({
							"_ru": btoa(this.userData.id)
						}).subscribe((response) => { });

						if (localStorage.getItem("_user")) { // get loggedin user details
							this.getLoggedUserDetails();
						}

					} else {
						this.route.navigate(["access-deny"]);
					}
				} else {
					this.route.navigate(["access-deny"]);
				}
				this.loader.personal = false;
				this.getUserCardList();
				if (localStorage.getItem("_user")) { // is loggedin
					this.cService.emitNotification(this.userData.cpp, 'PS');
				}
			});

		});


		this.blockModal.closeBlock.subscribe((res) => {
			if (res == 'unblock') {
				this.display.block = true;
			}
			this.getLoggedUserDetails();
		});

	}

	/* Function Name : statDetails
	  * Author : 
	  * Created Date : 05-03-2019 
	  * Modified Date : *
	  * Purpose : to get user  stat details
	  * PARAMS : 
	  */
	statDetails() {
		this.loader.stat = true;
		let postData = {
			id: btoa(this.userData.id)
		}
		this.usersService.userStatDetails(postData).subscribe((response: any) => {
			this.loader.stat = false;
			if (response.statustext == 'success') {
				this.connection_count = response.data.connection_count;
				this.points = response.data.points;
				this.recommendations = response.data.recommendations;
				this.rank = response.data.rank;
			}
		})
	}


	/* Function Name : getLoggedUserDetails
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get the loggedin user data
	* PARAMS :  
	*/
	getLoggedUserDetails() {
		this.usersService.userDetails().subscribe((response: any) => {
			let blockUsers = response.data.blocksIds;
			if (blockUsers.blocks_ids) {
				let blockIds = blockUsers.blocks_ids.split(",");
				if (blockIds.indexOf(this.userData.id.toString()) > -1) {
					this.display.block = false;
				} else {
					this.display.block = true;
				}
			}
		});

	}
	/* Function Name : createTestimonialForm
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : to create the testimonial form
	  * PARAMS : 
	  */
	createTestimonialForm() {
		this.testimonialForm = this.fb.group({
			id: [],
			message: ['', [Validators.required]],
			anonymous: ['']
		});
	}


	/* Function Name : testimonialAction
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to submit testimonial formm
	* PARAMS :
	*/
	testimonialAction() {
		
		let formPostData = {
			"to_user_id": this.userData.id,
			"message": this.testimonialForm.value.message,
			"is_anonymous": Number(this.testimonialForm.value.anonymous),
			"post_on": this.currentDate

		};
		this.testimonailFormSubmitStatus = true;
		this.testimonialService.addTestimonial(formPostData).subscribe((response: any) => {
			if ((response['statustext'] === 'success') && (response['status'] == 200)) {
				this.cService.emitNotification(this.userData.cpp, 'T');
				this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
					swal({
						title: tData,
						text: response['message'],
						icon: 'success'
					});
				});

			} else {
				this.translate.get('COMMON.ERROR').subscribe((tData) => {
					swal({
						title: tData,
						text: response['message'],
						icon: 'success'
					});
				});
			}
			this.testimonailFormSubmitStatus = false;
			this.testimonialForm.reset();
			this.isCollapsed = true;
		});
	}

	/* Function Name : educationDetails
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get education details
	* PARAMS : 
	*/
	educationDetails() {
		this.loader.education = true;
		let type = 'education';
		let cpp = this.userData.cpp;
		this.usersService.userDetailsByCppType(cpp, type).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				let count = response['data']['degree'].length;
				if (count >= 1) {
					this.allEducations = response['data']['degree'];
				} else {
					this.allEducations = [];
				}

			}
			this.loader.education = false;
		});
	}

	/* Function Name : skillDetails
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get skill details
	* PARAMS : 
	*/
	skillDetails() {
		this.loader.skills = true;
		let type = 'skills';
		let cpp = this.userData.cpp;
		this.usersService.userDetailsByCppType(cpp, type).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				let count = response['data']['skills'].length;
				if (count >= 1) {
					this.allSkills = response['data']['skills'];
				} else {
					this.allSkills = [];
				}

			}
			this.loader.skills = false;
		});
	}

	/* Function Name : experienceDetails
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get experience details
	* PARAMS :  
	*/
	experienceDetails() {
		this.loader.experience = true;
		let type = 'experience';
		let cpp = this.userData.cpp;
		this.usersService.userDetailsByCppType(cpp, type).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				let count = response['data']['experience'].length;
				if (count >= 1) {
					this.allExperiences = response['data']['experience'];
				} else {
					this.allExperiences = [];
				}

			}
			this.loader.experience = false;
		});
	}

	/* Function Name : certificateDetails
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to get certificate details
	* PARAMS : 
	*/
	certificateDetails() {
		this.loader.certificate = true;
		let type = 'certificate';
		let cpp = this.userData.cpp;
		this.usersService.userDetailsByCppType(cpp, type).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allCertificates = response['data']['certificates'];
			}
			this.loader.certificate = false;
		});
	}

	/* Function Name : projectDetails
  * Author : 
  * Created Date : 14-03-2019 
  * Modified Date : *
  * Purpose : to get user project detaills
  * PARAMS : 
  */
	projectDetails() {
		let type = 'project';
		this.loader.project = true;
		let cpp = this.userData.cpp;
		this.usersService.userDetailsByCppType(cpp, type).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allProjects = response['data']['projects'];
			} else {
				console.log('error in certificate details');
			}
			this.loader.project = false;
		});
	}

	/* Function Name : openBlock
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : open block modal
	  * PARAMS : 
	  */
	openBlock() {
		this.blockModal.openBlockReasonModal(this.userData.id);
	}
	/* Function Name : unblock
	  * Author : 
	  * Created Date : 04-02-2019 
	  * Modified Date : *
	  * Purpose : to unblock a user
	  * PARAMS : 
	  */
	unblock() {
		this.blockModal.unblockUser(this.userData.id);
	}

	/* Function Name : getTestimonials
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to get user specfic testimonial details
	* PARAMS : 
	*/
	getTestimonials() {

		let formPostData = {
			"id": btoa(this.userData.id)
		};
		// console.log(formPostData);
		this.testimonialService.publicTestimonial(formPostData).subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allTestimonials = response.data;
			}

		});

	}


	/* Function Name : recommendationSend
	* Author : 
	* Created Date : 27-02-2019 
	* Modified Date : *
	* Purpose : to send recommendation
	* PARAMS : id, userData, formPostData
	*/

	recommendationSend() {
		if (btoa(this.userData.id) != localStorage.getItem('_u')) {
			let formPostData = {
				"id": btoa(this.userData.id)
			};
			this.usersService.recommendationSends(formPostData).subscribe((response: any) => {
				if ((response['statustext'] === 'success')) {
					this.cService.emitNotification(this.userData.cpp, 'R');
					this.successMsg = response.message;
					this.userData.recommendations += 1;
					this.statDetails();
					this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
						swal({
							title: tData,
							text: response['message'],
							icon: 'success'
						});
					});
				} else {
					this.translate.get('COMMON.ERROR').subscribe((tData) => {
						swal({
							title: tData,
							text: response['message'],
							icon: 'error'
						});
					});
				}

			});
		}
	}

	/* Function Name : openPointModal
	  * Author : 
	  * Created Date : 26-02-2019 
	  * Modified Date : *
	  * Purpose : to open points modal 
	  * PARAMS : 
	  */
	openPointModal(pointModal: any) {
		this.pieChartLabels = [];
		this.pieChartData = [];
		this.pieChartColors = [
			{
				backgroundColor: ['#26bfb5', '#5bc78c', '#fc9772', '#ff4a5f', '#adc72a'],
			}
		];
		this.usersService.getUserPoints(btoa(this.userData.id))
			.subscribe((responseData: any) => {
				if (responseData.data) {
					this.pieOptions = {
						pieceLabel: {
							render: function (args) {
								const label = args.label,
									value = args.value;
								return value + ' points';
							},
							fontColor: '#FFFFFF',
							fontSize: 13,
							fontStyle: 'bold'
						},
						legend: { position: 'right' },
						elements: {
							arc: {
								borderWidth: 0
							}
						}
					};
					responseData.data.forEach(element => {
						this.pieChartLabels.push(element.point_name);
						this.pieChartData.push(element.total_point);

					});
					this.modalService.open(pointModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
				}
			});

	}
	/* Function Name : printChart
	  * Author : 
	  * Created Date : 26-02-2019 
	  * Modified Date : *
	  * Purpose : to print point chart
	  * PARAMS : 
	  */
	printChart() {
		window.print();
	}
	/* Function Name : downloadCanvas
	  * Author : 
	  * Created Date : 26-02-2019 
	  * Modified Date : *
	  * Purpose : to download teh chart image
	  * PARAMS : 
	  */
	downloadCanvas(event) {

		var anchor = document.getElementById('downloadChartLink');
		let canvas:any = document.getElementById('pointCanvas');
		var img = new Image();
		img.src = canvas.toDataURL();
		var context = canvas.getContext('2d');
		context.drawImage(img, 0, 0, 200, 200);
		var dataUrl = canvas.toDataURL('image/jpeg', 1);
		anchor['href'] = dataUrl;
		anchor['download'] = "chart.jpg";
	}

	/* Function Name : connectionSend
	* Author : 
	* Created Date : 05-03-2019 
	* Modified Date : *
	* Purpose : to send connection request
	* PARAMS :
	*/
	connectionSend(toId) {
		this.loader.mayContact = true;
		this.usersService.connectionRequestSend(toId)
			.subscribe((responseData: any) => {
				this.loader.mayContact = false;
				if (responseData.statustext == 'success') {
					this.cService.emitNotification(this.userData.cpp, 'CS');
					this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
						swal({
							title: tData,
							text: responseData['message'],
							icon: 'success'
						});
					});
				} else if (responseData.statustext == 'error') {
					this.translate.get('COMMON.ERROR').subscribe((tData) => {
						swal({
							title: tData,
							text: responseData['message'],
							icon: 'error'
						});
					});
				}
			});
	}

	/* Function Name : openSendMessageModal
	* Author : 
	* Created Date : 13-03-2019 
	* Modified Date : *
	* Purpose : to open send message modal
	* PARAMS :
	*/
	openSendMessageModal(modal) {
		this.modalService.open(modal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
	}

	/* Function Name : submitSendMessageFrom
	* Author : 
	* Created Date : 13-03-2019 
	* Modified Date : *
	* Purpose : to send message  to a user
	* PARAMS :
	*/
	submitSendMessageFrom() {
		if (this.messageForm.message) {
			this.loader.messageSend = true;
			this.messageForm.id = btoa(this.userData.id);
			this.usersService.sendMessage(this.messageForm)
				.subscribe((responsData: any) => {
					if (responsData.statustext === 'success') {
						this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
							swal({
								title: tData,
								text: responsData['message'],
								icon: 'success'
							}).then(()=>{
								this.modalService.dismissAll();
							});
						});
						this.loader.messageSend = false;
						this.messageForm.id = null;
						this.messageForm.message = null;
					}
					
				});

		} else {
			this.translate.get('PROFILE.MESSAGE_REQUIRED').subscribe((tData) => {
				this.messageErrorMsg = tData;
				setTimeout(() => {
					this.messageErrorMsg = '';
				}, 3000)
			});
		}
	}
	/* Function Name : openCareeryManagerModal
	* Author : 
	* Created Date : 03-04-2019 
	* Modified Date : *
	* Purpose : to open career path modal
	* PARAMS :
	*/
	openCareeryManagerModal() {
		this.modalService.open(this.careeryPathModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' })

	}



	gotToCard(card) {
		let loggedInUser = this.cService.getLoggedUserData();
		if (loggedInUser && card.user_id != loggedInUser._i) {
			this.usersService.sendNotification({
				"id": btoa(card.user_id),
				"type": "DCA"
			}).subscribe((responseData) => { });
		}

		let cardPath = this.filePathPipe.transform(card.file, 'card');
		var win = window.open(cardPath, '_blank');
		win.focus();
	}

	getUserCardList() {
		this.loader.card = true;
		this.cvCardService.getCardList({
			id: btoa(this.userData.id),
			"only_default":1
		}).subscribe((responseData: any) => {
			if (responseData.statustext == 'success') {
				let cardList = responseData.data.list;
				this.userCardList = [];
				if (cardList.length > 0) {
					this.userCardList = cardList.map((item) => {
						let details = null;
						if (item.card_details) {
							details = JSON.parse(item.card_details);
						}
						return {
							id: item.id,
							user_id: item.user_id,
							details: details,
							file: item.card_file
						};
					})
				}
				this.cardOwl.reInit();
				this.loader.card = false;
			}
		});
	}

	openTestimonialForm() {
		if (localStorage.getItem("_user")) {
			this.isCollapsed = (this.isCollapsed)?false:true; 
			if (this.isCollapsed == false) {
				this.testimonailFormSubmitStatus = false;
			}
		} else {
			this.translate.get(['COMMON.ERROR', 'COMMON.TESTIMONIAL_AUTH_ERROR']).subscribe((tData) => {
				swal({
					title: tData['COMMON.ERROR'],
					text: tData['COMMON.TESTIMONIAL_AUTH_ERROR'],
					icon: 'error'
				}).then(()=>{
					this.route.navigate(['/']);
				});
			});
		}
	}

	/* Function Name : copyLink
	* Author : 
	* Created Date : 23-07-2019 
	* Modified Date : *
	* Purpose : to copy profile link
	* PARAMS : 
	*/
	copyLink () {
		let copyText = document.createElement('input');
		copyText.value = window.location.href;
		document.body.appendChild(copyText);
		copyText.select();
		document.execCommand('copy');
		document.body.removeChild(copyText);
		this.translate.get(['COMMON.SUCCESS', 'COMMON.LINK_COPY']).subscribe((tData) => {
			swal({
				title: tData['COMMON.SUCCESS'],
				text: tData['COMMON.LINK_COPY'],
				icon: 'success'
			});
		});
	}

	openVideoModal() {
	this.modalService.open(this.careeryMyVideoModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' })    
	}

	/* Function Name : gotToCV
	* Author : 
	* Created Date : 30-07-2019 
	* Modified Date : *
	* Purpose : to redirect to cv
	* PARAMS :
	*/
	gotToCV() {
    
    
		this.cvCardService.saveDefaultCV({
			user_id: btoa(this.userData.id)
		  })
		  .subscribe((responseData: any) => {
			if (responseData.statustext == 'success') {
			  setTimeout(()=>{
				this.loderService.show();
			  },100)
			  setTimeout(()=>{
				this.loderService.hide();
				let cvPath = this.filePathPipe.transform('careery-'+this.userData.id+'-cv.pdf', 'cv');
				var win = window.open(cvPath, '_blank');
				win.focus();
			  },3000);
			}
		  });
		
	  } 
		  /* Function Name : downloadDefaultCardFile
		* Author : 
		* Created Date : 31-07-2019 
		* Modified Date : *
		* Purpose : to download default careery card
		* PARAMS :
		*/
	  downloadDefaultCardFile() {
		this.cvCardService.saveDefaultCard({
			user_id: btoa(this.userData.id)
		  })
		.subscribe((responseData)=>{
		  setTimeout(()=>{
			this.loderService.show();
		  },100)
		  setTimeout(()=>{
			this.loderService.hide();
		  let cvPath = this.filePathPipe.transform('careery-'+this.userData.id+'-card.pdf', 'card');
		  var win = window.open(cvPath, '_blank');
		  win.focus();
		},3000);
		})
	  }
}
