(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cvbuilder-cvbuilder-module"],{

/***/ "./src/app/cvbuilder/cvbuilder-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cvbuilder/cvbuilder-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CvbuilderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvbuilderRoutingModule", function() { return CvbuilderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _cvinfo_cvinfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cvinfo/cvinfo.component */ "./src/app/cvbuilder/cvinfo/cvinfo.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/cvbuilder/payment/payment.component.ts");
/* harmony import */ var _cvbuildsuccess_cvbuildsuccess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cvbuildsuccess/cvbuildsuccess.component */ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.ts");
/* harmony import */ var _cvmessages_cvmessages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cvmessages/cvmessages.component */ "./src/app/cvbuilder/cvmessages/cvmessages.component.ts");








var routes = [
    {
        path: 'cv',
        children: [
            { path: "build", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _cvinfo_cvinfo_component__WEBPACK_IMPORTED_MODULE_4__["CvinfoComponent"] },
            { path: "pay", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"] },
            { path: "success/:token", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _cvbuildsuccess_cvbuildsuccess_component__WEBPACK_IMPORTED_MODULE_6__["CvbuildsuccessComponent"] },
            { path: "consulting/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _cvmessages_cvmessages_component__WEBPACK_IMPORTED_MODULE_7__["CvmessagesComponent"] },
        ]
    }
];
var CvbuilderRoutingModule = /** @class */ (function () {
    function CvbuilderRoutingModule() {
    }
    CvbuilderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CvbuilderRoutingModule);
    return CvbuilderRoutingModule;
}());



/***/ }),

/***/ "./src/app/cvbuilder/cvbuilder.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cvbuilder/cvbuilder.module.ts ***!
  \***********************************************/
/*! exports provided: CvbuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvbuilderModule", function() { return CvbuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_global_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/global.module */ "./src/app/global/global.module.ts");
/* harmony import */ var _cvbuilder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cvbuilder-routing.module */ "./src/app/cvbuilder/cvbuilder-routing.module.ts");
/* harmony import */ var _cvinfo_cvinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cvinfo/cvinfo.component */ "./src/app/cvbuilder/cvinfo/cvinfo.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/cvbuilder/payment/payment.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _cvbuildsuccess_cvbuildsuccess_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cvbuildsuccess/cvbuildsuccess.component */ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.ts");
/* harmony import */ var _cvmessages_cvmessages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cvmessages/cvmessages.component */ "./src/app/cvbuilder/cvmessages/cvmessages.component.ts");












var CvbuilderModule = /** @class */ (function () {
    function CvbuilderModule() {
    }
    CvbuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cvinfo_cvinfo_component__WEBPACK_IMPORTED_MODULE_6__["CvinfoComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"], _cvbuildsuccess_cvbuildsuccess_component__WEBPACK_IMPORTED_MODULE_10__["CvbuildsuccessComponent"], _cvmessages_cvmessages_component__WEBPACK_IMPORTED_MODULE_11__["CvmessagesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cvbuilder_routing_module__WEBPACK_IMPORTED_MODULE_5__["CvbuilderRoutingModule"],
                _global_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"],
                ngx_img_cropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropperModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__["OwlModule"]
            ]
        })
    ], CvbuilderModule);
    return CvbuilderModule;
}());



/***/ }),

/***/ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.html":
/*!************************************************************************!*\
  !*** ./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"commonWrap\">\n    <h2 class=\"withLine\"><span>{{ 'CV.CV_BUILD'| translate }}</span></h2>\n    <div class=\"wrapPagenotFound\">\n      <h3>{{ 'COMMON.SUCCESS'| translate }}!</h3>\n      <div>\n        <p *ngFor=\"let msg of cvMessage\" [innerHTML]=\"msg\"></p>&nbsp;\n      </div>\n      <div *ngIf=\"cvResponseData.type==0\">\n        <a [routerLink]=\"['/cv/build']\" class=\"cv-action-btn\">{{ 'CV.MY_CV_LIST'| translate }}</a>\n        <a download=\"mycv.pdf\" [href]=\"cvResponseData.fileName| picturepath:'cv'\" target=\"_blank\" class=\"cv-action-btn\">{{ 'CV.DOWNLOAD'| translate }}</a>\n      </div>\n      <div *ngIf=\"cvResponseData.type==1\">\n        <a [routerLink]=\"['/cv/build']\" class=\"cv-action-btn\">{{ 'CV.MY_CV_LIST'| translate }}</a>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2YnVpbGRlci9jdmJ1aWxkc3VjY2Vzcy9jdmJ1aWxkc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.ts ***!
  \**********************************************************************/
/*! exports provided: CvbuildsuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvbuildsuccessComponent", function() { return CvbuildsuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var CvbuildsuccessComponent = /** @class */ (function () {
    function CvbuildsuccessComponent(cvService, activeRoute, translate, cService) {
        var _this = this;
        this.cvService = cvService;
        this.activeRoute = activeRoute;
        this.translate = translate;
        this.cService = cService;
        this.cvToken = null;
        this.cvMessage = [];
        this.cvResponseData = {};
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.activeRoute.params.subscribe(function (params) {
            _this.cvToken = params.token;
        });
    }
    CvbuildsuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cvService.getCVSuccessContent({
            c_token: this.cvToken
        })
            .subscribe(function (responseData) {
            if (responseData.statustext == "success") {
                _this.cvResponseData = responseData.data;
                if (responseData.data.type == 0) {
                    var msgIndex = ['CV.CV_BUILD_MSG'];
                    if (responseData.data.price != 0 && responseData.data.status == 3) { // only not paid and price > 0
                        msgIndex.push('CV.CV_BUILD_WATERMARK_MSG');
                    }
                    _this.translate.get(msgIndex)
                        .subscribe(function (tData) {
                        _this.cvMessage.push(tData['CV.CV_BUILD_MSG']);
                        if (tData['CV.CV_BUILD_WATERMARK_MSG']) {
                            _this.cvMessage.push(tData['CV.CV_BUILD_WATERMARK_MSG']);
                        }
                    });
                }
                else {
                    _this.translate.get('CV.CV_CONSULT_MSG', { day: responseData.data.consultDay })
                        .subscribe(function (tData) {
                        _this.cvMessage.push(tData);
                    });
                }
            }
        });
    };
    CvbuildsuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cvbuildsuccess',
            template: __webpack_require__(/*! ./cvbuildsuccess.component.html */ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.html"),
            styles: [__webpack_require__(/*! ./cvbuildsuccess.component.scss */ "./src/app/cvbuilder/cvbuildsuccess/cvbuildsuccess.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cvcard_service__WEBPACK_IMPORTED_MODULE_3__["CvcardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], CvbuildsuccessComponent);
    return CvbuildsuccessComponent;
}());



/***/ }),

