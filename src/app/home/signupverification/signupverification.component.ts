/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : SignupverificationComponent                     
# Object name           : SignupverificationComponent    
# Functionality         : sign up verification operations
# Purpose               : constructor, ngOnInit
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../services/common.service';
import { RegisterService } from "../../services/register.service";
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-signupverification',
  templateUrl: './signupverification.component.html',
  styleUrls: ['./signupverification.component.scss']
})
export class SignupverificationComponent implements OnInit {

  tokenMismatchStatus: boolean = false; // check token 
  verificationForm: FormGroup; // verification form
  errorMessage: string = ""; // error message
  successMessage: string;  // success message
  loader: any = { // loader 
    "verification": false,
    "resend": false
  };
  /* Function Name : constructor
* Author : 
* Created Date : 10-01-2019 
* Modified Date : *
* Purpose : to define the all helpful objects and defin the languages data
* PARAMS : 
*/
  constructor(
    private translate: TranslateService,
    public rService: RegisterService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private cService: CommonService,
    private fb: FormBuilder
  ) {
    this.cService.setCommonContainerCssClass('common');
    this.cService.activelang.subscribe((lang) => {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(lang);
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
    this.verificationForm = this.fb.group({
      code: ['', [Validators.required]]

    });
  }

  verificationAction() {
    this.loader.verification = true;
    this.rService.verification(this.verificationForm.value)
      .subscribe((responseData: any) => {
        this.loader.verification = false;
        if (responseData.statustext == 'success') {
          this.translate.get('COMMON.SUCCESS').subscribe((tData) => {

            swal({
              title: tData,
              text: responseData.data.message,
              icon: 'success'

            }).then(() => {
              let tmpUser = CryptoJS.AES.encrypt(JSON.stringify(responseData.data.user.id), 'careery');
              localStorage.setItem("_tmpu", tmpUser);
              this.route.navigate(['setup-profile']);
            })
          });
        } else {
          this.errorMessage = responseData.message;
        }
        this.verificationForm.reset();
        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
        }, 5000);
      });
  }

  /* Function Name : resendVerificationCode
* Author : 
* Created Date : 01-07-2019 
* Modified Date : *
* Purpose : to resend verify code
* PARAMS : 
*/
  resendVerificationCode() {
    let userId = localStorage.getItem("_ti");
    this.loader.resend = true;
    this.rService.resend(userId).subscribe((responseData: any) => {
      this.loader.resend = false;
      if (responseData['statustext'] === 'success') {
        this.translate.get('COMMON.SUCCESS').subscribe((tData) => {

          swal({
            title: tData,
            text: responseData.message,
            icon: 'success'
          })
        });
      } else {
        this.translate.get('COMMON.ERROR').subscribe((tData) => {

          swal({
            title: tData,
            text: responseData.message,
            icon: 'error'
          })
        });
      }
    });
  }
}
