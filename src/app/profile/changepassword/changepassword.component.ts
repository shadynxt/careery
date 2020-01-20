/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 25-01-2019
# Module                : ChangepasswordComponent                     
# Object name           : ChangepasswordComponent    
# Functionality         : Block users list
# Purpose               : constructor, ngOnInit, noWhitespaceValidator, settimeoutMSG, createPasswordForm, passwordAction
*******************************************************/

import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormBuilder,FormGroup, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {CommonService} from '../../services/common.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
	passwordForm  : FormGroup; // passowrd form
	errorMessage : string = ""; // error message
	successMessage : string;  // success message
  confirmMismatchErr: string = ''; // confirm password error message

  loader :any =  { // loader 
    "changePassword":false
  };

  /* Function Name : constructor
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : route, fb , usersService, translate, cService
	*/
  constructor(
    private route: Router, 
    private fb: FormBuilder,
    public usersService : UsersService, 
    translate: TranslateService,
    private cService:CommonService
  	) { 

		this.cService.activelang.subscribe((lang)=>{

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);
		});

    translate.get('CHANGE_PASSWORD.CONFIRM_PASSWORD_MISMATCH').subscribe((tData)=>{
      this.confirmMismatchErr = tData;
    });
		this.createPasswordForm();

  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/  
  ngOnInit() {

  	
  }

  /* Function Name : noWhitespaceValidator
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to validate white space from input box
	* PARAMS : control
	*/  
  public noWhitespaceValidator(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }
  
  /* Function Name : settimeoutMSG
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to message display
	* PARAMS :  type
	*/  
  settimeoutMSG(type='') {
    setTimeout(
      function() {
        if(type == 'error')
        {
          this.errorMessage = "";

        } else {
          this.successMessage = '';
        }    
      }, 5000);
  }


  /* Function Name : createPasswordForm
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to create the change password form
	* PARAMS : 
	*/  
  createPasswordForm() {
    this.passwordForm = this.fb.group({
    oldpassword: ['', [Validators.required, this.noWhitespaceValidator] ],
    password: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')] ],
    confirm_password: ['', [Validators.required, this.noWhitespaceValidator] ],
    
    }, {validator: this.confirmpasswordValidation });
  }

  /* Function Name : passwordAction
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to submit the change password form
	* PARAMS : 
	*/  
  passwordAction()
  {
    let formPostData = this.passwordForm.value;
    //console.log(formPostData);
    
      if (this.passwordForm.value.password === this.passwordForm.value.confirm_password) {
        this.loader.changePassword = true;

        this.usersService.changePassword(formPostData).subscribe((response:any)=>{
          if(response['statustext'] === 'success'){
            this.errorMessage = '';
            this.successMessage = response['message'];
            this.passwordForm.reset();
            this.route.navigate(['change-password']);

          } else {
            this.successMessage = '';
            this.errorMessage = response['message'];
            this.settimeoutMSG('error');
          }
          this.loader.changePassword = false;
        
      });

    } else {

      this.successMessage = '';
      this.errorMessage = this.confirmMismatchErr;
      this.settimeoutMSG('error');
      this.loader.changePassword = false;
    }

  }

  public confirmpasswordValidation(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirm_password.value;
    if (pass && confirmPass) {
      return  pass === confirmPass ? null : { notSame: true }     
    } else {
      return null;
    }
  }




}
