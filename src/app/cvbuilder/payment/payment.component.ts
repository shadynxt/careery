/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 22-03-2019
# Module                : PaymentComponent                     
# Object name           : PaymentComponent    
# Functionality         : All cv building payment operations
# Purpose               : constructor, ngOnInit, gobackToCVUpdate, setActiveTemplate, setActiveCurrency, generateCV
*******************************************************/

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {CommonService} from '../../services/common.service';
import {CvcardService} from '../../services/cvcard.service';
import * as global from '../../globalConfig';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild('alertPopup') alertPopup;// for alert popup
  myCarouselOptions = {items: 5, margin:24, dots: false, nav: true, responsive:{ 0: {items:1}, 415:{items:2}, 767:{items:3}, 1023:{items:4}, 1199:{items:5}}};
  templateList:Array<any> = [];
  priceConversionRate: any = 1;
  currencyList:Array<any> = [];
  currencySymbols:any = {
    "USD":"$",
    "EGP":"£",
    "AED":"د.إ",
    "SAR":"ر.س"
  }
  activeCurrency:any =  'USD';
  activeCurrenySymbol:any = '$';
  activeTemplate:any = null;
  activeTemplatePrice:any = 0;
  loader : any = {
    template: false,
    pay:false,
  }
  cvGenerateError: any = '';
  alertPopupMsg: any = {
    detailsMessage:'',
    message : '',
    page : ''
  };
  cvForm: any = {
    name : '',
    comment: '',
    payStatus:false,
    submit: false
  }
  cvName: any = '';
  cvConsultComment: any = null;
  cvType:any = '';
  years:Array<any> = [];
  months:Array<any> = [];
  currentYear:any = new Date().getFullYear();
  payForm: any = {
    "cardHolderName":'',
    "cardNumber":'',
    "expMonth":1,
    "expYear":'',
    "cvvCode":'',
    "submit":false,
    "successMsg":"",
    "errorMsg":"",
  };
  cvDetails : any = null;
  
  /* Function Name : constructor
	* Author :
	* Created Date : 19-03-2019
	* Modified Date : *
	* Purpose : to assign the helpfull obj
	* PARAMS :
  */
  constructor(
    private route :Router,
    private translate: TranslateService,
    private cvCardService:CvcardService,
    private cService:CommonService,
    private modalService: NgbModal,
  ) {
    this.cService.activelang.subscribe((lang)=>{

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
  ngOnInit() {

    this.payForm.expYear = this.currentYear;
    for (let y = this.currentYear ; y< this.currentYear+100; y++) {
      this.years.push(y);
    }
    for (let m = 1; m<=12; m++) {
      this.months.push(m);
    }

    this.cvType = localStorage.getItem('_cvt');
    let cvContent = localStorage.getItem('_cvinfo');
    let cvError = 0;
    if (!cvContent) {
      cvError = 1;
    } else {
      cvContent = JSON.parse(cvContent);
      if (cvContent['personal'] == null) {
        cvError = 1;
      }
    }
    if (cvError == 1) {
      this.translate.get('CV.CHECK_CV_DETAILS_ERROR')
      .subscribe((tData)=>{
        this.alertPopupMsg.detailsMessage = tData;
        this.alertPopupMsg.page = 'cv_build';
        this.modalService.open(this.alertPopup, { backdrop: 'static',keyboard: false, size: 'sm', centered: true, windowClass: 'DefaultModal' });
      });
    } else {
      this.alertPopupMsg.detailsMessage = '';
      this.alertPopupMsg.message = '';
      this.alertPopupMsg.page = '';
      this.loader.template = true;
      this.cvCardService.getTemplateList({
        type:1
      })
      .subscribe((responseData:any)=>{
        if (responseData.statustext == 'success'){
          this.templateList = responseData.data;
        }
        this.loader.template = false;
      });

      this.cvCardService.getCurrencyList()
      .subscribe((responseData:any)=>{
        if (responseData.statustext == 'success') {
          this.currencyList = responseData.data;
        }

      });
      let cvId = localStorage.getItem('_cvid');
      if (cvId) {
        this.cvCardService.getCvDetails(cvId)
        .subscribe((responseData:any)=>{
          if (responseData.statustext == 'success') {
            this.cvDetails = responseData.data;
            this.setActiveTemplate(this.cvDetails.template);
            this.cvForm.name = this.cvDetails.cv_name;
          }
        });
      }
    }
  }
  /* Function Name : gobackToCVUpdate
	* Author :
	* Created Date : 19-03-2019
	* Modified Date : *
	* Purpose : to go back to cv edit page
	* PARAMS :
  */
  gobackToCVUpdate() {
    this.route.navigate(['/cv/build']);
  }
  /* Function Name : setActiveTemplate
	* Author :
	* Created Date : 19-03-2019
	* Modified Date : *
	* Purpose : to set the active template;
	* PARAMS :  template
  */
  setActiveTemplate(template) {
    this.activeTemplate = template.id;
    this.activeTemplatePrice = this.priceConversionRate*template.price;
    if (template.price == 0) {
      this.cvForm.payStatus = true;
    } else {
      this.cvForm.payStatus = false;
    }
    this.cvForm.submit = false;
    this.cvGenerateError = '';
  }
  /* Function Name : setActiveCurrency
	* Author :
	* Created Date : 19-03-2019
	* Modified Date : *
	* Purpose : to set active currency
	* PARAMS :
  */
  setActiveCurrency() {
    let activeCurrency = this.currencyList.find((item)=>{
      return item.name === this.activeCurrency;
    });
    this.priceConversionRate = activeCurrency.value;
    this.activeCurrenySymbol = this.currencySymbols[activeCurrency.name];
  }
  /* Function Name : generateCV
	* Author :
	* Created Date : 25-03-2019
	* Modified Date : *
	* Purpose : to generate the cv
	* PARAMS :
  */
  generateCV(event) {
    this.cvForm.submit = true;
    this.cvForm.payStatus = true;
    let cvType  = 0;
    if (this.cvType == 'consult') {
      cvType = 1;
    }
    
    let errorCount = 0;
    if (!this.activeTemplate) {
      this.translate.get('CV.SELECT_CV_ERR')
      .subscribe((tData)=>{
        errorCount +=1;  
        this.cvGenerateError = tData;
      });
    }
    if (!this.cvForm.name) {
      errorCount +=1;
    }
    if (!this.cvDetails && this.cvType == 'consult'  && !this.cvForm.comment) {
        errorCount +=1;
    }
    if (!this.cvDetails && this.cvType == 'consult' && this.cvForm.payStatus == false) { //only add mode
      errorCount += 1;
    } else if (this.cvDetails && this.cvDetails.template_id != this.activeTemplate && this.cvType == 'consult' && this.cvForm.payStatus == false) {
      errorCount += 1;
      this.cvForm.payStatus = false;
    }

    if (errorCount == 0) {
      let cvContent = localStorage.getItem('_cvinfo');
      

      let postData = {
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
        .subscribe((responseData:any)=>{
          if (responseData.statustext == 'success'  ) {
            setTimeout(()=>{
              this.route.navigate(['/cv/success', responseData.data.token]);
            },1000);
          }
        });
      } else { // add mode

        this.cvCardService.sendCVGenerateRequest(postData)
        .subscribe((responseData:any)=>{
          if (responseData.statustext == 'success'  ) {
            setTimeout(()=>{
              this.route.navigate(['/cv/success', responseData.data.token]);
            },1000);
          }
        });
      }
    } else {
      global.SCROLL_TO_TOP();
    }
    
  }

  submitPayForm()
  {
    this.payForm.submit = true;
    // this.loader.pay = true;
    let errorCount = 0;
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
      setTimeout(()=>{
        this.payForm = {
          "cardHolderName":'',
          "cardNumber":'',
          "expMonth":1,
          "expYear":this.currentYear,
          "cvvCode":'',
          "submit":false
        };
        this.loader.pay = false;
        this.cvForm.payStatus = true;
        this.payForm.successMsg = 'Payment is completed, Now you can continue';
        setTimeout(()=>{
          this.payForm.successMsg = '';
        },5000);

      },5000);
    }
  }

  resetPayForm() {
    this.payForm = {
      "cardHolderName":'',
      "cardNumber":'',
      "expMonth":1,
      "expYear":this.currentYear,
      "cvvCode":'',
      "successMsg":"",
      "errorMsg":"",
      "submit":false
    };
  }

  onlyNumberCheck(e) {
    if ((e.keyCode >= 96 && e.keyCode<=105) || 
      (e.keyCode >= 48 && e.keyCode<=57) || 
      (e.keyCode >= 37 && e.keyCode<=40) || 
      e.keyCode==8) { 
      return true;
    } 
    else { 
      e.preventDefault(); 
    }
  }

}
