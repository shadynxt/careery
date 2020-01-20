/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 12-06-2019
# Module                : NotificationsettingsComponent                     
# Object name           : NotificationsettingsComponent    
# Functionality         : for notification settings 
# Purpose               : constructor, ngOnInit, saveNotificationSettings
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from "../../services/common.service";
import * as Global from '../../globalConfig';
@Component({
  selector: 'app-notificationsettings',
  templateUrl: './notificationsettings.component.html',
  styleUrls: ['./notificationsettings.component.scss']
})
export class NotificationsettingsComponent implements OnInit {
  settingsSuccessMessage:any = '';
  settingsErrMessage:any = '';
  settingsForm: FormGroup; // privacy form

    /* Function Name : constructor
	* Author : 
	* Created Date : 12-06-2019
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : 
	*/
  constructor(    translate: TranslateService,
    private uService: UsersService,
    private cService: CommonService,
    private formBuilder: FormBuilder) {
      this.cService.activelang.subscribe((lang) => {

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(lang);
  
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(lang);
      });
    }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 12-06-2019
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      "viewing_profile": new FormControl(''),
      "testimonial": new FormControl(''),
      "send_request": new FormControl(''),
      "accept_request": new FormControl(''),
      "my_connection_birth_day": new FormControl('')
    });
    this.uService.getNotificationSettingsData()
    .subscribe((responseData:any)=>{
      if (responseData.statustext == 'success') {
        if (responseData.data.viewing_profile == '1') {
          this.settingsForm.controls['viewing_profile'].setValue(responseData.data.viewing_profile);
        }
        if (responseData.data.testimonial == '1') {
          this.settingsForm.controls['testimonial'].setValue(responseData.data.testimonial);
        }
        if (responseData.data.send_request == '1') { 
          this.settingsForm.controls['send_request'].setValue(responseData.data.send_request);
        }
        if (responseData.data.accept_request == '1') {
          this.settingsForm.controls['accept_request'].setValue(responseData.data.accept_request);
        }
        if (responseData.data.my_connection_birth_day == '1') {
          this.settingsForm.controls['my_connection_birth_day'].setValue(responseData.data.my_connection_birth_day);
        }

       
      }
    });
  }
  /* Function Name : saveNotificationSettings
	* Author : 
	* Created Date : 12-06-2019
	* Modified Date : *
	* Purpose : to save notification settings of a user
	* PARAMS : 
	*/
  saveNotificationSettings() {
    this.settingsErrMessage = '';
    this.settingsSuccessMessage = '';
    this.uService.saveNotificationSettingsData(this.settingsForm.value)
    .subscribe((responseData: any)=>{
      if (responseData.statustext == 'success') {
        this.settingsSuccessMessage = responseData.message;
      } else if (responseData.statustext == 'error') {
        this.settingsErrMessage = responseData.message;
      }
      Global.SCROLL_TO_TOP();
      setTimeout(()=>{
        this.settingsErrMessage = '';
        this.settingsSuccessMessage = '';
      },5000);
    }); 
  }

}
