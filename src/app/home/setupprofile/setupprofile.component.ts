/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-07-2019
# Module                : SetupprofileComponent                     
# Object name           : SetupprofileComponent    
# Functionality         : to set up new user profile
# Purpose               : constructor, ngOnInit, changeUserLevel
*******************************************************/
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from '../../services/common.service';
import { CvcardService } from "../../services/cvcard.service";
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-setupprofile',
  templateUrl: './setupprofile.component.html',
  styleUrls: ['./setupprofile.component.scss']
})
export class SetupprofileComponent implements OnInit {
  @ViewChild('levelModal') levelModal; // level modal reference
  personalForm: any = {
    "email": '',
    "country_id": null,
    "city_id": null,
    "nationality_id": null
  };
  tmpUser: any = null;
  activeLevel: any = null;
  setUpProfileForm: FormGroup;
  userGender:any = '';
  countryList: Array<any> = [];
  countryCodes: Array<any> = [];
  cityList: Array<any> = [];
  nationalityList: Array<any> = [];
  companyList: Array<any> = [];
  degreeList: Array<any> = [];
  fieldList: Array<any> = [];
  degreeFieldList: Array<any> = [];
  degreeFieldArrayList: Array<any> = [];
  universityList: Array<any> = [];
  fromYears: Array<any> = []; // from years
  toYears: Array<any> = []; // to years
  positionList: Array<any> = [];
  skillsList: Array<any> = [];
  levelList: Array<any> = [];
  dreamJobList: Array<any> = [];
  dreamJobLocationList: Array<any> = [];
  searchLocationtext:any = '';
  activeDreamLocationSearchIndex:any = -1;
  searchCityList:Array<any> = [];
  dreamJobTypeList: Array<any> = [];

