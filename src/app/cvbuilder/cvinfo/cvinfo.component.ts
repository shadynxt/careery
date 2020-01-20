/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 15-03-2019
# Module                : CvinfoComponent                     
# Object name           : CvinfoComponent    
# Functionality         : All cv building operations
# Purpose               : constructor, ngOnInit, setActive, open, getDismissReason, openEditPicModal, fileChangeListener, savePhoto, openAlertModal, removeProfilePic, changeTabEvent, getEducationData, getDegreeFields, resetEducationForm, submitEducationFrom, editEducation, deleteEducation, getSkillData, resetSkillForm, submitSkillForm, editSkills, deleteSkills, checkValue, getExperienceData, resetExperienceForm, submitExperienceFrom, editExperience, deleteExperience, onFileChanged, getCertificateData, resetCertificateForm, submitCertificateFrom, editCertificate, deleteCertificate, validURL, personalDetails, updatePersonalFrom, getCityList, getProjectDetails, resetProjectForm, submitProjectFrom, editProject, deleteProject, setCvInfoIntoLocal
*******************************************************/
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CropperSettings } from "ngx-img-cropper";
import { UsersService } from "../../services/users.service";
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../services/common.service';
import { CvcardService } from '../../services/cvcard.service';
import * as global from "../../globalConfig";
import { Router } from "@angular/router";
import * as CryptoJS from 'crypto-js';
import { PicturepathPipe } from "../../global/picturepath.pipe";
import swal from 'sweetalert';
@Component({
  selector: 'app-cvinfo',
  templateUrl: './cvinfo.component.html',
  styleUrls: ['./cvinfo.component.scss'],
  providers:[PicturepathPipe]
})
export class CvinfoComponent implements OnInit {

