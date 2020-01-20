import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from "../../services/common.service";
import { CvcardService } from "../../services/cvcard.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cardbuildersuccess',
  templateUrl: './cardbuildersuccess.component.html',
  styleUrls: ['./cardbuildersuccess.component.scss']
})
export class CardbuildersuccessComponent implements OnInit {
  cardDetails: any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private cService: CommonService,
    private cvcardService: CvcardService) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      let token = params.token;
      this.cvcardService.getCardDetails({
        "card_token": token
      }).subscribe((responsData:any)=>{
        if (responsData.statustext == 'success') {
          this.cardDetails = responsData.data;
        }
      })
    });
  }

}
