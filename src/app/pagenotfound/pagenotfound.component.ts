/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 06-02-2019
# Module                : PagenotfoundComponent                     
# Object name           : PagenotfoundComponent    
# Functionality         : create page not found component
# Purpose               : constructor, ngOnInit
*******************************************************/
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from "../services/common.service";
import {Location} from '@angular/common';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  /* Function Name : constructor
	* Author : 
	* Created Date : 06-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : cService, translate
	*/
  constructor(private cService: CommonService, translate: TranslateService, private _location: Location) {
    this.cService.setCommonContainerCssClass('common');
    this.cService.activelang.subscribe((lang)=>{

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 06-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
  }

  gotToBack() {
    this._location.back();
  }
}
