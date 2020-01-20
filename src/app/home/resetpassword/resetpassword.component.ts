import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  token: any = '';
  passwordForm: FormGroup; // passowrd form
  errorMessage: string = ""; // error message
  successMessage: string;  // success message
  confirmMismatchErr: string = ''; // confirm password error message

  loader: any = { // loader 
    "changePassword": false
  };
  constructor(
    public cService: CommonService,
    public usersService: UsersService,
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    translate: TranslateService,
    private fb: FormBuilder,

  ) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
  }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      token: [],
      password: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      confirm_password: ['', [Validators.required, this.noWhitespaceValidator]],

    }, { validator: this.confirmpasswordValidation });
    this.activeRoute.params.subscribe((params) => {
      this.passwordForm.controls['token'].setValue(params.token);
    });
  }
  /* Function Name : noWhitespaceValidator
  * Author : 
  * Created Date : 20-06-2019 
  * Modified Date : *
  * Purpose : to validate white space from input box
  * PARAMS : control
  */
  public noWhitespaceValidator(control: FormControl) {

    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }


  public confirmpasswordValidation(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirm_password.value;
    if (pass && confirmPass) {
      return pass === confirmPass ? null : { notSame: true }
    } else {
      return null;
    }
  }


  /* Function Name : passwordAction
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to submit the change password form
	* PARAMS : 
	*/
  passwordAction() {
    let formPostData = this.passwordForm.value;
    if (this.passwordForm.value.password === this.passwordForm.value.confirm_password) {
      this.loader.changePassword = true;

      this.usersService.resetPassword(formPostData).subscribe((response: any) => {
        if (response['statustext'] === 'success') {
          this.errorMessage = '';
          this.successMessage = response['message'];
          this.passwordForm.reset();
          this.settimeoutMSG('success');
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

  /* Function Name : settimeoutMSG
* Author : 
* Created Date : 19-02-2019 
* Modified Date : *
* Purpose : to message display
* PARAMS :  type
*/
  settimeoutMSG(type = '') {
    setTimeout(
      function () {
        if (type == 'error') {
          this.errorMessage = "";

        } else {
          this.successMessage = '';
        }
      }, 5000);
  }
}