/***/ "./src/app/cvbuilder/cvinfo/cvinfo.component.html":
/*!********************************************************!*\
  !*** ./src/app/cvbuilder/cvinfo/cvinfo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit\">\n  <div class=\"row\">\n      <div class=\"col-lg-3\">\n    \n          <div class=\"doughnut-chart-content\">\n              <div class=\"c100  p{{ completePecent }} big green\">\n                  <span>\n                  <small>{{ completePecent }}%</small>\n                  <br/> {{ 'CV.COMPLETED'| translate }}\n                  </span>\n                  <div class=\"slice\">\n                      <div class=\"bar\"></div>\n                      <div class=\"fill\"></div>\n                  </div>\n              </div>\n\n          </div>\n\n          <div class=\"editImage\">\n            <div class=\"editImageMain\">\n              <div class=\"editImagePop\" (click)=\"openEditPicModal(content)\"><i class=\"fa fa-plus-circle\"\n                  aria-hidden=\"true\"></i></div>\n              <img *ngIf=\"saveCvInfoData.profilePic\" [src]=\"saveCvInfoData.profilePic\" />\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" name=\"button\" (click)=\"openEditPicModal(content)\">{{\n                'PROFILEEDIT.EDIT'|translate }}</button>\n              <button *ngIf=\"saveCvInfoData.profilePic\" class=\"remove\" type=\"button\" name=\"button\" (click)=\"removeProfilePic()\">{{\n                'PROFILEEDIT.REMOVE'|translate }}</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-9 col-xs-12 profile-edit-form-main-content\">\n              <ngb-tabset #tab=\"ngbTabset\" (tabChange)=\"changeTabEvent($event)\">\n                <!-- Personal Info -->\n                <ngb-tab id=\"personal\" (load)=\"personalDetails()\">\n                  <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ 'PROFILE.PERSONAL_INFO' | translate }}</ng-template>\n                  <ng-template ngbTabContent>\n                    <div *ngIf=\"loader.personal.list\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n                    <div class=\"proEditForm\">\n                     \n                        <div class=\"row\">\n\n              \n                          <div class=\"col-lg-12\">\n                            <div class=\"profile-edit-form-container\">\n                            <div class=\"alert alert-success\" *ngIf=\"personalSuccessMsg\">{{ personalSuccessMsg }}</div>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalErrorMsg\">{{ personalErrorMsg }}</div>\n                            <div class=\"row\">\n                              <div class=\"col-lg-4\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.FIRST_NAME'|translate }} :</label>\n                                  <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.first_name\" value=\"\" placeholder=\"\">\n                                  <div *ngIf=\"personalForm.submit && (personalForm.first_name==null || personalForm.first_name =='')\"\n                                    class=\"alert alert-danger\">\n                                    {{ 'PROFILEEDIT.FIRST_NAME_REQUIRED'|translate }}\n                                  </div>\n              \n                                </div>\n                              </div>\n                              <div class=\"col-lg-4\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.LAST_NAME'|translate }} :</label>\n                                  <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.last_name\" value=\"\" placeholder=\"\">\n                                  <div *ngIf=\"personalForm.submit && (personalForm.last_name==null || personalForm.last_name =='')\"\n                                    class=\"alert alert-danger\">\n                                    {{ 'PROFILEEDIT.LAST_NAME_REQUIRED'|translate }}\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-lg-4\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.FAMILY_NAME'|translate }} :</label>\n                                  <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.family_name\" value=\"\" placeholder=\"\">\n              \n              \n                                </div>\n                              </div>\n                            </div>\n              \n                            <div class=\"row\">\n                              <div class=\"col-lg-6\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.DOB'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                                  <select [(ngModel)]=\"personalForm.dob_date\" class=\"inpField autoWidth withSpace\">\n                                    <option *ngFor=\"let d of dayList\" [value]=\"d.id\">{{d.name}}</option>\n                                  </select>\n                                  <select [(ngModel)]=\"personalForm.dob_month\" class=\"inpField autoWidth withSpace\">\n                                    <option *ngFor=\"let d of monthList\" [value]=\"d.id\">{{d.name}}</option>\n                                  </select>\n                                  <select [(ngModel)]=\"personalForm.dob_year\" class=\"inpField autoWidth withSpace\">\n                                    <option *ngFor=\"let d of years\" [value]=\"d\">{{d}}</option>\n                                  </select>\n                                  <div *ngIf=\"personalForm.submit && (!personalForm.dob_date || !personalForm.dob_month || !personalForm.dob_year)\"\n                                    class=\"alert alert-danger\">\n                                    {{ 'PROFILEEDIT.DOB_REQUIRED'|translate }}\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-lg-6\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.LOCATION'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                                  <span class=\"formWrap withSpace\">\n                                    <ng-select class=\"inpField width200\" [items]=\"countryList\" [(ngModel)]=\"personalForm.country_id\"\n                                      bindLabel=\"name\" bindValue=\"id\" (change)=\"getCityList()\"></ng-select>\n                                    <div *ngIf=\"personalForm.submit && (personalForm.country_id==null || personalForm.country_id =='')\"\n                                      class=\"alert alert-danger\">\n                                      {{ 'PROFILEEDIT.COUNTRY_REQUIRED'|translate }}\n                                    </div>\n                                  </span>\n              \n                                  <span class=\"formWrap withSpace\">\n                                    <ng-select class=\"inpField width200\" [items]=\"cityList\" [(ngModel)]=\"personalForm.city_id\"\n                                      bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                                    <div *ngIf=\"personalForm.submit && (personalForm.city_id==null || personalForm.city_id =='')\"\n                                      class=\"alert alert-danger\">\n                                      {{ 'PROFILEEDIT.CITY_REQUIRED'|translate }}\n                                    </div>\n                                  </span>\n              \n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                  <div class=\"formWrap\">\n                                    <label for=\"\">{{ 'PROFILEEDIT.ADDRESS'|translate }} : </label>\n                                    <span class=\"formSpan\">\n                                      <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.address\" value=\"\" placeholder=\"\">\n                                      <div *ngIf=\"personalForm.submit && (!personalForm.address)\"\n                                      class=\"alert alert-danger\">\n                                      {{ 'PROFILEEDIT.ADDRESS_REQUIRED'|translate }}\n                                    </div>\n                                    </span>\n                                    \n                                  </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-lg-6\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.EMAIL'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                                  <span class=\"formSpan\">\n                                    <input class=\"inpField largeWidth\" type=\"email\" [(ngModel)]=\"personalForm.email\" value=\"\"\n                                      placeholder=\"\">\n                                    <div *ngIf=\"personalForm.submit && (personalForm.email==null || personalForm.email =='')\" class=\"alert alert-danger\">\n                                      {{ 'PROFILEEDIT.EMAIL_REQUIRED'|translate }}\n                                    </div>\n                                  </span>\n                                </div>\n                              </div>\n                              <div class=\"col-lg-6\">\n                                <div class=\"formWrap\">\n                                  <label for=\"\">{{ 'PROFILEEDIT.WEBSITE'|translate }} :</label>\n                                  <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.website\" value=\"\"\n                                    placeholder=\"\">\n              \n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n              \n                              <div class=\"col-lg-12\">\n                                  <div class=\"formWrap\">\n                                    <label for=\"\">{{ 'PROFILEEDIT.MOBILE'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                                    <span class=\"inpField largeWidth profile-edit-mobile\">\n                                        <ng-select class=\"inpField phCodeSelect\" [items]=\"countryCodes\" bindLabel=\"code\"\n                                        bindValue=\"code\" [clearable]=\"false\" [searchable]=\"false\" [(ngModel)]=\"personalForm.mobile_code\"\n                                        >\n                                        <ng-template ng-label-tmp let-item=\"item\">\n                                          <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                                          <b>{{item.code}}</b>\n                                          </ng-template>\n                                          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                                              <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                                              <b>{{item.code}}</b>\n                                          </ng-template>\n                                        </ng-select>\n                                      <input appOnlynumaricinput maxlength=\"10\" class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.mobile_no\" value=\"\"\n                                        placeholder=\"\">\n                                      <div *ngIf=\"personalForm.submit && (personalForm.mobile_no==null || personalForm.mobile_no =='')\"\n                                        class=\"alert alert-danger\">\n                                        {{ 'PROFILEEDIT.MOBILE_REQUIRED'|translate }}\n                                      </div>\n                                      <div *ngIf=\"personalForm.submit && (personalForm.mobile_no.length != 10)\" class=\"alert alert-danger\">\n                                        {{ 'PROFILEEDIT.MOBILE_LENGTH'|translate }}\n                                      </div>\n              \n                                    </span>\n                                  </div>\n                              </div>\n                            </div>\n                            \n                          </div>\n              \n              \n                          </div>\n                        </div>\n                     \n            \n                      <div class=\"buttonGr\">\n                        <div class=\"row\">\n                          <div class=\"col-6\">\n                            <a  href=\"javascript:void(0)\" class=\"btnWhite\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                          </div>\n                          <div class=\"col-6\">\n                            <div class=\"text-right\">\n            \n                              <button  type=\"button\" class=\"btnGreen\" name=\"button\" (click)=updatePersonalFrom()>\n                                <span *ngIf=\"loader.personal.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                                {{ 'PROFILEEDIT.SAVE' | translate}}\n                              </button>&nbsp;&nbsp; \n                              <button  class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'education')\">{{\n                                'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n            \n                    </div>\n\n                    <div class=\"formTable\">\n                      <table class=\"table table-borderless\">\n                        <thead>\n                          <tr>\n                            <th>{{ 'CV.NAME'|translate }}</th>\n                            <th class=\"text-center\">{{ 'CV.STATUS'|translate }}</th>\n                            <th class=\"text-center\">{{ 'CV.ACTION'|translate }}</th>\n                            <th class=\"text-center\">{{ 'CV.CURRENT'|translate }}</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let cv of userCvList\">\n                            <td>{{ cv.cv_name }}</td>\n                            <td class=\"text-center\">\n                              <span *ngIf=\"cv.status == 1\">{{ 'CV.UNDER_PROCESS'|translate }}</span>\n                              <span *ngIf=\"cv.status == 2 && cv.is_consult == 1\">{{ 'CV.COMPLETED'|translate }}</span>\n                              <span *ngIf=\"cv.status == 2 && (cv.is_consult == null || cv.is_consult == 0)\">{{ 'CV.PAID'|translate }}</span>\n                              <span *ngIf=\"cv.status == 3\">{{ 'CV.NOTE_PAID'|translate }}</span>\n                              \n                            </td>\n                            <td class=\"text-center\">\n                              <div *ngIf=\"cv.status!=4\">\n\n                                <a (click)=\"goToEditCv(cv)\" *ngIf=\"cv.status != 1 && cv.is_consult== 1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                                <a (click)=\"goToEditCv(cv)\" *ngIf=\"cv.status == 3 && cv.is_consult== 0\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n        \n                                <a href=\"{{ cv.cv_file| picturepath:'cv' }}\" target=\"_blank\" *ngIf=\"cv.status == 2\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>\n                                <a  *ngIf=\"cv.is_consult == 1\" [routerLink]=\"['/cv/consulting',cv.id]\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                                <a *ngIf=\"cv.status == 3\" (click)=\"goToPayment(cv)\" ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></a>\n                                <a (click)=\"removeCV(cv)\" ><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n                              </div>\n      \n                            </td>\n                            <td class=\"text-center\">\n                              <label class=\"customRadio\"  *ngIf=\"cv.status == 2 || cv.status == 4\">\n                                <input type=\"radio\" name=\"default\" [checked]=\"cv.is_default\" (click)=\"setIsDefault(cv)\">\n                                <span class=\"checkmark\"></span>\n                              </label>\n                            </td>\n                          </tr>\n                          <tr *ngIf=\"userCvList.length == 0\" >\n                            <td colspan=\"4\" class=\"text-center\">{{ 'PROFILEEDIT.NO_RECORD_FOUND'| translate }}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n\n                  </ng-template>\n                </ngb-tab>\n                <!-- Personal Info -->\n            \n            \n                <!-- Education -->\n                <ngb-tab id=\"education\">\n                  <ng-template ngbTabTitle>\n                    <div>\n                      <i class=\"fa fa-book\" aria-hidden=\"true\"></i> {{ 'PROFILE.EDUCATION' | translate }}\n                    </div>\n                  </ng-template>\n                  <ng-template ngbTabContent>\n            \n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12\">\n                        <div class=\"alert alert-success\" *ngIf=\"educationSuccessMsg\">{{ educationSuccessMsg }}</div>\n                        <div class=\"profile-edit-form-container\">\n          \n                          <div class=\"formWrap\">\n                            <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DEGREE' | translate }} :</label>\n                            <span class=\"formSpan col-xl-9\">\n                              <ng-select class=\"inpField fullWidth\" [items]=\"degreelist\" [(ngModel)]=\"educationForm.degree_id\"\n                                bindLabel=\"name\" bindValue=\"id\" (change)=\"getDegreeFields()\"></ng-select>\n                              <div *ngIf=\"educationForm.submit && (educationForm.degree_id==null || educationForm.degree_id=='')\"\n                                class=\"alert alert-danger\">\n                                {{'PROFILEEDIT.DEGREE_REQUIRED' | translate }}\n                              </div>\n                            </span>\n                          </div>\n              \n                          <div class=\"formWrap\">\n                            <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.FIELD' | translate }} :</label>\n                            <span class=\"formSpan col-xl-9\">\n                              <ng-select class=\"inpField fullWidth\" [items]=\"degreeFieldlist\" [(ngModel)]=\"educationForm.field_id\"\n                                bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                              <div *ngIf=\"educationForm.submit && (educationForm.field_id==null || educationForm.field_id=='')\" class=\"alert alert-danger\">\n                                {{'PROFILEEDIT.DEGREE_FIELD_REQUIRED' | translate }}\n                              </div>\n                            </span>\n                          </div>\n              \n                          <div class=\"formWrap\">\n                            <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DATE_OF_DEGREE' | translate }} :</label>\n                            <span class=\"formSpan withSpace\">\n                              <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                                [items]=\"years\" (change)=\"reDefineToYear($event)\" [(ngModel)]=\"educationForm.from_year\"></ng-select>\n                              <div *ngIf=\"educationForm.submit && (educationForm.from_year==null || educationForm.from_year=='')\"\n                                class=\"alert alert-danger\">\n                                {{'PROFILEEDIT.DEGREE_FROM_YEAR_REQUIRED' | translate }}\n                              </div>\n                            </span>\n                            <span class=\"formSpan\">\n                              <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\" class=\"inpField autoWidth withSpace\"\n                                [items]=\"toYears\" [(ngModel)]=\"educationForm.to_year\"></ng-select>\n                              <div *ngIf=\"educationForm.submit && (educationForm.to_year==null || educationForm.to_year=='')\" class=\"alert alert-danger\">\n                                {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                              </div>\n                            </span>\n                          </div>\n              \n                          <div class=\"addField\">\n                            <div class=\"text-right\">\n                              <button type=\"button\" name=\"button\" (click)=submitEducationFrom()>\n                                <span *ngIf=\"loader.education.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                                {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                              <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=\"resetEducationForm()\">{{\n                                'PROFILEEDIT.RESET' | translate}}</button>\n                            </div>\n                          </div>\n                          <div class=\"formTable\">\n                            <table class=\"table table-borderless\">\n                              <thead>\n                                <tr>\n                                  <th>#</th>\n                                  <th>{{'PROFILEEDIT.DEGREE' | translate }}</th>\n                                  <th>{{'PROFILEEDIT.FIELD' | translate }}</th>\n                                  <th>{{'PROFILEEDIT.DATE_OF_DEGREE' | translate }}</th>\n                                  <th></th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr *ngIf=\"loader.education.list\">\n                                  <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                                </tr>\n                                <tr *ngFor=\"let d of userDegreelist; let i=index\">\n                                  <td>{{(i+1)}} </td>\n                                  <td>{{ d.degree_name }}</td>\n                                  <td>{{ d.degree_field_name }}</td>\n                                  <td>\n                                    {{ d.from_year }}\n                                    <span *ngIf=\"d.to_year\">\n                                      -\n                                      {{ d.to_year }}\n                                    </span>\n                                  </td>\n                                  <td>\n                                    <a href=\"javascript:\" (click)=\"editEducation(d)\"><i class=\"fa fa-pencil\"></i></a>\n                                    <a href=\"javascript:\" (click)=\"deleteEducation(i)\"><i class=\"fa fa-trash\"></i></a>\n                                  </td>\n                                </tr>\n                                <tr *ngIf=\"userDegreelist.length === 0\">\n                                  <td colspan=\"5\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n            \n                      </div>\n                    </div>\n            \n                    <div class=\"buttonGr\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btnWhite\" href=\"javascript:void(0)\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"text-right\">\n                            <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'personal')\"><i class=\"fa fa-arrow-left\"\n                                aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                            <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'skills')\">{{\n                              'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                  </ng-template>\n                </ngb-tab>\n                <!-- Skills -->\n            \n                <ngb-tab id=\"skills\">\n                  <ng-template ngbTabTitle><i class=\"fa fa-star\" aria-hidden=\"true\"></i> {{ 'PROFILE.SKILLS' | translate }}</ng-template>\n                  <ng-template ngbTabContent>\n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12\">\n                          <div class=\"profile-edit-form-container\">\n                        <div class=\"alert alert-success\" *ngIf=\"skillSuccessMsg\">{{ skillSuccessMsg }}</div>\n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{ \"PROFILEEDIT.SKILLS\"|translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                            <!-- <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"skillForm.skill_name\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.SKILL_NAME'|translate }}\"> -->\n                            <ng-select class=\"inpField fullWidth\" [items]=\"skillsList\" [(ngModel)]=\"skillForm.skill_id\" bindLabel=\"name\"\n                              bindValue=\"id\"></ng-select>\n            \n                            <div *ngIf=\"skillForm.submit && (skillForm.skill_id==null || skillForm.skill_id =='')\" class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.SKILL_NAME_REQUIRED' | translate }}\n                            </div>\n                            <div *ngIf=\"skillForm.submit && skillForm.error==2\" class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.SKILL_ALREADY_ADDED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{ \"PROFILEEDIT.DEGREE\"|translate }} :</label>\n                          <span class=\"formSpan\">\n                            <label class=\"diffRadio\">\n                              <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==1\" (click)=\"skillForm.status=1\">\n                              <span class=\"checkmark\"></span>\n                              <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</span>\n                            </label>\n                            <label class=\"diffRadio\">\n                              <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==2\" (click)=\"skillForm.status=2\">\n                              <span class=\"checkmark\"></span>\n                              <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</span>\n                            </label>\n                            <label class=\"diffRadio\">\n                              <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==3\" (click)=\"skillForm.status=3\">\n                              <span class=\"checkmark\"></span>\n                              <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</span>\n                            </label>\n                            <label class=\"diffRadio\">\n                              <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==4\" (click)=\"skillForm.status=4\">\n                              <span class=\"checkmark\"></span>\n                              <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</span>\n                            </label>\n                            <div *ngIf=\"skillForm.submit && (skillForm.status==null || skillForm.status =='')\" class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.SKILL_DEGREE_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"addField\">\n                          <div class=\"text-right\">\n                            <button type=\"button\" name=\"button\" (click)=\"submitSkillForm()\">\n                              <span *ngIf=\"loader.skills.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                              {{ \"PROFILEEDIT.SAVE\"|translate }}</button>\n                            &nbsp;\n                            <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=\"resetSkillForm()\">{{\n                              \"PROFILEEDIT.RESET\"|translate }}</button>\n                          </div>\n                        </div>\n            \n                        <div class=\"formTable\">\n                          <table class=\"table table-borderless\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>{{ \"PROFILEEDIT.SKILLS\"|translate }}</th>\n                                <th>{{ \"PROFILEEDIT.DEGREE\"|translate }}</th>\n                                <th></th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngIf=\"loader.skills.list\">\n                                <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                              </tr>\n                              <tr *ngFor=\"let s of userSkilllist; let i = index\">\n                                <td>{{ (i+1) }}</td>\n                                <td>{{ s.skill_name }}</td>\n                                <td>\n                                  <span *ngIf=\"s.status==1\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</span>\n                                  <span *ngIf=\"s.status==2\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</span>\n                                  <span *ngIf=\"s.status==3\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</span>\n                                  <span *ngIf=\"s.status==4\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</span>\n                                </td>\n                                <td>\n                                  <a href=\"javascript:\" (click)=\"editSkills(s)\"><i class=\"fa fa-pencil\"></i></a>\n                                  <a href=\"javascript:\" (click)=\"deleteSkills(i)\"><i class=\"fa fa-trash\"></i></a>\n                                </td>\n                              </tr>\n                              <tr *ngIf=\"userSkilllist.length === 0\">\n                                <td colspan=\"4\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"buttonGr\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btnWhite\" href=\"javascript:void(0)\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"text-right\">\n                            <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'education')\"><i class=\"fa fa-arrow-left\"\n                                aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                            <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'experience')\">{{\n                              'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                  </ng-template>\n                </ngb-tab>\n                <!-- Experience -->\n                <ngb-tab id=\"experience\">\n                  <ng-template ngbTabTitle><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> {{ 'PROFILE.EXPERIENCE' | translate }}</ng-template>\n                  <ng-template ngbTabContent>\n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12\">\n                          <div class=\"profile-edit-form-container\">\n                        <div class=\"alert alert-success\" *ngIf=\"experienceSuccessMsg\">{{ experienceSuccessMsg }}</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"experienceErrorMsg\">{{ experienceErrorMsg }}</div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                            <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"experienceForm.company_name\" value=\"\"\n                              placeholder=\"{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }}\">\n                            <div *ngIf=\"experienceForm.submit && (experienceForm.company_name==null || experienceForm.company_name =='')\"\n                              class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.POSITION' | translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                            <ng-select class=\"inpField fullWidth\" [items]=\"positionlist\" [(ngModel)]=\"experienceForm.position_id\"\n                              bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                            <div *ngIf=\"experienceForm.submit && (experienceForm.position_id==null || experienceForm.position_id=='')\"\n                              class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.POSITION_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                          <span class=\"formSpan withSpace\">\n                            <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                              [items]=\"years\" [(ngModel)]=\"experienceForm.from_year\" (change)=\"reDefineToYear($event)\"></ng-select>\n                            <div *ngIf=\"experienceForm.submit && (experienceForm.from_year==null || experienceForm.from_year=='')\"\n                              class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                            </div>\n                          </span>\n            \n                          <ng-select [disabled]=\"experienceForm.is_current\" placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\"\n                            class=\"inpField autoWidth withSpace\" [items]=\"toYears\" [(ngModel)]=\"experienceForm.to_year\"></ng-select>\n            \n                          <label class=\"customCheck\">{{'PROFILEEDIT.EXPERIENCE_CURRENT' | translate }}\n                            <input type=\"checkbox\" [(ngModel)]=\"experienceForm.is_current\" (click)=\"checkValue($event)\">\n                            <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap vertTop\" for=\"\">{{'PROFILEEDIT.EXPERIENCE_SUMMARY' | translate }} :</label>\n                          <textarea class=\"col-xl-9 inpField fullWidth\" type=\"text\" [(ngModel)]=\"experienceForm.summery\" value=\"\"\n                            placeholder=\"{{'PROFILEEDIT.EXPERIENCE_SUMMARY' | translate }}\"></textarea>\n                        </div>\n            \n                        <div class=\"addField\">\n                          <div class=\"text-right\">\n                            <button type=\"button\" name=\"button\" (click)=submitExperienceFrom()>\n                              <span *ngIf=\"loader.experience.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                              {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                            <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=resetExperienceForm()>{{\n                              'PROFILEEDIT.RESET' | translate}}</button>\n                          </div>\n                        </div>\n            \n                        <div class=\"formTable\">\n                          <table class=\"table table-borderless\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>{{'PROFILEEDIT.POSITION' | translate }}</th>\n                                <th>{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }}</th>\n                                <th>{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                                <th>{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                                <th>{{'PROFILEEDIT.ACTION' | translate }}</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngIf=\"loader.experience.list\">\n                                <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                              </tr>\n                              <tr *ngFor=\"let e of userExperiencelist; let i=index\">\n                                <td>{{(i+1)}}</td>\n                                <td>{{ e.position_name }} </td>\n                                <td>{{ e.company_name }}</td>\n                                <td>{{ e.from_year }}</td>\n                                <td>{{ e.to_year }} <span *ngIf=\"e.is_current==1\">{{ 'PROFILE.EXPERIENCE_CURRENT' | translate }}</span></td>\n            \n                                <td>\n                                  <a href=\"javascript:\" (click)=\"editExperience(e)\"><i class=\"fa fa-pencil\"></i></a>\n                                  <a href=\"javascript:\" (click)=\"deleteExperience(i)\"><i class=\"fa fa-trash\"></i></a>\n                                </td>\n                              </tr>\n                              <tr *ngIf=\"userExperiencelist.length === 0\">\n                                <td colspan=\"6\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"buttonGr\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btnWhite\" href=\"javascript:void(0)\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"text-right\">\n                            <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'skills')\"><i class=\"fa fa-arrow-left\"\n                                aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                            <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'certificate')\">{{\n                              'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ngb-tab>\n                <!-- Experience -->\n            \n                <!-- Certificate -->\n                <ngb-tab id=\"certificate\">\n                  <ng-template ngbTabTitle><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.CERTIFICATE' |\n                    translate }}</ng-template>\n                  <ng-template ngbTabContent>\n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12\">\n                          <div class=\"profile-edit-form-container\">\n                        <div class=\"alert alert-success\" *ngIf=\"certificateSuccessMsg\">{{ certificateSuccessMsg }}</div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{ 'PROFILEEDIT.CERTIFICATE' | translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                            <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"certificateForm.certificate_name\" value=\"\"\n                              placeholder=\"{{ 'PROFILEEDIT.CERTIFICATE' | translate }}\">\n                            <div *ngIf=\"certificateForm.submit && (certificateForm.certificate_name==null || certificateForm.certificate_name =='')\"\n                              class=\"alert alert-danger\">\n                              {{ 'PROFILEEDIT.CERTIFICATE_NAME_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap vertTop\" for=\"\">{{ 'PROFILEEDIT.CERTIFICATE_SUMMARY' | translate }} :</label>\n                          <textarea class=\"col-xl-9 inpField fullWidth\" [(ngModel)]=\"certificateForm.summery\" placeholder=\"{{ 'PROFILEEDIT.CERTIFICATE_SUMMARY' | translate }}\"></textarea>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                          <span class=\"formSpan withSpace\">\n                            <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                              [items]=\"years\" [(ngModel)]=\"certificateForm.from_year\" (change)=\"reDefineToYear($event)\"></ng-select>\n                            <div *ngIf=\"certificateForm.submit && (certificateForm.from_year==null || certificateForm.from_year=='')\"\n                              class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                            </div>\n                          </span>\n            \n                          <span class=\"formSpan withSpace\">\n                            <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\" class=\"inpField autoWidth withSpace\"\n                              [items]=\"toYears\" [(ngModel)]=\"certificateForm.to_year\"></ng-select>\n                            <div *ngIf=\"certificateForm.submit && (certificateForm.to_year==null || certificateForm.to_year=='')\"\n                              class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.UPLOAD' | translate }} :</label>\n                          <div class=\"fileUpload\">\n                            <label for=\"file-upload\" class=\"custom-file-upload\">{{'PROFILEEDIT.BROWSE' | translate }}</label>\n                            <input id=\"file-upload\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\" (change)=\"onFileChanged($event)\" />\n                          </div>\n                          <span class=\"uploadPic\" *ngIf=\"certificatePicture\"><img [src]=\"certificatePicture\" alt=\"\"></span>\n            \n                          <div class=\"alert alert-danger\" *ngIf=\"pictureError.status == 1\">{{ pictureError.msg }}</div>\n                          <div class=\"alert alert-danger\" *ngIf=\"pictureSizeError.status == 1\">{{ pictureSizeError.msg }}</div>\n            \n                        </div>\n            \n                        <div class=\"addField\">\n                          <div class=\"text-right\">\n                            <button type=\"button\" name=\"button\" (click)=submitCertificateFrom()>\n                              <span *ngIf=\"loader.certificate.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                              {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                            <button type=\"button\" name=\"button\" *ngIf=\"resetBtnDisplay\" (click)=\"resetCertificateForm()\">{{\n                              'PROFILEEDIT.RESET' | translate}}</button>\n                          </div>\n                        </div>\n            \n                        <div class=\"formTable\">\n                          <table class=\"table table-borderless\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>{{'PROFILEEDIT.CERTIFICATE_NAME' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.ACTION' | translate }}</th>\n            \n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngIf=\"loader.certificate.list\">\n                                <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                              </tr>\n                              <tr *ngFor=\"let c of userCertificatelist; let i=index\">\n                                <td>{{(i+1)}}</td>\n                                <td>{{ c.certificate_name }}</td>\n                                <td class=\"text-center\">{{ c.from_year }}</td>\n                                <td class=\"text-center\">{{ c.to_year }}</td>\n            \n                                <td class=\"text-center\">\n                                  <a href=\"javascript:\" (click)=\"editCertificate(c)\"><i class=\"fa fa-pencil\"></i></a>\n                                  <a href=\"javascript:\" (click)=\"deleteCertificate(i)\"><i class=\"fa fa-trash\"></i></a>\n                                </td>\n                              </tr>\n                              <tr *ngIf=\"userCertificatelist.length === 0\">\n                                <td colspan=\"5\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"buttonGr\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btnWhite\" href=\"javascript:void(0)\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"text-right\">\n                            <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'experience')\"><i class=\"fa fa-arrow-left\"\n                                aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                            <button class=\"btnGreen\" type=\"button\" name=\"button\"  (click)=\"setActive(tab,'projects')\">{{\n                                'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                  </ng-template>\n                </ngb-tab>\n            \n                <!-- Projects -->\n            \n                <ngb-tab id=\"projects\">\n                  <ng-template ngbTabTitle><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.PROJECTS' |\n                    translate }}</ng-template>\n                  <ng-template ngbTabContent>\n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12\">\n                          <div class=\"profile-edit-form-container\">\n                        <div class=\"alert alert-success\" *ngIf=\"projectSuccessMsg\">{{ projectSuccessMsg }}</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"projectErrorMsg\">{{ projectErrorMsg }}</div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{ 'PROFILEEDIT.PROJECT_NAME' | translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                            <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"projectForm.name\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.PROJECT_NAME' | translate }}\">\n                            <div *ngIf=\"projectForm.submit && (projectForm.name==null || projectForm.name =='')\" class=\"alert alert-danger\">\n                              {{ 'PROFILEEDIT.PROJECT_NAME_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap \" for=\"\">{{ 'PROFILEEDIT.PROJECT_COMPANY' | translate }} :</label>\n                          <span class=\"formSpan col-xl-9\">\n                          <ng-select placeholder=\"{{ 'PROFILEEDIT.PROJECT_COMPANY' | translate }}\"  class=\"inpField fullWidth\" [items]=\"userCompanyList\" bindLabel=\"name\" bindValue=\"id\" [(ngModel)]=\"projectForm.cId\"></ng-select>\n            \n                          <div *ngIf=\"projectForm.submit && (projectForm.cId==null || projectForm.cId =='')\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.PROJECT_COMPANY_REQUIRED' | translate }}\n                          </div>\n                          </span>\n                        </div>\n            \n                        <div class=\"formWrap\">\n                          <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                          <span class=\"formSpan withSpace\">\n                            <input class=\"inpField autoWidth\" type=\"text\" [(ngModel)]=\"projectForm.from\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate }}\" bsDatepicker [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [maxDate]=\"maxDay\" autocomplete=\"off\" readonly>\n            \n                            <div *ngIf=\"projectForm.submit && (projectForm.from==null || projectForm.from=='')\" class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                            </div>\n                          </span>\n            \n                          <span class=\"formSpan withSpace\">\n                            <input class=\"inpField autoWidth\" type=\"text\" [(ngModel)]=\"projectForm.to\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate }}\" bsDatepicker [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [maxDate]=\"maxDay\" autocomplete=\"off\" readonly>\n            \n            \n                            <div *ngIf=\"projectForm.submit && (projectForm.to==null || projectForm.to=='')\" class=\"alert alert-danger\">\n                              {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                            </div>\n                          </span>\n                        </div>\n                        <div class=\"addField\">\n                          <div class=\"text-right\">\n                            <button type=\"button\" name=\"button\" (click)=submitProjectFrom()>\n                              <span *ngIf=\"loader.project.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                              {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                            <button type=\"button\" name=\"button\" *ngIf=\"resetBtnDisplay\" (click)=\"resetProjectForm()\">{{\n                              'PROFILEEDIT.RESET' | translate}}</button>\n                          </div>\n                        </div>\n            \n                        <div class=\"formTable\">\n                          <table class=\"table table-borderless\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>{{'PROFILEEDIT.PROJECT_NAME' | translate }}</th>\n                                <th>{{'PROFILEEDIT.PROJECT_COMPANY' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                                <th class=\"text-center\">{{'PROFILEEDIT.ACTION' | translate }}</th>\n            \n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngIf=\"loader.project.list\">\n                                <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                              </tr>\n                              <tr *ngFor=\"let project of userProjectlist; let i=index\">\n                                <td>{{(i+1)}}</td>\n                                <td>{{ project.name }}</td>\n                                <td>{{ project.company_name }}</td>\n                                <td class=\"text-center\">{{ project.from|date }}</td>\n                                <td class=\"text-center\">{{ project.to|date }}</td>\n            \n                                <td class=\"text-center\">\n                                  <a href=\"javascript:\" (click)=\"editProject(project)\"><i class=\"fa fa-pencil\"></i></a>\n                                  <a href=\"javascript:\" (click)=\"deleteProject(i)\"><i class=\"fa fa-trash\"></i></a>\n                                </td>\n                              </tr>\n                              <tr *ngIf=\"userProjectlist.length === 0\">\n                                <td colspan=\"6\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"buttonGr\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btnWhite\" href=\"javascript:void(0)\" (click)=\"gotToPayment(true)\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"text-right\">\n                            <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'certificate')\"><i class=\"fa fa-arrow-left\"\n                                aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n            \n                            <button class=\"btnGreen\" type=\"button\" name=\"button\"  (click)=\"gotToPayment()\">{{ 'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                  </ng-template>\n                </ngb-tab>\n              </ngb-tabset>\n        </div>\n  </div>\n\n</div>\n\n\n<ng-template #content let-modal>\n  <h2><span>{{ 'PROFILEEDIT.EDIT_cv_PHOTO' |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n\n    <div>\n      <div class=\"alert alert-success\" *ngIf=\"successMsg\">{{ successMsg }}</div>\n      <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</div>\n    </div>\n\n    <span class=\"file-upload-all\">\n      <label class=\"custom-file-upload\" for=\"custom-input\">Upload Photo</label>\n      <input id=\"custom-input\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\" (change)=\"fileChangeListener($event, cropper)\">\n    </span>\n    <button class=\"cropSave\" (click)=\"savePhoto()\">Save</button>\n\n    <div class=\"imgCrop\">\n      <div class=\"\">\n        <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n      </div>\n      <div class=\"cropDisp\" *ngIf=\"data.image\">\n        <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </div>\n\n      <!-- <div class=\"\" *ngIf=\"data.image\">\n        <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n      </div>\n      <div class=\"cropDisp\" *ngIf=\"data.image\">\n        <img  [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </div> -->\n      <div class=\"clearfix\"></div>\n\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #alertPopup let-modal >\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\" *ngIf=\"!alertPopupMsg.page\"></span>\n  <div class=\"modal-body\" >\n    <div [innerHTML]=\"alertPopupMsg.message\"></div>\n    <div class=\"profileDesc\" *ngIf=\"alertPopupMsg.page\">\n      <div class=\"profileAward\">\n        <span>\n          <a [routerLink]=\"['/profile/edit']\" *ngIf=\"alertPopupMsg.page == 'edit_profile'\">{{ 'PROFILEEDIT.EDIT_PROFILE'|translate }}</a>\n        </span>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/cvbuilder/cvinfo/cvinfo.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cvbuilder/cvinfo/cvinfo.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doughnut-chart-content {\n  width: 182px;\n  height: 182px;\n  margin: 0 auto;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3ZidWlsZGVyL2N2aW5mby9DOlxcVXNlcnNcXHNoYWR5Lm1vaGFtZWRcXERvd25sb2Fkc1xcY2FyZWVyeUFuZy9zcmNcXGFwcFxcY3ZidWlsZGVyXFxjdmluZm9cXGN2aW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYztFQUNkLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2N2YnVpbGRlci9jdmluZm8vY3ZpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdWdobnV0LWNoYXJ0LWNvbnRlbnR7XG4gICAgd2lkdGg6IDE4MnB4O1xuICAgIGhlaWdodDogMTgycHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cvbuilder/cvinfo/cvinfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cvbuilder/cvinfo/cvinfo.component.ts ***!
  \******************************************************/
