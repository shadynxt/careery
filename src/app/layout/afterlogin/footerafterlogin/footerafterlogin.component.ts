/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : FooterComponent                     
# Object name           : FooterComponent    
# Functionality         : All site setting data population
# Purpose               : constructor, ngOnInit
*******************************************************/

import { Component, OnChanges, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-footerafterlogin',
  templateUrl: './footerafterlogin.component.html',
  styleUrls: ['./footerafterlogin.component.scss']
})
export class FooterafterloginComponent implements OnChanges {
  @Input('footerSettings')footerSettings = null;
  pageNameList :any = [];
  copyWriteDate: any = new Date().toISOString(); //get copy right date
  allLanguage: any[]; // to assign all languages
  activeLang: string = ''; // to assign active language
  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : cService, translate
	*/
  constructor(private cService:CommonService, translate: TranslateService) {
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
  /* Function Name : getlanguage
  * Author : 
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to get all language data
  * PARAMS :  
  */
  getlanguage() {
    this.cService.getLanguages().subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {

        this.allLanguage = response['data'];
        this.cService.setActiveLang(localStorage.getItem("_lang"));
      } else {

        console.log('language error');
      }

    });

  }

  /* Function Name : langChange
  * Author : 
  * Created Date : 12-02-2019 
  * Modified Date : *
  * Purpose : to change the language for all application
  * PARAMS :  lang
  */
  langChange(lang) {
    localStorage.setItem("_lang", lang);
    window.location.reload();

  }
  /* Function Name : ngOnChanges
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnChanges() {
    if (this.footerSettings && this.footerSettings.page) {
      let lang = localStorage.getItem('_lang');
      this.pageNameList = this.footerSettings.page.map((item)=>{
        return {
          name : item.details.find((details)=>{
            return details.lang_code == lang;
          }).page_title,
          slug: item.page_slug,
        }
      });
    }
  }

}
