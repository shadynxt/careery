/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : RegisterService                     
# Object name           : RegisterService    
# Functionality         : all api calls for regester
# Purpose               : constructor,register,resend,verifyEmail
*******************************************************/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as global from '../globalConfig';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	httpOptions: object;
	/* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : http
	*/
	constructor(
		private http: HttpClient) {
	}


	/* Function Name : register
		* Author : 
		* Created Date : 10-01-2019 
		* Modified Date : *
		* Purpose : to save user data
		* PARAMS : formData
		*/
	register(formData) {
		return this.http.post(global.API_URL + 'signup', global.APPEND_REQUEST_DATA(formData));
	}

	/* Function Name : resend
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to resend verification link
	* PARAMS : tmpId
	*/
	resend(tmpId) {
		return this.http.post(global.API_URL + 'resend-verification/', global.APPEND_REQUEST_DATA({ "id": tmpId }));
	}
	/* Function Name : verifyEmail
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to verify a user
	* PARAMS : token
	*/
	verification(postData) {
		return this.http.post(global.API_URL + 'verification/', global.APPEND_REQUEST_DATA(postData));
	}
}