/*! exports provided: CvinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvinfoComponent", function() { return CvinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global/picturepath.pipe */ "./src/app/global/picturepath.pipe.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_13__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 15-03-2019
# Module                : CvinfoComponent
# Object name           : CvinfoComponent
# Functionality         : All cv building operations
# Purpose               : constructor, ngOnInit, setActive, open, getDismissReason, openEditPicModal, fileChangeListener, savePhoto, openAlertModal, removeProfilePic, changeTabEvent, getEducationData, getDegreeFields, resetEducationForm, submitEducationFrom, editEducation, deleteEducation, getSkillData, resetSkillForm, submitSkillForm, editSkills, deleteSkills, checkValue, getExperienceData, resetExperienceForm, submitExperienceFrom, editExperience, deleteExperience, onFileChanged, getCertificateData, resetCertificateForm, submitCertificateFrom, editCertificate, deleteCertificate, validURL, personalDetails, updatePersonalFrom, getCityList, getProjectDetails, resetProjectForm, submitProjectFrom, editProject, deleteProject, setCvInfoIntoLocal
*******************************************************/













var CvinfoComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and defin the languages data
      * PARAMS :
      */
    function CvinfoComponent(fb, modalService, uService, translate, cService, cvCardService, route, filePathPipe) {
        var _this = this;
        this.fb = fb;
        this.modalService = modalService;
        this.uService = uService;
        this.translate = translate;
        this.cService = cService;
        this.cvCardService = cvCardService;
        this.route = route;
        this.filePathPipe = filePathPipe;
        this.userData = {};
        this.maxDay = new Date(); // 
        this.successMsg = ''; // success message
        this.errorMsg = ''; // error message
        this.profilePic = ''; // user profile picture
        this.years = []; // from years
        this.toYears = []; // to years
        this.dates = []; // dates 
        this.confirmMessage = ''; // confirm message
        this.resetBtnDisplay = true; // reset button display status
        // EDUCATION CONFIG //
        this.educationForm = {
            "id": null,
            "degree_id": null,
            "field_id": null,
            'from_year': null,
            'to_year': null,
            "error": 0,
            "submit": false
        };
        this.educationSuccessMsg = ''; // education success message
        this.educationResponsedata = null; // education response data
        this.userDegreelist = []; // user degree list
        this.degreelist = []; // degree list from db
        this.degreeFieldlist = []; // digree field list
        // EDUCATION CONFIG  END//
        // SKILLS CONFIG //
        this.skillForm = {
            "id": null,
            "skill_id": null,
            "status": null,
            "error": 0,
            "submit": false
        };
        this.skillSuccessMsg = ''; // skills success message
        this.userSkilllist = []; // user skills list
        this.skillsList = []; // skill list from db
        // SKILLS CONFIG  END//
        // EXPERIENCE CONFIG //
        this.experienceForm = {
            "id": null,
            "company_name": null,
            "position_id": null,
            'from_year': null,
            'is_current': null,
            "summery": null,
            "error": 0,
            "submit": false
        };
        this.experienceSuccessMsg = ''; //experience success message
        this.experienceErrorMsg = ''; // esperience error message
        this.experienceResponsedata = null; // experience response data
        this.userExperiencelist = []; // user experience list
        this.positionlist = []; // position list from db
        // EXPERIENCE CONFIG  END//
        // CERTIFICATE CONFIG //
        this.certificateForm = {
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
        this.certificateSuccessMsg = ''; // certificate success message
        this.certificateResponsedata = null; // certificate response data
        this.userCertificatelist = []; // user certificate list
        this.certificatePicture = ''; // certificate picture
        this.pictureError = {
            status: 0,
            msg: ''
        };
        this.pictureSizeError = {
            status: 0,
            msg: ''
        };
        // pictureErrorMsg: string = '';
        // CERTIFICATE CONFIG  END//
        // PERSONAL CONFIG //
        this.personalForm = {
            "id": null,
            "first_name": "",
            "last_name": "",
            "family_name": "",
            "email": "",
            "website": "",
            "mobile_code": "",
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
        this.projectForm = {
            "id": null,
            "name": null,
            "cId": null,
            "from": null,
            "to": null,
            "error": 0,
            "submit": false
        };
        this.userProjectlist = []; // user project list
        this.userCompanyList = []; // user company list
        this.projectSuccessMsg = ''; // success message for user project manage
        this.projectErrorMsg = ''; // error message for user project manage
        this.urlErr = {
            'facebook': false,
            'deviantart': false,
            'behance': false,
            'twitter': false,
            'dribbble': false,
            'pinterest': false
        };
        this.personalSuccessMsg = ''; // personal success message
        this.personalErrorMsg = ''; // personal error message
        this.personalResponsedata = null; // personal response data
        this.countryList = []; // country list from db
        this.countryCodes = [];
        this.cityList = []; // city list from db
        this.monthList = []; // month list
        this.dayList = []; // day list
        this.loader = {
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
        this.saveCvInfoData = {
            "personal": null,
            "profilePic": null,
            "educations": [],
            "skills": [],
            "experiences": [],
            "certificates": [],
            "projects": []
        };
        this.alertPopupMsg = {
            message: '',
            page: ''
        };
        this.completePecent = 0;
        this.userPersonalData = null;
        this.userCvList = [];
        this.cvmaxlimitStatus = 1;
        this.cvLimitDisabkedStatus = false;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        translate.get('PROFILEEDIT.PICTURE_VALIDATION_ERROR').subscribe(function (tData) {
            _this.pictureError.msg = tData;
        });
        var cvType = localStorage.getItem('_cvt');
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
    CvinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**/
        this.getUserCvList();
        if ((localStorage.getItem('_cp') === '/cv/build' || localStorage.getItem('_cp') === '/cv/build/pay') && localStorage.getItem('_cvinfo')) {
            this.saveCvInfoData = JSON.parse(localStorage.getItem('_cvinfo'));
            this.defineChart();
        }
        else {
            localStorage.setItem('_cvinfo', JSON.stringify(this.saveCvInfoData));
        }
        if (localStorage.getItem("_user")) {
            var user = this.cService.getLoggedUserData();
            user = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(JSON.stringify(parseInt(user._i)), 'careery');
            user = user.toString();
            this.uService.userpreviewCvInfo({ cv_user: user })
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    _this.userData = responseData.data;
                    _this.personalDetails();
                    _this.getEducationData();
                    _this.getSkillData();
                    _this.getExperienceData();
                    _this.getCertificateData();
                    _this.getProjectDetails();
                }
            });
        }
        this.data = {};
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_4__["CropperSettings"]();
        this.cropperSettings.noFileInput = true;
        var currentYear = new Date().getFullYear();
        for (var y = currentYear; y > currentYear - 100; y--) {
            this.years.push(y);
        }
        // month list
        for (var m = 1; m <= 12; m++) {
            this.monthList.push({
                id: (m < 10) ? '0' + m : m.toString(),
                name: (m < 10) ? '0' + m : m.toString(),
            });
        }
        for (var d = 1; d <= 31; d++) {
            this.dayList.push({
                id: (d < 10) ? '0' + d : d.toString(),
                name: (d < 10) ? '0' + d : d.toString(),
            });
        }
    };
    CvinfoComponent.prototype.getUserCvList = function () {
        var _this = this;
        this.cvCardService.getUserCvList()
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.userCvList = responseData.data.list;
                _this.userCvList.push({
                    "cv_name": "Preview Cv",
                    "status": 4,
                    "is_default": (_this.userCvList.findIndex(function (i) { return i.is_default == 1; }) == -1) ? 1 : null
                });
                _this.cvmaxlimitStatus = responseData.data.maxlimit;
            }
        });
    };
    CvinfoComponent.prototype.removeCV = function (cv) {
        var _this = this;
        if (!cv.is_default) {
            this.translate.get(['COMMON.ARE_YOU_SURE', 'CV.CV_DELETE_CONFIRM_MSG'])
                .subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ARE_YOU_SURE'],
                    text: tData['CV.CV_DELETE_CONFIRM_MSG'],
                    icon: "warning",
                    buttons: {
                        cancel: true,
                        confirm: true,
                    },
                }).then(function (willDelete) {
                    if (willDelete) {
                        _this.cvCardService.deleteUserCv(cv.id)
                            .subscribe(function (responseData) {
                            if (responseData.statustext == 'success') {
                                _this.getUserCvList();
                            }
                        });
                    }
                });
            });
        }
        else {
            this.translate.get(['COMMON.ERROR', 'CV.DEFAULT_CV_DELETE_MSG'])
                .subscribe(function (tdata) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tdata['COMMON.ERROR'],
                    text: tdata['CV.DEFAULT_CV_DELETE_MSG'],
                    icon: "error",
                });
            });
        }
    };
    CvinfoComponent.prototype.setIsDefault = function (cv) {
        this.cvCardService.setIsdefault(cv.id)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                // this.getUserCvList();
            }
        });
    };
    CvinfoComponent.prototype.goToEditCv = function (cv) {
        var cvType = '';
        if (cv.is_consult == 1) {
            cvType = 'consult';
        }
        else {
            cvType = 'build';
        }
        localStorage.setItem('_cvt', cvType);
        localStorage.setItem('_cvid', cv.id);
        var cvId = localStorage.getItem('_cvid');
        localStorage.setItem('_cvinfo', (cv.cv_details));
        this.route.navigate(['/cv/build']);
    };
    /* Function Name : goToCvConsult
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to go to cv consulting page
      * PARAMS :
    */
    CvinfoComponent.prototype.goToCvConsult = function () {
        localStorage.setItem('_cvt', 'consult');
        this.route.navigate(['/cv/build']);
    };
    /* Function Name : goToPayment
      * Author :
      * Created Date : 02-04-2019
      * Modified Date : *
      * Purpose : to go to the payment and templating page
      * PARAMS :
    */
    CvinfoComponent.prototype.goToPayment = function (cv) {
        var cvType = '';
        if (cv.is_consult == 1) {
            cvType = 'consult';
        }
        else {
            cvType = 'build';
        }
        localStorage.setItem('_cvt', cvType);
        localStorage.setItem('_cvid', cv.id);
        var cvId = localStorage.getItem('_cvid');
        localStorage.setItem('_cvinfo', (cv.cv_details));
        this.route.navigate(['/cv/pay']);
    };
    CvinfoComponent.prototype.reDefineToYear = function (event) {
        this.toYears = [];
        this.educationForm.to_year = null;
        this.experienceForm.to_year = null;
        this.certificateForm.to_year = null;
        var currentYear = new Date().getFullYear();
        for (var y = event; y <= currentYear; y++) {
            this.toYears.push(y);
        }
    };
    /* Function Name : setActive
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to set active tab
      * PARAMS : tab, activeTab
      */
    CvinfoComponent.prototype.setActive = function (tab, activeTab) {
        tab.select(activeTab);
    };
    /* Function Name : open
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to set open modal
      * PARAMS : content
      */
    CvinfoComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    /* Function Name : getDismissReason
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to dismiss modal
      * PARAMS : reason
      */
    CvinfoComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /* Function Name : openEditPicModal
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to open edit profile picture modal
      * PARAMS : content
      */
    CvinfoComponent.prototype.openEditPicModal = function (content) {
        this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : fileChangeListener
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get file object on image upload
      * PARAMS : $event, cropper
      */
    CvinfoComponent.prototype.fileChangeListener = function ($event, cropper) {
        var image = new Image();
        var file = $event.target.files[0];
        if (file && (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif')) {
            if (file.size < 250000) {
                var myReader = new FileReader();
                var that = this;
                myReader.onloadend = function (loadEvent) {
                    image.src = loadEvent.target.result;
                    setTimeout(function () {
                        cropper.setImage(image);
                    }, 10);
                };
                myReader.readAsDataURL(file);
            }
            else {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_SIZE_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'],
                        icon: 'error'
                    });
                });
            }
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : savePhoto
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to save photo
      * PARAMS :
      */
    CvinfoComponent.prototype.savePhoto = function () {
        if (this.data.image) {
            this.setCvInfoIntoLocal('cvpic', this.data['image']);
            this.profilePic = this.data['image'];
            this.modalService.dismissAll();
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : openAlertModal
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to open alert modal
      * PARAMS : alertContent
      */
    CvinfoComponent.prototype.openAlertModal = function (alertContent) {
        this.modalService.open(document.getElementById(alertContent), { size: 'sm', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : removeProfilePic
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to remove profile picture
      * PARAMS :
      */
    CvinfoComponent.prototype.removeProfilePic = function () {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRMTODELETEPROFILEPIC']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRMTODELETEPROFILEPIC'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.setCvInfoIntoLocal('cvpic', null);
                    // this.profilePic = null;
                }
            });
        });
    };
    /* Function Name : changeTabEvent
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get data on tab change
      * PARAMS : e
      */
    CvinfoComponent.prototype.changeTabEvent = function (e) {
        var currentYear = new Date().getFullYear();
        for (var y = currentYear; y > currentYear - 100; y--) {
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
    };
    // EDUCATION TAB //
    /* Function Name : getEducationData
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get education data
      * PARAMS :
      */
    CvinfoComponent.prototype.getEducationData = function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = false; }
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            this.userDegreelist = JSON.parse(localStorage.getItem('_cvinfo')).educations;
            if (this.userDegreelist.length == 0) {
                this.userData.degree.forEach(function (element) {
                    var newData = {
                        "degree_id": element.degree_id,
                        "field_id": element.degree_field_id,
                        "from_year": element.from_year,
                        "to_year": element.to_year,
                        "degree_name": element.degreeDetails.details[0].name,
                        "degree_field_name": element.degreeFieldDetails.details[0].name
                    };
                    _this.setCvInfoIntoLocal('education', newData);
                    _this.userDegreelist.push(newData);
                });
            }
        }
        if (isActive) {
            this.uService.getCvContent('education')
                .subscribe(function (responseList) {
                _this.loader.personal.list = false;
                if (responseList.statustext == 'success') {
                    _this.educationResponsedata = responseList.data;
                    _this.degreelist = responseList.data.degree;
                    _this.getDegreeFields();
                }
            });
            this.resetEducationForm();
        }
    };
    /* Function Name : getDegreeFields
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get degree field data
      * PARAMS :
      */
    CvinfoComponent.prototype.getDegreeFields = function () {
        var degId = this.educationForm.degree_id;
        if (this.educationResponsedata.degreeField) {
            var degreeFileds = this.educationResponsedata.degreeField;
            this.educationForm.field_id = null;
            this.degreeFieldlist = [];
            this.degreeFieldlist = degreeFileds.filter(function (i) {
                return i.degree_id == degId;
            });
        }
    };
    /* Function Name : resetEducationForm
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to reset education form
      * PARAMS :
      */
    CvinfoComponent.prototype.resetEducationForm = function () {
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
    };
    /* Function Name : submitEducationFrom
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to submit education form
      * PARAMS :
      */
    CvinfoComponent.prototype.submitEducationFrom = function () {
        this.educationForm.submit = true;
        if (!this.educationForm.degree_id || !this.educationForm.field_id || !this.educationForm.from_year || !this.educationForm.to_year) {
            this.educationForm.error = 1;
        }
        else {
            this.educationForm.error = 0;
        }
        if (this.educationForm.error == 0) {
            this.loader.education.submit = true;
            var newEducationData_1 = this.educationForm;
            var selectedDegree = this.degreelist.find(function (item) {
                return item.id == newEducationData_1['degree_id'];
            });
            newEducationData_1['degree_name'] = selectedDegree.name;
            var selectedDegreeField = this.degreeFieldlist.find(function (item) {
                return item.id == newEducationData_1['field_id'];
            });
            newEducationData_1['degree_field_name'] = selectedDegreeField.name;
            this.setCvInfoIntoLocal('education', newEducationData_1);
            this.getEducationData();
            _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            this.loader.education.submit = false;
        }
    };
    /* Function Name : editEducation
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to get education data on edit mode in form
      * PARAMS :  educationDetails
      */
    CvinfoComponent.prototype.editEducation = function (educationDetails) {
        this.resetBtnDisplay = false;
        this.educationForm["id"] = educationDetails.id;
        this.educationForm["degree_id"] = educationDetails.degree_id;
        this.getDegreeFields();
        this.educationForm["field_id"] = educationDetails.field_id;
        this.educationForm["from_year"] = educationDetails.from_year;
        this.educationForm["to_year"] = educationDetails.to_year;
    };
    /* Function Name : deleteEducation
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to delete education details
      * PARAMS : degreeIndex
      */
    CvinfoComponent.prototype.deleteEducation = function (degreeIndex) {
        var _this = this;
        this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: '',
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.saveCvInfoData.educations.splice(degreeIndex, 1);
                    localStorage.setItem('_cvinfo', JSON.stringify(_this.saveCvInfoData));
                    _this.getEducationData();
                    _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
                }
            });
        });
    };
    // EDUCATION TAB CLOSE//
    // SKILLS TAB //
    /* Function Name : getSkillData
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get user skill data
      * PARAMS :
      */
    CvinfoComponent.prototype.getSkillData = function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = false; }
        this.loader.skills.list = true;
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            this.userSkilllist = JSON.parse(localStorage.getItem('_cvinfo')).skills;
            this.loader.skills.list = false;
            if (this.userSkilllist.length == 0) {
                this.userData.skills.forEach(function (element) {
                    var newData = {
                        "skill_id": element.skill_id,
                        "status": element.status,
                        "skill_name": element.details[0].name
                    };
                    _this.setCvInfoIntoLocal('skills', newData);
                    _this.userSkilllist.push(newData);
                });
            }
            this.resetSkillForm();
        }
        if (isActive) {
            this.uService.getCvContent('skills')
                .subscribe(function (responseList) {
                _this.loader.skills.list = false;
                if (responseList.statustext == 'success') {
                    _this.skillsList = responseList.data.skills;
                }
            });
            this.resetSkillForm();
        }
    };
    /* Function Name : resetSkillForm
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to reset skill form
      * PARAMS :
      */
    CvinfoComponent.prototype.resetSkillForm = function () {
        this.skillForm = {
            "id": null,
            "skill_id": null,
            "status": null,
            "error": 0,
            "submit": false
        };
        this.resetBtnDisplay = true;
    };
    /* Function Name : submitSkillForm
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to submit skill form
      * PARAMS :
      */
    CvinfoComponent.prototype.submitSkillForm = function () {
        var _this = this;
        this.skillForm.submit = true;
        if (!this.skillForm.skill_id || !this.skillForm.status) {
            this.skillForm.error = 1;
        }
        else {
            this.skillForm.error = 0;
        }
        if (this.userSkilllist.length > 0) {
            var skillExist = this.userSkilllist.find(function (item) {
                return item.skill_id == _this.skillForm.skill_id;
            });
            if (skillExist) {
                this.skillForm.error = 2;
            }
            else {
                this.skillForm.error = 0;
            }
        }
        if (this.skillForm.error == 0) {
            this.loader.skills.submit = true;
            var newSkillData_1 = this.skillForm;
            var selectSkill = this.skillsList.find(function (item) {
                return item.id == newSkillData_1.skill_id;
            });
            newSkillData_1['skill_name'] = selectSkill.name;
            this.setCvInfoIntoLocal('skills', newSkillData_1);
            this.getSkillData();
            _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            this.loader.skills.submit = false;
        }
    };
    /* Function Name : editSkills
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to get skill data on edit mode
      * PARAMS :  skillDetails
      */
    CvinfoComponent.prototype.editSkills = function (skillDetails) {
        this.resetBtnDisplay = false;
        this.skillForm["id"] = skillDetails.id;
        this.skillForm["skill_id"] = skillDetails.skill_id;
        this.skillForm["status"] = skillDetails.status;
    };
    /* Function Name : deleteSkills
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to delete skill details
      * PARAMS :  skillInsex
      */
    CvinfoComponent.prototype.deleteSkills = function (skillIndex) {
        var _this = this;
        this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: '',
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.saveCvInfoData.skills.splice(skillIndex, 1);
                    localStorage.setItem('_cvinfo', JSON.stringify(_this.saveCvInfoData));
                    _this.getSkillData();
                }
            });
        });
    };
    // SKILLS TAB CLOSE //
    // EXPERIENCE TAB //
    /* Function Name : checkValue
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to check the value
      * PARAMS :  event
      */
    CvinfoComponent.prototype.checkValue = function (event) {
        this.experienceForm.is_current = (event.target.checked) ? 1 : 0;
        if (this.experienceForm.is_current === 1) {
            this.experienceForm.to_year = null;
        }
    };
    /* Function Name : getExperienceData
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get experience data of a user
      * PARAMS :
      */
    CvinfoComponent.prototype.getExperienceData = function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = false; }
        this.loader.experience.list = true;
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            this.userExperiencelist = JSON.parse(localStorage.getItem('_cvinfo')).experiences;
            if (this.userExperiencelist.length == 0) {
                this.userData.experience.forEach(function (element) {
                    var newData = {
                        "company_name": (element.company) ? element.company.details[0].name : element.company_name,
                        "position_id": element.position_id,
                        "from_year": element.from_year,
                        "to_year": element.to_year,
                        "is_current": element.is_current,
                        "summery": element.summery,
                        "position_name": element.position.details[0].name
                    };
                    _this.setCvInfoIntoLocal('experience', newData);
                    _this.userExperiencelist.push(newData);
                });
            }
        }
        if (isActive) {
            this.uService.getCvContent('experience')
                .subscribe(function (responseList) {
                _this.loader.experience.list = false;
                if (responseList.statustext == 'success') {
                    _this.positionlist = responseList.data.positionList;
                }
            });
            this.resetExperienceForm();
        }
    };
    /* Function Name : resetExperienceForm
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to reset experience form
      * PARAMS :
      */
    CvinfoComponent.prototype.resetExperienceForm = function () {
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
    };
    /* Function Name : submitExperienceFrom
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to submit experience form
      * PARAMS :
      */
    CvinfoComponent.prototype.submitExperienceFrom = function () {
        var _this = this;
        this.experienceForm.submit = true;
        this.experienceForm.company_name = this.experienceForm.company_name.trim();
        if (!this.experienceForm.company_name || !this.experienceForm.position_id || !this.experienceForm.from_year) {
            this.experienceForm.error = 1;
        }
        else {
            var duplicateExperience = this.userExperiencelist.filter(function (item) {
                return (item.position_id == _this.experienceForm.position_id &&
                    item.company_name == _this.experienceForm.company_name &&
                    item.from_year == _this.experienceForm.from_year &&
                    item.to_year == _this.experienceForm.to_year);
            });
            if (duplicateExperience && duplicateExperience.length > 0) {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR'],
                        icon: 'error'
                    });
                });
                this.experienceForm.error = 1;
            }
            else {
                this.experienceForm.error = 0;
            }
        }
        if (this.experienceForm.error == 0) {
            this.loader.experience.submit = true;
            var newExperienceData_1 = this.experienceForm;
            var selectPosition = this.positionlist.find(function (item) {
                return item.id == newExperienceData_1.position_id;
            });
            newExperienceData_1['position_name'] = selectPosition.name;
            this.setCvInfoIntoLocal('experience', newExperienceData_1);
            this.getExperienceData();
            _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            this.loader.experience.submit = false;
        }
    };
    /* Function Name : editExperience
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get data in edit mode
      * PARAMS :  experienceDetails
      */
    CvinfoComponent.prototype.editExperience = function (experienceDetails) {
        this.resetBtnDisplay = false;
        this.experienceForm["id"] = experienceDetails.id;
        this.experienceForm["company_name"] = experienceDetails.company_name;
        this.experienceForm["position_id"] = experienceDetails.position_id;
        this.experienceForm["from_year"] = experienceDetails.from_year;
        this.experienceForm["to_year"] = experienceDetails.to_year;
        this.experienceForm["is_current"] = experienceDetails.is_current;
        this.experienceForm["summery"] = experienceDetails.summery;
    };
    /* Function Name : deleteExperience
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to delete experience details
      * PARAMS :  experienceIndex
      */
    CvinfoComponent.prototype.deleteExperience = function (experienceIndex) {
        var _this = this;
        this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: '',
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.saveCvInfoData.experiences.splice(experienceIndex, 1);
                    localStorage.setItem('_cvinfo', JSON.stringify(_this.saveCvInfoData));
                    _this.getExperienceData();
                }
            });
        });
    };
    // EXPERIENCE TAB CLOSE //
    // CERTIFICATE TAB //
    /* Function Name : onFileChanged
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get image data on file browse
      * PARAMS :  event
      */
    CvinfoComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        //this.certificateForm.file = event.target.files[0];
        this.certificatePicture = '';
        this.certificateForm.picture = '';
        this.pictureError.status = 0;
        var uploadImage = (event.target.files[0]) ? event.target.files[0] : '';
        if (uploadImage && uploadImage.type.indexOf('image/') == -1) {
            this.pictureError.status = 1;
            return false;
        }
        else {
            this.pictureError.status = 0;
        }
        if (uploadImage && uploadImage.size > 500000) {
            this.pictureSizeError.status = 1;
            this.translate.get('PROFILEEDIT.CERTIFICATE_PIC_SIZE_ERROR').subscribe(function (tData) {
                _this.pictureSizeError.msg = tData;
            });
            return false;
        }
        else {
            this.pictureSizeError.status = 0;
        }
        var reader = new FileReader();
        reader.readAsDataURL(uploadImage);
        reader.onload = function () {
            _this.certificatePicture = reader.result;
            _this.certificateForm.picture = reader.result;
        };
        // console.log(this.certificateForm.file);
    };
    /* Function Name : getCertificateData
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get certificate data
      * PARAMS :
      */
    CvinfoComponent.prototype.getCertificateData = function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = false; }
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            this.userCertificatelist = JSON.parse(localStorage.getItem('_cvinfo')).certificates;
            if (this.userCertificatelist.length == 0) {
                this.userData.certificates.forEach(function (element) {
                    var newData = {
                        "certificate_name": element.certificate_name,
                        "summery": element.summery,
                        "from_year": element.from_year,
                        "to_year": element.to_year,
                        "picture": null
                    };
                    _this.setCvInfoIntoLocal('certificates', newData);
                    _this.userCertificatelist.push(newData);
                });
            }
        }
        if (isActive) {
            this.resetCertificateForm();
        }
    };
    /* Function Name : resetCertificateForm
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to reset certificate form
      * PARAMS :
      */
    CvinfoComponent.prototype.resetCertificateForm = function () {
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
    };
    /* Function Name : submitCertificateFrom
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to submit certificate form
      * PARAMS :
      */
    CvinfoComponent.prototype.submitCertificateFrom = function () {
        this.certificateForm.submit = true;
        this.certificateForm.certificate_name = this.certificateForm.certificate_name.trim();
        if (!this.certificateForm.certificate_name || !this.certificateForm.from_year || !this.certificateForm.to_year) {
            this.certificateForm.error = 1;
        }
        else {
            this.certificateForm.error = 0;
        }
        if (this.certificateForm.error == 0) {
            this.loader.certificate.submit = true;
            var newCertificateData = this.certificateForm;
            this.setCvInfoIntoLocal('certificates', newCertificateData);
            this.getCertificateData();
            _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            this.loader.certificate.submit = false;
        }
    };
    /* Function Name : editCertificate
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get data on edit mode
      * PARAMS :  certificateDetails
      */
    CvinfoComponent.prototype.editCertificate = function (certificateDetails) {
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
    };
    /* Function Name : deleteCertificate
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to delete certificate data
      * PARAMS :  certificateIndex
      */
    CvinfoComponent.prototype.deleteCertificate = function (certificateIndex) {
        var _this = this;
        this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: '',
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.saveCvInfoData.certificates.splice(certificateIndex, 1);
                    localStorage.setItem('_cvinfo', JSON.stringify(_this.saveCvInfoData));
                    _this.getCertificateData();
                }
            });
        });
    };
    // CERTIFICATE TAB CLOSE //
    /* Function Name : validURL
  * Author :
  * Created Date : 15-03-2019
  * Modified Date : *
  * Purpose : to check the valid url
  * PARAMS :  myURL
  */
    // PERSONAL TAB //
    CvinfoComponent.prototype.validURL = function (myURL) {
        var pattern = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
        return pattern.test(myURL);
    };
    /* Function Name : personalDetails
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get personal details
      * PARAMS :
      */
    CvinfoComponent.prototype.personalDetails = function () {
        var _this = this;
        this.loader.personal.list = true;
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            var personal = JSON.parse(localStorage.getItem('_cvinfo')).personal;
            if (personal) {
                this.personalForm = JSON.parse(localStorage.getItem('_cvinfo')).personal;
            }
            else {
                if (this.userData.profile_pic) {
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
                var dob = new Date(this.userData.dob);
                this.personalForm.dob_year = dob.getFullYear();
                var dob_month = dob.getMonth() + 1;
                this.personalForm.dob_month = (dob_month < 10) ? '0' + dob_month : dob_month;
                var dob_date = dob.getDate();
                this.personalForm.dob_date = (dob_date < 10) ? '0' + dob_date : dob_date;
                ;
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
            .subscribe(function (responseCountryList) {
            _this.loader.personal.list = false;
            if (responseCountryList.statustext == 'success') {
                _this.countryList = responseCountryList.data.country;
                _this.countryCodes = responseCountryList.data.country_ph_list;
                _this.getCityList();
            }
        });
    };
    /* Function Name : updatePersonalFrom
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to update personal info
    * PARAMS :
    */
    CvinfoComponent.prototype.updatePersonalFrom = function () {
        var _this = this;
        if (this.cvmaxlimitStatus == 0) {
            this.translate.get(['COMMON.ERROR', 'CV.MAX_CV_MSG'])
                .subscribe(function (tdata) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tdata['COMMON.ERROR'],
                    text: tdata['CV.MAX_CV_MSG'],
                    icon: "error",
                });
            });
        }
        else {
            this.personalForm.submit = true;
            var formPostData = this.personalForm;
            this.personalForm.first_name = this.personalForm.first_name.trim();
            this.personalForm.last_name = this.personalForm.last_name.trim();
            this.personalForm.email = this.personalForm.email.trim();
            this.personalForm.mobile_no = this.personalForm.mobile_no.trim();
            if (!this.personalForm.first_name ||
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
                !this.personalForm.address) {
                this.personalForm.error = 1;
            }
            else {
                this.personalForm.error = 0;
            }
            if (this.personalForm.error == 0) {
                this.loader.personal.submit = true;
                var selectedCountry = this.countryList.find(function (ele) {
                    return ele.id == _this.personalForm.country_id;
                });
                this.personalForm['country_name'] = selectedCountry.name;
                var selectedcity = this.cityList.find(function (ele) {
                    return ele.id == _this.personalForm.city_id;
                });
                this.personalForm['city_name'] = selectedcity.name;
                this.setCvInfoIntoLocal('personal', this.personalForm);
                _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
                this.loader.personal.submit = false;
            }
            else {
                _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            }
        }
    };
    /* Function Name : getCityList
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to get city list
      * PARAMS :
      */
    CvinfoComponent.prototype.getCityList = function () {
        var _this = this;
        this.cityList = [];
        // this.personalForm.city_id = null;
        var countryId = this.personalForm.country_id;
        this.cService.getCityList(countryId)
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.cityList = responseData.data;
            }
        });
    };
    // PERSONAL TAB CLOSE //
    /* Function Name : getProjectDetails
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to get user project details
      * PARAMS :
    */
    CvinfoComponent.prototype.getProjectDetails = function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = false; }
        if (localStorage.getItem('_cp') === '/cv/build' && localStorage.getItem('_cvinfo')) {
            this.saveCvInfoData = JSON.parse(localStorage.getItem('_cvinfo'));
            this.userProjectlist = this.saveCvInfoData.projects;
            if (this.userProjectlist.length == 0) {
                this.userData.projects.forEach(function (element) {
                    var newData = {
                        "name": element.name,
                        "cId": element.company_id,
                        "from": new Date(element.from_date).getTime(),
                        "to": new Date(element.to_date).getTime(),
                        "company_name": element.company.company_name
                    };
                    _this.setCvInfoIntoLocal('projects', newData);
                    _this.userProjectlist.push(newData);
                });
            }
        }
        if (isActive) {
            if (this.saveCvInfoData.experiences && this.saveCvInfoData.experiences.length > 0) {
                this.userCompanyList = this.saveCvInfoData.experiences.map(function (item) {
                    return {
                        "id": item.id,
                        "name": item.company_name
                    };
                });
            }
            this.resetProjectForm();
        }
    };
    /* Function Name : resetProjectForm
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to reset project form
      * PARAMS :
    */
    CvinfoComponent.prototype.resetProjectForm = function () {
        this.projectForm = {
            id: null,
            name: null,
            cId: null,
            company_name: null,
            from: null,
            to: null,
            error: 0,
            submit: false
        };
    };
    /* Function Name : submitProjectFrom
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to submit project form
      * PARAMS :
    */
    CvinfoComponent.prototype.submitProjectFrom = function () {
        var _this = this;
        this.projectForm.submit = true;
        this.projectForm.error = 0;
        if (!this.projectForm.name || !this.projectForm.cId || !this.projectForm.from || !this.projectForm.to) {
            this.projectForm.error = 1;
        }
        else {
            var selectedCompany = this.userCompanyList.find(function (i) {
                return i.id == _this.projectForm.cId;
            });
            if (selectedCompany) {
                this.projectForm.company_name = selectedCompany.name;
            }
            var duplicateProject = this.userProjectlist.filter(function (item) {
                return (item.name == _this.projectForm.name &&
                    item.company_name == _this.projectForm.company_name);
            });
            if (duplicateProject && duplicateProject.length > 0) {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.DUPLICATE_PROJECT_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
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
            var newProjectData_1 = this.projectForm;
            var selectCompany = this.userCompanyList.find(function (item) {
                return item.id == newProjectData_1.cId;
            });
            newProjectData_1['company_name'] = selectCompany.name;
            newProjectData_1['from'] = new Date(newProjectData_1['from']).getTime();
            newProjectData_1['to'] = new Date(newProjectData_1['to']).getTime();
            this.setCvInfoIntoLocal('projects', newProjectData_1);
            this.getProjectDetails();
            _globalConfig__WEBPACK_IMPORTED_MODULE_9__["SCROLL_TO_TOP"]();
            this.loader.project.submit = false;
        }
    };
    /* Function Name : editProject
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to get  project form data on edit mode
      * PARAMS :  project
    */
    CvinfoComponent.prototype.editProject = function (project) {
        this.projectForm = {
            id: (project.id),
            name: project.name,
            cId: project.cId,
            from: new Date(project.from),
            to: new Date(project.to),
            error: 0,
            submit: false
        };
    };
    /* Function Name : deleteProject
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to delete a project
      * PARAMS :  projectIndex
    */
    CvinfoComponent.prototype.deleteProject = function (projectIndex) {
        var _this = this;
        this.translate.get(['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: '',
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.project.submit = false;
                    _this.saveCvInfoData.projects.splice(projectIndex, 1);
                    localStorage.setItem('_cvinfo', JSON.stringify(_this.saveCvInfoData));
                    _this.getProjectDetails();
                }
            });
        });
    };
    /* Function Name : setCvInfoIntoLocal
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to push cv data for building
      * PARAMS :  type, newData
    */
    CvinfoComponent.prototype.setCvInfoIntoLocal = function (type, newData) {
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
                    var editDataIndex = this.saveCvInfoData.educations.findIndex(function (item) {
                        return item.id == newData.id;
                    });
                    this.saveCvInfoData.educations[editDataIndex] = newData;
                }
                else { // add mode
                    newData['id'] = this.saveCvInfoData.educations.length + 1;
                    this.saveCvInfoData.educations.push(newData);
                }
                break;
            case "skills":
                if (newData.id) { // edit mode
                    var editDataIndex = this.saveCvInfoData.skills.findIndex(function (item) {
                        return item.id == newData.id;
                    });
                    this.saveCvInfoData.skills[editDataIndex] = newData;
                }
                else { // add mode
                    newData['id'] = this.saveCvInfoData.skills.length + 1;
                    this.saveCvInfoData.skills.push(newData);
                }
                break;
            case "experience":
                if (newData.id) { // edit mode
                    var editDataIndex = this.saveCvInfoData.experiences.findIndex(function (item) {
                        return item.id == newData.id;
                    });
                    this.saveCvInfoData.experiences[editDataIndex] = newData;
                }
                else { // add mode
                    newData['id'] = this.saveCvInfoData.experiences.length + 1;
                    this.saveCvInfoData.experiences.push(newData);
                }
                break;
            case "certificates":
                if (newData.id) { // edit mode
                    var editDataIndex = this.saveCvInfoData.certificates.findIndex(function (item) {
                        return item.id == newData.id;
                    });
                    this.saveCvInfoData.certificates[editDataIndex] = newData;
                }
                else { // add mode
                    newData['id'] = this.saveCvInfoData.certificates.length + 1;
                    this.saveCvInfoData.certificates.push(newData);
                }
                break;
            case "projects":
                if (newData.id) { // edit mode
                    var editDataIndex = this.saveCvInfoData.projects.findIndex(function (item) {
                        return item.id == newData.id;
                    });
                    this.saveCvInfoData.projects[editDataIndex] = newData;
                }
                else { // add mode
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
                .subscribe(function (responseData) {
                // if (responseData.statustext == 'success'  ) {
                // }
            });
        }
        this.defineChart();
    };
    /* Function Name : defineChart
      * Author :
      * Created Date : 18-03-2019
      * Modified Date : *
      * Purpose : to define the complete chart value of cv
      * PARAMS :  projectIndex
    */
    CvinfoComponent.prototype.defineChart = function () {
        var cvInfo = JSON.parse(localStorage.getItem('_cvinfo'));
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
    };
    /* Function Name : gotToPayment
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to go to the payment and templating page
      * PARAMS :  consultStatus
    */
    CvinfoComponent.prototype.gotToPayment = function (consultStatus) {
        var _this = this;
        if (consultStatus === void 0) { consultStatus = null; }
        var alertText = '';
        var errorTranslateErrArr = [];
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
                        .subscribe(function (tdata) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: tdata['COMMON.ERROR'],
                            text: tdata['CV.MAX_CV_MSG'],
                            icon: "error",
                        });
                    });
                }
                else {
                    localStorage.setItem('_cvt', 'consult');
                    this.route.navigate(['/cv/pay']);
                }
            }
            else {
                this.route.navigate(['/cv/pay']);
            }
        }
        else {
            this.translate.get(errorTranslateErrArr).subscribe(function (tData) {
                for (var i in tData) {
                    alertText += "* " + tData[i] + '<br/>';
                }
                _this.alertPopupMsg.message = alertText;
                _this.modalService.open(_this.alertPopup, { size: 'sm', centered: true, windowClass: 'DefaultModal' });
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alertPopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CvinfoComponent.prototype, "alertPopup", void 0);
    CvinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cvinfo',
            template: __webpack_require__(/*! ./cvinfo.component.html */ "./src/app/cvbuilder/cvinfo/cvinfo.component.html"),
            providers: [_global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_12__["PicturepathPipe"]],
            styles: [__webpack_require__(/*! ./cvinfo.component.scss */ "./src/app/cvbuilder/cvinfo/cvinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__["CvcardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_12__["PicturepathPipe"]])
    ], CvinfoComponent);
    return CvinfoComponent;
}());



