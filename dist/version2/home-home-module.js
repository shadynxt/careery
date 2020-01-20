(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/home/landing/landing.component.ts");
/* harmony import */ var _profile_chart_profile_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-chart/profile-chart.component */ "./src/app/home/profile-chart/profile-chart.component.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : HomeRoutingModule
# Object name           : HomeRoutingModule
# Functionality         : set all routes for home module
# Purpose               :
*******************************************************/




var routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    { path: "user/chart/:userCPP", component: _profile_chart_profile_chart_component__WEBPACK_IMPORTED_MODULE_4__["ProfileChartComponent"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _global_global_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/global.module */ "./src/app/global/global.module.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/home/landing/landing.component.ts");
/* harmony import */ var _signupthankyou_signupthankyou_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signupthankyou/signupthankyou.component */ "./src/app/home/signupthankyou/signupthankyou.component.ts");
/* harmony import */ var _signupverification_signupverification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signupverification/signupverification.component */ "./src/app/home/signupverification/signupverification.component.ts");
/* harmony import */ var _profile_chart_profile_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-chart/profile-chart.component */ "./src/app/home/profile-chart/profile-chart.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/home/resetpassword/resetpassword.component.ts");
/* harmony import */ var _userlevel_userlevel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userlevel/userlevel.component */ "./src/app/home/userlevel/userlevel.component.ts");
/* harmony import */ var _setupprofile_setupprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setupprofile/setupprofile.component */ "./src/app/home/setupprofile/setupprofile.component.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : HomeModule
# Object name           : HomeModule
# Functionality         : set up home module
# Purpose               :
*******************************************************/















