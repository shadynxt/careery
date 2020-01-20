/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 25-02-2019
# Module                : TestimonialService                     
# Object name           : TestimonialService    
# Functionality         : all api calls for testimonials
# Purpose               : constructor,addTestimonial,listTestimonial,editTestimonial,deleteTestimonial,acceptTestimonial,publicTestimonial
*******************************************************/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as global from '../globalConfig';

@Injectable({
	providedIn: 'root'
})
export class TestimonialService {


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

	/* Function Name : addTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to add new testimonial
	* PARAMS : formData
	*/
	addTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/add', global.APPEND_REQUEST_DATA(formData));
	}
	/* Function Name : listTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to get list of testimonial
	* PARAMS : formData
	*/
	listTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/list', global.APPEND_REQUEST_DATA(formData));
	}
	/* Function Name : editTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to edit own testimonial
	* PARAMS : formData
	*/
	editTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/edit', global.APPEND_REQUEST_DATA(formData));
	}
	/* Function Name : deleteTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to delete a testimonial
	* PARAMS : formData
	*/
	deleteTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/delete', global.APPEND_REQUEST_DATA(formData));
	}
	/* Function Name : acceptTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to accept testimonial
	* PARAMS : formData
	*/
	acceptTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/status-change', global.APPEND_REQUEST_DATA(formData));
	}
	/* Function Name : publicTestimonial
	* Author : 
	* Created Date : 25-02-2019 
	* Modified Date : *
	* Purpose : to get testimonial list
	* PARAMS : formData
	*/
	publicTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/public', global.APPEND_REQUEST_DATA(formData));
	}

	/* Function Name : replyTestimonial
* Author : 
* Created Date :17-06-2019 
* Modified Date : *
* Purpose : to sen reply of  testimonial
* PARAMS : formData
*/
	replyTestimonial(formData) {
		return this.http.post(global.API_URL + 'testimonial/send-reply', global.APPEND_REQUEST_DATA(formData));
	}










}
