/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AppComponent                     
# Object name           : AppComponent    
# Functionality         : set up application structure
# Purpose               : constructor
*******************************************************/

import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from './services/common.service';
import { Router } from "@angular/router";
import * as global from './globalConfig';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'version2'; // to set he application title
  rtlCssClass: string = ''; // to add rtl class when lang is AR
/* Function Name : constructor
* Author : 
* Created Date : 10-01-2019 
* Modified Date : *
* Purpose : to define the all helpful objects and define the languages data
* PARAMS : translate,titleService, cService
*/  
  constructor(
    private router:Router,
    translate: TranslateService, 
    private titleService: Title, 
    private cService:CommonService,
    private modalService: NgbModal) {
    
    let lang = global.DEFAULT_LANG;
    if (localStorage.getItem("_lang")) {
    lang = localStorage.getItem("_lang");
    }
    localStorage.setItem("_lang", lang);

    this.cService.setActiveLang(lang);
    this.cService.activelang.subscribe((lang)=>{
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
      if (lang === 'AR') {
        this.rtlCssClass = 'rTl';
      } else {
        this.rtlCssClass = "";
      }
    });

    this.titleService.setTitle( global.APP_TITLE );
    // this.cService.getGuestToken().subscribe((responseData:any)=>{
    //   localStorage.setItem("_TOKEN", responseData.data.token);
    // });
  }

  changeOfRoutes() {
    
  }
}
