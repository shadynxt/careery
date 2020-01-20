import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {CommonService} from "../../services/common.service";
import {TranslateService} from '@ngx-translate/core';
import { Router } from "@angular/router";
import * as global from '../../globalConfig';

@Component({
  selector: 'app-all-recommendations',
  templateUrl: './all-recommendations.component.html',
  styleUrls: ['./all-recommendations.component.scss']
})
export class AllRecommendationsComponent implements OnInit {

  paginationConfig : any = null; // set pagination config
  totalRows:any = null;
  currentPage : any = 1; // set current page
  connectionList: Array<any> = []; // set connection list
  recommendationList: Array<any> = []; // set connection list
  currentUserData: any = null; // set current user data
  currentTime : any = null; // set current time
  profile_image_path: string = global.s3URL+'userspic/'; // set user profile image path
  /* Function Name : constructor
	* Author : 
	* Created Date : 05-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : uService, cService, translate, route
	*/  
  constructor(
    private uService: UsersService, 
    private cService:CommonService, 
    private translate: TranslateService,
    private route: Router) {
    this.cService.activelang.subscribe((lang)=>{

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    
  }

  /* Function Name : getMutualFriend
  * Author : 
  * Created Date : 25-03-2019
  * Modified Date : *
  * Purpose : to calculate multal connections
  * PARAMS : 
  */    
  getMutualFriend() {
    let userFriendIdList:any = [];
    let currentUserId = this.currentUserData.id.toString();
    if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
      userFriendIdList = this.currentUserData.friendsIds.friend_ids;
      userFriendIdList = userFriendIdList.split(",");
    }
    this.currentTime = (new Date()).getTime()/1000;
    
    this.recommendationList.forEach((item, index)=>{
      this.recommendationList[index]['mutualFriendCount'] = 0;
      if (item.allFriends.friend_ids) {
        let friendList = item.allFriends.friend_ids;
        friendList = friendList.split(",");
        friendList.splice( friendList.indexOf(currentUserId), 1 );

        let mutualFriendList = userFriendIdList.filter(function(obj) { return friendList.indexOf(obj) > -1; });
        this.recommendationList[index]['mutualFriendCount'] = mutualFriendList.length;

      }
    });
  }
  

     
  ngOnInit() {
    
    this.paginationConfig = {
      perPage: 10,
      render : (page)=>{  
        this.uService.recommendationList().subscribe((responseData:any)=>{
          if (responseData.statustext == 'success') {
             
             if (responseData && responseData.data) {
               this.currentUserData = responseData.data.user;
               this.recommendationList = responseData.data.list;
               this.totalRows = responseData.data.pagination.rowCount;
               this.getMutualFriend();
             }
          }
        });

    
      }
    }
  }


  /* Function Name : gotoProfile
  * Author : 
  * Created Date : 25-03-2019 
  * Modified Date : *
  * Purpose : to go to a user profile
  * PARAMS : recommendCpp
  */  
  gotoProfile(recommendCpp) {
    this.route.navigate(['/', recommendCpp]);
  }

  



}
