/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 09-07-2019
# Module                : UserlevelComponent                     
# Object name           : UserlevelComponent    
# Functionality         : set user level
# Purpose               : constructor, ngOnInit, changeUserLevel
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from '../../services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-userlevel',
  templateUrl: './userlevel.component.html',
  styleUrls: ['./userlevel.component.scss']
})
export class UserlevelComponent implements OnInit {
  activeLevel: any = null;
  /* Function Name : constructor
* Author : 
* Created Date : 09-07-2019
* Modified Date : *
* Purpose : to define the all helpful objects and defin the languages data
* PARAMS : 
*/
  constructor(
    public cService: CommonService,
    private uService: UsersService,
    private translate: TranslateService,
    private route: Router,
  ) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 09-07-2019
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
  }
  /* Function Name : changeUserLevel
* Author : 
* Created Date :09-07-2019
* Modified Date : *
* Purpose : to change user level
* PARAMS : level
*/
  changeUserLevel(level) {
    this.activeLevel = level;
    let postData = {
      experience_level: level
    };
    if (localStorage.getItem("_tmpu")) {
      postData['_u'] = localStorage.getItem("_tmpu");
    }
    this.uService.userLevelUpdate(postData).subscribe((responseData: any) => {
      if (responseData.statustext == 'success') {
        this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          swal({
            title: tData['COMMON.SUCCESS'],
            text: responseData.message,
            icon: 'success'
          }).then(() => {
            this.route.navigate(['setup-profile']);
          });
        });
      }
    });
  }

}
