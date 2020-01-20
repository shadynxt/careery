/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 19-02-2019
# Module                : BlocksmodalComponent                     
# Object name           : BlocksmodalComponent    
# Functionality         : set up content to block a user 
# Purpose               : constructor, ngOnInit, resetForm, openBlockReasonModal, submitBlockReasonFrom, unblockUser
*******************************************************/
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../services/common.service";
import {TranslateService} from '@ngx-translate/core';
import swal from 'sweetalert';
@Component({
  selector: 'app-blocksmodal',
  templateUrl: './blocksmodal.component.html',
  styleUrls: ['./blocksmodal.component.scss']
})
export class BlocksmodalComponent implements OnInit {
  @Output() closeBlock = new EventEmitter(); // event to close the modal
  @ViewChild('content') content;  // reference of modal conatiner
  private errorMessage:string = ''; // set error message
  private successMessage:string = ''; // set success message
  private reasonList:Array<any> = []; // set block  reason list 
  private blockUserId:any = null; // set block user id
  private blockForm :any =  { // block form
    "id":null,
    "rId":null,
    "comment":'',
    "error":0,
    "submit":false
  };
  /* Function Name : constructor
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : cService, modalService, translate
	*/
  constructor(
    private cService: CommonService,
    private modalService: NgbModal,
    private translate: TranslateService) {
      this.cService.activelang.subscribe((lang)=>{

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(lang);
  
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(lang);
  
      });
    }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    
  }
  /* Function Name : resetForm
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to reset form
	* PARAMS : 
	*/
  resetForm() {
    this.errorMessage = '';
    this.successMessage = '';
    this.blockForm =  {
      "id":null,
      "rId":null,
      "comment":'',
      "error":0,
      "submit":false
    };
  }
  /* Function Name : openBlockReasonModal
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to open block modal
	* PARAMS : block_user_id
	*/
  openBlockReasonModal(block_user_id){
    this.resetForm();
    this.cService.blockReasonList().subscribe((listData:any)=>{
      if (listData ) {
        this.reasonList = listData.data;
        this.blockForm.id = btoa(block_user_id);
      }
    });
    this.modalService.open(this.content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
  }

  /* Function Name : submitBlockReasonFrom
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to submit block reason form
  * PARAMS :  
  */
  submitBlockReasonFrom() {

    this.blockForm.submit = true;
    this.blockForm.comment = this.blockForm.comment.trim();
    if (!this.blockForm.rId && !this.blockForm.comment) {

        this.blockForm.error = 1;
        this.translate.get('BLOCKS.BLOCK_ERROR_MSG').subscribe((tData)=>{
          this.errorMessage = tData;  
        })
      } else {
        this.blockForm.error = 0;
        this.errorMessage = '';
      }
    if (this.blockForm.error == 0){
      this.blockForm.rId = btoa(this.blockForm.rId);
      this.cService.blockReasonSubmit(this.blockForm)
        .subscribe((response:any)=> {
          if (response.statustext === 'success') {
            this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
              swal({
                title: tData,
                text: response['message'],
                icon: 'success'
              }).then(()=>{
                this.modalService.dismissAll();
              });
            });
            this.closeBlock.emit(this.blockForm.id);
          } else {
            this.translate.get('COMMON.ERROR').subscribe((tData) => {
              swal({
                title: tData,
                text: response['message'],
                icon: 'error'
              });
            });
          }
          this.blockForm =  {
            "id":null,
            "rId":null,
            "comment":'',
            "error":0,
            "submit":false
          };
        });

    }
    
  }
  /* Function Name : unblockUser
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to unblock a user
  * PARAMS :  
  */
  unblockUser(userId:any) {
    let formPostData = {
        "id": btoa(userId)
    };
    this.cService.unBlockUserSubmit(formPostData)
    .subscribe((response:any)=> {
      this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
        swal({
          title: tData,
          text: response['message'],
          icon: 'success'
        });
      });
      this.closeBlock.emit("unblock");
    });
  }
}