/***/ }),

/***/ "./src/app/cvbuilder/cvmessages/cvmessages.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cvbuilder/cvmessages/cvmessages.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit forAllInvitations\">\n  <h2 class=\"withLine\"><span>{{\"CV.CONSULT\" | translate}}</span></h2>\n\n  <div class=\"inviteBlock messages-list-container\">\n    <div class=\"inviteBlockTop clearfix\" >\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p>{{ cvDetails?.cv_name }}</p>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"text-right\">\n            <p>\n              <a class=\"anchor-common\" (click)=\"sendMessage()\"><span>{{\"CV.SEND_MESSAGE\" | translate}}</span></a> &nbsp; | &nbsp;\n              <a class=\"anchor-common\" routerLink=\"/profile/edit\"><span>{{\"CV.GO_TO_LIST\" | translate}}</span></a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{ successMessage }}</div>\n    <p *ngIf=\"loader.list\" class=\"text-center\">\n        <i class=\"fa fa-cog fa-spin\" ></i> \n    </p>\n    <div *ngIf=\"cvCommentList.length > 0\">\n      <div class=\"inviteBlockSingle alt\" *ngFor=\"let comment of cvCommentList; let i = index\"\n        [ngClass]=\"((i%2!=0)?'noBg':'')\">\n\n        <h3>{{ ((comment.post_by_admin == 0)? 'CV.ME' : 'CV.CONSULTANT') | translate }}\n\n            <span>{{ (comment.posted_on*1000)| amTimeAgo:true }} {{ 'NOTIFICATIONS.AGO' |translate }}</span>\n        </h3>\n\n        <p class=\"tXt\">{{ comment.message }}</p>\n        <p class=\"attach\" *ngIf=\"comment.cv_file\">\n          <a href=\"{{ comment.cv_file| picturepath:'cv' }}\" target=\"_blank\" class=\"comment-btn green\">{{ 'CV.REVIEW'| translate }}</a>\n          <a *ngIf=\"!comment.is_refuse && (refuseCount.settings > refuseCount.cv)\" class=\"comment-btn\"\n            (click)=\"refuseCv(comment)\">{{\"CV.REFUSE\" | translate}}</a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- tell us reasone model start -->\n<ng-template #refuseModal let-modal>\n  <h2><span>{{ popupContent.header |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n    <div>\n      <div class=\"alert alert-success\" *ngIf=\"refuseSuccessMessage\">{{ refuseSuccessMessage }}</div>\n      <div class=\"alert alert-danger\" *ngIf=\"refuseErrorMessage\">{{ refuseErrorMessage }}</div>\n      <div class=\"alert alert-danger\" *ngIf=\"popupForm.submit && !popupForm.comment\">\n        {{ 'CV.COMMENT_REQUIRED'  |translate }}</div>\n    </div>\n\n    <div class=\"proEdit\">\n      <div class=\"formWrap alt\">\n        <textarea class=\"inpField fullWidth\" [(ngModel)]=\"popupForm.comment\"\n          placeholder=\"{{ popupContent.placeholder |translate }}\"></textarea>\n      </div>\n      <div class=\"buttonGr\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btnOrange\" name=\"button\"\n            (click)=\"submitMessageFrom()\" [disabled]=\"loader.popupSubmit\"> <i class=\"fa fa-cog fa-spin\" *ngIf=\"loader.popupSubmit\"></i> {{ 'CV.POST' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/cvbuilder/cvmessages/cvmessages.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cvbuilder/cvmessages/cvmessages.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2YnVpbGRlci9jdm1lc3NhZ2VzL2N2bWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cvbuilder/cvmessages/cvmessages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cvbuilder/cvmessages/cvmessages.component.ts ***!
  \**************************************************************/
