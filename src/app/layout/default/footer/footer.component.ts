/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : FooterComponent                     
# Object name           : FooterComponent    
# Functionality         : All site setting data population
# Purpose               : constructor, ngOnInit
*******************************************************/

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  @Input('footerSettings')footerSettings = null;
  pageNameList :any = [];
  copyWriteDate: any = new Date().toISOString(); //get copy right date

  allLanguage : any[]; // to assign all language data
  activeLang : string = ''; // to assign active language

  // footerSettings: any = null; // get formated string 
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
    this.copyWriteDate = new Date().toISOString();
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