  @ViewChild('alertPopup') alertPopup;// for alert popup
  userData: any = {};
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
    "first_name": "",
    "last_name": "",
    "family_name": "",
    "email": "",
    "website": "",
    "mobile_code":"",
    "mobile_no": "",
    "country_id": "",
    "city_id": "",
    "dob_year": "",
    "dob_month": "",
    "dob_date": "",
    "address": "",
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
    'pinterest': false
  };
  personalSuccessMsg: string = ''; // personal success message
  personalErrorMsg: string = ''; // personal error message
  personalResponsedata: any = null; // personal response data
  countryList: Array<any> = []; // country list from db
  countryCodes: Array<any> = [];
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

  saveCvInfoData: any = {
    "personal": null,
    "profilePic": null,
    "educations": [],
    "skills": [],
    "experiences": [],
    "certificates": [],
    "projects": []
  };

  alertPopupMsg: any = {
    message: '',
    page: ''
  };


  completePecent: any = 0;

  userPersonalData : any = null;
  userCvList: Array<any> = [];
  cvmaxlimitStatus:any = 1;
  cvLimitDisabkedStatus : any = false;
  /* Function Name : constructor
	* Author : 
	* Created Date : 15-03-2019 
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
    private route: Router,
    private filePathPipe: PicturepathPipe
  ) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    translate.get('PROFILEEDIT.PICTURE_VALIDATION_ERROR').subscribe((tData) => {
      this.pictureError.msg = tData;
    });

    let cvType = localStorage.getItem('_cvt');
    if (!cvType) {
      localStorage.setItem("_cvt", 'build');
    }

  }

  /* Function Name : ngOnInit
    * Author : 
    * Created Date : 15-03-2019 
    * Modified Date : *
    * Purpose : to get data after html load
    * PARAMS : 
    */
  ngOnInit() {

   /**/ 
   this.getUserCvList();

    if ((localStorage.getItem('_cp') === '/cv/build' || localStorage.getItem('_cp') === '/cv/build/pay') && localStorage.getItem('_cvinfo')) {
      this.saveCvInfoData = JSON.parse(localStorage.getItem('_cvinfo'));
      this.defineChart();
    } else {
      localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
    }

    if (localStorage.getItem("_user")) {
      let user:any = this.cService.getLoggedUserData();
      user = CryptoJS.AES.encrypt(JSON.stringify(parseInt(user._i)), 'careery');
      user = user.toString();
      this.uService.userpreviewCvInfo({cv_user:user})
      .subscribe((responseData:any)=>{
        if (responseData.statustext == 'success') {
          this.userData = responseData.data;
          this.personalDetails();
          this.getEducationData();
          this.getSkillData();
          this.getExperienceData();
          this.getCertificateData();
          this.getProjectDetails();
        }
      });
    }

    this.data = {};


    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y > currentYear - 100; y--) {
      this.years.push(y);
    }

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
    

  }

  getUserCvList() {
    this.cvCardService.getUserCvList()
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {

          this.userCvList = responseData.data.list;
          this.userCvList.push(
            {
              "cv_name":"Preview Cv",
              "status":4,
              "is_default": (this.userCvList.findIndex((i)=> {return i.is_default == 1}) == -1)?1:null
            }
          );
          this.cvmaxlimitStatus = responseData.data.maxlimit;
          
        }
      });
  }
  removeCV(cv) {
    if (!cv.is_default) {
      this.translate.get(['COMMON.ARE_YOU_SURE','CV.CV_DELETE_CONFIRM_MSG'])
        .subscribe((tData) => {
          swal({
            title: tData['COMMON.ARE_YOU_SURE'],
            text: tData['CV.CV_DELETE_CONFIRM_MSG'],
            icon: "warning",
            buttons: {
              cancel: true,
              confirm: true,
            },
          }).then((willDelete) => {
            if (willDelete) {
              this.cvCardService.deleteUserCv(cv.id)
                .subscribe((responseData: any) => {
                  if (responseData.statustext == 'success') {
                    this.getUserCvList();
                  }
                });
            }
          });
        })
    } else {
      this.translate.get(['COMMON.ERROR', 'CV.DEFAULT_CV_DELETE_MSG'])
        .subscribe((tdata) => {
          swal({
            title: tdata['COMMON.ERROR'],
            text: tdata['CV.DEFAULT_CV_DELETE_MSG'],
            icon: "error",
          })
        })
    }
  }

  setIsDefault(cv) {
    this.cvCardService.setIsdefault(cv.id)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          // this.getUserCvList();
        }
      });
  }

  goToEditCv(cv) {
    let cvType = '';
    if (cv.is_consult == 1) {
      cvType = 'consult';
    } else {
      cvType = 'build';
    }
    localStorage.setItem('_cvt', cvType);
    localStorage.setItem('_cvid', cv.id);
    let cvId = localStorage.getItem('_cvid');
    localStorage.setItem('_cvinfo', (cv.cv_details));
    this.route.navigate(['/cv/build']);

  }

  /* Function Name : goToCvConsult
	* Author : 
	* Created Date : 19-03-2019 
	* Modified Date : *
	* Purpose : to go to cv consulting page
	* PARAMS :  
  */
  goToCvConsult() {

    localStorage.setItem('_cvt', 'consult');
    this.route.navigate(['/cv/build']);
  }

  /* Function Name : goToPayment
	* Author : 
	* Created Date : 02-04-2019 
	* Modified Date : *
	* Purpose : to go to the payment and templating page
	* PARAMS :  
  */
  goToPayment(cv) {
    let cvType = '';
    if (cv.is_consult == 1) {
      cvType = 'consult';
    } else {
      cvType = 'build';
    }
    localStorage.setItem('_cvt', cvType);
    localStorage.setItem('_cvid', cv.id);
    let cvId = localStorage.getItem('_cvid');
    localStorage.setItem('_cvinfo', (cv.cv_details));
    this.route.navigate(['/cv/pay']);
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
    * Created Date : 15-03-2019 
    * Modified Date : *
    * Purpose : to set active tab
    * PARAMS : tab, activeTab
    */
  setActive(tab, activeTab) {

    tab.select(activeTab);
  }
  /* Function Name : open
	* Author : 
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to open edit profile picture modal
	* PARAMS : content
	*/
  openEditPicModal(content) {

    this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
  }
  /* Function Name : fileChangeListener
	* Author : 
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to save photo
	* PARAMS : 
	*/
  savePhoto() {
    if (this.data.image) {

      this.setCvInfoIntoLocal('cvpic', this.data['image']);
      this.profilePic = this.data['image'];
      this.modalService.dismissAll();
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to open alert modal
	* PARAMS : alertContent
	*/
  openAlertModal(alertContent: string) {
    this.modalService.open(document.getElementById(alertContent), { size: 'sm', centered: true, windowClass: 'DefaultModal' });
  }
  /* Function Name : removeProfilePic
	* Author : 
	* Created Date : 15-03-2019 
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
          this.setCvInfoIntoLocal('cvpic', null);
          // this.profilePic = null;
        }
      })
    });
      


  }
  /* Function Name : changeTabEvent
	* Author : 
	* Created Date : 15-03-2019 
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
    switch (e.nextId) {
      case "personal":
        this.personalDetails();
        break;
      case "education":
        this.getEducationData(true);
        break;
      case "skills":
        this.getSkillData(true);
        break;
      case "experience":
        this.getExperienceData(true);
        break;
      case "certificate":
        this.getCertificateData(true);
        break;
      case "projects":
        this.getProjectDetails(true);
        break;
    }
  }

  // EDUCATION TAB //

  /* Function Name : getEducationData
	* Author : 
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to get education data
	* PARAMS : 
	*/
  getEducationData(isActive=false) {

    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.userDegreelist = JSON.parse(localStorage.getItem('_cvinfo')).educations;
      if (this.userDegreelist.length == 0) {
        this.userData.degree.forEach(element => {
          let newData = {
            "degree_id": element.degree_id,
            "field_id": element.degree_field_id,
            "from_year": element.from_year,
            "to_year": element.to_year,
            "degree_name": element.degreeDetails.details[0].name,
            "degree_field_name": element.degreeFieldDetails.details[0].name
          } ;
          this.setCvInfoIntoLocal('education', newData);
          this.userDegreelist.push(newData);
        });
      }
    }
    if (isActive) {

      this.uService.getCvContent('education')
        .subscribe((responseList: any) => {
          this.loader.personal.list = false;
          if (responseList.statustext == 'success') {
            this.educationResponsedata = responseList.data;
            this.degreelist = responseList.data.degree;
            this.getDegreeFields();
          }
        })
      this.resetEducationForm();
    }



  }
  /* Function Name : getDegreeFields
	* Author : 
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to submit education form
	* PARAMS : 
	*/
  submitEducationFrom() {

    this.educationForm.submit = true;
    if (!this.educationForm.degree_id || !this.educationForm.field_id || !this.educationForm.from_year || !this.educationForm.to_year) {
      this.educationForm.error = 1;
    } else {
      this.educationForm.error = 0;
    }
    if (this.educationForm.error == 0) {
      this.loader.education.submit = true;
      let newEducationData = this.educationForm;

      let selectedDegree = this.degreelist.find((item) => {
        return item.id == newEducationData['degree_id']
      });
      newEducationData['degree_name'] = selectedDegree.name;

      let selectedDegreeField = this.degreeFieldlist.find((item) => {
        return item.id == newEducationData['field_id']
      });
      newEducationData['degree_field_name'] = selectedDegreeField.name;


      this.setCvInfoIntoLocal('education', newEducationData);
      this.getEducationData();

      global.SCROLL_TO_TOP();
      this.loader.education.submit = false;
    }
  }

  /* Function Name : editEducation
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to get education data on edit mode in form
	* PARAMS :  educationDetails
	*/
  editEducation(educationDetails: any) {
    this.resetBtnDisplay = false;
    this.educationForm["id"] = educationDetails.id;
    this.educationForm["degree_id"] = educationDetails.degree_id;
    this.getDegreeFields();
    this.educationForm["field_id"] = educationDetails.field_id;
    this.educationForm["from_year"] = educationDetails.from_year;
    this.educationForm["to_year"] = educationDetails.to_year;

  }
  /* Function Name : deleteEducation
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to delete education details
	* PARAMS : degreeIndex
	*/
  deleteEducation(degreeIndex) {
    
    this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE']).subscribe((tData) => {
      swal({
				title: '',
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.saveCvInfoData.educations.splice(degreeIndex, 1);
          localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
          this.getEducationData();

          global.SCROLL_TO_TOP();
        }
      })
    });

    
  }
  // EDUCATION TAB CLOSE//

  // SKILLS TAB //
  /* Function Name : getSkillData
	* Author : 
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to get user skill data
	* PARAMS : 
	*/
  getSkillData(isActive=false) {
    this.loader.skills.list = true;
    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.userSkilllist = JSON.parse(localStorage.getItem('_cvinfo')).skills;
      this.loader.skills.list = false;
      if (this.userSkilllist.length == 0) {
        this.userData.skills.forEach(element => {
          let newData = {
            "skill_id": element.skill_id,
            "status": element.status,
            "skill_name": element.details[0].name
          } ;
          this.setCvInfoIntoLocal('skills', newData);
          this.userSkilllist.push(newData);
        });
      }
      this.resetSkillForm();
    }
    if (isActive) {
    this.uService.getCvContent('skills')
      .subscribe((responseList: any) => {
        this.loader.skills.list = false;
        if (responseList.statustext == 'success') {
          this.skillsList = responseList.data.skills;
        }
      })
    this.resetSkillForm();
    }
  }
  /* Function Name : resetSkillForm
	* Author : 
	* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to submit skill form
	* PARAMS : 
	*/
  submitSkillForm() {

    this.skillForm.submit = true;
    if (!this.skillForm.skill_id || !this.skillForm.status) {
      this.skillForm.error = 1;
    } else {
      this.skillForm.error = 0;
    }
    if (this.userSkilllist.length > 0) {
      let skillExist = this.userSkilllist.find((item) => {
        return item.skill_id == this.skillForm.skill_id;
      });
      if (skillExist) {
        this.skillForm.error = 2;
      } else {
        this.skillForm.error = 0;
      }
    }
    if (this.skillForm.error == 0) {
      this.loader.skills.submit = true;
      let newSkillData = this.skillForm;
      let selectSkill = this.skillsList.find((item) => {
        return item.id == newSkillData.skill_id;
      })
      newSkillData['skill_name'] = selectSkill.name;
      this.setCvInfoIntoLocal('skills', newSkillData);
      this.getSkillData();

      global.SCROLL_TO_TOP();
      this.loader.skills.submit = false;
    }

  }
  /* Function Name : editSkills
	* Author : 
	* Created Date : 18-03-2019 
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
	* Created Date : 18-03-2019
	* Modified Date : *
	* Purpose : to delete skill details
	* PARAMS :  skillInsex
	*/
  deleteSkills(skillIndex) {
    this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL']).subscribe((tData) => {
      swal({
				title: '',
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.saveCvInfoData.skills.splice(skillIndex, 1);
          localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
          this.getSkillData();
        }
      })
    });
  }
  // SKILLS TAB CLOSE //

  // EXPERIENCE TAB //
  /* Function Name : checkValue
	* Author : 
	* Created Date : 15-03-2019
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
	* Created Date : 15-03-2019
	* Modified Date : *
	* Purpose : to get experience data of a user
	* PARAMS :  
	*/
  getExperienceData(isActive= false) {
    this.loader.experience.list = true;
    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.userExperiencelist = JSON.parse(localStorage.getItem('_cvinfo')).experiences;
      if (this.userExperiencelist.length == 0) {
        this.userData.experience.forEach(element => {
          let newData = {
            "company_name": (element.company)?element.company.details[0].name : element.company_name ,
            "position_id": element.position_id,
            "from_year": element.from_year,
            "to_year": element.to_year,
            "is_current": element.is_current,
            "summery": element.summery,
            "position_name": element.position.details[0].name
          } ;
          this.setCvInfoIntoLocal('experience', newData);
          this.userExperiencelist.push(newData);
        });
      }
    }
    if(isActive) {

      this.uService.getCvContent('experience')
        .subscribe((responseList: any) => {
          this.loader.experience.list = false;
          if (responseList.statustext == 'success') {
            this.positionlist = responseList.data.positionList;
          }
        })
      this.resetExperienceForm();
    }

  }
  /* Function Name : resetExperienceForm
	* Author : 
	* Created Date : 15-03-2019
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
	* Created Date : 15-03-2019
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
          item.position_id == this.experienceForm.position_id &&
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
      let newExperienceData = this.experienceForm;
      let selectPosition = this.positionlist.find((item) => {
        return item.id == newExperienceData.position_id
      });
      newExperienceData['position_name'] = selectPosition.name;
      this.setCvInfoIntoLocal('experience', newExperienceData);
      this.getExperienceData();

      global.SCROLL_TO_TOP();
      this.loader.experience.submit = false;
    }
  }
  /* Function Name : editExperience
	* Author : 
	* Created Date : 15-03-2019
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
	* Created Date : 18-03-2019
	* Modified Date : *
	* Purpose : to delete experience details
	* PARAMS :  experienceIndex
	*/
  deleteExperience(experienceIndex) {
    this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE']).subscribe((tData) => {
      swal({
				title: '',
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.saveCvInfoData.experiences.splice(experienceIndex, 1);
        localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
        this.getExperienceData();
        }
      })
    });

   
  }
  // EXPERIENCE TAB CLOSE //

  // CERTIFICATE TAB //
  /* Function Name : onFileChanged
	* Author : 
	* Created Date : 15-03-2019
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
	* Created Date : 15-03-2019
	* Modified Date : *
	* Purpose : to get certificate data
	* PARAMS :  
	*/
  getCertificateData(isActive = false) {
    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.userCertificatelist = JSON.parse(localStorage.getItem('_cvinfo')).certificates;
      if (this.userCertificatelist.length == 0) {
        this.userData.certificates.forEach(element => {
          let newData = {
            "certificate_name": element.certificate_name,
            "summery": element.summery,
            "from_year": element.from_year,
            "to_year": element.to_year,
            "picture": null
          } ;
          this.setCvInfoIntoLocal('certificates', newData);
          this.userCertificatelist.push(newData);
        });
      }
    }
    if(isActive) {
      this.resetCertificateForm();
    }

  }
  /* Function Name : resetCertificateForm
	* Author : 
	* Created Date : 15-03-2019
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
	* Created Date : 15-03-2019 
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
      let newCertificateData = this.certificateForm;
      this.setCvInfoIntoLocal('certificates', newCertificateData);
      this.getCertificateData();

      global.SCROLL_TO_TOP();
      this.loader.certificate.submit = false;
    }
  }
  /* Function Name : editCertificate
	* Author : 
	* Created Date : 15-03-2019 
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
      this.certificatePicture = certificateDetails.picture;
      this.certificateForm["picture"] = certificateDetails.picture;
    }
  }
  /* Function Name : deleteCertificate
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to delete certificate data
	* PARAMS :  certificateIndex
	*/
  deleteCertificate(certificateIndex) {
    this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE']).subscribe((tData) => {
      swal({
				title: '',
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.saveCvInfoData.certificates.splice(certificateIndex, 1);
          localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
          this.getCertificateData();
        }
      })
    });

  }
  // CERTIFICATE TAB CLOSE //
  /* Function Name : validURL
* Author : 
* Created Date : 15-03-2019 
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
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to get personal details
	* PARAMS :  
	*/
  personalDetails() {
    this.loader.personal.list = true;

    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      let personal = JSON.parse(localStorage.getItem('_cvinfo')).personal;
      if (personal) {
        this.personalForm = JSON.parse(localStorage.getItem('_cvinfo')).personal;
      } else {
        if (this.userData.profile_pic)  {
          
          this.setCvInfoIntoLocal('cvpic', this.filePathPipe.transform(this.userData.profile_pic, 'users'));
        }
        this.personalForm.first_name = this.userData.first_name;
        this.personalForm.last_name = this.userData.last_name;
        this.personalForm.email = this.userData.email;
        this.personalForm.mobile_code = this.userData.mobile_code;
        this.personalForm.mobile_no = this.userData.mobile_no;
        this.personalForm.country_id = this.userData.country_id;
        this.getCityList();
        this.personalForm.city_id = this.userData.city_id;
        this.personalForm.address = this.userData.address;
        let dob = new Date(this.userData.dob);
        this.personalForm.dob_year = dob.getFullYear();
        let dob_month = dob.getMonth()+1;
        this.personalForm.dob_month = (dob_month<10)?'0'+dob_month:dob_month;
        let dob_date = dob.getDate();
        this.personalForm.dob_date = (dob_date<10)?'0'+dob_date:dob_date;;
        this.personalForm.address = this.userData.address;
        this.personalForm.website = this.userData.website;
        this.setCvInfoIntoLocal('personal', this.personalForm);
      }
    }
    this.personalForm.error = 0;
    this.personalForm.submit = false;
    this.personalSuccessMsg = '';
    this.personalErrorMsg = '';

    this.uService.getCvContent('personal')
      .subscribe((responseCountryList: any) => {
        this.loader.personal.list = false;
        if (responseCountryList.statustext == 'success') {
          this.countryList = responseCountryList.data.country;
          this.countryCodes = responseCountryList.data.country_ph_list;
          this.getCityList();
        }
    })
  }
  /* Function Name : updatePersonalFrom
	* Author : 
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to update personal info
  * PARAMS :  
  */

  updatePersonalFrom() {

    if (this.cvmaxlimitStatus == 0) {
      this.translate.get(['COMMON.ERROR', 'CV.MAX_CV_MSG'])
      .subscribe((tdata) => {
        swal({
          title: tdata['COMMON.ERROR'],
          text: tdata['CV.MAX_CV_MSG'],
          icon: "error",
        })
      })
    } else {
      
      this.personalForm.submit = true;
      let formPostData = this.personalForm;
  
      this.personalForm.first_name = this.personalForm.first_name.trim();
      this.personalForm.last_name = this.personalForm.last_name.trim();
      this.personalForm.email = this.personalForm.email.trim();
      this.personalForm.mobile_no = this.personalForm.mobile_no.trim();
      if (
        !this.personalForm.first_name ||
        !this.personalForm.last_name ||
        !this.personalForm.email ||
        !this.personalForm.mobile_no ||
        this.personalForm.mobile_no.length != 10 ||
        !this.personalForm.country_id ||
        this.personalForm.country_id == '' ||
        !this.personalForm.city_id ||
        this.personalForm.city_id == '' ||
        !this.personalForm.address ||
        !this.personalForm.dob_year ||
        !this.personalForm.dob_month ||
        !this.personalForm.dob_date ||
        !this.personalForm.address
  
  
      ) {
        this.personalForm.error = 1;
      } else {
        this.personalForm.error = 0;
      }
  
  
  
      if (this.personalForm.error == 0) {
        this.loader.personal.submit = true;
  
        let selectedCountry = this.countryList.find((ele) => {
          return ele.id == this.personalForm.country_id;
        });
        this.personalForm['country_name'] = selectedCountry.name;
  
        let selectedcity = this.cityList.find((ele) => {
          return ele.id == this.personalForm.city_id;
        });
        this.personalForm['city_name'] = selectedcity.name;
  
        this.setCvInfoIntoLocal('personal', this.personalForm);
        global.SCROLL_TO_TOP();
        this.loader.personal.submit = false;
      } else {
        global.SCROLL_TO_TOP();
      }
    }

  }
  /* Function Name : getCityList
	* Author : 
	* Created Date : 15-03-2019 
	* Modified Date : *
	* Purpose : to get city list
	* PARAMS :  
	*/
  getCityList() {
    this.cityList = [];
    // this.personalForm.city_id = null;
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

  getProjectDetails(isActive=false) {
    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.saveCvInfoData = JSON.parse(localStorage.getItem('_cvinfo'));
      this.userProjectlist = this.saveCvInfoData.projects;
      if (this.userProjectlist.length == 0) {
        this.userData.projects.forEach(element => {
          let newData = {
            "name": element.name,
            "cId": element.company_id,
            "from": new Date(element.from_date).getTime(),
            "to": new Date(element.to_date).getTime(),
            "company_name": element.company.company_name
          } ;
          this.setCvInfoIntoLocal('projects', newData);
          this.userProjectlist.push(newData);
        });
      }
    }
    if(isActive) {
      if (this.saveCvInfoData.experiences && this.saveCvInfoData.experiences.length > 0) {
        this.userCompanyList = this.saveCvInfoData.experiences.map((item) => {
          return {
            "id": item.id,
            "name": item.company_name
          }
        });
      }
      this.resetProjectForm();
    }

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
      company_name: null,
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
    } else {
      let selectedCompany = this.userCompanyList.find((i)=>{
        return i.id == this.projectForm.cId;
      });
      if (selectedCompany) {
        this.projectForm.company_name = selectedCompany.name;
      }
      let duplicateProject = this.userProjectlist.filter((item)=>{
        return (
          item.name == this.projectForm.name &&
          item.company_name == this.projectForm.company_name 
        );
      });
      if (duplicateProject && duplicateProject.length > 0) {
        this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.DUPLICATE_PROJECT_ERROR' ]).subscribe((tData) => {
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['PROFILEEDIT.DUPLICATE_PROJECT_ERROR'],
            icon: 'error'
          });
        });
        this.projectForm.error = 1;
      }
    }
    if (this.projectForm.error == 0) {
      this.loader.project.submit = true;
      let newProjectData = this.projectForm;
      let selectCompany = this.userCompanyList.find((item) => {
        return item.id == newProjectData.cId;
      });
      newProjectData['company_name'] = selectCompany.name;

      newProjectData['from'] = new Date(newProjectData['from']).getTime();
      newProjectData['to'] = new Date(newProjectData['to']).getTime();
      this.setCvInfoIntoLocal('projects', newProjectData);
      this.getProjectDetails();
      global.SCROLL_TO_TOP();
      this.loader.project.submit = false;
    }
  }
  /* Function Name : editProject
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to get  project form data on edit mode
	* PARAMS :  project
  */
  editProject(project) {
    this.projectForm = {
      id: (project.id),
      name: project.name,
      cId: project.cId,
      from: new Date(project.from),
      to: new Date(project.to),
      error: 0,
      submit: false
    }
  }
  /* Function Name : deleteProject
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to delete a project
	* PARAMS :  projectIndex
  */

  deleteProject(projectIndex) {
    this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT']).subscribe((tData) => {
      swal({
				title: '',
				text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT'],
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: true,
				},
      }).then((willDelete) => {
        if (willDelete) {
          this.loader.project.submit = false;
          this.saveCvInfoData.projects.splice(projectIndex, 1);
          localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
          this.getProjectDetails();
        }
      })
    });

  }

  /* Function Name : setCvInfoIntoLocal
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to push cv data for building
	* PARAMS :  type, newData
  */

  setCvInfoIntoLocal(type, newData) {
    if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
      this.saveCvInfoData = JSON.parse(localStorage.getItem('_cvinfo'));
    }
    if (newData && newData['error']) {
      delete newData['error'];
    }
    if (newData && newData['submit']) {
      delete newData['submit'];
    }
    switch (type) {
      case "personal":
        this.saveCvInfoData.personal = newData;
        break;
      case "cvpic":
        this.saveCvInfoData.profilePic = newData;
        break;
      case "education":
        if (newData.id) { // edit mode
          let editDataIndex = this.saveCvInfoData.educations.findIndex((item) => {
            return item.id == newData.id;
          });
          this.saveCvInfoData.educations[editDataIndex] = newData;
        } else { // add mode
          newData['id'] = this.saveCvInfoData.educations.length + 1;
          this.saveCvInfoData.educations.push(newData);
        }
        break;
      case "skills":
        if (newData.id) { // edit mode
          let editDataIndex = this.saveCvInfoData.skills.findIndex((item) => {
            return item.id == newData.id;
          });
          this.saveCvInfoData.skills[editDataIndex] = newData;
        } else { // add mode
          newData['id'] = this.saveCvInfoData.skills.length + 1;
          this.saveCvInfoData.skills.push(newData);
        }
        break;
      case "experience":
        if (newData.id) { // edit mode
          let editDataIndex = this.saveCvInfoData.experiences.findIndex((item) => {
            return item.id == newData.id;
          });
          this.saveCvInfoData.experiences[editDataIndex] = newData;
        } else { // add mode
          newData['id'] = this.saveCvInfoData.experiences.length + 1;
          this.saveCvInfoData.experiences.push(newData);
        }

        break;
      case "certificates":
        if (newData.id) { // edit mode
          let editDataIndex = this.saveCvInfoData.certificates.findIndex((item) => {
            return item.id == newData.id;
          });
          this.saveCvInfoData.certificates[editDataIndex] = newData;
        } else { // add mode
          newData['id'] = this.saveCvInfoData.certificates.length + 1;
          this.saveCvInfoData.certificates.push(newData);
        }

        break;
      case "projects":
        if (newData.id) { // edit mode
          let editDataIndex = this.saveCvInfoData.projects.findIndex((item) => {
            return item.id == newData.id;
          });
          this.saveCvInfoData.projects[editDataIndex] = newData;
        } else { // add mode
          newData['id'] = this.saveCvInfoData.projects.length + 1;
          this.saveCvInfoData.projects.push(newData);
        }

        break;

    }
    localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
    if (localStorage.getItem('_cvid')) {
      this.cvCardService.saveCVData({
        id: btoa(localStorage.getItem('_cvid')),
        cvData: localStorage.getItem('_cvinfo')
      })
        .subscribe((responseData: any) => {
          // if (responseData.statustext == 'success'  ) {
          // }
        });
    }
    this.defineChart();
  }

  /* Function Name : defineChart
	* Author : 
	* Created Date : 18-03-2019 
	* Modified Date : *
	* Purpose : to define the complete chart value of cv
	* PARAMS :  projectIndex
  */
  defineChart() {
    let cvInfo = JSON.parse(localStorage.getItem('_cvinfo'));
    var complete = 0;
    var total = 7;
    if (cvInfo.personal) {
      complete += 1;
    }

    if (cvInfo.profilePic) {
      complete += 1;
    }

    if (cvInfo.experiences.length > 0) {
      complete += 1;
    }

    if (cvInfo.skills.length > 0) {
      complete += 1;
    }

    if (cvInfo.educations.length > 0) {
      complete += 1;
    }

    if (cvInfo.certificates.length > 0) {
      complete += 1;
    }

    if (cvInfo.projects.length > 0) {
      complete += 1;
    }

    this.completePecent = Math.floor((complete * 100) / total);

  }

  /* Function Name : gotToPayment
	* Author : 
	* Created Date : 19-03-2019 
	* Modified Date : *
	* Purpose : to go to the payment and templating page
	* PARAMS :  consultStatus
  */
  gotToPayment(consultStatus = null) {


    let alertText = '';
    let errorTranslateErrArr = [];
    if (!this.saveCvInfoData.personal) {
      errorTranslateErrArr.push('CV.PERSONAL_REQUIRED');
    }
    if (!consultStatus) {
      if (this.saveCvInfoData.educations.length == 0) {
        errorTranslateErrArr.push('CV.EDUCATION_REQUIRED');
      }
      if (this.saveCvInfoData.skills.length == 0) {
        errorTranslateErrArr.push('CV.SKILL_REQUIRED');
      }
      if (this.saveCvInfoData.experiences.length == 0) {
        errorTranslateErrArr.push('CV.EXPERIENCE_REQUIRED');
      }
      if (this.saveCvInfoData.certificates.length == 0) {
        errorTranslateErrArr.push('CV.CERTIFICATE_REQUIRED');
      }
      if (this.saveCvInfoData.projects.length == 0) {
        errorTranslateErrArr.push('CV.PROJECT_REQUIRED');
      }
    }
    if (errorTranslateErrArr.length == 0) {
      if (consultStatus) {
        if (this.cvmaxlimitStatus == 0) {
          this.translate.get(['COMMON.ERROR', 'CV.MAX_CV_MSG'])
          .subscribe((tdata) => {
            swal({
              title: tdata['COMMON.ERROR'],
              text: tdata['CV.MAX_CV_MSG'],
              icon: "error",
            })
          })
        } else {
          localStorage.setItem('_cvt', 'consult');
          this.route.navigate(['/cv/pay']);
        }
      } else {
        this.route.navigate(['/cv/pay']);
      }
    } else {
      this.translate.get(errorTranslateErrArr).subscribe((tData) => {
        for (let i in tData) {
          alertText += "* " + tData[i] + '<br/>';

        }
        this.alertPopupMsg.message = alertText;
        this.modalService.open(this.alertPopup, { size: 'sm', centered: true, windowClass: 'DefaultModal' });
      });
    }




  }
}
