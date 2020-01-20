/*****************************************************
# Company Name          : 
# Author                :
# Created Date          : 20-01-2019
# Module                : ProfileviewComponent
# Object name           : ProfileviewComponent
# Functionality         : All user profile details
# Purpose               : constructor, ngOnInit, openEditProfile, getUserDetails,statDetails,  getTestimonials, educationDetails, skillDetails, experienceDetails, certificateDetails, openPointModal, printChart, downloadCanvas
*******************************************************/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import * as global from '../../globalConfig';
import { UsersService } from '../../services/users.service';
import { CvcardService } from '../../services/cvcard.service';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { TestimonialService } from '../../services/testimonial.service';
import 'chart.piecelabel.js';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
import * as CryptoJS from 'crypto-js';
import swal from 'sweetalert';
import {PicturepathPipe} from '../../global/picturepath.pipe';
import { LoaderService } from '../../loader/loader.service';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss'],
  providers:[PicturepathPipe]
})
export class ProfileviewComponent implements OnInit {
  @ViewChild('cardQrCode', { read: ElementRef }) cardQrCode: ElementRef<HTMLElement>;
  @ViewChild('cardOwl') cardOwl: OwlCarousel;
  @ViewChild('pointsModal') pointsModal; // point modal reference
  @ViewChild('careeryPathModal') careeryPathModal; // careery path reference
  @ViewChild('careeryMyVideoModal') careeryMyVideoModal; // careery path reference
  public userData: any = null;
  public pieChartLabels: string[] = []; // points piechart labels
  public pieChartData: number[] = []; // points pie chart valus
  public pieChartColors: any[] = []; // points pie chart colors
  public pieChartType: string = 'pie'; // points chart type
  public pieOptions: any = null; // points chart config
  public userId:any = '';
  public email: string = ''; // user email
  public firstName: string = ''; // user first name
  public lastName: string = ''; // user last name
  public familyName: string = ''; // user FAMILY name
  public address: string = ''; // user address
  public dob: any = null; // user dob
  public gender: string = ''; // get user gender
  public mobile_no: string = ''; // get user mobile no
  public mobile_code: string = ''; // get user mobile code
  
  public country: string = ''; // get user country
  public city: string = ''; // get user city
  public cpp: string = ''; // get user cpp
  public points: string = ''; // get user points
  public position: string = ''; // get user positions
  public connection_count: string = ''; //get user counts
  public profile_pic: string = ''; // get user profile pic
  public dribbble_link: string = ''; // get userdribbble link
  public facebook_link: string = ''; // get facebook link
  public pinterest_link: string = ''; // get pinterest link
  public behance_link: string = ''; // get behance link
  public twitter_link: string = ''; // get twitter link
  public website: string = ''; // get twitter link
  public profile_video_link:any = ''; 
  public userCv: any = [];

