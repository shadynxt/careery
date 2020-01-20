/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : LandingComponent                     
# Object name           : LandingComponent    
# Functionality         : All authentication work
# Purpose               : constructor, ngOnInit, noWhitespaceValidator, openForgotPasswordModal, searchUser, goToProfile, createLoginForm, createSignUpForm, createForgotPasswordForm, loginAction, registerAction, forgotPasswordAction, createTermsForm, termsAction
*******************************************************/

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as global from '../../globalConfig';
import { AuthService } from '../../services/auth.service';
import { RegisterService } from '../../services/register.service';
import { CommonService } from '../../services/common.service';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";
import * as CryptoJS from 'crypto-js';
import swal from 'sweetalert';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('termsconditionModal') termsconditionModal; // for terms agree modal reference
  @ViewChild('askForSignUpModal') askForSignUpModal;// for ask sign up  modal reference
  loginForm: FormGroup; // for login form 
  loginFormSubmitStatus: boolean = false;
  registerForm: FormGroup; // for  sign up form
  registerFormSubmitStatus: boolean = false;
  forgotPasswordForm: FormGroup; // for forget password form
  errorMessage: string = ""; // for error message
  errorMessageLogin: string = ""; // for login error message
  successMessage: string; // for success message
  modaldisplayFlag: boolean = true; // for displaing forget password form or success message in the modal
  previousDay: any = new Date(2005,0,1); // get date
  profile_image_path: string = global.s3URL + 'userspic/'; // for user profile image path
  loader: any = { // for all loader of the page
    'signup': false,
    'login': false,
    'search': false,
    'forgot': false
  };

  terms_conditions_status: any = ''; // for terms condition status of a user
  page_name: any = null; // for terms modal title
  page_content: any = null; // for terms page content
  termsForm: FormGroup; // for terms form 
  tempLoggdinUser: any = null; // to get temp loggedin user
  rememberMe: any = null; // check remember me 
  searchUserList: Array<any> = []; // get search user list
  activeSearchIndex: any = -1; // get the active serach index
  keyword: string = ""; // for search text keyword
  scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // for  scrollbar config
  forgetpasswordWrap: boolean = false;
  countryCodes: Array<any> = [];
  registerBy: any = 'phone';
  loginBy: any = 'mobile';
  resendStatus: boolean = false;
  afterLoginNevigateUrl: any = null;
  logedInActiveUser :any = null;
  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : route, fb, authService, translate, registerService, cService, uService, modalService, dateFormater
	*/
  constructor(
    private route: Router,
    private fb: FormBuilder,
    public authService: AuthService,
    public translate: TranslateService,
    public registerService: RegisterService,
    private cService: CommonService,
    private uService: UsersService,
    private modalService: NgbModal,
    private dateFormater: NgbDateParserFormatter
  ) {
   
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });

    this.createLoginForm();
    this.createSignUpForm();
    this.createForgotPasswordForm();
    this.createTermsForm();
    this.cService.countryPhoneCode.subscribe((countryCodeList:any)=>{
      if (countryCodeList) {
        this.countryCodes = countryCodeList;
        let selectCode = this.countryCodes[0];
        this.registerForm.controls['mobile_code'].setValue(selectCode.code);
        this.loginForm.controls['mobile_code'].setValue(selectCode.code);
      }
    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    localStorage.setItem('_sp', 'user');
    let checkedRemeberMe = localStorage.getItem("_ru");

    if (checkedRemeberMe) {
      this.rememberMe = true;
      let rememberUser = localStorage.getItem("_ru");
      if (rememberUser) {
        let user = CryptoJS.AES.decrypt(rememberUser, 'careery');
        user = JSON.parse(user.toString(CryptoJS.enc.Utf8));
        if (user["credential"].indexOf("@") > -1) {
          this.loginBy = 'email';
        } else {
          this.loginBy = 'mobile';
        }
        this.loginForm.setValue({
          "mobile_code": user["mobile_code"],
          "credential": user["credential"],
          "password": user["password"],
          "remember": true
        });
      }
    }
    
  }


  /* Function Name : noWhitespaceValidator
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to validate whitespace of  text field
	* PARAMS : control
	*/

  public noWhitespaceValidator(control: FormControl) {
    if (control.value) {

      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
  }



  /* Function Name : searchUser
	* Author : 
	* Created Date : 12-02-2019 
	* Modified Date : *
	* Purpose : to search user
	* PARAMS : event
	*/
  searchUser(event: any) {
    if (event.which != 40 && event.which != 38 && event.which != 13) {
      let pageName = localStorage.getItem('_sp');
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
          this.keyword = '';
          this.modalService.open(this.askForSignUpModal, { size: 'sm', centered: true, windowClass: 'DefaultModal' })
        }
      }
    }
  }

  /* Function Name : createLoginForm
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : to create login form
	* PARAMS : 
	*/

  createLoginForm() {
    this.loginForm = this.fb.group({
      mobile_code: [''],
      credential: ['', [Validators.required]],
      password: ['', [Validators.required, this.noWhitespaceValidator]],
      remember: ['']
    });
  }

  /* Function Name : createSignUpForm
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : to create sign up form
	* PARAMS : 
	*/

  createSignUpForm() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, this.noWhitespaceValidator]],
      last_name: ['', [Validators.required, this.noWhitespaceValidator]],
      email: [''],
      mobile_code: [''],
      mobile_no: [''],
      password: ['', [Validators.required,  this.noWhitespaceValidator, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      //confirmpassword: ['', [Validators.required,  this.noWhitespaceValidator, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      terms: ['']
    });
  }

  /* Function Name : createForgotPasswordForm
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : to create forget password form
	* PARAMS : 
	*/

  createForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      forgotEmail: ['', [Validators.required, Validators.email]]
    });
  }


  /* Function Name : loginAction
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : login form submit action
	* PARAMS : 
	*/
  loginAction() {
    this.loginFormSubmitStatus = true;
    this.resendStatus = false;
    if( this.loginForm.valid) {

      let formPostData = this.loginForm.value;
      let terms_conditions_status = 0;
      this.loader.login = true;
      this.authService.login(formPostData).subscribe((data) => {
        if ((data['statustext'] === 'success')) {
          this.tempLoggdinUser = data['data'];

          // localStorage.setItem("_u", btoa(data['data'].id));
          // localStorage.setItem("_un", (data['data'].first_name + " " + data['data'].last_name));
          localStorage.setItem("_token", data["data"].access_token);
          let userData = data['data'];
          if (userData.experience_level &&
            userData.email &&
            userData.mobile_no &&
            userData.country_id &&
            userData.city_id &&
            userData.nationality_id &&
            userData.dream_job_id &&
            userData.dream_job_location_id &&
            userData.dream_job_type ) {
              this.afterLoginNevigateUrl = 'profile';
          } else {
            this.afterLoginNevigateUrl = 'setup-profile';
            let status = '1';
            if (userData.email) {
              status ='2'; // mobile no is not available;
            }
            sessionStorage.setItem("_setup", status);
          }
          if (data["data"].profile_pic) {
            let profilePic = global.s3URL + 'userspic/' + data["data"].profile_pic;
            localStorage.setItem("_propic", profilePic);
            this.cService.setProfilePic(profilePic);
          }
          // check user terms and condition status
          terms_conditions_status = data['data'].terms_conditions_status;
          if (terms_conditions_status === 0 && data['data'].terms_conditions_status === 0) {
            let page = 'terms-and-agreements';
            // get terms page content
            this.cService.getPageContent(page).subscribe((reponseData: any) => {
              if ((reponseData['statustext'] === 'success')) {
                //console.log(reponseData);
                this.page_name = reponseData['data'].page_name;
                this.page_content = reponseData['data']['details'][0].page_content;
              }
            });
            this.loader.login = false;
            this.modalService.open(this.termsconditionModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
            
            
          } else {
            // remember me
            this.rememberMe = this.loginForm.value.remember;
            if (this.rememberMe === true) {
              let rememberUser = CryptoJS.AES.encrypt(JSON.stringify(this.loginForm.value), 'careery');
              localStorage.setItem("_ru", rememberUser);
              // localStorage.setItem("remember", 'true');
            } else {
              localStorage.removeItem("remember");
              localStorage.removeItem("_user");
            }
  
            if (data['data'].prefferedLang) {
              localStorage.setItem("_lang", data['data'].prefferedLang.lang_code);
            }
            
            // localStorage.setItem("_u", btoa(data['data'].id));
            let loggedInUser = CryptoJS.AES.encrypt(JSON.stringify(
              { 
                "_i": data['data'].id, 
                "_n": data['data'].first_name+' '+data['data'].last_name, 
                "_p": formPostData.password, 
                "_e": formPostData.email, 
                '_cpp': data['data'].cpp, 
                '_g': data['data'].gender,
                '_ex_l': data['data'].experience_level
              }
            ), 'careery');
            localStorage.setItem("_user", loggedInUser);
  
  
            localStorage.setItem("_token", data["data"].access_token);
            // Navigate to the profile or dashboard
            let userData = data['data'];
            this.route.navigate([this.afterLoginNevigateUrl]);
          }
  
        } else {
          this.loader.login = false;
          this.errorMessageLogin = data['message']['message'];
          localStorage.setItem("_ti", data['message']['u_id']);
          if (data['code'] == 'AC-L-0004') {
            this.resendStatus = true;
          }
        }
  
  
      });
    }
  }

  /* Function Name : registerAction
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : sign up form submit action
	* PARAMS : 
	*/
  registerAction() {
    console.log(this.registerForm.controls['password'].errors);
    this.registerFormSubmitStatus = true;

    if (this.registerForm.valid) {
      if (!this.registerForm.value.terms) {
        this.translate.get(['COMMON.ERROR', 'LANDING.TERMS_REQUIRED']).subscribe((tData)=>{
  
          swal({
            title: tData['COMMON.ERROR'],
            text: tData['LANDING.TERMS_REQUIRED'],
            icon: 'error'
          })
        });
      } else {

        let formPostData = this.registerForm.value;
        this.loader.signup = true;
        let date = formPostData.dob;
        let month = date.getMonth();
        month = month + 1;
        month = (month < 10) ? '0' + month : month;
        let day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        formPostData.dob = date.getFullYear() + '-' + month + '-' + day;
        this.registerService.register(formPostData).subscribe((response: any) => {
          if ((response['statustext'] === 'success') && (response['status'] == 200)) {
            localStorage.setItem("_ti", response['data']['user'].tempId);
            this.route.navigate(['verification']);
          } else {
            this.loader.signup = false;
            this.errorMessage = response['message'];
          }
    
        });
      }

    }
  }

  /* Function Name : forgotPasswordAction
	* Author : 
	* Created Date : 11-01-2019 
	* Modified Date : *
	* Purpose : forget password form submit action
	* PARAMS : 
	*/
  forgotPasswordAction() {
    let formData = this.forgotPasswordForm.value;
    this.loader.forgot = true;

    this.authService.forgotPassword(formData).subscribe((response) => {
      this.loader.forgot = false;
      if ((response['statustext'] === 'success')) {
        this.errorMessage = '';
        this.successMessage = response['data']['message'];
        this.forgotPasswordForm.reset();
      } else {
        this.successMessage = '';
        this.errorMessage = response['message'];
      }

    });
  }

  /* Function Name : createTermsForm
	* Author : 
	* Created Date : 13-02-2019 
	* Modified Date : *
	* Purpose : create terms agree form
	* PARAMS : 
	*/
  createTermsForm() {
    this.termsForm = this.fb.group({
      termsCondition: ['', Validators.requiredTrue]
    });
  }
  /* Function Name : termsAction
	* Author : 
	* Created Date : 13-02-2019 
	* Modified Date : *
	* Purpose : terms form submit action
	* PARAMS : 
	*/
  termsAction() {
    let formPostData = this.termsForm.value;
    let userId = btoa(this.tempLoggdinUser.id);
    this.authService.termsUpdate(userId).subscribe((response) => {
      if ((response['statustext'] === 'success')) {
        let loggedInUser = CryptoJS.AES.encrypt(JSON.stringify(
          { 
            "_i": this.tempLoggdinUser.id, 
            "_n": this.tempLoggdinUser.first_name+' '+this.tempLoggdinUser.last_name, 
            "_p": this.tempLoggdinUser.password, 
            "_e": this.tempLoggdinUser.email, 
            '_cpp': this.tempLoggdinUser.cpp, 
            '_g': this.tempLoggdinUser.gender,
            '_ex_l': this.tempLoggdinUser.experience_level
          }
        ), 'careery');
        localStorage.setItem("_user", loggedInUser);

        this.route.navigate([this.afterLoginNevigateUrl]);
        this.modalService.dismissAll();
      }
    });
  }

  /* Function Name : changeTabEvent
	* Author : 
	* Created Date : 13-02-2019 
	* Modified Date : *
	* Purpose : to change tab of signup/login tab
	* PARAMS : 
	*/
  changeTabEvent(e) {
    if (e.nextId === 'ngb-tab-1') {
      this.forgetpasswordWrap = false;
    }
  }
  /* Function Name : setRegisterBy
	* Author : 
	* Created Date : 15-07-2019 
	* Modified Date : *
	* Purpose : to set register by type(mobile/email)
	* PARAMS : type
	*/
  setRegisterBy(type) {
    this.registerBy = type;
    if (type == 'email') {
      this.registerForm.controls['email'].setValidators([Validators.required, Validators.email]);
      this.registerForm.controls['mobile_no'].setValue('');
      this.registerForm.controls['mobile_code'].setValidators(null);
      this.registerForm.controls['mobile_no'].setValidators(null);
    } else if (type == 'phone') {
      this.registerForm.controls['mobile_code'].setValidators([Validators.required]);
      this.registerForm.controls['mobile_no'].setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]);
      this.registerForm.controls['email'].setValue('');
      this.registerForm.controls['email'].setValidators(null);
    }
    this.registerForm.controls['email'].updateValueAndValidity();
    this.registerForm.controls['mobile_code'].updateValueAndValidity();
    this.registerForm.controls['mobile_no'].updateValueAndValidity();

  }
  /* Function Name : setLoginBy
	* Author : 
	* Created Date : 15-07-2019 
	* Modified Date : *
	* Purpose : to set login by type(mobile/email)
	* PARAMS : type
	*/
  setLoginBy(type) {
    this.loginBy = type;
    this.loginForm.controls['credential'].setValue('');
    let rememberUser = localStorage.getItem("_ru");
    let user = null;
    if (rememberUser) {
      user = CryptoJS.AES.decrypt(rememberUser, 'careery');
      user = JSON.parse(user.toString(CryptoJS.enc.Utf8));
    }
    if (type == 'email') {
      if (user && user.credential && user.credential.indexOf('@')>-1) {
        this.loginForm.controls['credential'].setValue(user.credential);
      } else {
        this.loginForm.controls['credential'].setValue('');
      }
      //this.loginForm.controls['credential'].setValidators([Validators.required, Validators.email]);
    } else if (type == 'mobile') {
      if (user && user.credential && user.credential.indexOf('@') == -1) {
        this.loginForm.controls['credential'].setValue(user.credential);
      } else {
        this.loginForm.controls['credential'].setValue('');
      }
      //this.loginForm.controls['mobile_code'].setValidators([Validators.required]);
      //this.loginForm.controls['credential'].setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
    }
    // this.loginForm.controls['credential'].updateValueAndValidity();
  }
  /* Function Name : resendVerification
	* Author : 
	* Created Date : 16-07-2019 
	* Modified Date : *
	* Purpose : to resend verification code
	* PARAMS : 
	*/
  resendVerification() {
    let userId = localStorage.getItem("_ti");
    this.registerService.resend(userId).subscribe((data:any) => {
      if (data['statustext'] === 'success') {
        this.translate.get('COMMON.SUCCESS').subscribe((tData)=>{

          swal({
            title: tData,
            text: data.message,
            icon: 'success'
            
          }).then(()=>{
            this.route.navigate(['/verification']);
          })
        });
      } else {
        this.translate.get('COMMON.ERROR').subscribe((tData)=>{

          swal({
            title: tData,
            text: data.message,
            icon: 'error'
            
          })
        });
      }
    });
  }  

}
