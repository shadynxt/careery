/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 28-03-2019
# Module                : CvmessagesComponent                     
# Object name           : CvmessagesComponent    
# Functionality         : All cv building payment operations
# Purpose               : constructor, ngOnInit, refuseCv
*******************************************************/
import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CvcardService} from '../../services/cvcard.service';
import { TranslateService } from '@ngx-translate/core';
import {CommonService} from '../../services/common.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
@Component({
  selector: 'app-cvmessages',
  templateUrl: './cvmessages.component.html',
  styleUrls: ['./cvmessages.component.scss']
})
export class CvmessagesComponent implements OnInit {
  @ViewChild('refuseModal') refuseModal;// for alert popup
  cvId : any = null;
  cvCommentList: Array<any> = [];
  cvDetails: any = {};
  refuseCount : any = {
    settings: 0,
    cv: 0
  };
  successMessage: any = '';
  refuseSuccessMessage: any = '';
  refuseErrorMessage: any = '';
  popupForm: any = {
    type:'',
    id : null,
    comment: '',
    submit: false
  };
  popupContent :any =  {
    header : '',
    placeholder: ''
  };
  loader:any = {
    popupSubmit : false,
    list:false
  };
  /* Function Name : constructor
	* Author : 
	* Created Date : 28-03-2019 
	* Modified Date : *
	* Purpose : to assign the helpfull obj
	* PARAMS :  
  */
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvcardService,
    private translate: TranslateService,
    private cService:CommonService,
    private modalService: NgbModal
    ) {
    this.activatedRoute.params.subscribe((params)=>{
      if (params.id) {
        this.cvId = params.id; 
      }
    });
    this.cService.activelang.subscribe((lang)=>{

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
  }
/* Function Name : ngOnInit
	* Author : 
	* Created Date : 28-03-2019 
	* Modified Date : *
	* Purpose : to get teh content of cv template 
	* PARAMS :  
  */
  ngOnInit() {
    this.getCommentList();
  }

  getCommentList() {
    this.loader.list = true;
    this.cvService.getUserCvComments(this.cvId)
    .subscribe((responseData:any)=>{
      this.loader.list = false;
      if (responseData.statustext == 'success') {
        this.cvCommentList = responseData.data.list;
        this.refuseCount.settings = responseData.data.cpRefuseCount;
        this.refuseCount.cv = responseData.data.cvRefuseCount;
        this.cvDetails = responseData.data.cv;
      }
    });
  }
/* Function Name : refuseCv
	* Author : 
	* Created Date : 28-03-2019 
	* Modified Date : *
	* Purpose : open modal to refuse a cv 
	* PARAMS :  comment
  */
  refuseCv(comment) {
    this.popupForm.id = comment.id;
    this.popupForm.type = 'refuse';
    this.popupContent.header = 'PROFILE.TELL_ME_WHY';
    this.popupContent.placeholder = 'CV.COMMENT_PLACEHOLDER';
    if ((this.refuseCount.settings-this.refuseCount.cv) == 1) {
      this.translate.get('CV.REFUSE_CONFIRM_MESSAGE')
      .subscribe((tData)=>{
        swal({
          title: '',
          text: tData,
          icon: "warning",
          buttons: {
            cancel: true,
            confirm: true,
          },
        }).then((willDelete) => {
          if (willDelete) {
            this.modalService.open(this.refuseModal, { backdrop: 'static',keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });
          }
        })
      })
      
    } else {
      this.modalService.open(this.refuseModal, { backdrop: 'static',keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });
    }
    
  }
/* Function Name : submitMessageFrom
	* Author : 
	* Created Date : 28-03-2019 
	* Modified Date : *
	* Purpose : to refuse a cv
	* PARAMS :  comment
  */
 submitMessageFrom() {
    this.popupForm.submit = true;
    if (this.popupForm.comment)  {
      let popupaction = null;
      if (this.popupForm.type == 'refuse') {
        popupaction = this.cvService.saveRefuseReason({
          id : btoa(this.popupForm.id),
          comment : this.popupForm.comment
        });
      } else if(this.popupForm.type == 'send_message') {
        popupaction = this.cvService.sendMessage({
          id : btoa(this.popupForm.id),
          comment : this.popupForm.comment
        })
      }
      
      if (popupaction) {
        this.loader.popupSubmit = true;
        popupaction.subscribe((responseData:any)=>{
          if (responseData.statustext == 'success') {
            this.refuseSuccessMessage = responseData.message;
            this.popupForm = {
              type:'',
              id : null,
              comment: '',
              submit: false,
              loader:false
            };
            
            this.getCommentList();
            
          } else {
            this.refuseErrorMessage = responseData.message;
          }
          this.loader.popupSubmit = false;
          setTimeout(()=>{
            this.refuseSuccessMessage = '';
            this.refuseErrorMessage = '';
          },3000);
        });
      }
    }
  }
  /* Function Name : sendMessage
	* Author : 
	* Created Date : 02-04-2019 
	* Modified Date : *
	* Purpose : open modal to to send message 
	* PARAMS :  
  */
  sendMessage() {
    this.popupForm.id = this.cvId;
    this.popupForm.type = 'send_message';
    this.popupContent.header = 'CV.SEND_MESSAGE';
    this.popupContent.placeholder = 'CV.MESSAGE_PLACEHOLDER';
    this.modalService.open(this.refuseModal, { backdrop: 'static',keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal' });    
  }
}
