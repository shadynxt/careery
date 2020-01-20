import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as global from "../../globalConfig";
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { CvcardService } from "../../services/cvcard.service";
import { LoaderService } from '../../loader/loader.service';
@Component({
  selector: 'app-previewcv',
  templateUrl: './previewcv.component.html',
  styleUrls: ['./previewcv.component.scss']
})
export class PreviewcvComponent implements OnInit {
  userData: any = null;
  userImage: any = null;
  constructor(public userService: UsersService,
    private translate: TranslateService,
    private cService: CommonService,
    private cvCardService: CvcardService,
    public loaderService: LoaderService
  ) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
  }

  ngOnInit() {
    let cvUser = localStorage.getItem("_pci");
    if (cvUser) {
      this.userService.userpreviewCvInfo({
        "cv_user": cvUser
      }).subscribe((responseData: any) => {
        if (responseData.data.profile_pic) {
          // this.userImage = 
        }
        this.userData = responseData.data;
      });
    }
  }

  public captureScreen() {
    this.checkUserAllInfoForDefaultCvBild();

    // var data = document.getElementById('contentToConvert');
    // let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    // html2canvas(data).then(canvas => {
    //   // Few necessary setting options
    //   var imgWidth = 208;
    //   // var pageHeight = 295;
    //   var imgHeight = canvas.height * imgWidth / canvas.width;

    //   console.log('canvas', canvas.width, canvas.height);
    //   console.log('final', imgWidth, imgHeight);
    //   // var heightLeft = imgHeight;

    //   const contentDataURL = (canvas.toDataURL('image/png'))

    //   var position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //   pdf.save('MYPdf.pdf'); // Generated PDF
    // });
  }

  /* Function Name : checkUserAllInfoForDefaultCvBild
* Author : 
* Created Date : 23-07-2019 
* Modified Date : *
* Purpose : to check user info to build default cv
* PARAMS :  
*/
  checkUserAllInfoForDefaultCvBild() {

    // if (
    //    this.userData.profile_pic &&
    //   this.userData.about_me &&
    //   this.userData.first_name &&
    //   this.userData.last_name &&
    //   this.userData.mobile_no &&
    //   this.userData.address &&
    //   this.userData.email &&

    //   this.userData.twitter_link &&
    //   this.userData.behance_link &&

    //   this.userData.length > 0 &&
    //   this.userData.length > 0 &&
    //   this.userData.length > 0 &&
    //   this.userData.length > 0
    // ) {

    let personalData = this.userData;
    personalData['city_name'] = this.userData.city.details[0].name;
    personalData['country_name'] = this.userData.country.details[0].name;
    personalData['website'] = (this.userData.website) ? this.userData.website : '';
    let cvInfo = {
      "personal": personalData,
      "profilePic": global.s3URL + 'userspic/' + this.userData.profile_pic,
      "educations": this.userData.degree.map((item) => {
        return {
          "id": item.id,
          "degree_id": item.degree_id,
          "field_id": item.degree_field_id,
          "from_year": item.from_year,
          "to_year": item.to_year,
          "degree_name": item.degreeDetails.details[0].name,
          "degree_field_name": item.degreeFieldDetails.details[0].name,
          "university_name": (item.university) ? item.university.details[0].name : ''
        };
      }),
      "skills": this.userData.skills.map((item) => {
        return {
          "id": item.id,
          "skill_id": item.skill_id,
          "status": item.status,
          "skill_name": item.details[0].name,

        };
      }),
      "experiences": this.userData.experience.map((item) => {
        return {
          "id": item.id,
          "company_name": (item.company_name) ? item.company_name : ((item.company) ? item.company.details[0].name : ''),
          "position_id": item.position_id,
          "from_year": item.from_year,
          "to_year": item.to_year,
          "is_current": item.is_current,
          "summery": item.summery,
          "position_name": item.position.details[0].name

        };
      }),
      "certificates": this.userData.certificates.map((item) => {
        return {
          "id": item.id,
          "certificate_name": item.certificate_name,
          "summery": item.summery,
          "from_year": item.from_year,
          "to_year": item.to_year,
          "picture": item.picture

        };
      }),
      "projects": this.userData.projects.map((item) => {
        return {
          "id": item.id,
          "name": item.name,
          "cId": item.company_id,
          "from": new Date(item.from_date).getTime(),
          "to": new Date(item.to_date).getTime(),
          "company_name": item.company.company_name
        };
      }),
    };
    console.log(cvInfo);
    // return false;
    // let cvContent = localStorage.getItem('_cvinfo');

    let postData = {
      "cvType": 0,
      "cvData": JSON.stringify(cvInfo),
      "name": 'Careery CV',
      "comment": null,
      "templateId": 13,
      "templatePrice": 0,
      "paymentStatus": 1,
      "is_system":1
    };
    this.cvCardService.sendCVGenerateRequest(postData)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          setTimeout(() => {
          this.loaderService.show();
          },100);
          setTimeout(() => {
            var link = document.createElement("a");
            link.download = "Careery CV";
            link.href = global.s3URL + 'cv/' + responseData.data.file;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            this.loaderService.hide();
          }, 5000);
        }
      });
    // }
  }
}
