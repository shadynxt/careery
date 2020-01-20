/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 31-01-2019
# Module                : ProfileeditComponent                     
# Object name           : ProfileeditComponent    
# Functionality         : All profile edit operations
# Purpose               : constructor, ngOnInit, setActive, open, getDismissReason, openEditPicModal, fileChangeListener, savePhoto, openAlertModal, removeProfilePic, changeTabEvent, getEducationData, getDegreeFields, resetEducationForm, submitEducationFrom, editEducation, deleteEducation, getSkillData, resetSkillForm, submitSkillForm, editSkills, deleteSkills, checkValue, getExperienceData, resetExperienceForm, submitExperienceFrom, editExperience, deleteExperience, onFileChanged, getCertificateData, resetCertificateForm, submitCertificateFrom, editCertificate, deleteCertificate, validURL, personalDetails, updatePersonalFrom, getCityList
*******************************************************/

import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
import { UsersService } from "../../services/users.service";
import { CvcardService } from "../../services/cvcard.service";
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../services/common.service';
import * as global from "../../globalConfig";
import { DatePipe } from 'ng-date-format';
import swal from 'sweetalert';
@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss'],
})
export class ProfileeditComponent implements OnInit {



  data: any; // crop image data
  maxDay: any = new Date(); // 
  cropperSettings: CropperSettings; // settings of cropper
  successMsg: string = ''; // success message
  errorMsg: string = ''; // error message
  profilePic: any = ''; // user profile picture
  years: Array<any> = []; // from years
  toYears: Array<any> = []; // to years
  dates: Array<any> = []; // dates 
  confirmMessage: string = ''; // confirm message
  resetBtnDisplay: boolean = true; // reset button display status
  countryCodes: Array<any> = [];
  // EDUCATION CONFIG //
  educationForm: any = { // education form
    "id": null,
    "degree_id": null,
    "field_id": null,
    'from_year': null,
    'to_year': null,
    "error": 0,
    "submit": false
  };
  educationSuccessMsg: string = ''; // education success message
  educationResponsedata: any = null; // education response data
  userDegreelist: Array<any> = []; // user degree list
  degreelist: Array<any> = []; // degree list from db
  degreeFieldlist: Array<any> = []; // digree field list
  // EDUCATION CONFIG  END//

  // SKILLS CONFIG //
  skillForm: any = { // skill form
    "id": null,
    "skill_id": null,
    "status": null,
    "error": 0,
    "submit": false
  };
  skillSuccessMsg: string = ''; // skills success message
  userSkilllist: Array<any> = []; // user skills list
  skillsList: Array<any> = []; // skill list from db
  // SKILLS CONFIG  END//

  // EXPERIENCE CONFIG //
  experienceForm: any = { // experience form
    "id": null,
    "company_name": null,
    "position_id": null,
    'from_year': null,
    'is_current': null,
    "summery": null,
    "error": 0,
    "submit": false
  };
  experienceSuccessMsg: string = ''; //experience success message
  experienceErrorMsg: string = ''; // esperience error message
  experienceResponsedata: any = null; // experience response data
  userExperiencelist: Array<any> = []; // user experience list
  positionlist: Array<any> = []; // position list from db
  // EXPERIENCE CONFIG  END//

  // CERTIFICATE CONFIG //
  certificateForm: any = { // certificate  form
    "id": null,
    "certificate_name": null,
    "summery": null,
    'from_year': null,
    'to_year': null,
    'picture': null,
    'file': null,
    "error": 0,
    "submit": false
  };
  certificateSuccessMsg: string = ''; // certificate success message
  certificateResponsedata: any = null; // certificate response data
  userCertificatelist: Array<any> = []; // user certificate list
  certificatePicture: any = ''; // certificate picture
  pictureError = { // picture error
    status: 0,
    msg: ''
  }
  pictureSizeError = { // picture size error
    status: 0,
    msg: ''
  }
  // pictureErrorMsg: string = '';
  // CERTIFICATE CONFIG  END//

  // PERSONAL CONFIG //
  personalForm: any = { // personal details form
    "id": null,
    "first_name": null,
    "last_name": null,
    "family_name": null,
    "profile_pic":null,
    "email": null,
    "website": null,
    "facebook_link": null,
    "deviantart_link": null,
    "behance_link": null,
    "twitter_link": null,
    "dribbble_link": null,
    "pinterest_link": null,
    "mobile_no": null,
    "mobile_code": null,
    "country_id": null,
    "city_id": null,
    "dob_year": null,
    "dob_month": null,
    "dob_date": null,
    "address": null,
    "about_me": '',
    "video_link": '',
    "error": 0,
    "submit": false
  };
  // Project form
  projectForm: any = {
    "id": null,
    "name": null,
    "cId": null,
    "from": null,
    "to": null,
    "error": 0,
    "submit": false
  }
  userProjectlist: Array<any> = []; // user project list
  userCompanyList: Array<any> = []; // user company list
  projectSuccessMsg: string = ''; // success message for user project manage
  projectErrorMsg: string = ''; // error message for user project manage
  urlErr = { // url errors
    'facebook': false,
    'deviantart': false,
    'behance': false,
    'twitter': false,
    'dribbble': false,
    'pinterest': false,
    'video_link': 0
  };
  personalSuccessMsg: string = ''; // personal success message
  personalErrorMsg: string = ''; // personal error message
  personalResponsedata: any = null; // personal response data
  countryList: Array<any> = []; // country list from db
  cityList: Array<any> = []; // city list from db
  monthList: Array<any> = []; // month list
  dayList: Array<any> = []; // day list
  // PERSONAL CONFIG  END//

