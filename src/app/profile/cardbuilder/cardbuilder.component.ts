/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 05-04-2019
# Module                : CardbuilderComponent                     
# Object name           : CardbuilderComponent    
# Functionality         : All card building  operations
# Purpose               : constructor, ngOnInit, 
*******************************************************/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from "../../services/users.service";
import { CvcardService } from "../../services/cvcard.service";
import { CommonService } from "../../services/common.service";
import { Router } from '@angular/router';
import * as global from '../../globalConfig';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PicturepathPipe } from '../../global/picturepath.pipe';
import { LoaderService } from '../../loader/loader.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-cardbuilder',
  templateUrl: './cardbuilder.component.html',
  styleUrls: ['./cardbuilder.component.scss'],
  providers: [PicturepathPipe]
})
export class CardbuilderComponent implements OnInit {
  @ViewChild('alertPopup') alertPopup;// for alert popup
  @ViewChild('paymentModal') paymentModal;// for payment popup


  myCarouselOptions = { items: 5, margin: 24, dots: false, nav: true, responsive: { 0: { items: 1 }, 415: { items: 2 }, 767: { items: 3 }, 1023: { items: 4 }, 1199: { items: 5 } } };
  priceConversionRate: any = 1;
  activeCurrency: any = 'USD';
  activeCurrenySymbol: any = '$';
  entryType: string = 'manual';
  currencyList: Array<any> = [];
  currencySymbols: any = {
    "USD": "$",
    "EGP": "£",
    "AED": "د.إ",
    "SAR": "ر.س"
  }
  templateList: Array<any> = [];
  activeTemplate: any = null;
  activeTemplatePrice: any = null;
  cardPhoto: any = null;
  cardForm: any = {
    "title": '',
    "name": '',
    "position": '',
    "mobile": '',
    "email": '',
    "country_id": null,
    "country_name": "",
    "city_id": null,
    "city_name": "",
    "website": '',
    "photo": '',
    "desc": '',
    "payStatus": false,
    "submit": false

  };
  photoErr: any = {
    size: false,
    type: false
  };
  countryList: Array<any> = []; // country list from db
  cityList: Array<any> = []; // city list from db
  loader: any = {
    template: false,
    limit: false,
    pay: false,
    cv: false
  };
  alertPopupMsg: any = {
    message: '',
    type: ''
  }
  payForm: any = {
    "cardHolderName": '',
    "cardNumber": '',
    "expMonth": 1,
    "expYear": '',
    "cvvCode": '',
    "submit": false,
    "successMsg": "",
    "errorMsg": "",
  };
  years: Array<any> = [];
  months: Array<any> = [];
  currentYear: any = new Date().getFullYear();
  userCardList: Array<any> = [];
  limitStatus: any = 1;
  loggedInUser: any = null;
  defaultCard:any = null;
  /* Function Name : constructor
* Author : 
* Created Date : 05-04-2019 
* Modified Date : *
* Purpose : to assign the helpfull obj
* PARAMS :  
*/
  constructor(
    private router: Router,
    private translate: TranslateService,
    private userService: UsersService,
    private cvCardService: CvcardService,
    private cService: CommonService,
    private loderService: LoaderService,
    private filePathPipe: PicturepathPipe,
    private modalService: NgbModal) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);

    });
  }
  /* Function Name : ngOnInit
	* Author :
	* Created Date : 05-04-2019
	* Modified Date : *
	* Purpose : to check the card limit after html render
	* PARAMS :
  */
  ngOnInit() {

    this.getUserCard();
    this.payForm.expYear = this.currentYear;
    for (let y = this.currentYear; y < this.currentYear + 100; y++) {
      this.years.push(y);
    }
    for (let m = 1; m <= 12; m++) {
      this.months.push(m);
    }


    this.cvCardService.getCurrencyList()
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          this.currencyList = responseData.data;
        }

      });

    this.cvCardService.getTemplateList({
      type: 2
    })
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          this.templateList = responseData.data;
        }
        this.loader.template = false;
      });

    this.userService.getCvContent('personal')
      .subscribe((responseCountryList: any) => {
        if (responseCountryList.statustext == 'success') {
          this.countryList = responseCountryList.data.country;
          this.getCityList();
        }
      });



  }

  /* Function Name : getUserCard
	* Author : 
	* Created Date : 27-08-2019 
	* Modified Date : *
	* Purpose : to get card list
	* PARAMS :  
	*/
  getUserCard() {
    this.loggedInUser = this.cService.getLoggedUserData();
    this.cvCardService.getCardList({
      id: btoa((this.loggedInUser._i))
    }).subscribe((responseData: any) => {
      if (responseData.statustext == 'success') {
        let cardList = responseData.data.list;
        this.userCardList = cardList;
        this.userCardList.push({
          card_title: "Preview Card",
          price: '0.00',
          preview: true
        });
        this.limitStatus = responseData.data.limitStatus;
        this.defaultCard = null;
        this.defaultCard = this.userCardList.find((item)=>{
          return item.is_default == 1;
        });
      }
    });

  }

  /* Function Name : getCityList
	* Author : 
	* Created Date : 05-04-2019 
	* Modified Date : *
	* Purpose : to get city list
	* PARAMS :  
	*/
  getCityList() {
    this.cityList = [];
    let countryId = this.cardForm.country_id;
    this.cService.getCityList(countryId)
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          this.cityList = responseData.data;
        }
      })
  }
  /* Function Name : setCardEntryType
* Author :
* Created Date : 08-04-2019
* Modified Date : *
* Purpose : to set card entry type
* PARAMS : type(browse/manual/cv)
*/
  setCardEntryType(type) {
    this.resetCardForm();
    this.entryType = type;
    if (this.entryType == 'cv') {
      this.loader.cv = true;
      this.cvCardService.getDefaultCv()
        .subscribe((responseData: any) => {
          this.loader.cv = false;
          if (responseData.statustext == 'success') {
            let defaultCv = JSON.parse(responseData.data.cv_details);
            this.cardForm.name = defaultCv.personal.first_name + ' ' + defaultCv.personal.last_name;
            this.cardForm.mobile = defaultCv.personal.mobile_no;
            this.cardForm.country_id = defaultCv.personal.country_id;
            this.getCityList();
            this.cardForm.city_id = defaultCv.personal.city_id;
            this.cardForm.website = defaultCv.personal.website;
            this.cardForm.email = defaultCv.personal.email;
            this.cardForm.photo = defaultCv.profilePic;
          } else {
            this.translate.get(['COMMON.ERROR', 'CARD.CV_DATA_ERROR']).subscribe((tData) => {
              swal({
                title: tData['COMMON.ERROR'],
                text: tData['CARD.CV_DATA_ERROR'],
                icon: 'error'
              });
              // this.alertPopupMsg.message = tData;
              // this.alertPopupMsg.type='default_cv';
              // this.modalService.open(this.alertPopup, {  size: 'sm', centered: true, windowClass: 'DefaultModal' });
            })
          }
        })
    }
  }
  /* Function Name : setActiveCurrency
* Author :
* Created Date : 08-04-2019
* Modified Date : *
* Purpose : to set active currency
* PARAMS :
*/
  setActiveCurrency() {
    let activeCurrency = this.currencyList.find((item) => {
      return item.name === this.activeCurrency;
    });
    this.priceConversionRate = activeCurrency.value;
    this.activeCurrenySymbol = this.currencySymbols[activeCurrency.name];
  }
  /* Function Name : setActiveTemplate
	* Author :
	* Created Date : 08-04-2019
	* Modified Date : *
	* Purpose : to set the active template;
	* PARAMS :  template
  */
  setActiveTemplate(template) {
    this.activeTemplate = template.id;
    this.activeTemplatePrice = this.priceConversionRate * template.price;
    this.cardForm.submit = false;
    if (this.activeTemplatePrice == 0) {
      this.cardForm.payStatus = true;
    } else {
      this.cardForm.payStatus = false;
    }
  }
  /* Function Name : saveCardForm
	* Author :
	* Created Date : 09-04-2019
	* Modified Date : *
	* Purpose : to save card 
	* PARAMS :  
  */
  saveCardForm() {
    if (this.limitStatus == 0) {

      this.translate.get(['COMMON.ERROR', 'CARD.BUILD_LIMIT_COMPLETE']).subscribe((tData) => {
        swal({
          title: tData['COMMON.ERROR'],
          text: tData['CARD.BUILD_LIMIT_COMPLETE'],
          icon: "error",
        })
      })
    } else {

      this.cardForm.submit = true;

      let errorCount = 0;
      if (this.entryType != 'browse') {

        if (
          (!this.cardForm.title ||
            !this.cardForm.name ||
            !this.cardForm.mobile ||
            !this.cardForm.country_id ||
            !this.cardForm.city_id ||
            !this.cardForm.email)
        ) {
          errorCount += 1;
        }
        if (!this.activeTemplate) {
          errorCount += 1;
        }
        if (this.cardForm.photo && (this.photoErr.size || this.photoErr.type)) {
          errorCount += 1;
        }
        if (this.cardForm.desc && this.cardForm.desc.split(" ").length > 7) {
          errorCount += 1;
        }
      } else {

        if (!this.cardForm.title || !this.cardPhoto) {
          this.photoErr.type = true;
          errorCount += 1;
        } else {
          this.photoErr.type = false;
        }
      }
      if (errorCount == 0) {
        /* if (this.entryType != 'browse' && (this.cardForm.payStatus == false)) {
          this.modalService.open(this.paymentModal, {
            backdrop: 'static',
            keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal'
          });
        } else {*/

          let postdata = {};
          if (this.entryType == 'browse') {
            postdata = {
              "title": this.cardForm.title,
              "type": this.entryType,
              "card_photo": this.cardPhoto
            }
          } else {
            let selectedCountry = this.countryList.find((item) => {
              return item.id == this.cardForm.country_id;
            });
            this.cardForm.country_name = selectedCountry.name;

            let selectedCity = this.cityList.find((item) => {
              return item.id == this.cardForm.city_id;
            });
            this.cardForm.city_name = selectedCity.name;

            postdata = {
              card_title: this.cardForm.title,
              "type": this.entryType,
              template_id: this.activeTemplate,
              template_price: this.activeTemplatePrice,
              card_details: JSON.stringify(this.cardForm)
            };
          }
          this.cvCardService.saveCard(postdata).subscribe((responseData: any) => {
            if (responseData.statustext == 'success') {
              this.router.navigate(['/card/success', responseData.data.token]);
            }

          });
        /* } */
      } else {
        global.SCROLL_TO_TOP();
      }
    }
  }
  /* Function Name : openBrowsePhoto
	* Author :
	* Created Date : 10-04-2019
	* Modified Date : *
	* Purpose : to browse own card image
	* PARAMS :  
  */
  openBrowsePhoto() {
    document.getElementById('cardImage').click();
  }
  /* Function Name : manageCardPhoto
    * Author :
    * Created Date : 10-04-2019
    * Modified Date : *
    * Purpose : to manage card image for form
    * PARAMS :  
    */
  manageCardPhoto(e) {
    if (e.target.files) {
      this.photoErr.size = false;
      this.photoErr.type = false;
      this.cardForm.photo = null;
      let file = e.target.files[0];
      if (file.size > 256000) { // check image size < 250kb
        this.photoErr.size = true;
      } else if (file.type.indexOf("image/") == -1) {
        this.photoErr.type = true;
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.cardForm.photo = reader.result;
        };
      }
    }
  }
  /* Function Name : ownCardImageManage
    * Author :
    * Created Date : 11-04-2019
    * Modified Date : *
    * Purpose : to manage  own card image
    * PARAMS :  
    */
  ownCardImageManage(e) {
    let file = e.target.files;
    if (file) {
      file = file[0];
      this.photoErr.size = false;
      this.photoErr.type = false;
      this.cardPhoto = '';
      if (file.size > 256000) { // check image size < 250kb
        this.photoErr.size = true;
      } else if (file.type.indexOf("image/") == -1) {
        this.photoErr.type = true;
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.cardPhoto = reader.result;
        };
      }
    }
  }
  /* Function Name : submitPayForm
    * Author :
    * Created Date : 12-04-2019
    * Modified Date : *
    * Purpose : to submit payment form
    * PARAMS :  
    */
  submitPayForm() {
    this.payForm.submit = true;
    // this.loader.pay = true;
    let errorCount = 0;
    if (!this.payForm.cardHolderName) {
      errorCount += 1;
    }
    if (!this.payForm.cardNumber) {
      errorCount += 1;
    }
    if (!this.payForm.cvvCode) {
      errorCount += 1;
    }

    if (errorCount == 0) {
      this.loader.pay = true;
      setTimeout(() => {
        this.resetPayForm();
        this.loader.pay = false;
        this.cardForm.payStatus = true;
        this.saveCardForm();

      }, 5000);
    }
  }
  /* Function Name : resetPayForm
    * Author :
    * Created Date : 12-04-2019
    * Modified Date : *
    * Purpose : to reset the payment form
    * PARAMS :  
    */
  resetPayForm() {
    this.payForm = {
      "cardHolderName": '',
      "cardNumber": '',
      "expMonth": 1,
      "expYear": this.currentYear,
      "cvvCode": '',
      "successMsg": "",
      "errorMsg": "",
      "submit": false
    };
    this.modalService.dismissAll();
  }
  /* Function Name : resetCardForm
    * Author :
    * Created Date : 12-04-2019
    * Modified Date : *
    * Purpose : to reset the card form
    * PARAMS :  
    */
  resetCardForm() {
    this.cardForm = {
      "title": '',
      "name": '',
      "position": '',
      "mobile": '',
      "email": '',
      "country_id": null,
      "country_name": "",
      "city_id": null,
      "city_name": "",
      "website": '',
      "photo": '',
      "desc": '',
      "payStatus": false,
      "submit": false
    };
    this.photoErr = {
      size: false,
      type: false
    };
  }
  /* Function Name : goToCard
      * Author :
      * Created Date : 27-08-2019
      * Modified Date : *
      * Purpose : to go to the user card
      * PARAMS :  card
      */
  goToCard(card) {
    let userId = this.loggedInUser._i;
    if (card.preview) {
      this.cvCardService.saveDefaultCard({
        user_id: btoa(userId)
      })
        .subscribe((responseData) => {
          setTimeout(() => {
            this.loderService.show();
          }, 100)
          setTimeout(() => {
            this.loderService.hide();
            let cvPath = this.filePathPipe.transform('careery-' + userId + '-card.pdf', 'card');
            var win = window.open(cvPath, '_blank');
            win.focus();
          }, 3000);
        })
    } else {
      let cardPath = this.filePathPipe.transform(card.card_file, 'card');
      var win = window.open(cardPath, '_blank');
      win.focus();
    }
  }

  /* Function Name : removeCard
    * Author :
    * Created Date : 27-08-2019
    * Modified Date : *
    * Purpose : to remove user card
    * PARAMS :  card
    */
  removeCard(card) {
    this.translate.get(['CARD.CARD_REMOVE_CONFIRM']).subscribe((tData) => {
      swal({
        title: '',
        text: tData['CARD.CARD_REMOVE_CONFIRM'],
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: true,
        },
      }).then((willDelete) => {
        if (willDelete) {
          this.loader.card_remove = true;
          this.cvCardService.removeCard({
            cardId: btoa(card.id)
          })
            .subscribe((responseData: any) => {
              this.loader.card_remove = false;
              if (responseData.statustext == 'success') {
                this.getUserCard();
              }
            })
        }
      });
    });
  }
/* Function Name : setIsDefault
    * Author :
    * Created Date : 27-08-2019
    * Modified Date : *
    * Purpose : to set user card as default
    * PARAMS :  card
    */
  setIsDefault(card) {
      this.cvCardService.setCardDefault({
        card_id: card.id
      }).subscribe((responsData:any)=>{
        if (responsData.statustext == 'success') {
           this.getUserCard();
        }
      });
  }
}