  public profile_image_path: string = global.s3URL + 'userspic/'; // profile pic base path
  profilePic: any = null; // user profile pic
  allTestimonial: any[]; // all trstimonials of a user
  allEducations: any = ''; // all educations list of a user
  allSkills: any = ''; // all skills of a user
  allExperiences: any = ''; // all experience list of a user
  allCertificates: any = ''; // all certificate list of a user
  allProjects: any = []; // all projects of auser
  recommendations: any = null; // get recommendations count
  rank: any = null; // get user rank
  images: any = null;
  imagePath: any = ''; // image path
  loader: any = { // loder config
    'personal': false,
    'education': false,
    'skills': false,
    'experience': false,
    'certificate': false,
    'project': false,
    'stat': false,
    'card': false,
    "card_remove": false
  };
  mySlideOptions = { items: 1, dots: false, nav: true }; // slider config
  testimonialCaro = { items: 1, dots: true, nav: true }; // testimonial slider config

  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // scroll ber config
  activeTab: any = 'ngb-tab-0';
  userCardList: Array<any> = [];
  baseOrigin: any = null;
  cropperSettings: CropperSettings; // settings of cropper
  data: any; // crop image data
  errorMsg: any = '';
  successMsg: any = '';
  siteSettings: any = null;
  qrCodeUrl:any = document.location.origin ;
  /* Function Name : constructor
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : route, authService, usersService, translate, cService, sanitizer, modalService
	*/
  constructor(
    private route: Router,
    public authService: AuthService,
    public usersService: UsersService,
    public translate: TranslateService,
    private cService: CommonService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private testimonialService: TestimonialService,
    private cvCardService: CvcardService,
    private filePathPipe: PicturepathPipe,
    private loderService: LoaderService
  ) {

    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });

    this.cService.profilePic.subscribe((pic) => {
      if (pic) {
        this.profilePic = this.sanitizer.bypassSecurityTrustUrl(pic);
      }
    });
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.data = {};
    this.cService.profilePic.subscribe((pic) => {
      if (pic) {
        this.profilePic = this.sanitizer.bypassSecurityTrustUrl(pic);
        this.data.image = this.profilePic;
      } else {
        this.profilePic = "";
        this.data.image = "";
      }

    });
  }
  /* Function Name : ngOnInit
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS :
	*/
  ngOnInit() {
    this.baseOrigin = window.location.origin;
    localStorage.setItem('_sp', 'profile_user');
    this.getUserDetails();
    

  }
  /* Function Name : openEditProfile
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to redirect edit profile page
	* PARAMS :
	*/
  openCareeryManagerModal() {
    this.modalService.open(this.careeryPathModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' })

  }

  /* Function Name : getUserDetails
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user details
	* PARAMS :
	*/
  getUserDetails() {
    this.loader.personal = true;
    this.usersService.userDetails().subscribe((response: any) => {
      //console.log(response);
      if ((response['statustext'] === 'success')) {
        this.userData = response['data'];

        this.email = response['data'].email;
        this.address = response['data'].address;
        this.dob = response['data'].dob;

        if (!new Date(this.dob)) {
          this.dob = '';
        }
        this.userId = response['data'].id;
        this.gender = response['data'].gender;
        this.mobile_no = response['data'].mobile_no;
        this.mobile_code = response['data'].mobile_code;
        this.country = (response['data']['country']) ? response['data']['country'].name : '';
        this.city = (response['data']['city']) ? response['data']['city'].name : '';
        this.cpp = response['data'].cpp;
        if (response['data']['position'] && response['data']['position']['details']) {
          this.position = response['data']['position']['details'][0].name;
        }
        this.firstName = response['data'].first_name;
        this.lastName = response['data'].last_name;
        this.familyName = response['data'].family_name;

        this.profile_pic = response['data'].profile_pic;
        this.facebook_link = response['data'].facebook_link;
        this.twitter_link = response['data'].twitter_link;
        this.dribbble_link = response['data'].dribbble_link;
        this.pinterest_link = response['data'].pinterest_link;
        this.behance_link = response['data'].behance_link;
        this.website = response['data'].website;
        if (response['data'].video_link) {
          let videoUrl = this.cService.getYoutubeEmbedUrl(response['data'].video_link);
          this.profile_video_link = (response['data'].video_link)? this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl): '';
        }
        this.siteSettings =  response['data'].site_settings.user_point_tooltip_text;
        if (response['data'].cv) {
          this.userCv = response['data'].cv;
        }

        if (localStorage.getItem('_propic')) {
          this.cService.setProfilePic(localStorage.getItem('_propic'));
        } else if (response['data'].profile_pic) {
          this.profilePic = global.s3URL + 'userspic/' + response['data'].profile_pic;
          this.cService.setProfilePic(this.profilePic);
        } else {
          localStorage.removeItem('_propic');
          this.cService.setProfilePic('');
        }
        
        this.statDetails();
        this.getUserCardList();
        this.getTestimonials();
        
      } else {

        console.log('error');
      }
      this.loader.personal = false;

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

  /* Function Name : getTestimonials
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user testimonials
	* PARAMS :
	*/
  getTestimonials() {

    let type = 'accepted';
    let userid = this.userData.id;
    let token = localStorage.getItem("_token");
    let formPostData = {
      "id": btoa(userid)
    };
    this.testimonialService.publicTestimonial(formPostData).subscribe((response: any) => {
      //console.log(response);
      if ((response['statustext'] === 'success')) {
        this.allTestimonial = response['data'].filter((item) => {
          return item.fromuser.id != undefined;
        });
      } else {
        console.log('error testimonials');
      }

    });

  }

  /* Function Name : educationDetails
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user education detaills
	* PARAMS :
	*/
  educationDetails() {
    let type = 'education';
    this.loader.education = true;
    this.usersService.userDetailsByType(type).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {

        //console.log(response);
        let count = response['data']['degree'].length;
        if (count > 0) {
          this.allEducations = response['data']['degree'];
        } else {
          this.allEducations = '';
        }

      } else {

        console.log('error in education details');
      }
      this.loader.education = false;
    });
  }

  /* Function Name : skillDetails
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user skills detaills
	* PARAMS :
	*/
  skillDetails() {
    let type = 'skills';
    this.loader.skills = true;
    this.usersService.userDetailsByType(type).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {

        //console.log(response);
        let count = response['data']['skills'].length;
        if (count > 0) {
          this.allSkills = response['data']['skills'];
        } else {
          this.allSkills = '';
        }

      } else {

        console.log('error in skills details');
      }
      this.loader.skills = false;
    });
  }

  /* Function Name : experienceDetails
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user experience detaills
	* PARAMS :
	*/
  experienceDetails() {
    let type = 'experience';
    this.loader.experience = true;
    this.usersService.userDetailsByType(type).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {

        //console.log(response);
        let count = response['data']['experience'].length;
        if (count > 0) {
          this.allExperiences = response['data']['experience'];
        } else {
          this.allExperiences = '';
        }

      } else {

        console.log('error in experience details');
      }
      this.loader.experience = false;
    });
  }

  /* Function Name : certificateDetails
	* Author :
	* Created Date : 20-01-2019
	* Modified Date : *
	* Purpose : to get user certificate detaills
	* PARAMS :
	*/
  certificateDetails() {
    let type = 'certificate';
    this.loader.certificate = true;
    this.usersService.userDetailsByType(type).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.allCertificates = response['data']['certificates'];

      } else {

        console.log('error in certificate details');
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
    this.usersService.userDetailsByType(type).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.allProjects = response['data']['projects'];
      } else {
        console.log('error in certificate details');
      }
      this.loader.project = false;
    });
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
                borderWidth: 0,
                weight: 0.5
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

  

  /* Function Name : navigatePath
	* Author :
	* Created Date : 15-03-2019
	* Modified Date : *
	* Purpose : to redirect in new page
	* PARAMS :
	*/
  navigatePath(path) {
    this.route.navigate(['/' + path]);
  }

  getUserCardList(afterRemove = false) {
    this.loader.card = true;
    let loggedInUser = this.cService.getLoggedUserData();
    this.cvCardService.getCardList({
      id: btoa(loggedInUser._i),
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
              details: details,
              file: item.card_file
            };
          });
        } 
        this.cardOwl.reInit();
        if (afterRemove == true) {
          this.cardOwl.reInit();
        }
        this.loader.card = false;
      }
    });
  }

  removeOwnCard(card) {

    this.translate.get(['CARD.CARD_REMOVE_CONFIRM']).subscribe((tData) => {
        swal({
          title: '',
          text: tData['CARD.CARD_REMOVE_CONFIRM'],
          icon: "warning",
          buttons: {
            cancel: true,
            confirm: true,
          },
        }).then((willDelete) => {
          if(willDelete) {
            this.loader.card_remove = true;
            this.cvCardService.removeCard({
              cardId: btoa(card.id)
            })
              .subscribe((responseData: any) => {
                this.loader.card_remove = false;
                if (responseData.statustext == 'success') {
                  this.getUserCardList(true);
                }
              })
          }
        });
    });
  }

  /* Function Name : changeTabEvent
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get data on tab change
	* PARAMS : e
	*/
  changeTabEvent(e) {
    this.activeTab = e.nextId;
  }

  /* Function Name : openEditPicModal
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to open edit profile picture modal
* PARAMS : content
*/
  openEditPicModal(content) {

    this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
  }

  /* Function Name : fileChangeListener
 * Author : 
 * Created Date : 31-01-2019 
 * Modified Date : *
 * Purpose : to get file object on image upload
 * PARAMS : $event, cropper
 */
  fileChangeListener($event, cropper) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    if (file && (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif')) {
      if (file.size < 250000) {

        var myReader: FileReader = new FileReader();
        var that = this;

        myReader.onloadend = (loadEvent: any) => {

          image.src = loadEvent.target.result;
          setTimeout(() => {
            cropper.setImage(image);
          }, 10);
        };

        myReader.readAsDataURL(file);
      } else {
        this.translate.get(['COMMON.ERROR','PROFILEEDIT.PROFILE_PIC_SIZE_ERROR']).subscribe((tData) => {
          
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'],
            icon: 'error'
          });
        });
      }
    } else {
      this.translate.get(['COMMON.ERROR','PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe((tData) => {
          
        swal({
          title: tData['COMMON.ERROR'],
          text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
          icon: 'error'
        });
      });
    }
  }
  /* Function Name : savePhoto
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to save photo
	* PARAMS : 
	*/
  savePhoto() {
    if (this.data.image) {

      this.usersService.changeProfilePic({
        "pic": this.data['image']
      }).subscribe((res: any) => {
        if (res.statustext === 'success') {
          localStorage.setItem("_propic", this.data['image']);
          this.cService.setProfilePic(this.data['image']);
          this.errorMsg = '';
          this.successMsg = res.message;

        } else {

          this.successMsg = '';
          this.errorMsg = res.message;

        }
      });
    } else {
      this.translate.get(['COMMON.ERROR','PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe((tData) => {
          
        swal({
          title: tData['COMMON.ERROR'],
          text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
          icon: 'error'
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
	* Created Date : 03-04-2019 
	* Modified Date : *
	* Purpose : to redirect to cv
	* PARAMS :
	*/
	gotToCV() {
    let defaultCv = null;
    if (this.userData.cv && this.userData.cv.length > 0){
      defaultCv = this.userData.cv.find((i)=>{ return i.is_default == 1 });
      if (defaultCv) {
        let cvPath = this.filePathPipe.transform(defaultCv.cv_file, 'cv');
        // let anchor = document.createElement('a');
        // anchor.href = cvPath;
        // anchor.download = 'Careery-cv.pdf';
        // document.body.appendChild(anchor);
        // anchor.click();

        var win = window.open(cvPath, '_blank');
        win.focus();
      }
    }
    if (!defaultCv) {

      this.cvCardService.saveDefaultCV({
        user_id: btoa(this.userId)
      })
        .subscribe((responseData: any) => {
          if (responseData.statustext == 'success') {
            setTimeout(()=>{
              this.loderService.show();
            },100)
            setTimeout(()=>{
              this.loderService.hide();
              let cvPath = this.filePathPipe.transform('careery-'+this.userId+'-cv.pdf', 'cv');
              // let anchor = document.createElement('a');
              // anchor.href = cvPath;
              // anchor.download = 'Careery-cv.pdf';
              // document.body.appendChild(anchor);
              // anchor.click();
              var win = window.open(cvPath, '_blank');
              win.focus();
            },3000);
          }
        });
    }
    
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
      user_id: btoa(this.userId)
    })
    .subscribe((responseData)=>{
      setTimeout(()=>{
        this.loderService.show();
      },100)
      setTimeout(()=>{
        this.loderService.hide();
      let cvPath = this.filePathPipe.transform('careery-'+this.userId+'-card.pdf', 'card');
      var win = window.open(cvPath, '_blank');
      win.focus();
    },3000);
    })
  }
}


