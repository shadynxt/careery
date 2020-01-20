/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : DefaultComponent                     
# Object name           : DefaultComponent    
# Functionality         : set up layout 
# Purpose               : constructor, ngOnInit
*******************************************************/
import { Component, OnInit, ViewChild } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { environment as env} from '../../../environments/environment';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @ViewChild('defaultlayout')defaultlayout;
  admin_url : string = env.adminUrl;  
  bgImgUrl : string = '';
  commClassName : string = ''; // set common class for main container
  footerSettings:any = null;
  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : cService
	*/
  constructor(private cService:CommonService ) {
    this.cService.commonContainerCssClass.subscribe((className)=>{
      this.commClassName = className;
    })
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {

    this.cService.getSiteSettings()
    .subscribe((responseData:any)=>{      
      this.footerSettings = responseData.data;
      let bgImgUrl = this.admin_url + 'backend/files/page_banner/original/' + this.footerSettings.settings.home_page_banner; 
      this.defaultlayout.nativeElement.style.backgroundImage = "url('"+bgImgUrl+"')";
      this.cService.setCountryPhoneCode(responseData.data.country_code);
    })
    
  }

}
