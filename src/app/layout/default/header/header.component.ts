/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-02-2019
# Module                : HeaderComponent                     
# Object name           : HeaderComponent    
# Functionality         : All application header functions for before login layout
# Purpose               : constructor, ngOnInit, getlanguage, langChange
*******************************************************/
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../services/auth.service';
import {CommonService} from '../../../services/common.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  allLanguage : any[]; // to assign all language data
	activeLang : string = ''; // to assign active language
	/* Function Name : constructor
	* Author : 
	* Created Date : 10-02-2019 
	* Modified Date : *
	* Purpose : to define all used class object
	* PARAMS :  route, authService, translate, cService
	*/
  constructor(
  	private route: Router, 
    public authService : AuthService, 
    translate: TranslateService,
    private cService:CommonService
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
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to get content after html load
  * PARAMS :  
  */
  ngOnInit() {

  	this.activeLang = localStorage.getItem("_lang");
  	this.getlanguage();

  }

	/* Function Name : ngOnInit
  * Author : 
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to get all language data
  * PARAMS :  
  */
	getlanguage()
	{
		// get all language
		this.cService.getLanguages().subscribe((response:any)=>{
		 if((response['statustext'] === 'success')){
		     
		    this.allLanguage = response['data'];
		   
		  } else {
		  	console.log('error');
		  }
		  
		});

	}
	/* Function Name : langChange
  * Author : 
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to change active language
  * PARAMS :  value
  */
	langChange(value)
	{
		localStorage.setItem("_lang", value);
		window.location.reload();

	}

}