// import { CmspageComponent } from './cmspage/cmspage.component';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _signupthankyou_signupthankyou_component__WEBPACK_IMPORTED_MODULE_9__["SignupthankyouComponent"], _signupverification_signupverification_component__WEBPACK_IMPORTED_MODULE_10__["SignupverificationComponent"], _profile_chart_profile_chart_component__WEBPACK_IMPORTED_MODULE_11__["ProfileChartComponent"], _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__["ResetpasswordComponent"], _userlevel_userlevel_component__WEBPACK_IMPORTED_MODULE_13__["UserlevelComponent"], _setupprofile_setupprofile_component__WEBPACK_IMPORTED_MODULE_14__["SetupprofileComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _global_global_module__WEBPACK_IMPORTED_MODULE_7__["GlobalModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row align-items-center loginSearch clearfix\">\n      <div class=\"loginSearchLeft col-lg-5\">\n        <ngb-tabset class=\"forLogin\" (tabChange)=\"changeTabEvent($event)\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>{{ 'LANDING.SIGNUP' | translate }}</ng-template>\n            <ng-template ngbTabContent>\n              <form [formGroup]=\"registerForm\" novalidate >\n                <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n                <div class=\"row\">\n                  <!-- <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{successMessage}}</div> -->\n                  <div class=\"col-md-6\">\n                    <div class=\"formWrap\">\n                      <label for=\"\">{{ 'LANDING.FIRST_NAME' | translate }}<small><i\n                            class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small> :</label>\n                      <input class=\"txtField\" type=\"text\" name=\"first_name\"\n                        placeholder=\"{{ 'LANDING.FIRST_NAME' | translate }}\" id=\"first_name\"\n                        formControlName=\"first_name\" pattern=\"[a-zA-Z ]*\" required>\n                      <div\n                        *ngIf=\"registerFormSubmitStatus && registerForm.controls['first_name'].errors\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"registerForm.controls['first_name'].errors.required\">\n                          {{ 'LANDING.FIRST_NAME_REQUIRED'| translate }}</div>\n                        <div *ngIf=\"registerForm.controls['first_name'].hasError('whitespace')\">\n                          {{ 'LANDING.INVALID'| translate }}</div>\n                        <div *ngIf=\"registerForm.controls['first_name'].errors.pattern\">\n                          {{ 'LANDING.INVALID'| translate }}</div>\n                      </div>\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"formWrap\">\n                      <label for=\"\">{{ 'LANDING.LAST_NAME' | translate }}<small><i\n                            class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small> :</label>\n                      <input class=\"txtField\" type=\"text\" name=\"last_name\" id=\"last_name\"\n                        placeholder=\"{{ 'LANDING.LAST_NAME' | translate }}\" formControlName=\"last_name\"\n                        pattern=\"[a-zA-Z ]*\" required>\n                      <div\n                        *ngIf=\"registerFormSubmitStatus &&  registerForm.controls['last_name'].errors\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"registerForm.controls['last_name'].errors.required\">\n                          {{ 'LANDING.LAST_NAME_REQUIRED'| translate }}</div>\n                        <div *ngIf=\"registerForm.controls['last_name'].hasError('whitespace')\">\n                          {{ 'LANDING.INVALID'| translate }}</div>\n                        <div *ngIf=\"registerForm.controls['last_name'].errors.pattern\">\n                          {{ 'LANDING.INVALID'| translate }}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"formWrap\" *ngIf=\"registerBy=='email'\">\n                  <label for=\"\">{{ 'LANDING.EMAIL' | translate }}<small><i class=\"fa fa-asterisk landing-req-sign\"\n                        aria-hidden=\"true\"></i></small> :</label>\n                  <input class=\"txtField\" type=\"email\" name=\"email\" id=\"email\"\n                    placeholder=\"{{ 'LANDING.EMAIL' | translate }}\" formControlName=\"email\" required>\n                  <div\n                    *ngIf=\"registerFormSubmitStatus && registerForm.controls['email'].errors\"\n                    class=\"alert alert-danger\">\n                    <div *ngIf=\"  registerForm.controls['email'].errors.required\">\n                      {{ 'LANDING.EMAIL_REQUIRED'| translate }}\n                    </div>\n                    <div *ngIf=\"registerForm.controls['email'].errors.email\">{{ 'LANDING.EMAIL_VALID'| translate }}\n                    </div>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"pull-right\" (click)=\"setRegisterBy('phone')\">{{ 'COMMON.USE_PHONE_NO' | translate }}</a>\n                </div>\n                <div class=\"formWrap\" *ngIf=\"registerBy=='phone'\">\n                    <label for=\"\">{{ 'LANDING.MOBILE' | translate }}<small><i class=\"fa fa-asterisk landing-req-sign\"\n                          aria-hidden=\"true\"></i></small> :</label>\n                    <div class=\"txtField landing-mobile-content\">\n                        <ng-select  [items]=\"countryCodes\" bindLabel=\"code\"\n                        bindValue=\"code\" [clearable]=\"false\" [searchable]=\"false\" formControlName=\"mobile_code\"\n                         >\n                         <ng-template ng-label-tmp let-item=\"item\">\n                          <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                          <b>{{item.code}}</b>\n                          </ng-template>\n                          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                              <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                              <b>{{item.code}}</b>\n                          </ng-template>\n                        </ng-select>\n                      <input appOnlynumaricinput pattern=\"\\d*\"  name=\"mobile_no\" formControlName=\"mobile_no\"\n                        placeholder=\"e.g. 104545454\" minlength=10 maxlength=10 required>\n                    </div>\n  \n                    <div\n                      *ngIf=\"registerFormSubmitStatus &&  registerForm.controls['mobile_no'].errors\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"registerForm.controls['mobile_no'].errors.required\">\n                        {{ 'LANDING.MOBILE_REQUIRED'| translate }}</div>\n                      <div *ngIf=\"registerForm.controls['mobile_no'].errors.minlength\">\n                        {{ 'LANDING.MOBILE_MIN_LENGTH'| translate }}</div>\n                      <div *ngIf=\"registerForm.controls['mobile_no'].errors.maxlength\">\n                        {{ 'LANDING.MOBILE_MAX_LENGTH'| translate }}</div>\n                      <div *ngIf=\"registerForm.controls['mobile_no'].errors.pattern\">\n                        {{ 'LANDING.MOBILE_PATTERN'| translate }}</div>\n                    </div>\n                    <!--<a href=\"javascript:void(0)\" class=\"pull-right\" (click)=\"setRegisterBy('email')\">{{ 'COMMON.USE_EMAIL' | translate }}</a>-->\n                  </div>\n                <div class=\"formWrap\">\n                  <label for=\"\">{{ 'LANDING.PASSWORD' | translate }}<small><i class=\"fa fa-asterisk landing-req-sign\"\n                        aria-hidden=\"true\"></i></small> :</label> \n                  <input class=\"txtField\" formControlName=\"password\" type=\"password\" name=\"\" value=\"\"\n                    placeholder=\"{{ 'LANDING.PASSWORD' | translate }}\" required>\n\n                  <!-- <input class=\"txtField\" type=\"password\" [(ngModel)]=\"userdata.confirmpassword\" name=\"confirmpassword\" placeholder=\"Confirm Password\" class=\"form-control\" required #confirmpassword=\"ngModel\" pattern=\"{{ password.value }}\" />\n                     <div *ngIf=\" confirmpassword.invalid && (myform.submitted || confirmpassword.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"confirmpassword.errors.required\"> Confirm password is required. </div>\n                      <div *ngIf=\"confirmpassword.errors.pattern\"> Password & Confirm Password does not match.</div>\n                    </div>-->\n                    \n\n                  <div\n                    *ngIf=\"registerFormSubmitStatus &&  registerForm.controls['password'].errors\"\n                    class=\"alert alert-danger\">\n                   \n                    <div *ngIf=\"registerForm.controls['password'].errors.required\">\n                      {{ 'LANDING.PASSWORD_REQUIRED'| translate }}</div>\n                      <div *ngIf=\"registerForm.controls['password'].errors.pattern\">\n                        {{ 'LANDING.PASSWORD_PATTERN'| translate }}</div>\n                    <div *ngIf=\"registerForm.controls['password'].hasError('whitespace')\">\n                      {{ 'LANDING.INVALID'| translate }}</div>\n\n\n                      \n                      \n                  </div>\n\n                </div>\n\n                \n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"formWrap\">\n                      <label for=\"\">{{ 'LANDING.DATE_OF_BIRTH' | translate }}<small><i\n                            class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small> :</label>\n                      <input class=\"txtField\" type=\"text\" name=\"dob\" id=\"dob\"\n                        placeholder=\"{{ 'LANDING.DATE_OF_BIRTH' | translate }}\" #dp=\"bsDatepicker\" bsDatepicker\n                        [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" formControlName=\"dob\"\n                        required [maxDate]=\"previousDay\" autocomplete=\"off\" readonly>\n\n                      <div\n                        *ngIf=\"registerFormSubmitStatus &&  registerForm.controls['dob'].errors\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"registerForm.controls['dob'].errors.required\">\n                          {{ 'LANDING.DOB_REQUIRED'| translate }}</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"formWrap\">\n                      <label for=\"gender\">{{ 'LANDING.GENDER' | translate }}<small><i\n                            class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small> :</label>\n                      <select class=\"txtField\" name=\"gender\" id=\"gender\" formControlName=\"gender\" required>\n                        <option value=\"\">{{ 'LANDING.GENDER' | translate }}</option>\n                        <option value=\"M\">{{ 'LANDING.GENDER_MALE' | translate }}</option>\n                        <option value=\"F\">{{ 'LANDING.GENDER_FEMALE' | translate }}</option>\n                      </select>\n\n                      <div\n                        *ngIf=\"registerFormSubmitStatus &&  registerForm.controls['gender'].errors\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"registerForm.controls['gender'].errors.required\">\n                          {{ 'LANDING.GENDER_REQUIRED'| translate }}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"formWrap\">\n                  <label class=\"customCheck nobG\"> {{ 'LANDING.I_AGREE' | translate }}\n                    <input type=\"checkbox\" name=\"terms\" value=\"terms\" formControlName=\"terms\">\n                    <span class=\"checkmark\"></span>\n                    \n                  </label>\n                  \n                  <a [routerLink]=\"['/page/terms-and-agreements']\">{{ 'LANDING.TERMS_AND_CONDITIONS' | translate }}</a>\n                </div>\n                <div class=\"formWrap\">\n                  <!--  <input type=\"submit\" name=\"\" [disabled]=\"registerForm.pristine || registerForm.invalid\" value=\"{{ 'LANDING.JOIN_NOW' | translate }}\"> -->\n                  <button type=\"submit\" (click)=\"registerAction()\">\n                    <i class=\"fa fa-cog fa-spin\" *ngIf=\"loader.signup\"></i>\n                    {{ 'LANDING.JOIN_NOW' | translate }}</button>\n                </div>\n                {{ registerForm.error }}\n              </form>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab (click)=\"forgetpasswordWrap=false\">\n            <ng-template ngbTabTitle>{{ 'LANDING.SIGNIN' | translate }}</ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"login-wrap\" *ngIf=\"!forgetpasswordWrap\">\n                <form [formGroup]=\"loginForm\" novalidate >\n                  <div class=\"alert alert-danger\" *ngIf=\"errorMessageLogin\">\n                    {{errorMessageLogin}}\n                    <span *ngIf=\"resendStatus\"><a href=\"javascript:void(0)\" (click)=\"resendVerification()\">{{ 'SIGNUP_THANKYOU.RESEND' | translate }}</a> {{ 'SIGNUP_THANKYOU.IF_WANT' | translate }}</span>\n                  </div>\n\n                  <div class=\"formWrap\" >\n                    <label for=\"\">{{ 'LANDING.EMAIL' | translate }} / {{ 'LANDING.MOBILE' | translate }} :</label>\n                    <input class=\"txtField\" type=\"text\" name=\"\" value=\"\"\n                      placeholder=\"{{ 'LANDING.EMAIL' | translate }} / {{ 'LANDING.MOBILE' | translate }}\" formControlName=\"credential\" autocomplete=\"off\"\n                      required>\n                    <div\n                      *ngIf=\"loginFormSubmitStatus && loginForm.controls['credential'].errors\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"loginForm.controls['credential'].errors.required\">\n                        {{ 'LANDING.CREDENTIAL_REQUIRED' | translate }}</div>\n                    </div>\n                    \n                  </div>\n                  <!-- <div class=\"formWrap\" *ngIf=\"loginBy=='mobile'\">\n                    <label for=\"\">{{ 'LANDING.MOBILE' | translate }} :</label>\n                    <div class=\"txtField landing-mobile-content\">\n\n                        <ng-select  [items]=\"countryCodes\" bindLabel=\"code\"\n                        bindValue=\"code\" [clearable]=\"false\" [searchable]=\"false\" formControlName=\"mobile_code\"\n                         >\n                         <ng-template ng-label-tmp let-item=\"item\">\n                          <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                          <b>{{item.code}}</b>\n                          </ng-template>\n                          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                              <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                              <b>{{item.code}}</b>\n                          </ng-template>\n                        </ng-select>\n                      <input appOnlynumaricinput  pattern=\"\\d*\" maxlength=\"10\" name=\"\" value=\"\"\n                        placeholder=\"{{ 'LANDING.MOBILE' | translate }}\" formControlName=\"credential\" autocomplete=\"off\"\n                        required>\n                    </div>\n                    <div\n                      *ngIf=\"loginFormSubmitStatus && loginForm.controls['credential'].errors\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"loginForm.controls['credential'].errors.required\">\n                        {{ 'LANDING.MOBILE_REQUIRED' | translate }}</div>\n                        <div *ngIf=\"loginForm.controls['credential'].errors.minlength\">\n                            {{ 'LANDING.MOBILE_MIN_LENGTH'| translate }}</div>\n                          <div *ngIf=\"loginForm.controls['credential'].errors.maxlength\">\n                            {{ 'LANDING.MOBILE_MAX_LENGTH'| translate }}</div>\n                          <div *ngIf=\"loginForm.controls['credential'].errors.pattern\">\n                            {{ 'LANDING.MOBILE_PATTERN'| translate }}</div>\n                      \n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"pull-right\" (click)=\"setLoginBy('email')\">{{ 'COMMON.USE_EMAIL' | translate }}</a>\n                    <div class=\"clearfix\"></div>\n                  </div> -->\n\n                  <div class=\"formWrap\">\n                    <label for=\"\">{{ 'LANDING.PASSWORD' | translate }} :</label>\n                    <input class=\"txtField\" type=\"password\" name=\"\" value=\"\"\n                      placeholder=\"{{ 'LANDING.PASSWORD' | translate }}\" formControlName=\"password\" autocomplete=\"off\"\n                      required>\n                    <div\n                      *ngIf=\"loginFormSubmitStatus && loginForm.controls['password'].errors\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"loginForm.controls['password'].errors.required\">\n                        {{ 'LANDING.PASSWORD_REQUIRED' | translate }}\n                      </div>\n                      <div *ngIf=\"loginForm.controls['password'].hasError('whitespace')\">\n                        {{ 'LANDING.INVALID'| translate }}</div>\n                    </div>\n                  </div>\n                  <div class=\"formWrap\">\n                    <label class=\"customCheck nobG\">\n                      {{ 'COMMON.REMEMBER_ME' | translate }}\n                      <input type=\"checkbox\" name=\"remember\" id=\"remember\" formControlName=\"remember\"\n                        [checked]=\"rememberMe\">\n                      <span class=\"checkmark\"></span>\n                    </label>\n                  </div>\n\n                  <div class=\"formWrap\">\n                    <button type=\"submit\" (click)=\"loginAction()\"  name=\"\">\n                      <i class=\"fa fa-cog fa-spin\" *ngIf=\"loader.login\"></i>\n                      {{ 'LANDING.LOGIN' | translate }}</button>\n\n                  </div>\n                </form>\n                <div class=\"formWrap\">\n                  <a class=\"fgPass\" href=\"javascript:void(0)\" (click)=\"forgetpasswordWrap=true\"><i\n                      class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n                    {{ 'LANDING.FORGOT_PASSWORD' | translate }} </a>\n                </div>\n              </div>\n              <div class=\"forget-pass-wrap\" *ngIf=\"forgetpasswordWrap\">\n                <div>\n                  <div class=\"alert alert-success\" *ngIf=\"forgetpasswordWrap==true && successMessage\">\n                    {{ successMessage }}</div>\n                  <div class=\"alert alert-danger\" *ngIf=\"forgetpasswordWrap==true && errorMessage\">{{ errorMessage }}\n                  </div>\n                </div>\n                <form [formGroup]=\"forgotPasswordForm\" novalidate (submit)=\"forgotPasswordAction()\">\n                  <div class=\"formWrap\">\n                    <label for=\"\">{{ 'LANDING.EMAIL' | translate }} :</label>\n                    <input class=\"txtField\" type=\"email\" name=\"forgotEmail\" value=\"\"\n                      placeholder=\"{{ 'LANDING.EMAIL' | translate }}\" formControlName=\"forgotEmail\" autocomplete=\"off\"\n                      required>\n                    <div\n                      *ngIf=\"forgotPasswordForm.controls['forgotEmail'].invalid && (forgotPasswordForm.controls['forgotEmail'].dirty || forgotPasswordForm.controls['forgotEmail'].touched)\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"forgotPasswordForm.controls['forgotEmail'].errors.required\">\n                        {{ 'LANDING.EMAIL_REQUIRED' | translate }}</div>\n                      <div *ngIf=\"forgotPasswordForm.controls['forgotEmail'].errors.email\">\n                        {{ 'LANDING.EMAIL_VALID' | translate }}</div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"formWrap\">\n                    <button class=\"btnGreen\" type=\"submit\"\n                      [disabled]=\"loader.forgot || forgotPasswordForm.pristine || forgotPasswordForm.invalid\" name=\"\"><i\n                        class=\"fa fa-cog fa-spin\"\n                        *ngIf=\"loader.forgot\"></i>{{ 'LANDING.SEND_PASSWORD_RESET_LINK' | translate }}</button>\n                  </div>\n\n                </form>\n                <div class=\"formWrap\">\n                  <a class=\"fgPass\" href=\"javascript:void(0)\" (click)=\"forgetpasswordWrap=false\"><i\n                      class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n                    {{ 'LANDING.BACK_TO_LOGIN' | translate }} </a>\n                </div>\n              </div>\n\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n      <!-- <div class=\"loginSearchRight col-lg-7\">\n      <div class=\"searchBox align-self-center\">\n         <input type=\"text\" name=\"searchkeyword\" value=\"\"  [(ngModel)]=\"keyword\" placeholder=\"{{ 'LANDING.SEARCH_PLACEHOLDER' | translate }}\" autocomplete=\"off\">\n         <span class=\"faIcon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n         <input type=\"submit\" name=\"\" value=\"{{ 'LANDING.SEARCH' | translate }}\">\n      </div>\n    </div> -->\n      <div class=\"loginSearchRight col-lg-7\">\n        <div class=\"searchBox align-self-center\">\n          <input type=\"text\" name=\"searchkeyword\" value=\"\" (keyup)=\"searchUser($event)\" [(ngModel)]=\"keyword\"\n            placeholder=\"{{ 'LANDING.SEARCH_PLACEHOLDER' | translate }}\" autocomplete=\"off\">\n          <span class=\"faIcon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n          <input type=\"submit\" name=\"\" value=\"{{ 'LANDING.SEARCH' | translate }}\">\n          <div class=\"searchResultContainer\" *ngIf=\"keyword\">\n            <span class=\"loader\" *ngIf=\"loader.search\"><i class=\"fa fa-cog fa-spin\"></i></span>\n            <ul *ngIf=\"searchUserList\">\n              <div *ngIf=\"searchUserList.length > 0\" class=\"defaultScroll\" malihu-scrollbar\n                [scrollbarOptions]=\"scrollbarOptions\">\n                <li *ngFor=\"let user of searchUserList; let i = index\" (click)=\"goToProfile(user)\"\n                  [class.active]=\"i==activeSearchIndex\">\n                  <span>\n                    <img *ngIf=\"user && user.profile_pic\" alt=\"\" [src]=\"user.profile_pic| picturepath:'users'\">\n                    \n                    <img  *ngIf=\"user && !user.profile_pic && user.gender && user.experience_level\" src=\"assets/images/charachter/{{ user.gender+'_'+user.experience_level }}.png\" alt=\"\">\n                  </span>\n                  <span>{{ (user.first_name + \" \" + user.last_name) }}</span>\n                  <span>{{ (user.cpp) }}</span>\n                  <strong>{{ user.position_local_name }}</strong>\n                </li>\n              </div>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n\n\n    <!-- open terms and condition model -->\n\n    <ng-template #termsconditionModal let-modal>\n      <h2><span>{{page_name}}</span></h2>\n      <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n      <div class=\"modal-body\">\n        <div [innerHTML]=\"page_content | sanitizeHtml\"></div>\n\n        <form [formGroup]=\"termsForm\" novalidate (submit)=\"termsAction()\">\n          <div class=\"proEdit\">\n            <div class=\"formWrap mergTop\">\n              <label class=\"customCheck nobG\"> {{ 'LANDING.TERMS_AND_CONDITIONS' | translate }}\n                <input type=\"checkbox\" name=\"termsCondition\" value=\"termsCondition\" formControlName=\"termsCondition\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n            <div class=\"buttonGr\">\n              <button type=\"submit\" class=\"btnGreen\"\n                [disabled]=\"termsForm.pristine || termsForm.invalid\">{{ 'LANDING.ACCEPT' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-template>\n\n    <!-- ASK FOR SIGN UP -->\n    <ng-template #askForSignUpModal let-modal>\n      <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n      <div class=\"modal-body\" style=\"text-align:center\">\n        {{'LANDING.ASK_FOR_SIGNUP'|translate}}\n      </div>\n    </ng-template>\n"

