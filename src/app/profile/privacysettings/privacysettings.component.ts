/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 25-01-2019
# Module                : PrivacysettingsComponent                     
# Object name           : PrivacysettingsComponent    
# Functionality         : privacy settings of auser
# Purpose               : constructor, ngOnInit, createItem, filterSettingsValue, savePrivacySettings
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormArray } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from "../../services/users.service";
import { CommonService } from "../../services/common.service";
import * as global from "../../globalConfig";
import swal from 'sweetalert';
@Component({
	selector: 'app-privacysettings',
	templateUrl: './privacysettings.component.html',
	styleUrls: ['./privacysettings.component.scss']
})
export class PrivacysettingsComponent implements OnInit {

	privacyForm: FormGroup; // privacy form
	permissions: FormArray; // permissions
	privacySettingsContent: any; // settings content
	successMessage: string = ''; // success message
	errMessage: string = ''; // error message
	connectionList: Array<any> = [];
	specificConnections: any = {};
	specificAddBox: any = null;
	specificAddInputValue: any = null;
	generalSettingsForm: FormGroup;
	allLanguage: Array<any> = [];
	generalSettingsData: any = {};
	/* Function Name : constructor
	  * Author : 
	  * Created Date : 25-01-2019 
	  * Modified Date : *
	  * Purpose : to define the all helpful objects and define the languages data
	  * PARAMS : translate, uService, cService, formBuilder
	  */
	constructor(
		private translate: TranslateService,
		private uService: UsersService,
		private cService: CommonService,
		private formBuilder: FormBuilder,
	) {
		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			this.translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			this.translate.use(lang);
		});
	}
	/* Function Name : ngOnInit
	  * Author : 
	  * Created Date : 25-01-2019 
	  * Modified Date : *
	  * Purpose : to get data after html load
	  * PARAMS : 
	  */
	ngOnInit() {

		this.privacyForm = this.formBuilder.group({
			"permissions": this.formBuilder.array([])
		});
		this.permissions = this.privacyForm.get('permissions') as FormArray;
		this.uService.privacySettings().subscribe((responseData: any) => {
			this.privacySettingsContent = responseData.data;
			if (responseData.data.options && responseData.data.options.length > 0) {
				responseData.data.options.forEach((item, index) => {
					this.permissions.push(this.createItem(item, index));
				})
			}
		});

		this.generalSettingsForm = this.formBuilder.group({
			"preffered_lang": [""]
		});
		this.uService.getGeneralSettings()
			.subscribe((responseSettingsData: any) => {
				if (responseSettingsData.statustext == 'success') {
					this.generalSettingsData = responseSettingsData.data.settings;
					this.generalSettingsForm.setValue({
						"preffered_lang": this.generalSettingsData.preffered_lang
					});
				}
			});
		this.getlanguage();
	}
	/* Function Name : createItem
	  * Author : 
	  * Created Date : 25-01-2019 
	  * Modified Date : *
	  * Purpose : to create items
	  * PARAMS : item, index
	  */
	createItem(item, index): FormGroup {
		let formObj = {
			option_id: item.id
		};
		if (item.type === 0) {
			formObj['settings_id'] = this.filterSettingsValue(item.id).settings_id;
			let specificUser = this.filterSettingsValue(item.id).specific_users;;
			formObj['specific_users'] = specificUser;
			if (specificUser) {
				this.specificConnections[index] = JSON.parse(specificUser);
			}
		} else {
			formObj['show_status'] = this.filterSettingsValue(item.id).show_status;
		}
		return this.formBuilder.group(formObj);
	}
	/* Function Name : ngOnInit
	  * Author : 
	  * Created Date : 25-01-2019 
	  * Modified Date : *
	  * Purpose : to filter settings value
	  * PARAMS : optionId
	  */
	filterSettingsValue(optionId): any {

		let item = {};
		item = this.privacySettingsContent.userPermission.find((uPermission: any) => {
			return uPermission.option_id == optionId;
		});
		return (item) ? item : {};
	}
	/* Function Name : savePrivacySettings
	  * Author : 
	  * Created Date : 25-01-2019 
	  * Modified Date : *
	  * Purpose : to save user privacy settings
	  * PARAMS : 
	  */
	savePrivacySettings() {

		this.uService.savePrivacySettings(this.privacyForm.value)
			.subscribe((responseData: any) => {
				global.SCROLL_TO_TOP();
				if (responseData.statustext === 'success') {
					this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
						swal({
							title: tData,
							text: responseData.message,
							icon: 'success'
						});
					});
				} else if (responseData.statustext === 'error') {
					this.translate.get('COMMON.ERROR').subscribe((tData) => {
						swal({
							title: tData,
							text: responseData.message,
							icon: 'error'
						});
					});
				}
			})
	}
	/* Function Name : searchConnection
	  * Author : 
	  * Created Date : 14-03-2019 
	  * Modified Date : *
	  * Purpose : to search connections of a user
	  * PARAMS : 
	  */
	searchConnection(index, event) {
		let keyword = event.target.value;
		this.connectionList = [];
		if (keyword) {
			let postData = {
				"page_name": 'connection',
				"keyword": keyword
			}
			this.specificAddInputValue = keyword;
			this.uService.searchUsers(postData)
				.subscribe((responseData: any) => {
					if (responseData.statustext == 'success') {
						this.connectionList = responseData.data.list.list;
					}
				});
		}
	}

	/* Function Name : addConnectionToSpacificSettings
	  * Author : 
	  * Created Date : 14-03-2019 
	  * Modified Date : *
	  * Purpose : to add connections  with settings 
	  * PARAMS : index, connection
	  */
	addConnectionToSpacificSettings(index, connection) {
		let settingsInput = this.privacyForm.get('permissions')['controls'][index]['controls']['specific_users'];
		if (!this.specificConnections[index]) {
			this.specificConnections[index] = [];
		}
		let value = settingsInput.value;
		if (value) {
			value = JSON.parse(value);
		} else {
			value = [];
		}
		let conObj = {
			"id": connection.friend_id,
			"name": connection.friend_full_name
		};
		let checkExist = this.specificConnections[index].find((item) => {
			return item.id == connection.friend_id;
		});
		if (!checkExist) {
			value.push(conObj);
			value = JSON.stringify(value);
			if (value == '[]') {
				value = null;
			}
			settingsInput.setValue(value);
			this.specificConnections[index].push(conObj);
		}
	}
	/* Function Name : openAddBox
	  * Author : 
	  * Created Date : 14-03-2019 
	  * Modified Date : *
	  * Purpose : to open search box 
	  * PARAMS : index
	  */
	openAddBox(index) {
		if (this.specificAddBox && this.specificAddBox == index) {
			this.specificAddBox = null;
		} else {
			this.specificAddBox = index;
		}
		this.connectionList = [];
		this.specificAddInputValue = '';
	}

	/* Function Name : removeConnections
	  * Author : 
	  * Created Date : 15-03-2019 
	  * Modified Date : *
	  * Purpose : to remove  a connection from specific user list
	  * PARAMS : index, connection
	  */
	removeConnections(index, connection) {
		let connectionIndex = this.specificConnections[index].indexOf(connection);
		this.specificConnections[index].splice(connectionIndex, 1);
		let settingsInput = this.privacyForm.get('permissions')['controls'][index]['controls']['specific_users'];
		let value = JSON.stringify(this.specificConnections[index]);
		if (value == '[]') {
			value = null;
		}
		settingsInput.setValue(value);
	}

	/* Function Name : getlanguage
	* Author : 
	* Created Date : 26-04-2019 
	* Modified Date : *
	* Purpose : to get all language data
	* PARAMS :  
	*/
	getlanguage() {
		this.cService.getLanguages().subscribe((response: any) => {
			if ((response['statustext'] === 'success')) {
				this.allLanguage = response['data'];
			} else {
				console.log('language error');
			}
		});

	}

	/* Function Name : saveGeneralSettings
	* Author : 
	* Created Date : 26-04-2019 
	* Modified Date : *
	* Purpose : to save general settings
	* PARAMS :  
	*/
	saveGeneralSettings() {

		if (this.generalSettingsData.preffered_lang == this.generalSettingsForm.value.preffered_lang) {
			this.translate.get('COMMON.NO_CHNAGES').subscribe((tData) => {
				this.errMessage = tData;
			});
			setTimeout(()=>{
				this.errMessage = '';
			},5000);
		} else {
			this.uService.saveGeneralSettings(this.generalSettingsForm.value)
				.subscribe((responseData: any) => {
					let langCode = this.allLanguage.find((item) => {
						return item.id == this.generalSettingsForm.value.preffered_lang;
					});
					localStorage.setItem('_lang', langCode.lang_code);
					location.reload();
					if ((responseData['statustext'] === 'success')) {
						this.translate.get('COMMON.SUCCESS').subscribe((tData) => {
							swal({
								title: tData,
								text: responseData.message,
								icon: 'success'
							});
						});
					}
					
				});

		}

	}
}