/*! exports provided: CvmessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvmessagesComponent", function() { return CvmessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 28-03-2019
# Module                : CvmessagesComponent
# Object name           : CvmessagesComponent
# Functionality         : All cv building payment operations
# Purpose               : constructor, ngOnInit, refuseCv
*******************************************************/







var CvmessagesComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 28-03-2019
      * Modified Date : *
      * Purpose : to assign the helpfull obj
      * PARAMS :
    */
    function CvmessagesComponent(activatedRoute, cvService, translate, cService, modalService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.cvService = cvService;
        this.translate = translate;
        this.cService = cService;
        this.modalService = modalService;
        this.cvId = null;
        this.cvCommentList = [];
        this.cvDetails = {};
        this.refuseCount = {
            settings: 0,
            cv: 0
        };
        this.successMessage = '';
        this.refuseSuccessMessage = '';
        this.refuseErrorMessage = '';
        this.popupForm = {
            type: '',
            id: null,
            comment: '',
            submit: false
        };
        this.popupContent = {
            header: '',
            placeholder: ''
        };
        this.loader = {
            popupSubmit: false,
            list: false
        };
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.cvId = params.id;
            }
        });
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
        * Author :
        * Created Date : 28-03-2019
        * Modified Date : *
        * Purpose : to get teh content of cv template
        * PARAMS :
      */
    CvmessagesComponent.prototype.ngOnInit = function () {
        this.getCommentList();
    };
    CvmessagesComponent.prototype.getCommentList = function () {
        var _this = this;
        this.loader.list = true;
        this.cvService.getUserCvComments(this.cvId)
            .subscribe(function (responseData) {
            _this.loader.list = false;
            if (responseData.statustext == 'success') {
                _this.cvCommentList = responseData.data.list;
                _this.refuseCount.settings = responseData.data.cpRefuseCount;
                _this.refuseCount.cv = responseData.data.cvRefuseCount;
                _this.cvDetails = responseData.data.cv;
            }
        });
    };
    /* Function Name : refuseCv
        * Author :
        * Created Date : 28-03-2019
        * Modified Date : *
        * Purpose : open modal to refuse a cv
        * PARAMS :  comment
      */
    CvmessagesComponent.prototype.refuseCv = function (comment) {
        var _this = this;
        this.popupForm.id = comment.id;
        this.popupForm.type = 'refuse';
        this.popupContent.header = 'PROFILE.TELL_ME_WHY';
        this.popupContent.placeholder = 'CV.COMMENT_PLACEHOLDER';
        if ((this.refuseCount.settings - this.refuseCount.cv) == 1) {
            this.translate.get('CV.REFUSE_CONFIRM_MESSAGE')
                .subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: '',
                    text: tData,
                    icon: "warning",
                    buttons: {
                        cancel: true,
                        confirm: true,
                    },
                }).then(function (willDelete) {
                    if (willDelete) {
                        _this.modalService.open(_this.refuseModal, { backdrop: 'static', keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });
                    }
                });
            });
        }
        else {
            this.modalService.open(this.refuseModal, { backdrop: 'static', keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });
        }
    };
    /* Function Name : submitMessageFrom
        * Author :
        * Created Date : 28-03-2019
        * Modified Date : *
        * Purpose : to refuse a cv
        * PARAMS :  comment
      */
    CvmessagesComponent.prototype.submitMessageFrom = function () {
        var _this = this;
        this.popupForm.submit = true;
        if (this.popupForm.comment) {
            var popupaction = null;
            if (this.popupForm.type == 'refuse') {
                popupaction = this.cvService.saveRefuseReason({
                    id: btoa(this.popupForm.id),
                    comment: this.popupForm.comment
                });
            }
            else if (this.popupForm.type == 'send_message') {
                popupaction = this.cvService.sendMessage({
                    id: btoa(this.popupForm.id),
                    comment: this.popupForm.comment
                });
            }
            if (popupaction) {
                this.loader.popupSubmit = true;
                popupaction.subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        _this.refuseSuccessMessage = responseData.message;
                        _this.popupForm = {
                            type: '',
                            id: null,
                            comment: '',
                            submit: false,
                            loader: false
                        };
                        _this.getCommentList();
                    }
                    else {
                        _this.refuseErrorMessage = responseData.message;
                    }
                    _this.loader.popupSubmit = false;
                    setTimeout(function () {
                        _this.refuseSuccessMessage = '';
                        _this.refuseErrorMessage = '';
                    }, 3000);
                });
            }
        }
    };
    /* Function Name : sendMessage
      * Author :
      * Created Date : 02-04-2019
      * Modified Date : *
      * Purpose : open modal to to send message
      * PARAMS :
    */
    CvmessagesComponent.prototype.sendMessage = function () {
        this.popupForm.id = this.cvId;
        this.popupForm.type = 'send_message';
        this.popupContent.header = 'CV.SEND_MESSAGE';
        this.popupContent.placeholder = 'CV.MESSAGE_PLACEHOLDER';
        this.modalService.open(this.refuseModal, { backdrop: 'static', keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('refuseModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CvmessagesComponent.prototype, "refuseModal", void 0);
    CvmessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cvmessages',
            template: __webpack_require__(/*! ./cvmessages.component.html */ "./src/app/cvbuilder/cvmessages/cvmessages.component.html"),
            styles: [__webpack_require__(/*! ./cvmessages.component.scss */ "./src/app/cvbuilder/cvmessages/cvmessages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_3__["CvcardService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], CvmessagesComponent);
    return CvmessagesComponent;
}());



/***/ }),