/***/ }),

/***/ "./src/app/home/landing/landing.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_12__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : LandingComponent
# Object name           : LandingComponent
# Functionality         : All authentication work
# Purpose               : constructor, ngOnInit, noWhitespaceValidator, openForgotPasswordModal, searchUser, goToProfile, createLoginForm, createSignUpForm, createForgotPasswordForm, loginAction, registerAction, forgotPasswordAction, createTermsForm, termsAction
*******************************************************/













var LandingComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 10-01-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and defin the languages data
      * PARAMS : route, fb, authService, translate, registerService, cService, uService, modalService, dateFormater
      */
    function LandingComponent(route, fb, authService, translate, registerService, cService, uService, modalService, dateFormater) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.translate = translate;
        this.registerService = registerService;
        this.cService = cService;
        this.uService = uService;
        this.modalService = modalService;
        this.dateFormater = dateFormater;
        this.loginFormSubmitStatus = false;
        this.registerFormSubmitStatus = false;
        this.errorMessage = ""; // for error message
        this.errorMessageLogin = ""; // for login error message
        this.modaldisplayFlag = true; // for displaing forget password form or success message in the modal
        this.previousDay = new Date(2005, 0, 1); // get date
        this.profile_image_path = _globalConfig__WEBPACK_IMPORTED_MODULE_5__["s3URL"] + 'userspic/'; // for user profile image path
        this.loader = {
            'signup': false,
            'login': false,
            'search': false,
            'forgot': false
        };
        this.terms_conditions_status = ''; // for terms condition status of a user
        this.page_name = null; // for terms modal title
        this.page_content = null; // for terms page content
        this.tempLoggdinUser = null; // to get temp loggedin user
        this.rememberMe = null; // check remember me 
        this.searchUserList = []; // get search user list
        this.activeSearchIndex = -1; // get the active serach index
        this.keyword = ""; // for search text keyword
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // for  scrollbar config
        this.forgetpasswordWrap = false;
        this.countryCodes = [];
        this.registerBy = 'phone';
        this.loginBy = 'mobile';
        this.resendStatus = false;
        this.afterLoginNevigateUrl = null;
        this.logedInActiveUser = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.createLoginForm();
        this.createSignUpForm();
        this.createForgotPasswordForm();
        this.createTermsForm();
        this.cService.countryPhoneCode.subscribe(function (countryCodeList) {
            if (countryCodeList) {
                _this.countryCodes = countryCodeList;
                var selectCode = _this.countryCodes[0];
                _this.registerForm.controls['mobile_code'].setValue(selectCode.code);
                _this.loginForm.controls['mobile_code'].setValue(selectCode.code);
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
    LandingComponent.prototype.ngOnInit = function () {
        localStorage.setItem('_sp', 'user');
        var checkedRemeberMe = localStorage.getItem("_ru");
        if (checkedRemeberMe) {
            this.rememberMe = true;
            var rememberUser = localStorage.getItem("_ru");
            if (rememberUser) {
                var user = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].decrypt(rememberUser, 'careery');
                user = JSON.parse(user.toString(crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8));
                if (user["credential"].indexOf("@") > -1) {
                    this.loginBy = 'email';
                }
                else {
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
    };
    /* Function Name : noWhitespaceValidator
      * Author :
      * Created Date : 10-01-2019
      * Modified Date : *
      * Purpose : to validate whitespace of  text field
      * PARAMS : control
      */
    LandingComponent.prototype.noWhitespaceValidator = function (control) {
        if (control.value) {
            var isWhitespace = (control.value || '').trim().length === 0;
            var isValid = !isWhitespace;
            return isValid ? null : { 'whitespace': true };
        }
    };
    /* Function Name : searchUser
      * Author :
      * Created Date : 12-02-2019
      * Modified Date : *
      * Purpose : to search user
      * PARAMS : event
      */
    LandingComponent.prototype.searchUser = function (event) {
        var _this = this;
        if (event.which != 40 && event.which != 38 && event.which != 13) {
            var pageName = localStorage.getItem('_sp');
            this.loader.search = true;
            if (this.keyword) {
                var postData = {
                    "page_name": pageName,
                    "keyword": this.keyword
                };
                this.uService.searchUsers(postData)
                    .subscribe(function (responseData) {
                    _this.loader.search = false;
                    _this.searchUserList = responseData.data.result.list;
                });
            }
            else {
                this.loader.search = false;
                this.searchUserList = [];
            }
        }
        else {
            if (event.which === 40 && this.activeSearchIndex < (this.searchUserList.length - 1)) {
                this.activeSearchIndex += 1;
            }
            else if (event.which === 38 && this.activeSearchIndex > 0) {
                this.activeSearchIndex -= 1;
            }
            else if (event.which === 13) {
                if (this.activeSearchIndex == -1) {
                    this.route.navigate(['/search'], { queryParams: { key: this.keyword } });
                }
                else {
                    this.goToProfile(this.searchUserList[this.activeSearchIndex]);
                }
            }
            if (this.searchUserList[this.activeSearchIndex]) {
                this.keyword = this.searchUserList[this.activeSearchIndex].first_name + ' ' + this.searchUserList[this.activeSearchIndex].last_name;
            }
        }
    };
    /* Function Name : goToProfile
      * Author :
      * Created Date : 12-02-2019
      * Modified Date : *
      * Purpose : to go to a user public profile
      * PARAMS : user
      */
    LandingComponent.prototype.goToProfile = function (user) {
        this.searchUserList = [];
        if (localStorage.getItem("_user")) {
            this.route.navigate(['/', user.cpp]);
        }
        else {
            if (user.privacySettings) {
                var guestViewProfile = user.privacySettings.find(function (item) {
                    return item.options_id == 9;
                });
                if (guestViewProfile === undefined || guestViewProfile.show_status === 1) {
                    this.route.navigate(['/', user.cpp]);
                }
                else {
                    this.keyword = '';
                    this.modalService.open(this.askForSignUpModal, { size: 'sm', centered: true, windowClass: 'DefaultModal' });
                }
            }
        }
    };
    /* Function Name : createLoginForm
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : to create login form
      * PARAMS :
      */
    LandingComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            mobile_code: [''],
            credential: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
            remember: ['']
        });
    };
    /* Function Name : createSignUpForm
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : to create sign up form
      * PARAMS :
      */
    LandingComponent.prototype.createSignUpForm = function () {
        this.registerForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator]],
            email: [''],
            mobile_code: [''],
            mobile_no: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
            //confirmpassword: ['', [Validators.required,  this.noWhitespaceValidator, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            terms: ['']
        });
    };
    /* Function Name : createForgotPasswordForm
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : to create forget password form
      * PARAMS :
      */
    LandingComponent.prototype.createForgotPasswordForm = function () {
        this.forgotPasswordForm = this.fb.group({
            forgotEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    };
    /* Function Name : loginAction
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : login form submit action
      * PARAMS :
      */
    LandingComponent.prototype.loginAction = function () {
        var _this = this;
        this.loginFormSubmitStatus = true;
        this.resendStatus = false;
        if (this.loginForm.valid) {
            var formPostData_1 = this.loginForm.value;
            var terms_conditions_status_1 = 0;
            this.loader.login = true;
            this.authService.login(formPostData_1).subscribe(function (data) {
                if ((data['statustext'] === 'success')) {
                    _this.tempLoggdinUser = data['data'];
                    // localStorage.setItem("_u", btoa(data['data'].id));
                    // localStorage.setItem("_un", (data['data'].first_name + " " + data['data'].last_name));
                    localStorage.setItem("_token", data["data"].access_token);
                    var userData = data['data'];
                    if (userData.experience_level &&
                        userData.email &&
                        userData.mobile_no &&
                        userData.country_id &&
                        userData.city_id &&
                        userData.nationality_id &&
                        userData.dream_job_id &&
                        userData.dream_job_location_id &&
                        userData.dream_job_type) {
                        _this.afterLoginNevigateUrl = 'profile';
                    }
                    else {
                        _this.afterLoginNevigateUrl = 'setup-profile';
                        var status_1 = '1';
                        if (userData.email) {
                            status_1 = '2'; // mobile no is not available;
                        }
                        sessionStorage.setItem("_setup", status_1);
                    }
                    if (data["data"].profile_pic) {
                        var profilePic = _globalConfig__WEBPACK_IMPORTED_MODULE_5__["s3URL"] + 'userspic/' + data["data"].profile_pic;
                        localStorage.setItem("_propic", profilePic);
                        _this.cService.setProfilePic(profilePic);
                    }
                    // check user terms and condition status
                    terms_conditions_status_1 = data['data'].terms_conditions_status;
                    if (terms_conditions_status_1 === 0 && data['data'].terms_conditions_status === 0) {
                        var page = 'terms-and-agreements';
                        // get terms page content
                        _this.cService.getPageContent(page).subscribe(function (reponseData) {
                            if ((reponseData['statustext'] === 'success')) {
                                //console.log(reponseData);
                                _this.page_name = reponseData['data'].page_name;
                                _this.page_content = reponseData['data']['details'][0].page_content;
                            }
                        });
                        _this.loader.login = false;
                        _this.modalService.open(_this.termsconditionModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
                    }
                    else {
                        // remember me
                        _this.rememberMe = _this.loginForm.value.remember;
                        if (_this.rememberMe === true) {
                            var rememberUser = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(JSON.stringify(_this.loginForm.value), 'careery');
                            localStorage.setItem("_ru", rememberUser);
                            // localStorage.setItem("remember", 'true');
                        }
                        else {
                            localStorage.removeItem("remember");
                            localStorage.removeItem("_user");
                        }
                        if (data['data'].prefferedLang) {
                            localStorage.setItem("_lang", data['data'].prefferedLang.lang_code);
                        }
                        // localStorage.setItem("_u", btoa(data['data'].id));
                        var loggedInUser = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(JSON.stringify({
                            "_i": data['data'].id,
                            "_n": data['data'].first_name + ' ' + data['data'].last_name,
                            "_p": formPostData_1.password,
                            "_e": formPostData_1.email,
                            '_cpp': data['data'].cpp,
                            '_g': data['data'].gender,
                            '_ex_l': data['data'].experience_level
                        }), 'careery');
                        localStorage.setItem("_user", loggedInUser);
                        localStorage.setItem("_token", data["data"].access_token);
                        // Navigate to the profile or dashboard
                        var userData_1 = data['data'];
                        _this.route.navigate([_this.afterLoginNevigateUrl]);
                    }
                }
                else {
                    _this.loader.login = false;
                    _this.errorMessageLogin = data['message']['message'];
                    localStorage.setItem("_ti", data['message']['u_id']);
                    if (data['code'] == 'AC-L-0004') {
                        _this.resendStatus = true;
                    }
                }
            });
        }
    };
    /* Function Name : registerAction
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : sign up form submit action
      * PARAMS :
      */
    LandingComponent.prototype.registerAction = function () {
        var _this = this;
        console.log(this.registerForm.controls['password'].errors);
        this.registerFormSubmitStatus = true;
        if (this.registerForm.valid) {
            if (!this.registerForm.value.terms) {
                this.translate.get(['COMMON.ERROR', 'LANDING.TERMS_REQUIRED']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['LANDING.TERMS_REQUIRED'],
                        icon: 'error'
                    });
                });
            }
            else {
                var formPostData = this.registerForm.value;
                this.loader.signup = true;
                var date = formPostData.dob;
                var month = date.getMonth();
                month = month + 1;
                month = (month < 10) ? '0' + month : month;
                var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
                formPostData.dob = date.getFullYear() + '-' + month + '-' + day;
                this.registerService.register(formPostData).subscribe(function (response) {
                    if ((response['statustext'] === 'success') && (response['status'] == 200)) {
                        localStorage.setItem("_ti", response['data']['user'].tempId);
                        _this.route.navigate(['verification']);
                    }
                    else {
                        _this.loader.signup = false;
                        _this.errorMessage = response['message'];
                    }
                });
            }
        }
    };
    /* Function Name : forgotPasswordAction
      * Author :
      * Created Date : 11-01-2019
      * Modified Date : *
      * Purpose : forget password form submit action
      * PARAMS :
      */
    LandingComponent.prototype.forgotPasswordAction = function () {
        var _this = this;
        var formData = this.forgotPasswordForm.value;
        this.loader.forgot = true;
        this.authService.forgotPassword(formData).subscribe(function (response) {
            _this.loader.forgot = false;
            if ((response['statustext'] === 'success')) {
                _this.errorMessage = '';
                _this.successMessage = response['data']['message'];
                _this.forgotPasswordForm.reset();
            }
            else {
                _this.successMessage = '';
                _this.errorMessage = response['message'];
            }
        });
    };
    /* Function Name : createTermsForm
      * Author :
      * Created Date : 13-02-2019
      * Modified Date : *
      * Purpose : create terms agree form
      * PARAMS :
      */
    LandingComponent.prototype.createTermsForm = function () {
        this.termsForm = this.fb.group({
            termsCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]
        });
    };
    /* Function Name : termsAction
      * Author :
      * Created Date : 13-02-2019
      * Modified Date : *
      * Purpose : terms form submit action
      * PARAMS :
      */
    LandingComponent.prototype.termsAction = function () {
        var _this = this;
        var formPostData = this.termsForm.value;
        var userId = btoa(this.tempLoggdinUser.id);
        this.authService.termsUpdate(userId).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                var loggedInUser = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(JSON.stringify({
                    "_i": _this.tempLoggdinUser.id,
                    "_n": _this.tempLoggdinUser.first_name + ' ' + _this.tempLoggdinUser.last_name,
                    "_p": _this.tempLoggdinUser.password,
                    "_e": _this.tempLoggdinUser.email,
                    '_cpp': _this.tempLoggdinUser.cpp,
                    '_g': _this.tempLoggdinUser.gender,
                    '_ex_l': _this.tempLoggdinUser.experience_level
                }), 'careery');
                localStorage.setItem("_user", loggedInUser);
                _this.route.navigate([_this.afterLoginNevigateUrl]);
                _this.modalService.dismissAll();
            }
        });
    };
    /* Function Name : changeTabEvent
      * Author :
      * Created Date : 13-02-2019
      * Modified Date : *
      * Purpose : to change tab of signup/login tab
      * PARAMS :
      */
    LandingComponent.prototype.changeTabEvent = function (e) {
        if (e.nextId === 'ngb-tab-1') {
            this.forgetpasswordWrap = false;
        }
    };
    /* Function Name : setRegisterBy
      * Author :
      * Created Date : 15-07-2019
      * Modified Date : *
      * Purpose : to set register by type(mobile/email)
      * PARAMS : type
      */
    LandingComponent.prototype.setRegisterBy = function (type) {
        this.registerBy = type;
        if (type == 'email') {
            this.registerForm.controls['email'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
            this.registerForm.controls['mobile_no'].setValue('');
            this.registerForm.controls['mobile_code'].setValidators(null);
            this.registerForm.controls['mobile_no'].setValidators(null);
        }
        else if (type == 'phone') {
            this.registerForm.controls['mobile_code'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.registerForm.controls['mobile_no'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]);
            this.registerForm.controls['email'].setValue('');
            this.registerForm.controls['email'].setValidators(null);
        }
        this.registerForm.controls['email'].updateValueAndValidity();
        this.registerForm.controls['mobile_code'].updateValueAndValidity();
        this.registerForm.controls['mobile_no'].updateValueAndValidity();
    };
    /* Function Name : setLoginBy
      * Author :
      * Created Date : 15-07-2019
      * Modified Date : *
      * Purpose : to set login by type(mobile/email)
      * PARAMS : type
      */
    LandingComponent.prototype.setLoginBy = function (type) {
        this.loginBy = type;
        this.loginForm.controls['credential'].setValue('');
        var rememberUser = localStorage.getItem("_ru");
        var user = null;
        if (rememberUser) {
            user = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].decrypt(rememberUser, 'careery');
            user = JSON.parse(user.toString(crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8));
        }
        if (type == 'email') {
            if (user && user.credential && user.credential.indexOf('@') > -1) {
                this.loginForm.controls['credential'].setValue(user.credential);
            }
            else {
                this.loginForm.controls['credential'].setValue('');
            }
            //this.loginForm.controls['credential'].setValidators([Validators.required, Validators.email]);
        }
        else if (type == 'mobile') {
            if (user && user.credential && user.credential.indexOf('@') == -1) {
                this.loginForm.controls['credential'].setValue(user.credential);
            }
            else {
                this.loginForm.controls['credential'].setValue('');
            }
            //this.loginForm.controls['mobile_code'].setValidators([Validators.required]);
            //this.loginForm.controls['credential'].setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        }
        // this.loginForm.controls['credential'].updateValueAndValidity();
    };
    /* Function Name : resendVerification
      * Author :
      * Created Date : 16-07-2019
      * Modified Date : *
      * Purpose : to resend verification code
      * PARAMS :
      */
    LandingComponent.prototype.resendVerification = function () {
        var _this = this;
        var userId = localStorage.getItem("_ti");
        this.registerService.resend(userId).subscribe(function (data) {
            if (data['statustext'] === 'success') {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: tData,
                        text: data.message,
                        icon: 'success'
                    }).then(function () {
                        _this.route.navigate(['/verification']);
                    });
                });
            }
            else {
                _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: tData,
                        text: data.message,
                        icon: 'error'
                    });
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('termsconditionModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LandingComponent.prototype, "termsconditionModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('askForSignUpModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LandingComponent.prototype, "askForSignUpModal", void 0);
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/home/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/home/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/home/profile-chart/profile-chart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/profile-chart/profile-chart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pointContents\" class=\"graphModal\">\n    <div class=\"user-details\">\n      <ul>\n        <li><small>{{ 'PROFILE.NAME' |translate }}</small> <span>{{ (userDetails.first_name+' '+userDetails.last_name) }}</span></li>\n        <li><small>{{ 'PROFILE.CPP' |translate }}</small> <span>{{ (userDetails.cpp) }}</span></li>\n      </ul>\n    </div>\n    <canvas baseChart id=\"pointCanvas\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [colors]=\"pieChartColors\"\n      [chartType]=\"pieChartType\" [options]=\"pieOptions\"></canvas>\n  </div>"

