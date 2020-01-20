import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CvcardService} from "../../services/cvcard.service";
import {CommonService} from '../../services/common.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-cvbuildsuccess',
  templateUrl: './cvbuildsuccess.component.html',
  styleUrls: ['./cvbuildsuccess.component.scss']
})
export class CvbuildsuccessComponent implements OnInit {
  cvToken : any = null;
  cvMessage : Array<any> = [];
  cvResponseData:any ={};
  constructor(
    private cvService: CvcardService,
    private activeRoute : ActivatedRoute,
    private translate: TranslateService,
    private cService:CommonService
  ) {
    this.cService.activelang.subscribe((lang)=>{

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
    this.activeRoute.params.subscribe((params)=>{
      this.cvToken = params.token;
    })
  }

  ngOnInit() {
    this.cvService.getCVSuccessContent({
      c_token : this.cvToken
    })
    .subscribe((responseData:any)=>{
      if (responseData.statustext ==  "success") {
        this.cvResponseData  = responseData.data;
        if (responseData.data.type == 0) {
          let msgIndex = ['CV.CV_BUILD_MSG'];
          
          if (responseData.data.price != 0 && responseData.data.status == 3) { // only not paid and price > 0
            msgIndex.push('CV.CV_BUILD_WATERMARK_MSG');
          }
          this.translate.get(msgIndex)
          .subscribe((tData)=>{
            this.cvMessage.push(tData['CV.CV_BUILD_MSG']);
            if (tData['CV.CV_BUILD_WATERMARK_MSG']) {
              this.cvMessage.push(tData['CV.CV_BUILD_WATERMARK_MSG']);
            }
          })
        } else {
          this.translate.get('CV.CV_CONSULT_MSG', {day:responseData.data.consultDay})
          .subscribe((tData)=>{
            this.cvMessage.push(tData);
          })
        }
      }
    })
  }

}
