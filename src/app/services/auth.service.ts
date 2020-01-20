/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AuthService                     
# Object name           : AuthService    
# Functionality         : all api calls for auth
# Purpose               : constructor,login,logout,forgotPassword,termsUpdate
*******************************************************/
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as global from '../globalConfig';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions : object;

  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : http
	*/  
	constructor(
	  private http:HttpClient) {
	}
  /* Function Name : login
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : for login checking
	* PARAMS : formData
	*/  
  login(formData) {
  	return this.http.post(global.API_URL+'login', global.APPEND_REQUEST_DATA(formData));
  }

  /* Function Name : logout
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : for logout
	* PARAMS : 
	*/
  logout() {

  	return this.http.post(global.API_URL+'logout', global.APPEND_REQUEST_DATA());
  }
  /* Function Name : forgotPassword
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : for forgot password request
	* PARAMS : 
	*/

  forgotPassword(formData) {
    return this.http.post(global.API_URL+'forget-password', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : termsUpdate
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : for terms and conditions update
	* PARAMS : 
	*/
  termsUpdate(userId) {

    return this.http.post(global.API_URL+'terms-update', global.APPEND_REQUEST_DATA({"userId":userId}));
  }

}
