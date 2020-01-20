/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 19-03-2019
# Module                : CvcardService                     
# Object name           : CvcardService    
# Functionality         : all api calls for cv and card builder
# Purpose               : constructor,
*******************************************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../globalConfig';
@Injectable({
  providedIn: 'root'
})
export class CvcardService {

  /* Function Name : constructor
  * Author : 
  * Created Date : 19-03-2019 
  * Modified Date : *
  * Purpose : to define the all helpful objects and define the languages data
  * PARAMS : http
  */
  constructor(private http: HttpClient) { }

  /* Function Name : getTemplateList
  * Author : 
  * Created Date : 19-03-2019 
  * Modified Date : *
  * Purpose : to get template list
  * PARAMS : 
  */
  getTemplateList(formPostData) {
    return this.http.post(global.API_URL + 'templates', global.APPEND_REQUEST_DATA(formPostData));
  }

  /* Function Name : getCurrencyList
  * Author : 
  * Created Date : 19-03-2019 
  * Modified Date : *
  * Purpose : to get currency list
  * PARAMS : 
  */
  getCurrencyList() {
    return this.http.post(global.API_URL + 'currency-list', global.APPEND_REQUEST_DATA());
  }
  /* Function Name : sendCVGenerateRequest
  * Author : 
  * Created Date : 25-03-2019 
  * Modified Date : *
  * Purpose : to send cv generate request
  * PARAMS : postData
  */
  sendCVGenerateRequest(postData) {
    return this.http.post(global.API_URL + 'cv/generate', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : saveCVData
  * Author : 
  * Created Date : 28-03-2019 
  * Modified Date : *
  * Purpose : to save cv data
  * PARAMS : postData
  */
  saveCVData(postData) {
    return this.http.post(global.API_URL + 'cv/save', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : checkUserCvCount
  * Author : 
  * Created Date : 26-03-2019 
  * Modified Date : *
  * Purpose : to check the user cv count
  * PARAMS :
  */
  checkUserCvCount() {
    return this.http.post(global.API_URL + 'cv/check-limit', global.APPEND_REQUEST_DATA());
  }

  /* Function Name : getCVSuccessContent
  * Author : 
  * Created Date : 27-03-2019 
  * Modified Date : *
  * Purpose : to get cv content data
  * PARAMS :postData
  */
  getCVSuccessContent(postData) {
    return this.http.post(global.API_URL + 'cv/succss-content', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getUserCvList
   * Author : 
   * Created Date : 27-03-2019 
   * Modified Date : *
   * Purpose : to get cv list of a user
   * PARAMS :
   */
  getUserCvList() {
    return this.http.post(global.API_URL + 'cv/list', global.APPEND_REQUEST_DATA());
  }
  /* Function Name : deleteUserCv
   * Author : 
   * Created Date : 28-03-2019 
   * Modified Date : *
   * Purpose : to delete a user cv
   * PARAMS :cvId
   */
  deleteUserCv(cvId) {
    return this.http.post(global.API_URL + 'cv/delete', global.APPEND_REQUEST_DATA({ "id": btoa(cvId) }));
  }

  /* Function Name : setIsdefault
 * Author : 
 * Created Date : 28-03-2019 
 * Modified Date : *
 * Purpose : to set  a user cv as default
 * PARAMS :cvId
 */
  setIsdefault(cvId) {
    return this.http.post(global.API_URL + 'cv/status-change', global.APPEND_REQUEST_DATA({ "id": btoa(cvId) }));
  }

  /* Function Name : getUserCvComments
   * Author : 
   * Created Date : 28-03-2019 
   * Modified Date : *
   * Purpose : to get user cv comments
   * PARAMS :cvId
   */
  getUserCvComments(cvId) {
    return this.http.post(global.API_URL + 'cv/comments', global.APPEND_REQUEST_DATA({ "id": btoa(cvId) }));
  }

  /* Function Name : saveRefuseReason
  * Author : 
  * Created Date : 28-03-2019 
  * Modified Date : *
  * Purpose : to save refuse reason
  * PARAMS :postData
  */
  saveRefuseReason(postData) {
    return this.http.post(global.API_URL + 'cv/refuse-submit', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getCvDetails
  * Author : 
  * Created Date : 28-03-2019 
  * Modified Date : *
  * Purpose : to get the cv details
  * PARAMS :cvId
  */
  getCvDetails(cvId) {
    return this.http.post(global.API_URL + 'cv/details', global.APPEND_REQUEST_DATA({ id: btoa(cvId) }));
  }

  /* Function Name : sendMessage
  * Author : 
  * Created Date : 02-04-2019 
  * Modified Date : *
  * Purpose : to send message for cv consulting
  * PARAMS :postData
  */
  sendMessage(postData) {
    return this.http.post(global.API_URL + 'cv/send-message', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : saveCard
  * Author : 
  * Created Date : 09-04-2019 
  * Modified Date : *
  * Purpose : to save card 
  * PARAMS :postData
  */
  saveCard(postData) {
    return this.http.post(global.API_URL + 'card/save', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : saveDefaultCard
* Author : 
* Created Date : 30-07-2019 
* Modified Date : *
* Purpose : to save default card 
* PARAMS :postData
*/
  saveDefaultCard(postData: any = {}) {
    return this.http.post(global.API_URL + 'card/save-default-card', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : saveDefaultCV
* Author : 
* Created Date : 31-07-2019 
* Modified Date : *
* Purpose : to save default CV 
* PARAMS :postData
*/
  saveDefaultCV(postData: any = {}) {
    return this.http.post(global.API_URL + 'cv/save-default-cv', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getCardDetails
  * Author : 
  * Created Date : 10-04-2019 
  * Modified Date : *
  * Purpose : to get card details 
  * PARAMS :postData
  */
  getCardDetails(postData) {
    return this.http.post(global.API_URL + 'card/details', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getCardList
  * Author : 
  * Created Date : 10-04-2019 
  * Modified Date : *
  * Purpose : to get card list 
  * PARAMS :postData
  */
  getCardList(postData) {
    return this.http.post(global.API_URL + 'card/list', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getCardList
  * Author : 
  * Created Date : 10-04-2019 
  * Modified Date : *
  * Purpose : to get card list 
  * PARAMS :
  */
  getCardLimit() {
    return this.http.post(global.API_URL + 'card/check-limit', global.APPEND_REQUEST_DATA());
  }

  /* Function Name : removeCard
  * Author : 
  * Created Date : 12-04-2019 
  * Modified Date : *
  * Purpose : to remove a card 
  * PARAMS :postData
  */
  removeCard(postData) {
    return this.http.post(global.API_URL + 'card/remove', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getDefaultCv
  * Author : 
  * Created Date : 16-04-2019 
  * Modified Date : *
  * Purpose : to remove a card 
  * PARAMS :
  */
  getDefaultCv() {
    return this.http.post(global.API_URL + 'cv/default-details', global.APPEND_REQUEST_DATA());
  }

/* Function Name : setCardDefault
  * Author : 
  * Created Date : 27-08-2019 
  * Modified Date : *
  * Purpose : to set default card
  * PARAMS :
  */
  setCardDefault(postData) {
    return this.http.post(global.API_URL + 'card/set-default', global.APPEND_REQUEST_DATA(postData));
    
  }



}
