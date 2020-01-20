import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../services/common.service";
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router";
import * as global from '../../globalConfig';
import swal from 'sweetalert';
@Component({
  selector: 'app-seemorenotifications',
  templateUrl: './seemorenotifications.component.html',
  styleUrls: ['./seemorenotifications.component.scss']
})
export class SeemorenotificationsComponent implements OnInit {
  currentTime: any = null;
  yesterdayStartTimestamp: any = null;
  allNotifications: any = {}; // all notifications 
  paginationConfig: any = null; // set pagination config
  totalRows: any = null;
  totaAllInvitations: any = null;
  allInvitations: Array<any> = []; // all invitaions
  successMessage: string = ''; // set success message

  constructor(
    private cService: CommonService,
    private translate: TranslateService,
    private route: Router) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    this.yesterdayStartTimestamp = new Date();
    this.yesterdayStartTimestamp = this.yesterdayStartTimestamp.setDate(this.yesterdayStartTimestamp.getDate() - 1);
    this.yesterdayStartTimestamp = new Date(new Date(this.yesterdayStartTimestamp).setHours(0, 0, 0, 0)).getTime() / 1000;

  }

  ngOnInit() {

    this.paginationConfig = {
      perPage: 10,
      render: (page) => {

        let formPostData = {
          "type": "T,TR,PS,DCV,DCA,R,CS,CA,CD",
          "status": 0,
          "page": page
        };
        this.cService.notificationList(formPostData).subscribe((response: any) => {
          //console.log("after", response);
          this.currentTime = new Date().getTime() / 1000;

          if ((response['statustext'] === 'success')) {
            let notificationList = response.data.list;
            let todayTimeStampGroup = {
              start : new Date(new Date().setHours(0,0,0,0)).getTime()/1000 ,
              end : new Date(new Date().setHours(23,59,59,0)).getTime()/1000
            }
            let yesterdayTimeStampGroup = {
              start :todayTimeStampGroup.start - 86400 ,
              end :  todayTimeStampGroup.end - 86400,
            }
            let resultList = {
              "0":[],
              "1":[],
              "2":[]
            };
            notificationList.forEach(element => {
              if (element.posted_on >= todayTimeStampGroup.start && element.posted_on <= todayTimeStampGroup.end) {
                resultList['0'].push(element);
              }   
              else if (element.posted_on >= yesterdayTimeStampGroup.start && element.posted_on <= yesterdayTimeStampGroup.end) {
                resultList['1'].push(element);
              } else {
                resultList['2'].push(element);
              }
            });
           
            this.allNotifications = resultList;
            this.totalRows = response.data.pagination.rowCount;
          }

        });

      }
    }

    this.connectionInvitations();



  }


  /* Function Name : connectionInvitations
  * Author : 
  * Created Date : 20-03-2019 
  * Modified Date : *
  * Purpose : to get all connection invitations
  * PARAMS :
  */

  connectionInvitations() {

    this.cService.connectionInvitationList().subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.allInvitations = response.data.list;
        this.totaAllInvitations = this.allInvitations.length;
      }

    });
  }

  /* Function Name : acceptInvitation
  * Author : 
  * Created Date : 22-03-2019 
  * Modified Date : *
  * Purpose : to accept invitaion
  * PARAMS : formPostData,friend_id
  */

  acceptInvitation(friend_id: any) {
    let formPostData = {
      "to_id": btoa(friend_id),
      "status": 1
    };
    this.cService.connectionRequest(formPostData).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
          swal({
            title: tData,
            text: response['message'],
            icon: 'success'
          });
        });
        this.connectionInvitations();

      }
    });
  }

  /* Function Name : ignoreInvitation
  * Author : 
  * Created Date : 22-03-2019 
  * Modified Date : *
  * Purpose : to ignore invitaion
  * PARAMS : friend_id, formPostData
  */

  ignoreInvitation(friend_id: any) {
    let formPostData = {
      "to_id": btoa(friend_id),
      "status": 2
    };
    this.cService.connectionRequest(formPostData).subscribe((response: any) => {
      if ((response['statustext'] === 'success')) {
        this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
          swal({
            title: tData,
            text: response['message'],
            icon: 'success'
          });
        });
        this.connectionInvitations();

      }
    });
  }



}
