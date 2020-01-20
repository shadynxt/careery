/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : UsersService                     
# Object name           : UsersService    
# Functionality         : all api calls for users
# Purpose               : constructor,searchUser,
*******************************************************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../globalConfig';
import { post } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /* Function Name : constructor
  * Author : 
  * Created Date : 10-01-2019 
  * Modified Date : *
  * Purpose : to define the all helpful objects and define the languages data
  * PARAMS : http
  */
  constructor(private http: HttpClient) { }
  /* Function Name : searchUser
  * Author : 
  * Created Date : 20-02-2019 
  * Modified Date : *
  * Purpose : to search user
  * PARAMS : keyword
  */
  searchUser(keyword) {
    return this.http.post(global.API_URL + 'search', global.APPEND_REQUEST_DATA({ "keyword": keyword }));
  }
  /* Function Name : privacySettings
  * Author : 
  * Created Date : 20-02-2019 
  * Modified Date : *
  * Purpose : to get privacy settings content
  * PARAMS : 
  */
  privacySettings() {
    return this.http.post(global.API_URL + 'privacy-settings/content', global.APPEND_REQUEST_DATA());
  }
  /* Function Name : userDetails
  * Author : 
  * Created Date : 15-01-2019 
  * Modified Date : *
  * Purpose : to get user details
  * PARAMS : 
  */
  userDetails() {
    return this.http.post(global.API_URL + 'user/details', global.APPEND_REQUEST_DATA());
  }

  /* Function Name : userStatDetails
* Author : 
* Created Date : 05-03-2019 
* Modified Date : *
* Purpose : to get user stat details
* PARAMS : formPostData
*/
  userStatDetails(formPostData) {
    return this.http.post(global.API_URL + 'user/stats', global.APPEND_REQUEST_DATA(formPostData));
  }
  /* Function Name : testimonials
  * Author : 
  * Created Date : 25-02-2019 
  * Modified Date : *
  * Purpose : to get user testimonial
  * PARAMS : type
  */
  testimonials(type) {
    return this.http.post(global.API_URL + 'testimonial/list', global.APPEND_REQUEST_DATA({ "type": type }));
  }
  /* Function Name : savePrivacySettings
  * Author : 
  * Created Date : 25-01-2019 
  * Modified Date : *
  * Purpose : to save privacy settings
  * PARAMS : formData
  */
  savePrivacySettings(formData) {
    return this.http.post(global.API_URL + 'privacy-settings/update', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : changePassword
  * Author : 
  * Created Date : 25-01-2019 
  * Modified Date : *
  * Purpose : to change user password
  * PARAMS : formData
  */
  changePassword(formData) {
    return this.http.post(global.API_URL + 'change-password', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : userDetailsByCPP
  * Author : 
  * Created Date : 25-01-2019 
  * Modified Date : *
  * Purpose : to get user details by cpp
  * PARAMS : cpp
  */
  userDetailsByCPP(cpp) {
    return this.http.post(global.API_URL + 'user/details', global.APPEND_REQUEST_DATA({ "cpp": cpp }));
  }

  /* Function Name : changeProfilePic
  * Author : 
  * Created Date : 25-01-2019 
  * Modified Date : *
  * Purpose : to update user profile pic
  * PARAMS : formData
  */
  changeProfilePic(formData) {
    return this.http.post(global.API_URL + 'change-profilepic', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : userDetailsByType
  * Author : 
  * Created Date : 25-01-2019 
  * Modified Date : *
  * Purpose : to get user details with type
  * PARAMS : type
  */
  userDetailsByType(type) {
    return this.http.post(global.API_URL + 'user/details', global.APPEND_REQUEST_DATA({ "type": type }));
  }

  /* Function Name : removeProfilePic
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to remove profile pic
  * PARAMS : 
  */
  removeProfilePic() {
    return this.http.post(global.API_URL + 'remove-profilepic', global.APPEND_REQUEST_DATA());
  }
  /* Function Name : getUserDetailsInEditView
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to get user details in edit mode by type
  * PARAMS : type
  */
  getUserDetailsInEditView(type) {
    return this.http.post(global.API_URL + 'user/details-edit-view', global.APPEND_REQUEST_DATA({ type: type }));
  }
  /* Function Name : addEducationData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to add education data 
  * PARAMS : formData
  */
  addEducationData(formData) {
    return this.http.post(global.API_URL + 'user/add-degree', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : editEducationData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to edit education data 
* PARAMS : formData
*/
  editEducationData(formData) {
    return this.http.post(global.API_URL + 'user/edit-degree', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : deleteEducationData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to delete education data 
* PARAMS : formData
*/
  deleteEducationData(formData) {
    return this.http.post(global.API_URL + 'user/delete-degree', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : addSkillData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to add user skill data 
* PARAMS : formData
*/
  addSkillData(formData) {
    return this.http.post(global.API_URL + 'user/add-skills', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : editSkillData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to edit user skill data 
* PARAMS : formData
*/
  editSkillData(formData) {
    return this.http.post(global.API_URL + 'user/edit-skills', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : deleteSkillData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to delete user skill data 
* PARAMS : formData
*/
  deleteSkillData(formData) {
    return this.http.post(global.API_URL + 'user/delete-skills', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : userDetailsByCppType
* Author : 
* Created Date : 05-02-2019 
* Modified Date : *
* Purpose : to get user data by cpp
* PARAMS : cpp,type
*/
  userDetailsByCppType(cpp, type) {
    return this.http.post(global.API_URL + 'user/details', global.APPEND_REQUEST_DATA({ "cpp": cpp, "type": type }));
  }
  /* Function Name : addExperienceData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to add experience data
* PARAMS : formData
*/
  addExperienceData(formData) {
    return this.http.post(global.API_URL + 'user/add-experience', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : editExperienceData
* Author : 
* Created Date : 31-01-2019 
* Modified Date : *
* Purpose : to edit experience data
* PARAMS : formData
*/
  editExperienceData(formData) {
    return this.http.post(global.API_URL + 'user/edit-experience', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : deleteExperienceData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to delete experience data
  * PARAMS : formData
  */
  deleteExperienceData(formData) {
    return this.http.post(global.API_URL + 'user/delete-experience', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : addCertificateData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to add user certificate data
  * PARAMS : formData
  */
  addCertificateData(formData) {
    return this.http.post(global.API_URL + 'user/add-certificate', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : editCertificateData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to edit user certificate data
  * PARAMS : formData
  */
  editCertificateData(formData) {
    return this.http.post(global.API_URL + 'user/edit-certificate', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : deleteCertificateData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to delete user certificate data
  * PARAMS : formData
  */
  deleteCertificateData(formData) {
    return this.http.post(global.API_URL + 'user/delete-certificate', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : updatePersonalData
  * Author : 
  * Created Date : 31-01-2019 
  * Modified Date : *
  * Purpose : to update user personal data
  * PARAMS : formData
  */
  updatePersonalData(formData) {
    return this.http.post(global.API_URL + 'user/edit-personal-info', global.APPEND_REQUEST_DATA(formData));
  }
  /* Function Name : userConnectionList
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to get user connection list
  * PARAMS : page
  */
  userConnectionList(page) {
    return this.http.post(global.API_URL + 'connections', global.APPEND_REQUEST_DATA({ status: 1, page: page }));
  }

  /* Function Name : userConnectionRemove
* Author : 
* Created Date : 09-07-2019 
* Modified Date : *
* Purpose : to remove user connection
* PARAMS : formData
*/
  userConnectionRemove(formData) {
    return this.http.post(global.API_URL + 'connection-remove', global.APPEND_REQUEST_DATA(formData));
  }


  /* Function Name : searchUsers
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to search users
  * PARAMS : formPostData
  */
  searchUsers(formPostData) {
    return this.http.post(global.API_URL + 'search-users', global.APPEND_REQUEST_DATA(formPostData));
  }
  /* Function Name : updateProfileViewer
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to update profile
  * PARAMS : formPostData
  */
  updateProfileViewer(formPostData) {
    return this.http.post(global.API_URL + 'user/update-profile-view', global.APPEND_REQUEST_DATA(formPostData));
  }
  /* Function Name : getUserPoints
  * Author : 
  * Created Date : 26-02-2019 
  * Modified Date : *
  * Purpose : to get user points
  * PARAMS : 
  */
  getUserPoints(userId) {
    return this.http.post(global.API_URL + 'users/points', global.APPEND_REQUEST_DATA({ id: userId }));
  }
  /* Function Name : recommendationSends
  * Author : 
  * Created Date : 27-02-2019 
  * Modified Date : *
  * Purpose : to send recommendations
  * PARAMS : 
  */
  recommendationSends(formPostData) {
    return this.http.post(global.API_URL + 'recommendations-send', global.APPEND_REQUEST_DATA(formPostData));
  }
  /* Function Name : connectionRequestSend
  * Author : 
  * Created Date : 27-02-2019 
  * Modified Date : *
  * Purpose : to send connection request
  * PARAMS : 
  */
  connectionRequestSend(toId) {
    return this.http.post(global.API_URL + 'send-connection-request', global.APPEND_REQUEST_DATA({ to_id: btoa(toId) }));
  }

  /* Function Name : sendMessage
  * Author : 
  * Created Date : 13-03-2019 
  * Modified Date : *
  * Purpose : to send message to a user
  * PARAMS : 
  */
  sendMessage(formPostData) {
    return this.http.post(global.API_URL + 'send-messages', global.APPEND_REQUEST_DATA(formPostData));
  }

  /* Function Name : addProject
   * Author : 
   * Created Date : 14-03-2019 
   * Modified Date : *
   * Purpose : to add new user project
   * PARAMS : 
   */
  addProject(formPostData) {
    return this.http.post(global.API_URL + 'user/add-project', global.APPEND_REQUEST_DATA(formPostData));
  }

  /* Function Name : editProject
   * Author : 
   * Created Date : 14-03-2019 
   * Modified Date : *
   * Purpose : to edit  user project
   * PARAMS : 
   */
  editProject(formPostData) {
    return this.http.post(global.API_URL + 'user/edit-project', global.APPEND_REQUEST_DATA(formPostData));
  }

  /* Function Name : deleteProject
  * Author : 
  * Created Date : 14-03-2019 
  * Modified Date : *
  * Purpose : to delete  user project
  * PARAMS : 
  */
  deleteProject(formPostData) {
    return this.http.post(global.API_URL + 'user/delete-project', global.APPEND_REQUEST_DATA(formPostData));
  }

  /* Function Name : getCvContent
  * Author : 
  * Created Date : 15-03-2019 
  * Modified Date : *
  * Purpose : to get the content for cv building
  * PARAMS : type
  */
  getCvContent(type) {
    return this.http.post(global.API_URL + 'cv/info-details', global.APPEND_REQUEST_DATA({ type: type }));
  }

  /* Function Name : userConnectionList
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to get user connection list
  * PARAMS : page
  */
  recommendationList() {
    return this.http.post(global.API_URL + 'recommendations-list', global.APPEND_REQUEST_DATA({}));
  }
  /* Function Name : sendNotification
  * Author : 
  * Created Date : 05-04-2019 
  * Modified Date : *
  * Purpose : to send notification to a user
  * PARAMS : postData
  */
  sendNotification(postData) {
    return this.http.post(global.API_URL + 'send-notifications', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : saveGeneralSettings
  * Author : 
  * Created Date : 26-04-2019 
  * Modified Date : *
  * Purpose : to save user general settings
  * PARAMS : postData
  */
  saveGeneralSettings(postData) {
    return this.http.post(global.API_URL + 'save-general-settings', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getGeneralSettings
  * Author : 
  * Created Date : 26-04-2019 
  * Modified Date : *
  * Purpose : to get user general settings
  * PARAMS : 
  */
  getGeneralSettings() {
    return this.http.post(global.API_URL + 'get-general-settings', global.APPEND_REQUEST_DATA());
  }

  /* Function Name : getRecentSearchList
  * Author : 
  * Created Date : 18-06-2019 
  * Modified Date : *
  * Purpose : to get recent search list
  * PARAMS : 
  */
  getRecentSearchList() {
    return this.http.post(global.API_URL + 'recent-search-users', global.APPEND_REQUEST_DATA());

  }

  /* Function Name : getNotificationSettingsData
  * Author : 
  * Created Date : 18-06-2019 
  * Modified Date : *
  * Purpose : to get user notification settings
  * PARAMS : 
  */
  getNotificationSettingsData() {
    return this.http.post(global.API_URL + 'notification-settings', global.APPEND_REQUEST_DATA());
  }

  /* Function Name : saveNotificationSettingsData
  * Author : 
  * Created Date : 18-06-2019 
  * Modified Date : *
  * Purpose : to save user notification settings
  * PARAMS : 
  */
  saveNotificationSettingsData(postData) {
    return this.http.post(global.API_URL + 'notification-settings/save', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : resetPassword
  * Author : 
  * Created Date : 20-06-2019 
  * Modified Date : *
  * Purpose : to reset user password
  * PARAMS : 
  */
  resetPassword(postData) {
    return this.http.post(global.API_URL + 'reset-password', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : getChatNotification
  * Author : 
  * Created Date : 21-06-2019 
  * Modified Date : *
  * Purpose : to get chat notifications
  * PARAMS : 
  */
  getChatNotification(postData) {
    return this.http.post(global.API_URL + 'chat-notifications', global.APPEND_REQUEST_DATA(postData));

  }

  /* Function Name : getUserDataByCpp
* Author : 
* Created Date : 27-06-2019 
* Modified Date : *
* Purpose : to get user data by cpp
* PARAMS : 
*/
  getUserDataByCpp(postData) {
    return this.http.post(global.API_URL + 'user/detailsbycpp', global.APPEND_REQUEST_DATA(postData));

  }

  /* Function Name : userLevelUpdate
* Author : 
* Created Date : 09-07-2019 
* Modified Date : *
* Purpose : to remove user connection
* PARAMS : formData
*/
  userLevelUpdate(formData) {
    return this.http.post(global.API_URL + 'user/update-user-level', global.APPEND_REQUEST_DATA(formData));
  }

  /* Function Name : userSetupInfo
* Author : 
* Created Date : 10-07-2019 
* Modified Date : *
* Purpose : to get user profile setup content
* PARAMS : 
*/
  userSetupInfo(postData) {
    return this.http.post(global.API_URL + 'user/signup-setup-info', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : userSaveSetupInfo
* Author : 
* Created Date : 15-07-2019 
* Modified Date : *
* Purpose : to save user profile setup
* PARAMS : 
*/
  userSaveSetupInfo(postData) {
    return this.http.post(global.API_URL + 'user/signup-setup-info/update', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : userpreviewCvInfo
* Author : 
* Created Date : 26-07-2019 
* Modified Date : *
* Purpose : to get user preview cv info
* PARAMS : 
*/
  userpreviewCvInfo(postData = {}) {
    return this.http.post(global.API_URL + 'user/preview-cv-details', global.APPEND_REQUEST_DATA(postData));
  }

  /* Function Name : blockedUserList
  * Author : 
  * Created Date : 19-02-2019 
  * Modified Date : *
  * Purpose : to get blocked users list
  * PARAMS : postData
  */
  blockedUserList(postData) {
    return this.http.post(global.API_URL + 'get-blocked-users', global.APPEND_REQUEST_DATA({ postData }));
  }


  /* Function Name : userPrivacyCheckingData
  * Author : 
  * Created Date : 30-08-2019 
  * Modified Date : *
  * Purpose : to get user privacy checking data
  * PARAMS : postData
  */
  userPrivacyCheckingData(postData) {
    return this.http.post(global.API_URL + 'user/details-privacy-check', global.APPEND_REQUEST_DATA(postData));
  }
}
