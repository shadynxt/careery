/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AccessdenyComponent                     
# Object name           : AccessdenyComponent    
# Functionality         : set up page for access deny 
# Purpose               : constructor, ngOnInit
*******************************************************/
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from "../services/common.service";
@Component({
  selector: 'app-accessdeny',
  templateUrl: './accessdeny.component.html',
  styleUrls: ['./accessdeny.component.scss']
})
export class AccessdenyComponent implements OnInit {
    /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : 
	*/
	constructor(private cService: CommonService, translate: TranslateService) {
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
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
  }

}
