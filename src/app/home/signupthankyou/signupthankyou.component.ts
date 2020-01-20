/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : SignupthankyouComponent                     
# Object name           : SignupthankyouComponent    
# Functionality         : sign up success operations
# Purpose               : constructor, ngOnInit, resendVerification
*******************************************************/

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../services/common.service';
import { RegisterService } from '../../services/register.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signupthankyou',
  templateUrl: './signupthankyou.component.html',
  styleUrls: ['./signupthankyou.component.scss']
})
export class SignupthankyouComponent implements OnInit {

  resendStatus: boolean = false; // set resend status
  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : 
	*/
  constructor(
    translate: TranslateService,
    private route: Router,
    public registerService: RegisterService,
    private cService: CommonService) {
    this.cService.setCommonContainerCssClass('common');
    this.cService.activelang.subscribe((lang) => {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
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
  }

  /* Function Name : resendVerification
* Author : 
* Created Date : 10-01-2019 
* Modified Date : *
* Purpose : to resend verify mail
* PARAMS : 
*/
  resendVerification() {
    let userId = localStorage.getItem("tmpId");
    this.registerService.resend(userId).subscribe((data) => {
      if (data['statustext'] === 'success') {
        this.resendStatus = true;
      } else {
        this.resendStatus = false;
      }
    });
  }

}