  setUpFormSubmit: boolean = false;
  setUpFormMasterError: any = '';
  formMoreFields: any = {
    "education": [],
    "view_education": [],
    "experience": [],
    "view_experience": [],
    "skills": [],
    "view_skills": []
  }
  tabArr: Array<any> = [
    'personal',
    'education',
    'experience',
    'interest'
  ];
  currentTab: any = null;
  /* Function Name : constructor
* Author : 
* Created Date : 10-07-2019
* Modified Date : *
* Purpose : to define the all helpful objects and define the languages data
* PARAMS : 
*/
  constructor(
    public cService: CommonService,
    private uService: UsersService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private cvCardService: CvcardService
  ) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
    this.currentTab = this.tabArr[0];
    this.setUpProfileForm = this.formBuilder.group({
      // "email": [null, Validators.required],
      "country_id": [null, Validators.required],
      "city_id": [null, Validators.required],
      "nationality_id": [null, Validators.required],
      "title": ['', Validators.required],
      "company_id": [null, Validators.required],

      'edu_degree_id': [null, Validators.required],
      'edu_field_id': [null, Validators.required],
      'edu_university_id': [null, Validators.required],
      'edu_grade': ['', Validators.required],
      'edu_start_year': [null, Validators.required],
      'edu_end_year': [null],
      'exp_position_id': [null],
      'exp_company_id': [null],
      'exp_start_date': [null],
      'exp_end_date': [null],
      'skill_id': [null],
      'skill_level': [null],
      "dream_job_id": [null, Validators.required],
      "dream_job_location_id": [null, Validators.required],
      "dream_job_type": [null, Validators.required],
    });
  }
  /* Function Name : educationFormBuild
	* Author : 
	* Created Date : 11-07-2019
	* Modified Date : *
	* Purpose : to build education form
	* PARAMS : 
	*/
  educationFormBuild() {
    let form = this.setUpProfileForm;
    return this.formBuilder.group({
      'degree_id': [form.controls.edu_degree_id.value, Validators.required],
      'field_id': [form.controls.edu_field_id.value, Validators.required],
      'university_id': [form.controls.edu_university_id.value, Validators.required],
      'grade': [form.controls.edu_grade.value, Validators.required],
      'start_year': [form.controls.edu_start_year.value, Validators.required],
      'end_year': [form.controls.edu_end_year.value, Validators.required]
    });

  }
  /* Function Name : experienceFormBuild
	* Author : 
	* Created Date : 11-07-2019
	* Modified Date : *
	* Purpose : to build experience form
	* PARAMS : 
	*/
  experienceFormBuild() {
    return this.formBuilder.group({
      'position_id': [null, Validators.required],
      'company_id': [null, Validators.required],
      'start_date': [null, Validators.required],
      'end_date': [null, Validators.required]
    })
  }
  /* Function Name : skillsFormBuild
	* Author : 
	* Created Date : 11-07-2019
	* Modified Date : *
	* Purpose : to build skill form
	* PARAMS : 
	*/
  skillsFormBuild() {
    return this.formBuilder.group({
      'skill_id': [null, Validators.required],
      'level': [null, Validators.required]
    })
  }
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 10-07-2019
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {


    this.getPersonalDetails();
    this.getInterestDetails();
    this.translate.get(["PROFILEEDIT.SKILLS_STATUS_EXCELLENT", "PROFILEEDIT.SKILLS_STATUS_VERY_GOOD", "PROFILEEDIT.SKILLS_STATUS_GOOD", "PROFILEEDIT.SKILLS_STATUS_FRESH"])
      .subscribe((tData) => {
        this.levelList.push({ "id": 1, "name": tData["PROFILEEDIT.SKILLS_STATUS_EXCELLENT"] });
        this.levelList.push({ "id": 2, "name": tData["PROFILEEDIT.SKILLS_STATUS_VERY_GOOD"] });
        this.levelList.push({ "id": 3, "name": tData["PROFILEEDIT.SKILLS_STATUS_GOOD"] });
        this.levelList.push({ "id": 4, "name": tData["PROFILEEDIT.SKILLS_STATUS_FRESH"] });
      });
    this.translate.get(["COMMON.FULL_TIME", "COMMON.PART_TIME", "COMMON.FREELANCER", "COMMON.WORK_FROM_HOME", "COMMON.STUDENT_ACTIVITIES", "COMMON.VOLUNTEERING"])
      .subscribe((tData) => {
        this.dreamJobTypeList.push({ "id": 1, "name": tData["COMMON.FULL_TIME"] });
        this.dreamJobTypeList.push({ "id": 2, "name": tData["COMMON.PART_TIME"] });
        this.dreamJobTypeList.push({ "id": 3, "name": tData["COMMON.FREELANCER"] });
        this.dreamJobTypeList.push({ "id": 4, "name": tData["COMMON.WORK_FROM_HOME"] });
        this.dreamJobTypeList.push({ "id": 5, "name": tData["COMMON.STUDENT_ACTIVITIES"] });
        this.dreamJobTypeList.push({ "id": 6, "name": tData["COMMON.VOLUNTEERING"] });
      })

    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y > currentYear - 100; y--) {
      this.fromYears.push(y);
    }
  }
  /* Function Name : getCityList
* Author : 
* Created Date : 10-07-2019 
* Modified Date : *
* Purpose : to get city list
* PARAMS :  
*/
  getCityList() {
    this.cityList = [];
    this.personalForm.city_id = null;
    let countryId = this.setUpProfileForm.get('country_id').value;
    this.cService.getCityList(countryId)
      .subscribe((responseData: any) => {
        if (responseData.statustext === 'success') {
          this.cityList = responseData.data;
        }
      })
  }
  /* Function Name : getDegreeFields
	* Author : 
	* Created Date : 10-07-2019 
	* Modified Date : *
	* Purpose : to get degree field data
	* PARAMS : 
	*/
  getDegreeFields() {
    let degId = this.setUpProfileForm.controls.edu_degree_id.value;
    // this.setUpProfileForm.controls.education['controls'][index]['controls'].degree_id.setValue(degId);

    if (this.degreeFieldList) {
      let degreeFileds = this.degreeFieldList;
      this.setUpProfileForm.controls.edu_field_id.setValue(null);
      this.degreeFieldArrayList = [];
      this.degreeFieldArrayList = degreeFileds.filter((i) => {
        return i.degree_id == degId;
      });
    }
  }
  /* Function Name : addmoreFields
	* Author : 
	* Created Date : 10-07-2019 
	* Modified Date : *
	* Purpose : to add more form fields
	*/
  addmoreFields(type) {
    const control = <FormArray>this.setUpProfileForm.controls[type];
    this.setUpFormSubmit = true;
    switch (type) {
      case "education":
        if (
          this.setUpProfileForm.controls.edu_degree_id.value &&
          this.setUpProfileForm.controls.edu_field_id.value &&
          this.setUpProfileForm.controls.edu_university_id.value &&
          this.setUpProfileForm.controls.edu_grade.value &&
          this.setUpProfileForm.controls.edu_start_year.value &&
          this.setUpProfileForm.controls.edu_end_year.value
        ) {
          if (this.formMoreFields.education.find((item)=>{ return (item.degree_id ==  this.setUpProfileForm.controls.edu_degree_id.value) }))  {
        
            this.translate.get(['COMMON.ERROR', 'COMMON.DEGREE_EXIST']).subscribe((tData) => {
              swal({
                title: tData['COMMON.ERROR'],
                text: tData['COMMON.DEGREE_EXIST'],
                icon: 'error'
              });
            });
          } else {
            let eduObj = {
              "degree_id": this.setUpProfileForm.controls.edu_degree_id.value,
              "field_id": this.setUpProfileForm.controls.edu_field_id.value,
              "university_id": this.setUpProfileForm.controls.edu_university_id.value,
              "grade": this.setUpProfileForm.controls.edu_grade.value,
              "start_year": this.setUpProfileForm.controls.edu_start_year.value,
              "end_year": this.setUpProfileForm.controls.edu_end_year.value,
            };
            let eduViewObj = {
              "degree": this.degreeList.find((i) => { return i.id == eduObj.degree_id }),
              "field": this.degreeFieldList.find((i) => { return i.id == eduObj.field_id }),
              "university": this.universityList.find((i) => { return i.id == eduObj.university_id }),
              "grade": eduObj.grade,
              "start_year": eduObj.start_year,
              "end_year": eduObj.end_year,
            };
            this.formMoreFields.education.push(eduObj);
            this.formMoreFields.view_education.push(eduViewObj);

            this.setUpProfileForm.controls.edu_degree_id.setValue(null);
            this.setUpProfileForm.controls.edu_field_id.setValue(null);
            this.setUpProfileForm.controls.edu_university_id.setValue(null);
            this.setUpProfileForm.controls.edu_grade.setValue(null);
            this.setUpProfileForm.controls.edu_start_year.setValue(null);
            this.setUpProfileForm.controls.edu_end_year.setValue(null);
          }
          this.setUpFormSubmit = false;
        }
        break;
      case "experience":
        if (
          this.setUpProfileForm.controls.exp_position_id.value &&
          this.setUpProfileForm.controls.exp_company_id.value &&
          this.setUpProfileForm.controls.exp_start_date.value
        ) {

          let expObj = {
            "position_id": this.setUpProfileForm.controls.exp_position_id.value,
            "company_id": this.setUpProfileForm.controls.exp_company_id.value,
            "start_date": this.setUpProfileForm.controls.exp_start_date.value.toISOString(),
            "end_date": (this.setUpProfileForm.controls.exp_end_date.value) ? this.setUpProfileForm.controls.exp_end_date.value.toISOString() : ''
          };
          let expViewObj = {
            "position": this.positionList.find((i) => { return i.id == expObj.position_id }),
            "company": this.companyList.find((i) => { return i.id == expObj.company_id }),
            "start_date": expObj.start_date,
            "end_date": expObj.end_date

          };
          this.formMoreFields.experience.push(expObj);
          this.formMoreFields.view_experience.push(expViewObj);
          this.setUpProfileForm.controls.exp_position_id.setValue(null);
          this.setUpProfileForm.controls.exp_company_id.setValue(null);
          this.setUpProfileForm.controls.exp_start_date.setValue(null);
          this.setUpProfileForm.controls.exp_end_date.setValue(null);
          this.setUpFormSubmit = false;
        }
        break;
      case "skills":
        if (
          this.setUpProfileForm.controls.skill_id.value &&
          this.setUpProfileForm.controls.skill_level.value
        ) {
          if (this.formMoreFields.skills.find((item)=>{ return (item.skill_id ==  this.setUpProfileForm.controls.skill_id.value) }))  {
        
            this.translate.get(['COMMON.ERROR', 'COMMON.SKILL_EXIST']).subscribe((tData) => {
              swal({
                title: tData['COMMON.ERROR'],
                text: tData['COMMON.SKILL_EXIST'],
                icon: 'error'
              });
            });
          } else {
            let skillObj = {
              "skill_id": this.setUpProfileForm.controls.skill_id.value,
              "skill_level": this.setUpProfileForm.controls.skill_level.value
            };
            let skillViewObj = {
              "skill": this.skillsList.find((i) => { return i.id == skillObj.skill_id }),
              "skill_level": this.levelList.find((i) => { return i.id == skillObj.skill_level })

            };
            this.formMoreFields.skills.push(skillObj);
            this.formMoreFields.view_skills.push(skillViewObj);

            this.setUpProfileForm.controls.skill_id.setValue(null);
            this.setUpProfileForm.controls.skill_level.setValue(null);
          }
          this.setUpFormSubmit = false;
        }
        break;
    }
  }
  /* Function Name : removeFields
* Author : 
* Created Date : 10-07-2019 
* Modified Date : *
* Purpose : to remove form fields
*/
  removeFields(type, index) {
    if (type == 'education') {
      this.formMoreFields.education.splice(index, 1);
      this.formMoreFields.view_education.splice(index, 1);
    } else if (type == 'experience') {
      this.formMoreFields.experience.splice(index, 1);
      this.formMoreFields.view_experience.splice(index, 1);
    } else if (type == 'skills') {
      this.formMoreFields.skills.splice(index, 1);
      this.formMoreFields.view_skills.splice(index, 1);
    }

  }
  /* Function Name : checkTabFormvalidation
	* Author : 
	* Created Date : 22-07-2019 
	* Modified Date : *
	* Purpose : to check setup form validation
	*/
  checkTabFormvalidation() {
    this.setUpFormMasterError = '';
    this.translate.get(['COMMON.SUCCESS', 'COMMON.ERROR', 'PROFILE.PERSONAL_INFO', 'PROFILE.EDUCATION', 'PROFILE.EXPERIENCE', 'PROFILE.SKILLS', 'COMMON.AND', 'COMMON.CAREERY_INTEREST', 'COMMON.NOT_FILLED_PROPERLY'])
      .subscribe((tData) => {
        this.setUpFormSubmit = true;
        if (this.currentTab == 'personal') {
          if (
            (this.setUpProfileForm.controls['email'] && this.setUpProfileForm.controls['email'].errors) ||
            (this.setUpProfileForm.controls['mobile_no'] && this.setUpProfileForm.controls['mobile_no'].errors) ||
            (this.setUpProfileForm.controls['country_id'] && this.setUpProfileForm.controls['country_id'].errors) ||
            (this.setUpProfileForm.controls['city_id'] && this.setUpProfileForm.controls['city_id'].errors) ||
            (this.setUpProfileForm.controls['nationality_id'] && this.setUpProfileForm.controls['nationality_id'].errors)
          ) {
            this.setUpFormMasterError = tData['PROFILE.PERSONAL_INFO'] + tData['COMMON.NOT_FILLED_PROPERLY'];
          }
        } else if (this.currentTab == 'education') {
          if (
            (this.formMoreFields.education.length == 0) &&
            (
              (this.setUpProfileForm.controls['edu_degree_id'] && this.setUpProfileForm.controls['edu_degree_id'].errors) ||
              (this.setUpProfileForm.controls['edu_field_id'] && this.setUpProfileForm.controls['edu_field_id'].errors) ||
              (this.setUpProfileForm.controls['edu_university_id'] && this.setUpProfileForm.controls['edu_university_id'].errors) ||
              (this.setUpProfileForm.controls['edu_grade'] && this.setUpProfileForm.controls['edu_grade'].errors) ||
              (this.setUpProfileForm.controls['edu_start_year'] && this.setUpProfileForm.controls['edu_start_year'].errors)
            )
          ) {
            this.setUpFormMasterError = tData['PROFILE.EDUCATION'] + tData['COMMON.NOT_FILLED_PROPERLY'];
          } else {
            this.addmoreFields('education');
          }
        } 
        else if (this.currentTab == 'experience') {
          if (
              (
                (this.setUpProfileForm.controls['exp_position_id'] && !this.setUpProfileForm.controls['exp_position_id'].errors) &&
                (this.setUpProfileForm.controls['exp_company_id'] && !this.setUpProfileForm.controls['exp_company_id'].errors) &&
                (this.setUpProfileForm.controls['exp_start_date'] && !this.setUpProfileForm.controls['exp_start_date'].errors)
              )
          )
            {
              this.addmoreFields('experience');
            }
            if (
              (
                (this.setUpProfileForm.controls['skill_id'] && !this.setUpProfileForm.controls['skill_id'].errors) &&
                (this.setUpProfileForm.controls['skill_level'] && !this.setUpProfileForm.controls['skill_level'].errors)
              )
            )
           {
            this.addmoreFields('skills');
              // this.setUpFormMasterError = tData['PROFILE.EXPERIENCE'] + ' ' + tData['COMMON.AND'] + ' ' + tData['PROFILE.SKILLS'] + ' ' + tData['COMMON.NOT_FILLED_PROPERLY'];
            }
        }
        else if (this.currentTab == 'interest') {
          if (
            (this.setUpProfileForm.controls['dream_job_id'] && this.setUpProfileForm.controls['dream_job_id'].errors) ||
            (this.setUpProfileForm.controls['dream_job_location_id'] && this.setUpProfileForm.controls['dream_job_location_id'].errors) ||
            (this.setUpProfileForm.controls['dream_job_type'] && this.setUpProfileForm.controls['dream_job_type'].errors) ||
            (this.setUpProfileForm.controls['dream_job_type'] && this.setUpProfileForm.controls['dream_job_type'].errors)
          ) {
            this.setUpFormMasterError = tData['COMMON.CAREERY_INTEREST'] + ' ' + tData['COMMON.NOT_FILLED_PROPERLY'];
          }
        }
        if (this.setUpFormMasterError) {
          swal({
            title: tData['COMMON.ERROR'],
            text: this.setUpFormMasterError,
            icon: 'error'
          })
        }
      })
  }
  /* Function Name : setActive
    * Author : 
    * Created Date : 11-07-2019 
    * Modified Date : *
    * Purpose : to set active tab
    * PARAMS : tabType, tab
    */

  setActive(tabType, tab, index = null) {
    this.setUpFormMasterError = '';
    if ((tabType == 'current' && (this.tabArr.indexOf(tab.activeId) < index) ) || tabType == 'next') {
      this.checkTabFormvalidation();
    }
    if (tabType == 'current' && !this.setUpFormMasterError) {
      tab.select(this.tabArr[index]);
      this.currentTab = tab.activeId;
    } else {

      this.currentTab = tab.activeId;
      let currentTabIndex = this.tabArr.indexOf(this.currentTab);

      if (tabType == 'next' && !this.setUpFormMasterError) {
        tab.select(this.tabArr[currentTabIndex + 1]);
      } else if (tabType == 'prev') {
        tab.select(this.tabArr[currentTabIndex - 1]);
      }
    }

    let postData = {};
    if (localStorage.getItem("_tmpu")) {
      let user = CryptoJS.AES.decrypt(localStorage.getItem("_tmpu"), 'careery');
      user = JSON.parse(user.toString(CryptoJS.enc.Utf8));
      this.tmpUser = user;
      postData['_u'] = btoa(user);
    }
    if (this.currentTab == 'personal') {
      this.getPersonalDetails();
    }
    else if (this.currentTab == 'education') {
      if (this.degreeList.length == 0 && this.degreeFieldList.length == 0 && this.universityList.length == 0) {
        postData['type'] = 'education';
        this.uService.userSetupInfo(postData)
        .subscribe((responseData: any) => {
          if (responseData.statustext == 'success') {
            this.degreeList = responseData.data.degree;
            this.degreeFieldList = responseData.data.degree_field;
            this.universityList = responseData.data.university;
          }
        })
      }
    }
    else if (this.currentTab == 'experience') {
      if (this.companyList.length == 0  && this.skillsList.length == 0) {
        postData['type'] = 'exp-skill';
        this.uService.userSetupInfo(postData)
        .subscribe((responseData: any) => {
          if (responseData.statustext == 'success') {
          this.companyList = responseData.data.company;
          this.positionList = responseData.data.position_list;
          this.skillsList = responseData.data.skills;
          }
        })
      }
    }
    else if (this.currentTab == 'interest') {
      
    }
  }
  /* Function Name : getPersonalDetails
    * Author : 
    * Created Date : 08-08-2019 
    * Modified Date : *
    * Purpose : to get personal details
    * PARAMS : 
    */
  getPersonalDetails() {
    let postData = {};
    if (localStorage.getItem("_tmpu")) {
      let user = CryptoJS.AES.decrypt(localStorage.getItem("_tmpu"), 'careery');
      user = JSON.parse(user.toString(CryptoJS.enc.Utf8));
      this.tmpUser = user;
      postData['_u'] = btoa(user);
    }
    if (this.countryList.length == 0 && this.nationalityList.length == 0) {
      postData['type'] = 'personal';
      this.uService.userSetupInfo(postData)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
          let userData = responseData.data.user;
          this.userGender = responseData.data.user.gender;
          this.countryList = responseData.data.country_list;
          this.nationalityList = responseData.data.nationality_list;
          
          
          if (!userData.experience_level) {
            this.openLevelModal();
          }
          if (userData.email) {
            this.countryCodes = responseData.data.country_ph_list;
            let selectCode = this.countryCodes[0];
            this.setUpProfileForm.addControl('mobile_code', this.formBuilder.control(selectCode.code, Validators.required));

            this.setUpProfileForm.addControl('mobile_no', this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[0-9]+$')]));
          } else {
            this.setUpProfileForm.addControl('email', this.formBuilder.control('', [Validators.required, Validators.email]));
          }
        }
      });
    }
  }
  /* Function Name : getPersonalDetails
  * Author : 
  * Created Date : 08-08-2019 
  * Modified Date : *
  * Purpose : to get personal details
  * PARAMS : 
  */
  getInterestDetails() {
    let postData = {};
    if (localStorage.getItem("_tmpu")) {
      let user = CryptoJS.AES.decrypt(localStorage.getItem("_tmpu"), 'careery');
      user = JSON.parse(user.toString(CryptoJS.enc.Utf8));
      this.tmpUser = user;
      postData['_u'] = btoa(user);
    }
    if (this.dreamJobList.length == 0  && this.dreamJobLocationList.length == 0) {
      postData['type'] = 'interest';
      this.uService.userSetupInfo(postData)
      .subscribe((responseData: any) => {
        if (responseData.statustext == 'success') {
        this.dreamJobList = responseData.data.dream_job_list;
        this.dreamJobLocationList = responseData.data.city_list;
        this.positionList = responseData.data.position_list;
        }
      })
    }
  }
  /* Function Name : setDreamJobType
* Author : 
* Created Date : 10-07-2019 
* Modified Date : *
* Purpose : to set dream job type
*/
  setDreamJobType(type) {
    this.setUpProfileForm.controls.dream_job_type.setValue(type.id);
  }

  /* Function Name : changeTabEvent
* Author : 
* Created Date : 10-07-2019 
* Modified Date : *
* Purpose : to change tab 
*/
  changeTabEvent(e) {
    this.setUpFormSubmit = false;
    this.currentTab = e.nextId;
  }
  /* Function Name : setUpProfileSubmitAction
	* Author : 
	* Created Date : 12-07-2019 
	* Modified Date : *
	* Purpose : to save user profile data
	*/
  setUpProfileSubmitAction() {
    this.setUpFormSubmit = true;
    this.checkTabFormvalidation();
    this.translate.get(['COMMON.SUCCESS', 'COMMON.ERROR'])
      .subscribe((tData) => {
        if (!this.setUpFormMasterError) {
          let postData = this.setUpProfileForm.value;
          postData['education'] = this.formMoreFields.education;
          postData['skills'] = this.formMoreFields.skills;
          postData['experience'] = this.formMoreFields.experience;
          if (this.tmpUser) {
            postData['_u'] = btoa(this.tmpUser);
          }
          this.uService.userSaveSetupInfo(postData)
            .subscribe((responseData: any) => {
              if (responseData.statustext == 'success') {
                swal({
                  title: tData['COMMON.SUCCESS'],
                  text: responseData.message,
                  icon: 'success'
                }).then(() => {
                  localStorage.removeItem("_tmpu");
                  if (this.tmpUser) {
                    this.router.navigate(['/']);
                  } else {
                    this.cService.setSetupProfile(null);
                    this.router.navigate(['profile']);
                  }
                })
              } else {
                swal({
                  title: tData['COMMON.ERROR'],
                  text: responseData.message,
                  icon: 'error'
                })
              }
            })
        }
      })
  }

  openLevelModal() {
    this.modalService.open(this.levelModal, {
      size: 'lg', centered: true, backdrop: 'static',
      keyboard: false, windowClass: 'DefaultModal'
    });
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
    if (this.tmpUser) {
      postData['_u'] = btoa(this.tmpUser);
    }
    this.uService.userLevelUpdate(postData).subscribe((responseData: any) => {
      if (responseData.statustext == 'success') {
        this.translate.get(['COMMON.SUCCESS']).subscribe((tData) => {
          swal({
            title: tData['COMMON.SUCCESS'],
            text: responseData.message,
            icon: 'success'
          }).then(() => {
            this.modalService.dismissAll();
          });
        });
      }
    });
  }

  /* Function Name : autoCompleteCity
* Author : 
* Created Date : 08-08-2019 
* Modified Date : *
* Purpose : to build auto complete for dream job location
* PARAMS :  
*/
  autoCompleteCity(e) {
    this.setUpProfileForm.controls['dream_job_location_id'].setValue(null);
    if (e.which != 40 && e.which != 38 && e.which != 13) {
      this.searchLocationtext =  (e.target.innerText).toLowerCase();
      this.searchCityList = [];
      if (this.searchLocationtext) {
        this.searchCityList = this.dreamJobLocationList.filter((item)=>{
          let fullName = item.full_name.toLowerCase();
          return (fullName.indexOf(this.searchLocationtext) > -1 );
        });
        this.searchCityList = this.searchCityList.slice(0,5);
      }
    } else {
      if (e.which === 40 && this.activeDreamLocationSearchIndex < (this.searchCityList.length - 1)) {
        this.activeDreamLocationSearchIndex += 1;
      } else if (e.which === 38 && this.activeDreamLocationSearchIndex > 0) {
        this.activeDreamLocationSearchIndex -= 1;
      } else if( e.which == 13) {
        this.selectautoCompleteItem(e, this.searchCityList[this.activeDreamLocationSearchIndex]);

      }
    }
  }

  /* Function Name : selectautoCompleteItem
* Author : 
* Created Date : 08-08-2019 
* Modified Date : *
* Purpose : to set job location from auto complete
* PARAMS :  
*/
  selectautoCompleteItem(e, item) {
    this.setUpProfileForm.controls['dream_job_location_id'].setValue(item.city_id);
    if (e.target.getAttribute('class') && e.target.getAttribute('class').indexOf('auto-search-key') > -1) {
      e.target.innerText = item.full_name;
    } else {
      e.target.closest('ul.search-auto-items').parentElement.querySelector('.auto-search-key').innerText = item.full_name;
    }
    this.searchLocationtext = '';
    this.searchCityList = [];
  }
}
