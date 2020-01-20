/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-02-2019
# Module                : AfterloginComponent                     
# Object name           : AfterloginComponent    
# Functionality         : All application layout  functions after login
# Purpose               : constructor
*******************************************************/
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../services/common.service';
import { Router } from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { environment as env} from '../../../environments/environment';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.scss']
})
export class AfterloginComponent implements OnInit{
  @ViewChild('afterloginlayout')afterloginlayout;
  footerSettings:any = null;
  admin_url : string = env.adminUrl;  
/* Function Name : constructor
* Author : 
* Created Date : 10-02-2019 
* Modified Date : *
* Purpose : to define all used class object
* PARAMS :  translate, cService, sanitizer
*/
  constructor(
    private router:Router,
    translate: TranslateService,
    private cService: CommonService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });

  }
  ngOnInit() {
    this.cService.getSiteSettings()
    .subscribe((responseData:any)=>{      
      this.footerSettings = responseData.data;
      let bgImgUrl = this.admin_url + 'backend/files/page_banner/original/' + this.footerSettings.settings.home_page_banner; 
      // this.afterloginlayout.nativeElement.style.backgroundImage = "url('"+bgImgUrl+"')";
    })
  }
/* Function Name : changeOfRoutes
* Author : 
* Created Date : 15-03-2019 
* Modified Date : *
* Purpose : set the loclastorage variable of current url
* PARAMS :  
*/  
  changeOfRoutes() {
    
    this.modalService.dismissAll();
    if (this.router.url !='/cv/build' && this.router.url !='/cv/pay') {
      localStorage.removeItem('_cvinfo');
      localStorage.removeItem('_cvt');
      localStorage.removeItem('_cvid');
    }
    localStorage.setItem('_sp', 'profile_user');
    localStorage.setItem("_cp", this.router.url);
  }
}