/***/ }),

/***/ "./src/app/home/profile-chart/profile-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/profile-chart/profile-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS1jaGFydC9wcm9maWxlLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/profile-chart/profile-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/profile-chart/profile-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileChartComponent", function() { return ProfileChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chart.piecelabel.js */ "./node_modules/chart.piecelabel.js/src/Chart.PieceLabel.js");
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_7__);








var ProfileChartComponent = /** @class */ (function () {
    function ProfileChartComponent(cService, usersService, modalService, activeRoute, translate) {
        this.cService = cService;
        this.usersService = usersService;
        this.modalService = modalService;
        this.activeRoute = activeRoute;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [];
        this.pieOptions = {};
        this.userDetails = {};
        this.pieChartType = 'pie'; // points chart type
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    ProfileChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [
            {
                backgroundColor: ['#26bfb5', '#5bc78c', '#fc9772', '#ff4a5f', '#adc72a'],
            }
        ];
        this.activeRoute.params.subscribe(function (params) {
            _this.usersService.userDetailsByCPP(params.userCPP).subscribe(function (response) {
                _this.userDetails = response.data;
                _this.usersService.getUserPoints(btoa(response.data.id))
                    .subscribe(function (responseData) {
                    if (responseData.data) {
                        _this.pieOptions = {
                            pieceLabel: {
                                render: function (args) {
                                    var label = args.label, value = args.value;
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
                        responseData.data.forEach(function (element) {
                            _this.pieChartLabels.push(element.point_name);
                            _this.pieChartData.push(element.total_point);
                        });
                        // this.modalService.open(pointModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
                    }
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pointsModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileChartComponent.prototype, "pointsModal", void 0);
    ProfileChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-chart',
            template: __webpack_require__(/*! ./profile-chart.component.html */ "./src/app/home/profile-chart/profile-chart.component.html"),
            styles: [__webpack_require__(/*! ./profile-chart.component.scss */ "./src/app/home/profile-chart/profile-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ProfileChartComponent);
    return ProfileChartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map