  // Modal popup
  closeResult: string; // close result

  loader: any = { // loader config
    'personal': {
      'list': false,
      'submit': false
    },
    'education': {
      'list': false,
      'submit': false
    },
    'skills': {
      'list': false,
      'submit': false
    },
    'experience': {
      'list': false,
      'submit': false
    },
    'certificate': {
      'list': false,
      'submit': false
    },
    'project': {
      'list': false,
      'submit': false
    },
  };

  

  /* Function Name : constructor
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : 
	*/
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private uService: UsersService,
    private translate: TranslateService,
    private cService: CommonService,
    private cvCardService: CvcardService,
    private sanitizer: DomSanitizer,
    private route: Router,
    private dateFormater: DatePipe) {


    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    translate.get('PROFILEEDIT.PICTURE_VALIDATION_ERROR').subscribe((tData) => {
      this.pictureError.msg = tData;
    });
    this.data = {};
    this.cService.profilePic.subscribe((pic) => {
      if (pic) {
        this.personalForm.profile_pic = pic;
        this.profilePic = this.sanitizer.bypassSecurityTrustUrl(pic);
        this.data.image = this.profilePic;
      } else {
        this.personalForm.profile_pic = null;
        this.profilePic = "";
        this.data.image = "";
      }

    });

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y > currentYear - 100; y--) {
      this.years.push(y);
    }

  }

  /* Function Name : ngOnInit
    * Author : 
    * Created Date : 31-01-2019 
    * Modified Date : *
    * Purpose : to get data after html load
    * PARAMS : 
    */
  ngOnInit() {

    // this.countryCodes = CountryCodes.Country;
    // let selectCode = this.countryCodes.find((i) => {
    //   return i.code == 'SA';
    // });
    // this.personalForm.mobile_code = selectCode.dial_code;

  
    // month list
    for (let m = 1; m <= 12; m++) {
      this.monthList.push({
        id: (m < 10) ? '0' + m : m.toString(),
        name: (m < 10) ? '0' + m : m.toString(),
      })
    }
    for (let d = 1; d <= 31; d++) {
      this.dayList.push({
        id: (d < 10) ? '0' + d : d.toString(),
        name: (d < 10) ? '0' + d : d.toString(),
      })
    }

    this.personalDetails();
    this.getEducationData();
    this.getSkillData();
    this.getExperienceData();
    this.getCertificateData();
    this.getProjectDetails();


  }



  reDefineToYear(event: any) {
    this.toYears = [];
    this.educationForm.to_year = null;
    this.experienceForm.to_year = null;
    this.certificateForm.to_year = null;
    let currentYear = new Date().getFullYear();
    for (let y = event; y <= currentYear; y++) {
      this.toYears.push(y);
    }
  }

  /* Function Name : setActive
    * Author : 
    * Created Date : 31-01-2019 
    * Modified Date : *
    * Purpose : to set active tab
    * PARAMS : tab, activeTab
    */
  setActive(tab, activeTab) {

    tab.select(activeTab);
  }
  /* Function Name : open
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to set open modal
	* PARAMS : content
	*/
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  /* Function Name : getDismissReason
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to dismiss modal
	* PARAMS : reason
	*/
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

      this.uService.changeProfilePic({
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
  /* Function Name : openAlertModal
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to open alert modal
	* PARAMS : alertContent
	*/
  openAlertModal(alertContent: string) {
    this.modalService.open(document.getElementById(alertContent), { size: 'sm', centered: true, windowClass: 'DefaultModal' });
  }
  /* Function Name : removeProfilePic
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to remove profile picture
	* PARAMS : 
	*/
  removeProfilePic() {
    this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRMTODELETEPROFILEPIC']).subscribe((tData) => {
      swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['PROFILEEDIT.CONFIRMTODELETEPROFILEPIC'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.uService.removeProfilePic().subscribe((response: any) => {
            if (response.statustext === 'success') {
              localStorage.removeItem("_propic");
              this.profilePic = "";
              this.cService.setProfilePic("");
            }
          });
        }
      })
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
    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y > currentYear - 100; y--) {
      this.years.push(y);
    }
    this.toYears = this.years;
    // switch (e.nextId) {
    //   case "personal":
    //     this.personalDetails();
    //     break;
    //   case "education":
    //     this.getEducationData();
    //     break;
    //   case "skills":
    //     this.getSkillData();
    //     break;
    //   case "experience":
    //     this.getExperienceData();
    //     break;
    //   case "certificate":
    //     this.getCertificateData();
    //     break;
    //   case "projects":
    //     this.getProjectDetails();
    //     break;
    // }
  }

  // EDUCATION TAB //

  /* Function Name : getEducationData
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get education data
	* PARAMS : 
	*/
  getEducationData() {
    this.loader.education.list = true;
    this.resetEducationForm();
    this.uService.getUserDetailsInEditView('education')
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          this.educationResponsedata = responseData.data;
          if (responseData.data.degree) {
            this.degreelist = responseData.data.degree;
          }
          if (responseData.data.user.degree) {
            this.userDegreelist = responseData.data.user.degree;

          }
        }
        this.loader.education.list = false;
      });
  }
  /* Function Name : getDegreeFields
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get degree field data
	* PARAMS : 
	*/
  getDegreeFields() {
    let degId = this.educationForm.degree_id;
    if (this.educationResponsedata.degreeField) {
      let degreeFileds = this.educationResponsedata.degreeField;
      this.educationForm.field_id = null;
      this.degreeFieldlist = [];
      this.degreeFieldlist = degreeFileds.filter((i) => {
        return i.degree_id == degId;
      });
    }
  }

  /* Function Name : resetEducationForm
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to reset education form
	* PARAMS : 
	*/
  resetEducationForm() {
    this.educationForm = {
      "id": null,
      "degree_id": null,
      "field_id": null,
      'from_year': null,
      'to_year': null,
      'error': 0,
      'submit': false
    };
    this.resetBtnDisplay = true;
  }

  /* Function Name : submitEducationFrom
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to submit education form
	* PARAMS : 
	*/
  submitEducationFrom() {

    this.educationForm.submit = true;
    if (!this.educationForm.degree_id || !this.educationForm.field_id || !this.educationForm.from_year || !this.educationForm.to_year) {
      this.educationForm.error = 1;
    } else {
      var userDegree = this.userDegreelist;
      if ((this.educationForm.id && userDegree.find((item)=>{ return ((item.id !=  this.educationForm.id)) && (item.degree_id ==  this.educationForm.degree_id) })) ||  (!this.educationForm.id && userDegree.find((item)=>{ return (item.degree_id ==  this.educationForm.degree_id) })))  {
        
        this.translate.get(['COMMON.ERROR', 'COMMON.DEGREE_EXIST']).subscribe((tData) => {
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['COMMON.DEGREE_EXIST'],
            icon: 'error'
          });
          this.educationForm.error = 1;
        });
      } else {
        this.educationForm.error = 0;
      }
    }
    if (this.educationForm.error == 0) {
      this.loader.education.submit = true;

      if (this.educationForm.id) {
        this.uService.editEducationData(this.educationForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text: response.message,
                  icon: 'success'
                });
              });
              this.getEducationData();
              this.resetEducationForm();
             
            }
            this.loader.education.submit = false;
          });
      } else {

        this.uService.addEducationData(this.educationForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text: response.message,
                  icon: 'success'
                });
              });
              this.getEducationData();
              this.resetEducationForm();
            }
            this.loader.education.submit = false;
          });
      }
    }
  }

  /* Function Name : editEducation
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get education data on edit mode in form
	* PARAMS : educationDetails
	*/
  editEducation(educationDetails: any) {
    this.resetBtnDisplay = false;
    this.educationForm["id"] = educationDetails.id;
    this.educationForm["degree_id"] = educationDetails.degree_id;
    this.getDegreeFields();
    this.educationForm["field_id"] = educationDetails.degree_field_id;
    this.educationForm["from_year"] = educationDetails.from_year;
    this.educationForm["to_year"] = educationDetails.to_year;

  }
  /* Function Name : deleteEducation
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to delete education details
	* PARAMS : degreeId
	*/
  deleteEducation(degreeId) {
    this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE']).subscribe((tData) => {
      swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
        if (willDelete) {
          this.loader.education.list = true;
          this.uService.deleteEducationData({ "user_degree_id": degreeId })
            .subscribe((response: any) => {
              if (response.statustext === 'success') {
                this.educationSuccessMsg = response.message;
                this.getEducationData();
                setTimeout(() => {
                  this.educationSuccessMsg = '';
                }, 5000);
              }
            })
        }
      });      
    });


  }
  // EDUCATION TAB CLOSE//

  // SKILLS TAB //
  /* Function Name : getSkillData
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get user skill data
	* PARAMS : 
	*/
  getSkillData() {
    this.loader.skills.list = true;
    this.resetSkillForm();
    this.uService.getUserDetailsInEditView('skills')
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          if (responseData.data.user.skills) {
            this.userSkilllist = responseData.data.user.skills;
            this.skillsList = responseData.data.skills;
          }
        }
        this.loader.skills.list = false;
      });
  }
  /* Function Name : resetSkillForm
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to reset skill form
	* PARAMS : 
	*/
  resetSkillForm() {
    this.skillForm = {
      "id": null,
      "skill_id": null,
      "status": null,
      "error": 0,
      "submit": false
    };
    this.resetBtnDisplay = true;
  }
  /* Function Name : submitSkillForm
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to submit skill form
	* PARAMS : 
	*/
  submitSkillForm() {

    this.skillForm.submit = true;
    if (!this.skillForm.skill_id || !this.skillForm.status) {
      this.skillForm.error = 1;
    } else {
      var userSkills = this.userSkilllist;
      if ((this.skillForm.id && userSkills.find((item)=>{ return ((item.id !=  this.skillForm.id)) && (item.skill_id ==  this.skillForm.skill_id) })) ||  (!this.skillForm.id && userSkills.find((item)=>{ return (item.skill_id ==  this.skillForm.skill_id) })))  {
        
        this.translate.get(['COMMON.ERROR', 'COMMON.SKILL_EXIST']).subscribe((tData) => {
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['COMMON.SKILL_EXIST'],
            icon: 'error'
          });
          this.skillForm.error = 1;
        });
      } else {
        this.skillForm.error = 0;
      }
      
    }
    

    if (this.skillForm.error == 0) {
      this.loader.skills.submit = true;
      if (this.skillForm.id) {
        this.uService.editSkillData(this.skillForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getSkillData();
              this.resetSkillForm();
            
            }
            this.loader.skills.submit = false;
          });
      } else {

        this.uService.addSkillData(this.skillForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getSkillData();
              this.resetSkillForm();
              
            }
            this.loader.skills.submit = false;
          });
      }
    }

  }
  /* Function Name : editSkills
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get skill data on edit mode
	* PARAMS :  skillDetails
	*/
  editSkills(skillDetails: any) {
    this.resetBtnDisplay = false;
    this.skillForm["id"] = skillDetails.id;
    this.skillForm["skill_id"] = skillDetails.skill_id;
    this.skillForm["status"] = skillDetails.status;
  }
  /* Function Name : deleteSkills
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to delete skill details
	* PARAMS :  skillId
	*/
  deleteSkills(skillId) {
    this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRM_TO_DELETE_SKILL']).subscribe((tData) => {
      swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
        if (willDelete) {
          this.loader.skills.list = true;
          this.uService.deleteSkillData({ "user_skill_id": skillId })
            .subscribe((response: any) => {
              if (response.statustext === 'success') {
                this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                  swal({
                    title: tData['COMMON.SUCCESS'],
                    text:response.message,
                    icon: 'success'
                  });
                });
                this.getSkillData();
                
              }
            })
        }
      });
    });
  }
  // SKILLS TAB CLOSE //

  // EXPERIENCE TAB //
  /* Function Name : checkValue
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to check the value
	* PARAMS :  event
	*/
  checkValue(event: any) {
    this.experienceForm.is_current = (event.target.checked) ? 1 : 0;
    if (this.experienceForm.is_current === 1) {
      this.experienceForm.to_year = null;
    }
  }
  /* Function Name : getExperienceData
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to get experience data of a user
	* PARAMS :  
	*/
  getExperienceData() {
    this.loader.experience.list = true;
    this.resetExperienceForm();
    this.uService.getUserDetailsInEditView('experience')
      .subscribe((responseData: any) => {
        //console.log(responseData.data.user.experience);

        if (responseData.statustext === 'success') {
          this.experienceResponsedata = responseData.data;
          if (responseData.data.positionList) {
            this.positionlist = responseData.data.positionList;
          }
          if (responseData.data.user.experience) {
            this.userExperiencelist = responseData.data.user.experience;

          }

        }
        this.loader.experience.list = false;
      });
  }
  /* Function Name : resetExperienceForm
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to reset experience form
	* PARAMS :  
	*/
  resetExperienceForm() {
    this.experienceForm = {
      "id": null,
      "company_name": null,
      "position_id": null,
      'from_year': null,
      'to_year': null,
      'is_current': null,
      'summery': null,
      "error": 0,
      "submit": false

    };
    this.resetBtnDisplay = true;
  }
  /* Function Name : submitExperienceFrom
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to submit experience form
	* PARAMS :  
	*/
  submitExperienceFrom() {

    this.experienceForm.submit = true;
    this.experienceForm.company_name = this.experienceForm.company_name.trim();
    if (!this.experienceForm.company_name || !this.experienceForm.position_id || !this.experienceForm.from_year) {
      this.experienceForm.error = 1;
    } else {
      let duplicateExperience = this.userExperiencelist.filter((item)=>{
        return (
          item.position.id == this.experienceForm.position_id &&
          item.company_name == this.experienceForm.company_name &&
          item.from_year == this.experienceForm.from_year &&
          item.to_year == this.experienceForm.to_year
        );
      });
      if (duplicateExperience && duplicateExperience.length > 0) {
        this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR' ]).subscribe((tData) => {
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR'],
            icon: 'error'
          });
        });
        this.experienceForm.error = 1;  
      } else {
        this.experienceForm.error = 0;
      }
    }
    if (this.experienceForm.error == 0) {
      this.loader.experience.submit = true;
      if (this.experienceForm.id) {
        this.uService.editExperienceData(this.experienceForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getExperienceData();
              this.resetExperienceForm();
              
            } else if (response.statustext === 'error') {
              this.experienceErrorMsg = response.message;
              this.translate.get(['COMMON.ERROR' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.ERROR'],
                  text:response.message,
                  icon: 'error'
                });
              });
            }
            this.loader.experience.submit = false;
          });
      } else {
        this.uService.addExperienceData(this.experienceForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getExperienceData();
              this.resetExperienceForm();
              
            } else if (response.statustext === 'error') {
              this.translate.get(['COMMON.ERROR' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.ERROR'],
                  text:response.message,
                  icon: 'error'
                });
              });
            }
            this.loader.experience.submit = false;
          });
      }
    }
  }
  /* Function Name : editExperience
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to get data in edit mode
	* PARAMS :  experienceDetails
	*/
  editExperience(experienceDetails: any) {
    this.resetBtnDisplay = false;
    this.experienceForm["id"] = experienceDetails.id;
    this.experienceForm["company_name"] = experienceDetails.company_name;
    this.experienceForm["position_id"] = experienceDetails.position_id;
    this.experienceForm["from_year"] = experienceDetails.from_year;
    this.experienceForm["to_year"] = experienceDetails.to_year;
    this.experienceForm["is_current"] = experienceDetails.is_current;
    this.experienceForm["summery"] = experienceDetails.summery;
  }
  /* Function Name : deleteExperience
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to delete experience details
	* PARAMS :  experienceId
	*/
  deleteExperience(experienceId) {
    this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE']).subscribe((tData) => {
      swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
        
        if (willDelete) {
          this.loader.experience.list = true;
          this.uService.deleteExperienceData({ "user_experience_id": experienceId })
            .subscribe((response: any) => {
              if (response.statustext === 'success') {
                this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                  swal({
                    title: tData['COMMON.SUCCESS'],
                    text:response.message,
                    icon: 'success'
                  });
                });
                this.getExperienceData();
                
              }
            })
        }
      });
    });
  }
  // EXPERIENCE TAB CLOSE //

  // CERTIFICATE TAB //
  /* Function Name : onFileChanged
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to get image data on file browse
	* PARAMS :  event
	*/
  onFileChanged(event) {
    //this.certificateForm.file = event.target.files[0];
    this.certificatePicture = '';
    this.certificateForm.picture = '';
    this.pictureError.status = 0;
    const uploadImage = (event.target.files[0]) ? event.target.files[0] : '';
    if (uploadImage && uploadImage.type.indexOf('image/') == -1) {
      this.pictureError.status = 1;
      return false;
    } else {
      this.pictureError.status = 0;
    }
    if (uploadImage && uploadImage.size > 500000) {

      this.pictureSizeError.status = 1;
      this.translate.get('PROFILEEDIT.CERTIFICATE_PIC_SIZE_ERROR').subscribe((tData) => {
        this.pictureSizeError.msg = tData;
      });
      return false;
    } else {
      this.pictureSizeError.status = 0;
    }

    var reader = new FileReader();
    reader.readAsDataURL(uploadImage);
    reader.onload = () => {
      this.certificatePicture = reader.result;
      this.certificateForm.picture = reader.result;
    };
    // console.log(this.certificateForm.file);
  }
  /* Function Name : getCertificateData
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to get certificate data
	* PARAMS :  
	*/
  getCertificateData() {
    this.loader.certificate.list = true;
    this.resetCertificateForm();
    this.uService.getUserDetailsInEditView('certificate')
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          this.certificateResponsedata = responseData.data;

          if (responseData.data.user.certificates) {
            this.userCertificatelist = responseData.data.user.certificates;
          }

        }
        this.loader.certificate.list = false;
      });
  }
  /* Function Name : resetCertificateForm
	* Author : 
	* Created Date : 31-01-2019
	* Modified Date : *
	* Purpose : to reset certificate form
	* PARAMS :  
	*/
  resetCertificateForm() {
    this.certificateForm = {
      "id": null,
      "certificate_name": null,
      "summery": null,
      'from_year': null,
      'to_year': null,
      'picture': null,
      'error': 0,
      'submit': false
    };
    this.certificatePicture = '';
    this.certificateForm.submit = false;
    this.resetBtnDisplay = true;
    this.pictureError.status = 0;
    this.pictureSizeError.status = 0;
  }
  /* Function Name : submitCertificateFrom
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to submit certificate form
	* PARAMS :  
	*/
  submitCertificateFrom() {

    this.certificateForm.submit = true;
    this.certificateForm.certificate_name = this.certificateForm.certificate_name.trim();
    if (!this.certificateForm.certificate_name || !this.certificateForm.from_year || !this.certificateForm.to_year) {
      this.certificateForm.error = 1;
    } else {
      this.certificateForm.error = 0;
    }
    if (this.certificateForm.error == 0) {
      this.loader.certificate.submit = true;
      if (this.certificateForm.id) {
        this.uService.editCertificateData(this.certificateForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getCertificateData();
              this.resetCertificateForm();
            
            }
            this.loader.certificate.submit = false;
          });
      } else {
        this.uService.addCertificateData(this.certificateForm)
          .subscribe((response: any) => {
            global.SCROLL_TO_TOP();
            if (response.statustext === 'success') {
              this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text:response.message,
                  icon: 'success'
                });
              });
              this.getCertificateData();
              this.resetCertificateForm();
              
            }
            this.loader.certificate.submit = false;
          });
      }
    }
  }
  /* Function Name : editCertificate
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get data on edit mode 
	* PARAMS :  certificateDetails
	*/
  editCertificate(certificateDetails: any) {
    this.resetBtnDisplay = false;
    this.certificateForm["id"] = certificateDetails.id;
    this.certificateForm["certificate_name"] = certificateDetails.certificate_name;
    this.certificateForm["summery"] = certificateDetails.summery;
    this.certificateForm["from_year"] = certificateDetails.from_year;
    this.certificateForm["to_year"] = certificateDetails.to_year;
    if (certificateDetails.picture) {
      this.certificatePicture = global.s3URL + "certificates/" + certificateDetails.picture;
    } else {
      this.certificatePicture = '';
    }
  }
  /* Function Name : deleteCertificate
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to delete certificate data
	* PARAMS :  certificateId
	*/
  deleteCertificate(certificateId) {
    this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE']).subscribe((tData) => {
      swal({
				title: tData['COMMON.ARE_YOU_SURE'],
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
			}).then((willDelete) => {
        if (willDelete) {
          this.loader.certificate.list = true;
          this.uService.deleteCertificateData({ "user_certificate_id": certificateId })
            .subscribe((response: any) => {
              if (response.statustext === 'success') {
                this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                  swal({
                    title: tData['COMMON.SUCCESS'],
                    text:response.message,
                    icon: 'success'
                  });
                });
                this.getCertificateData();
                
              }
            })
        }
      });
    });
  }
  // CERTIFICATE TAB CLOSE //
  /* Function Name : validURL
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to check the valid url
* PARAMS :  myURL
*/

  // PERSONAL TAB //
  validURL(myURL) {
    var pattern = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
    return pattern.test(myURL);
  }
  /* Function Name : personalDetails
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get personal details
	* PARAMS :  
	*/
  personalDetails() {
    this.loader.personal.list = true;
    this.personalForm.error = 0;
    this.personalForm.submit = false;
    this.personalSuccessMsg = '';
    this.personalErrorMsg = '';
    this.uService.getUserDetailsInEditView('personal')
      .subscribe((responseData: any) => {

        if (responseData.statustext === 'success') {
          if (responseData.data.country) {
            this.countryList = responseData.data.country;
          }
          if (responseData.data.country_ph_list) {
            this.countryCodes = responseData.data.country_ph_list;
          }
          
          if (responseData.data.user) {

            if (new Date(responseData.data.user.dob)) {
              this.personalForm.dob_year = this.dateFormater.transform(responseData.data.user.dob, 'yyyy');
              this.personalForm.dob_month = this.dateFormater.transform(responseData.data.user.dob, 'MM');
              this.personalForm.dob_date = this.dateFormater.transform(responseData.data.user.dob, 'dd');
            }

           

            this.personalForm.first_name = responseData.data.user.first_name;
            this.personalForm.last_name = responseData.data.user.last_name;
            this.personalForm.family_name = responseData.data.user.family_name;
            this.personalForm.email = responseData.data.user.email;
            this.personalForm.website = responseData.data.user.website;
            this.personalForm.mobile_no = responseData.data.user.mobile_no;
            this.personalForm.mobile_code = responseData.data.user.mobile_code;
            this.personalForm.facebook_link = responseData.data.user.facebook_link;
            this.personalForm.behance_link = responseData.data.user.behance_link;
            this.personalForm.deviantart_link = responseData.data.user.deviantart_link;
            this.personalForm.twitter_link = responseData.data.user.twitter_link;
            this.personalForm.dribbble_link = responseData.data.user.dribbble_link;
            this.personalForm.pinterest_link = responseData.data.user.pinterest_link;
            this.personalForm.country_id = responseData.data.user.country_id;
            this.personalForm.address = responseData.data.user.address;
            this.personalForm.about_me = responseData.data.user.about_me;
            this.personalForm.video_link = responseData.data.user.video_link;
            this.getCityList();
            this.personalForm.city_id = responseData.data.user.city_id;
          }
        }
        this.loader.personal.list = false;
      });
  }
  /* Function Name : updatePersonalFrom
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to update personal info
	* PARAMS :  
	*/
  updatePersonalFrom() {

    this.personalForm.submit = true;
    let formPostData = this.personalForm;
    this.urlErr = {
      'facebook': false,
      'deviantart': false,
      'behance': false,
      'twitter': false,
      'dribbble': false,
      'pinterest': false,
      'video_link': 0
    };
    this.personalForm.first_name = this.personalForm.first_name.trim();
    this.personalForm.last_name = this.personalForm.last_name.trim();
    this.personalForm.email = this.personalForm.email.trim();
    this.personalForm.mobile_no = this.personalForm.mobile_no.toString().trim();
    if (
      !this.personalForm.first_name ||
      !this.personalForm.last_name ||
      !this.personalForm.email ||
      !this.personalForm.mobile_no ||
      this.personalForm.mobile_no.length != 10 ||
      !this.personalForm.country_id ||
      this.personalForm.country_id == '' ||
      !this.personalForm.city_id ||
      this.personalForm.city_id == ''
    ) {
      this.personalForm.error = 1;
    } else {
      this.personalForm.error = 0;
    }
    if (this.personalForm.video_link && (this.validURL(this.personalForm.video_link) == false)) {
      this.urlErr.video_link = 1;
      this.personalForm.error = 1;
    } else if (this.personalForm.video_link && this.personalForm.video_link.indexOf("youtube.com") == -1 && this.personalForm.video_link.indexOf("youtu.be") == -1) {
      this.urlErr.video_link = 2;
      this.personalForm.error = 1;
    }
    if (this.personalForm.facebook_link && (this.validURL(this.personalForm.facebook_link) == false)) {
      this.urlErr.facebook = true;
      this.personalForm.error = 1;
    }
    if (this.personalForm.behance_link && (this.validURL(this.personalForm.behance_link) == false)) {
      this.urlErr.behance = true;
      this.personalForm.error = 1;
    }
    if (this.personalForm.deviantart_link && (this.validURL(this.personalForm.deviantart_link) == false)) {
      this.urlErr.deviantart = true;
      this.personalForm.error = 1;
    }
    if (this.personalForm.twitter_link && (this.validURL(this.personalForm.twitter_link) == false)) {
      this.urlErr.twitter = true;
      this.personalForm.error = 1;
    }
    if (this.personalForm.dribbble_link && (this.validURL(this.personalForm.dribbble_link) == false)) {
      this.personalForm.error = 1;
      this.urlErr.dribbble = true;
    }
    if (this.personalForm.pinterest_link && (this.validURL(this.personalForm.pinterest_link) == false)) {
      this.personalForm.error = 1;
      this.urlErr.pinterest = true;
    }
    
    if (this.personalForm.error == 0) {
      this.loader.personal.submit = true;
      this.uService.updatePersonalData(formPostData)
        .subscribe((responseData: any) => {
          global.SCROLL_TO_TOP();
          if (responseData.statustext === 'success') {

            this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
              swal({
                title: tData['COMMON.SUCCESS'],
                text:responseData.message,
                icon: 'success'
              });
            });
            let updatedProfileName = this.personalForm.first_name + ' ' + this.personalForm.last_name;
           
            this.cService.setProfileName(updatedProfileName);
           
          } else if (responseData.statustext === 'error') {
            this.translate.get(['COMMON.ERROR' ]).subscribe((tData) => {
              swal({
                title: tData['COMMON.ERROR'],
                text:responseData.message,
                icon: 'error'
              });
            });
          }
          this.loader.personal.submit = false;
        });
    } else {
      global.SCROLL_TO_TOP();
    }
  }
  /* Function Name : getCityList
	* Author : 
	* Created Date : 31-01-2019 
	* Modified Date : *
	* Purpose : to get city list
	* PARAMS :  
	*/
  getCityList() {
    this.cityList = [];
    this.personalForm.city_id = null;
    let countryId = this.personalForm.country_id;
    this.cService.getCityList(countryId)
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          this.cityList = responseData.data;
        }
      })
  }
  // PERSONAL TAB CLOSE //


  /* Function Name : getProjectDetails
	* Author : 
	* Created Date : 14-03-2019 
	* Modified Date : *
	* Purpose : to get user project details
	* PARAMS :  
  */

  getProjectDetails() {
    this.loader.project.list = true;
    this.resetProjectForm();
    this.uService.getUserDetailsInEditView('project')
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          // this.certificateResponsedata = responseData.data;
          if (responseData.data.company) {
            this.userCompanyList = responseData.data.company;
          }
          if (responseData.data.user.projects) {
            this.userProjectlist = responseData.data.user.projects;
          }

        }
        this.loader.project.list = false;
      });
  }

  /* Function Name : resetProjectForm
	* Author : 
	* Created Date : 14-03-2019 
	* Modified Date : *
	* Purpose : to reset project form
	* PARAMS :  
  */
  resetProjectForm() {
    this.projectForm = {
      id: null,
      name: null,
      cId: null,
      from: null,
      to: null,
      error: 0,
      submit: false
    }
  }

  /* Function Name : submitProjectFrom
	* Author : 
	* Created Date : 14-03-2019 
	* Modified Date : *
	* Purpose : to submit project form
	* PARAMS :  
  */
  submitProjectFrom() {
    this.projectForm.submit = true;
    this.projectForm.error = 0;

    if (!this.projectForm.name || !this.projectForm.cId || !this.projectForm.from || !this.projectForm.to) {
      this.projectForm.error = 1;
    }
    if (this.projectForm.error == 0) {
      this.loader.project.submit = true;
      this.projectForm.cId = btoa(this.projectForm.cId);
      this.projectForm.from = new Date(this.projectForm.from).getTime();
      this.projectForm.to = new Date(this.projectForm.to).getTime();
      let action = null;
      if (this.projectForm.id) {
        action = this.uService.editProject(this.projectForm);
      } else {
        action = this.uService.addProject(this.projectForm);
      }
      action
        .subscribe((responseData: any) => {
          if (responseData.statustext == 'success') {
            this.getProjectDetails();
            this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
              swal({
                title: tData['COMMON.SUCCESS'],
                text:responseData.message,
                icon: 'success'
              });
            });
          } else {
            this.translate.get(['COMMON.ERROR' ]).subscribe((tData) => {
              swal({
                title: tData['COMMON.ERROR'],
                text:responseData.message,
                icon: 'error'
              });
            });
          }
          this.loader.project.submit = false;
         
        });

    }
  }
  /* Function Name : editProject
	* Author : 
	* Created Date : 14-03-2019 
	* Modified Date : *
	* Purpose : to get  project form data on edit mode
	* PARAMS :  project
  */
  editProject(project) {
    this.projectForm = {
      id: btoa(project.id),
      name: project.name,
      cId: project.company_id,
      from: new Date(project.from_date),
      to: new Date(project.to_date),
      error: 0,
      submit: false
    }
  }
  /* Function Name : deleteProject
	* Author : 
	* Created Date : 14-03-2019 
	* Modified Date : *
	* Purpose : to delete a project
	* PARAMS :  projectId
  */
  deleteProject(projectId) {
    if (projectId) {
      this.translate.get(['COMMON.ARE_YOU_SURE','PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT']).subscribe((tData) => {
        swal({
          title: tData['COMMON.ARE_YOU_SURE'],
          text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT'],
          icon: "warning",
          buttons: {
            cancel: true,
            confirm: true,
          },
        }).then((willDelete) => {

          if (willDelete) {
            this.uService.deleteProject({ "id": btoa(projectId) })
              .subscribe((responseData: any) => {
                if (responseData.statustext == 'success') {
                  this.getProjectDetails();
                  this.translate.get(['COMMON.SUCCESS' ]).subscribe((tData) => {
                    swal({
                      title: tData['COMMON.SUCCESS'],
                      text:responseData.message,
                      icon: 'success'
                    });
                  });
                } else {
                  this.translate.get(['COMMON.ERROR' ]).subscribe((tData) => {
                    swal({
                      title: tData['COMMON.ERROR'],
                      text:responseData.message,
                      icon: 'error'
                    });
                  });
                }
                this.loader.project.submit = false;
                
              });
          }
        });
      });

    }
  }

  
  /* Function Name : saveDefaultCard
	* Author : 
	* Created Date : 30-07-2019 
	* Modified Date : *
	* Purpose : to save default card of a user
	* PARAMS :  
  */
  saveDefaultCard() {
    this.cvCardService.saveDefaultCard()
    .subscribe((responseData)=>{})
  }

  /* Function Name : checkUserAllInfoForDefaultCvBild
* Author : 
* Created Date : 23-07-2019 
* Modified Date : *
* Purpose : to check user info to build default cv
* PARAMS :  
*/
  checkUserAllInfoForDefaultCvBild() {
   
    if (
      this.profilePic &&
      this.personalForm.about_me &&
      this.personalForm.first_name &&
      this.personalForm.last_name &&
      this.personalForm.mobile_no &&
      this.personalForm.address &&
      this.personalForm.email &&

      this.personalForm.facebook_link &&
      this.personalForm.twitter_link &&
      this.personalForm.behance_link &&

      this.userDegreelist.length > 0 &&
      this.userExperiencelist.length > 0 &&
      this.userProjectlist.length > 0 &&
      this.userSkilllist.length > 0
      ) {
        let personalData = this.personalForm;
        personalData['city_name'] = this.cityList.find((item)=>{
          return item.id = this.personalForm.city_id;
        }).name;
        personalData['country_name'] = this.countryList.find((item)=>{
          return item.id = this.personalForm.country_id;
        }).name;
        personalData['website'] = (this.personalForm.website)?this.personalForm.website:'';
        let cvInfo = {
          "personal" : personalData,
          "profilePic": this.personalForm.profile_pic,
          "educations": this.userDegreelist.map((item)=>{
            return {
               "id": item.id,
               "degree_id": item.degree_id,
               "field_id":item.degree_field_id,
               "from_year": item.from_year,
               "to_year": item.to_year,
               "degree_name": item.degreeDetails.details[0].name,
               "degree_field_name": item.degreeFieldDetails.details[0].name,
               "university_name": (item.university)?item.university.details[0].name:''
            };
          }),
          "skills": this.userSkilllist.map((item)=>{
            return {
               "id": item.id,
               "skill_id": item.skill_id,
               "status":item.status,
               "skill_name": item.details[0].name,
               
            };
          }),
          "experiences": this.userExperiencelist.map((item)=>{
            return {
                "id": item.id,
                "company_name": (item.company_name)? item.company_name : ((item.company)?item.company.details[0].name:''),
                "position_id": item.position_id,
                "from_year": item.from_year,
                "to_year": item.to_year,
                "is_current": item.is_current,
                "summery": item.summery,
                "position_name": item.position.details[0].name
               
            };
          }),
          "certificates": this.userCertificatelist.map((item)=>{
            return {
              "id": item.id,
              "certificate_name": item.certificate_name,
              "summery": item.summery,
              "from_year": item.from_year,
              "to_year": item.to_year,
              "picture": item.picture
               
            };
          }),
          "projects": this.userProjectlist.map((item)=>{
            return {
                "id": item.id,
                "name": item.name,
                "cId": item.company_id,
                "from": new Date(item.from_date).getTime(),
                "to": new Date(item.to_date).getTime(),
                "company_name": item.company.company_name
            };
          }),
        };
        // return false;
        // let cvContent = localStorage.getItem('_cvinfo');

        let postData = {
          "cvType": 0,
          "cvData": JSON.stringify(cvInfo),
          "name": 'Careery CV',
          "comment": null,
          "templateId": 13,
          "templatePrice": 0,
          "paymentStatus": 1,
          "is_system":1
        };
        this.cvCardService.sendCVGenerateRequest(postData)
        .subscribe((responseData:any)=>{
          if (responseData.statustext == 'success'  ) {
            console.log(responseData.message);
          }
        });
      }
  }
}