/***/ "./src/app/cvbuilder/payment/payment.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cvbuilder/payment/payment.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit forCardBuilder\" *ngIf=\"!this.alertPopupMsg.detailsMessage\">\n  <div class=\"formWrap withSelect\">\n    <h2 class=\"withLine\">\n      <span *ngIf=\"!cvDetails\">{{ 'CV.CHOOSE_TEMPLATE'|translate }}</span>\n      <span *ngIf=\"cvDetails\">{{ 'CV.CHANGE_TEMPLATE'|translate }}</span>\n    </h2>\n    <div class=\"alert alert-danger\" *ngIf=\"cvGenerateError\">{{ cvGenerateError }}</div>\n    <span class=\"selectAbs\">\n      <select class=\"inpField\" name=\"\" [(ngModel)]=\"activeCurrency\" (change)=\"setActiveCurrency()\">\n        <option value=\"\">{{ 'CV.CURRENCY'|translate }}</option>\n        <option *ngFor=\"let currency of currencyList\" [value]=\"currency.name\">{{ currency.name }}</option>\n      </select>\n    </span>\n  </div>\n\n  <div class=\"cardSelect\">\n    <p class=\"loader-p\" *ngIf=\"loader.template\">\n      <i class=\"fa fa-cog fa-spin\"></i>\n    </p>\n    \n  </div>\n\n  <div class=\"cardSelect carouselNext\">\n    <div class=\"cardSelectRow alt\" *ngIf=\"templateList.length > 0\">\n      <owl-carousel [options]=\"myCarouselOptions\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\n       <div class=\"item\"  *ngFor=\"let template of templateList\">\n        <div class=\"singleCardSelect\" [class.active]=\"activeTemplate==template.id\"\n        (click)=\"setActiveTemplate(template)\">\n          <img src=\"{{ template.picture | picturepath:'templates' }}\" alt=\"\">\n          <div class=\"cardTxt\" *ngIf=\"template.price>0\">\n\n            <span>{{ activeCurrenySymbol }}</span>\n            {{ priceConversionRate*template.price }}\n          </div>\n          <div class=\"cardTxt\" *ngIf=\"template.price==0\">\n            {{ 'CV.FREE'|translate }}\n          </div>\n        </div>\n       </div>\n       </owl-carousel>\n    </div>\n  </div>\n\n  <div class=\"cardForm\">\n    <div class=\"formWrap\">\n      <input class=\"inpField withBdr fullWidth noBg\" [(ngModel)]=\"cvForm.name\" name=\"cvName\"\n        placeholder=\"{{ 'CV.CV_NAME'| translate }}\">\n      <div class=\"alert alert-danger\" *ngIf=\"cvForm.submit && !cvForm.name\">{{ 'CV.CV_NAME_REQUIRED'| translate }}</div>\n    </div>\n    <div class=\"formWrap\">\n      <textarea class=\"inpField withBdr fullWidth noBg\" [(ngModel)]=\"cvForm.comment\" name=\"cvComment\"\n        placeholder=\"{{ 'CV.CV_DESCRIPTION'| translate }}\"></textarea>\n      <div class=\"alert alert-danger\" *ngIf=\"cvForm.submit && !cvDetails && !cvForm.comment && cvType == 'consult'\">{{ 'CV.CV_COMMENT_REQUIRED'| translate }}\n      </div>\n    </div>\n\n    <!-- <div class=\"row justify-content-center\">\n\n      <div class=\"col-lg-6\">\n        <div class=\"loader-container pay\" *ngIf=\"loader.pay\">\n          <div class=\"loader-content\" >\n            <i class=\"fa fa-cog fa-spin\"></i><br />\n            {{ 'CV.TRANSACTION_LOAD_MSG' | translate }}\n          </div>\n        </div>\n        <div class=\"paymentOpt\">\n          <div class=\"alert alert-danger text-center\"\n            *ngIf=\"cvForm.submit && cvType == 'consult' && cvForm.payStatus==false\">\n            {{ 'CV.CV_PAYMENT_REQUIRED'| translate }}</div>\n\n            <div class=\"alert alert-success text-center\"\n            *ngIf=\"payForm.successMsg\">{{ payForm.successMsg }}</div>\n\n            <div class=\"alert alert-danger text-center\"\n            *ngIf=\"payForm.errorMsg\">{{ payForm.errorMsg }}</div>\n\n          <div class=\"formWrap inlineAll\">\n            <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_ACCEPTED_CARD'| translate }} :</label>\n            <span><img src=\"assets/images/card.png\" alt=\"\"></span>\n          </div>\n          <div class=\"formWrap\">\n            <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_CARD_HOLDER_NAME'| translate }} :</label>\n            <input type=\"text\" [(ngModel)]=\"payForm.cardHolderName\" name=\"cardHolderName\"\n              class=\"col-xl-8 inpField fullWidth\" value=\"\">\n              <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cardHolderName\">{{ 'CV.PAY_NAME_REQUIRED'| translate }}\n                </div>\n          </div>\n          <div class=\"formWrap\">\n            <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_CARD_NUMBER'| translate }} :</label>\n            <input type=\"text\" [(ngModel)]=\"payForm.cardNumber\" name=\"cardNumber\" class=\"col-xl-8 inpField fullWidth\"\n              value=\"\" maxlength=\"16\" (keydown)=\"onlyNumberCheck($event)\">\n              <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cardNumber\">{{ 'CV.PAY_CARD_REQUIRED'| translate }}\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && payForm.cardNumber && payForm.cardNumber.length != 16\">{{ 'CV.PAY_CARD_LENGTH'| translate }}\n                  </div>\n          </div>\n          <div class=\"formWrap inlineAll\">\n            <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_EXP_DATE'| translate }} :</label>\n            \n            <select class=\"inpField autoWidth withSpace\" [(ngModel)]=\"payForm.expMonth\" name=\"expMonth\">\n              <option *ngFor=\"let month of months\" value=\"{{ month }}\">{{ ((month<10)?'0'+month:month) }}</option>\n            </select>\n            \n\n            <select class=\"inpField autoWidth withSpace\" [(ngModel)]=\"payForm.expYear\" name=\"expYear\">\n              <option *ngFor=\"let year of years\" value=\"{{ year }}\">{{ year }}</option>\n            </select>\n            \n            \n            <label for=\"\" >CVV :</label>\n            <input class=\"inpField cvcInp\" type=\"text\" [(ngModel)]=\"payForm.cvvCode\" name=\"cvvCode\" value=\"\" maxlength=\"3\" pattern= \"[0-9]\" (keydown)=\"onlyNumberCheck($event)\">\n            <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cvvCode\">{{ 'CV.PAY_CVV_REQUIRED'| translate }}\n                </div>\n            \n          </div>\n          <div class=\"formWrap alt\">\n            <div class=\"text-center\">\n              <input class=\"submBtn\" type=\"submit\" name=\"\" (click)=\"resetPayForm()\" value=\"{{ 'CV.CANCEL'| translate }}\">\n              <input class=\"submBtn black\" type=\"submit\" name=\"\" value=\"{{ 'CV.PAY'| translate }}\" (click)=\"submitPayForm()\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div class=\"buttonGr\">\n    <div class=\"row\">\n      <!-- <div class=\"col-6\">\n        <a class=\"btnWhite\" href=\"#\">Help Me To Creat My CV</a>\n      </div> -->\n      <div class=\"col-12\">\n        <div class=\"text-right\">\n          <a id=\"finishCVBtn\"></a>\n          <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"gobackToCVUpdate()\" [disabled]=\"loader.pay\"><i aria-hidden=\"true\" class=\"fa fa-arrow-left\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n          <button class=\"btnGreen\" name=\"button\" (click)=\"generateCV($event)\" [disabled]=\"loader.pay\">{{ 'COMMON.FINISH'|translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<ng-template #alertPopup let-modal>\n  <!-- <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span> -->\n  <div class=\"modal-body\" style=\"text-align:center\">\n    {{alertPopupMsg.message}}\n    {{ alertPopupMsg.detailsMessage }}\n    <div class=\"profileDesc\" *ngIf=\"alertPopupMsg.page && alertPopupMsg.page == 'cv_build'\">\n      <a class=\"modBtn\" [routerLink]=\"['/cv/build']\">{{ 'CV.CV_BUILD'|translate }}</a>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/cvbuilder/payment/payment.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cvbuilder/payment/payment.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2YnVpbGRlci9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cvbuilder/payment/payment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cvbuilder/payment/payment.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 22-03-2019
# Module                : PaymentComponent
# Object name           : PaymentComponent
# Functionality         : All cv building payment operations
# Purpose               : constructor, ngOnInit, gobackToCVUpdate, setActiveTemplate, setActiveCurrency, generateCV
*******************************************************/








var PaymentComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to assign the helpfull obj
      * PARAMS :
    */
    function PaymentComponent(route, translate, cvCardService, cService, modalService) {
        this.route = route;
        this.translate = translate;
        this.cvCardService = cvCardService;
        this.cService = cService;
        this.modalService = modalService;
        this.myCarouselOptions = { items: 5, margin: 24, dots: false, nav: true, responsive: { 0: { items: 1 }, 415: { items: 2 }, 767: { items: 3 }, 1023: { items: 4 }, 1199: { items: 5 } } };
        this.templateList = [];
        this.priceConversionRate = 1;
        this.currencyList = [];
        this.currencySymbols = {
            "USD": "$",
            "EGP": "£",
            "AED": "د.إ",
            "SAR": "ر.س"
        };
        this.activeCurrency = 'USD';
        this.activeCurrenySymbol = '$';
        this.activeTemplate = null;
        this.activeTemplatePrice = 0;
        this.loader = {
            template: false,
            pay: false,
        };
        this.cvGenerateError = '';
        this.alertPopupMsg = {
            detailsMessage: '',
            message: '',
            page: ''
        };
        this.cvForm = {
            name: '',
            comment: '',
            payStatus: false,
            submit: false
        };
        this.cvName = '';
        this.cvConsultComment = null;
        this.cvType = '';
        this.years = [];
        this.months = [];
        this.currentYear = new Date().getFullYear();
        this.payForm = {
            "cardHolderName": '',
            "cardNumber": '',
            "expMonth": 1,
            "expYear": '',
            "cvvCode": '',
            "submit": false,
            "successMsg": "",
            "errorMsg": "",
        };
        this.cvDetails = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to get teh content of cv template
      * PARAMS :
    */
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.payForm.expYear = this.currentYear;
        for (var y = this.currentYear; y < this.currentYear + 100; y++) {
            this.years.push(y);
        }
        for (var m = 1; m <= 12; m++) {
            this.months.push(m);
        }
        this.cvType = localStorage.getItem('_cvt');
        var cvContent = localStorage.getItem('_cvinfo');
        var cvError = 0;
        if (!cvContent) {
            cvError = 1;
        }
        else {
            cvContent = JSON.parse(cvContent);
            if (cvContent['personal'] == null) {
                cvError = 1;
            }
        }
        if (cvError == 1) {
            this.translate.get('CV.CHECK_CV_DETAILS_ERROR')
                .subscribe(function (tData) {
                _this.alertPopupMsg.detailsMessage = tData;
                _this.alertPopupMsg.page = 'cv_build';
                _this.modalService.open(_this.alertPopup, { backdrop: 'static', keyboard: false, size: 'sm', centered: true, windowClass: 'DefaultModal' });
            });
        }
        else {
            this.alertPopupMsg.detailsMessage = '';
            this.alertPopupMsg.message = '';
            this.alertPopupMsg.page = '';
            this.loader.template = true;
            this.cvCardService.getTemplateList({
                type: 1
            })
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    _this.templateList = responseData.data;
                }
                _this.loader.template = false;
            });
            this.cvCardService.getCurrencyList()
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    _this.currencyList = responseData.data;
                }
            });
            var cvId = localStorage.getItem('_cvid');
            if (cvId) {
                this.cvCardService.getCvDetails(cvId)
                    .subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        _this.cvDetails = responseData.data;
                        _this.setActiveTemplate(_this.cvDetails.template);
                        _this.cvForm.name = _this.cvDetails.cv_name;
                    }
                });
            }
        }
    };
    /* Function Name : gobackToCVUpdate
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to go back to cv edit page
      * PARAMS :
    */
    PaymentComponent.prototype.gobackToCVUpdate = function () {
        this.route.navigate(['/cv/build']);
    };
    /* Function Name : setActiveTemplate
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to set the active template;
      * PARAMS :  template
    */
    PaymentComponent.prototype.setActiveTemplate = function (template) {
        this.activeTemplate = template.id;
        this.activeTemplatePrice = this.priceConversionRate * template.price;
        if (template.price == 0) {
            this.cvForm.payStatus = true;
        }
        else {
            this.cvForm.payStatus = false;
        }
        this.cvForm.submit = false;
        this.cvGenerateError = '';
    };
    /* Function Name : setActiveCurrency
      * Author :
      * Created Date : 19-03-2019
      * Modified Date : *
      * Purpose : to set active currency
      * PARAMS :
    */
    PaymentComponent.prototype.setActiveCurrency = function () {
        var _this = this;
        var activeCurrency = this.currencyList.find(function (item) {
            return item.name === _this.activeCurrency;
        });
        this.priceConversionRate = activeCurrency.value;
        this.activeCurrenySymbol = this.currencySymbols[activeCurrency.name];
    };
    /* Function Name : generateCV
      * Author :
      * Created Date : 25-03-2019
      * Modified Date : *
      * Purpose : to generate the cv
      * PARAMS :
    */
    PaymentComponent.prototype.generateCV = function (event) {
        var _this = this;
        this.cvForm.submit = true;
        this.cvForm.payStatus = true;
        var cvType = 0;
        if (this.cvType == 'consult') {
            cvType = 1;
        }
        var errorCount = 0;
        if (!this.activeTemplate) {
            this.translate.get('CV.SELECT_CV_ERR')
                .subscribe(function (tData) {
                errorCount += 1;
                _this.cvGenerateError = tData;
            });
        }
        if (!this.cvForm.name) {
            errorCount += 1;
        }
        if (!this.cvDetails && this.cvType == 'consult' && !this.cvForm.comment) {
            errorCount += 1;
        }
        if (!this.cvDetails && this.cvType == 'consult' && this.cvForm.payStatus == false) { //only add mode
            errorCount += 1;
        }
        else if (this.cvDetails && this.cvDetails.template_id != this.activeTemplate && this.cvType == 'consult' && this.cvForm.payStatus == false) {
            errorCount += 1;
            this.cvForm.payStatus = false;
        }
        if (errorCount == 0) {
            var cvContent = localStorage.getItem('_cvinfo');
            var postData = {
                "cvType": cvType,
                "cvData": cvContent,
                "name": this.cvForm.name,
                "comment": this.cvForm.comment,
                "templateId": this.activeTemplate,
                "templatePrice": this.activeTemplatePrice,
                "paymentStatus": Number(this.cvForm.payStatus)
            };
            // console.log(postData);
            // return false;
            if (this.cvDetails) { // edit mode
                postData['id'] = btoa(this.cvDetails.id);
                this.cvCardService.saveCVData(postData)
                    .subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        setTimeout(function () {
                            _this.route.navigate(['/cv/success', responseData.data.token]);
                        }, 1000);
                    }
                });
            }
            else { // add mode
                this.cvCardService.sendCVGenerateRequest(postData)
                    .subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        setTimeout(function () {
                            _this.route.navigate(['/cv/success', responseData.data.token]);
                        }, 1000);
                    }
                });
            }
        }
        else {
            _globalConfig__WEBPACK_IMPORTED_MODULE_7__["SCROLL_TO_TOP"]();
        }
    };
    PaymentComponent.prototype.submitPayForm = function () {
        var _this = this;
        this.payForm.submit = true;
        // this.loader.pay = true;
        var errorCount = 0;
        if (!this.payForm.cardHolderName) {
            errorCount += 1;
        }
        if (!this.payForm.cardNumber) {
            errorCount += 1;
        }
        if (!this.payForm.cvvCode) {
            errorCount += 1;
        }
        if (errorCount == 0) {
            this.loader.pay = true;
            setTimeout(function () {
                _this.payForm = {
                    "cardHolderName": '',
                    "cardNumber": '',
                    "expMonth": 1,
                    "expYear": _this.currentYear,
                    "cvvCode": '',
                    "submit": false
                };
                _this.loader.pay = false;
                _this.cvForm.payStatus = true;
                _this.payForm.successMsg = 'Payment is completed, Now you can continue';
                setTimeout(function () {
                    _this.payForm.successMsg = '';
                }, 5000);
            }, 5000);
        }
    };
    PaymentComponent.prototype.resetPayForm = function () {
        this.payForm = {
            "cardHolderName": '',
            "cardNumber": '',
            "expMonth": 1,
            "expYear": this.currentYear,
            "cvvCode": '',
            "successMsg": "",
            "errorMsg": "",
            "submit": false
        };
    };
    PaymentComponent.prototype.onlyNumberCheck = function (e) {
        if ((e.keyCode >= 96 && e.keyCode <= 105) ||
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 37 && e.keyCode <= 40) ||
            e.keyCode == 8) {
            return true;
        }
        else {
            e.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alertPopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaymentComponent.prototype, "alertPopup", void 0);
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/cvbuilder/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/cvbuilder/payment/payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_6__["CvcardService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cvbuilder-cvbuilder-module.js.map