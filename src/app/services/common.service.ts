/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : CommonService                     
# Object name           : CommonService    
# Functionality         : all api calls for common uses 
# Purpose               : constructor,setActiveLang,setProfilePic,setCommonContainerCssClass,setProfileName,setListData,getSiteSettings,getGuestToken,isLoggedIn,getPageContent,getLanguages,getCityList,blockReasonList,blockReasonSubmit,unBlockUserSubmit,notificationsSubmit,hideNotification,mayContactSettings,addContactSettings,mayContactList
*******************************************************/
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as global from '../globalConfig';
import * as io from 'socket.io-client';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class CommonService {

	private url = env.api.host;
	private socket;

	private activeLangSource = new BehaviorSubject<string>("EN");
	activelang = this.activeLangSource.asObservable();

	private profilePicSource = new BehaviorSubject<string>(localStorage.getItem("_propic") || "");
	profilePic = this.profilePicSource.asObservable();

	private commonContainerCssClassSource = new BehaviorSubject<string>("");
	commonContainerCssClass = this.commonContainerCssClassSource.asObservable();

	private profileNameSource = new BehaviorSubject<string>("");
	profileName = this.profileNameSource.asObservable();

	private listDataSource = new BehaviorSubject<string>(null);
	listData = this.listDataSource.asObservable();


	private chatConnectionSource = new BehaviorSubject<string>(null);
	chatConnection = this.chatConnectionSource.asObservable();

	private notificationEmitSource = new BehaviorSubject<string>(null);
	notificationEmit = this.notificationEmitSource.asObservable();


	private chatRoomEmitSource = new BehaviorSubject<string>(null);
	chatRoomEmit = this.chatRoomEmitSource.asObservable();

	private countryPhoneCodeSource = new BehaviorSubject<string>(null);
	countryPhoneCode = this.countryPhoneCodeSource.asObservable();

	private setupProfileSource = new BehaviorSubject<string>(null);
	setupProfile = this.setupProfileSource.asObservable();

  /* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and define the languages data
	* PARAMS : http
	*/
	constructor(private http: HttpClient) {
		this.socket = io(this.url, {transports: ['websocket']});

		this.socket.on('send-notify', (message) => {
      this.notificationEmitSource.next(message);
    });
	}
  /* Function Name : setActiveLang
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to set active language
	* PARAMS : lang
	*/
	setActiveLang(lang: string) {
		localStorage.setItem("_lang", lang);
		// console.log('change-route');
		this.activeLangSource.next(lang);
	}
  /* Function Name : setProfilePic
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to set active user profile pic
	* PARAMS : pic
	*/
	setProfilePic(pic: string) {
		this.profilePicSource.next(pic);
	}
  /* Function Name : setCommonContainerCssClass
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to set common classes 
	* PARAMS : className
	*/
	setCommonContainerCssClass(className: string) {
		this.commonContainerCssClassSource.next(className);
	}
  /* Function Name : setProfileName
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to set loggedin user name 
	* PARAMS : name
	*/
	setProfileName(name: string) {
		this.profileNameSource.next(name);
	}
  /* Function Name : setListData
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to set list data
	* PARAMS : list
	*/
	setListData(list: any) {
		this.listDataSource.next(list);
	}
	/* Function Name : setChatConnection
	* Author : 
	* Created Date : 20-06-2019 
	* Modified Date : *
	* Purpose : to set chat connection
	* PARAMS : connection
	*/
	setChatConnection(connection: any) {
		this.chatConnectionSource.next(connection);
	}

	  /* Function Name : setSetupProfile
	* Author : 
	* Created Date : 29-07-2019 
	* Modified Date : *
	* Purpose : to set setup profile status
	* PARAMS : status
	*/
	setSetupProfile(status: string) {
		this.setupProfileSource.next(status);
	}

  /* Function Name : getSiteSettings
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get site settings data
	* PARAMS : 
	*/
	getSiteSettings() {
		return this.http.get(global.API_URL + 'site-settings');
	}
  /* Function Name : getGuestToken
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get guest access token
	* PARAMS : 
	*/
	getGuestToken() {
		return this.http.get(global.API_URL + 'get-guest-token');
	}
  /* Function Name : isLoggedIn
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to check is user loggedin or not
	* PARAMS : 
	*/
	isLoggedIn() {
		return this.http.get(global.API_URL + "is-loggedin");

	}
  /* Function Name : getPageContent
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get cms page content
	* PARAMS : 
	*/
	getPageContent(page_slug) {
		return this.http.post(global.API_URL + 'page-content', global.APPEND_REQUEST_DATA({ page: page_slug }));
	}
  /* Function Name : getLanguages
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get language list
	* PARAMS : 
	*/
	getLanguages() {
		return this.http.get(global.API_URL + 'languages');
	}
  /* Function Name : getCountryList
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get city list
	* PARAMS : 
	*/
	getCountryList() {
		return this.http.post(global.API_URL + 'country/list', global.APPEND_REQUEST_DATA());
	}
	/* Function Name : getCityList
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to get city list
	* PARAMS : 
	*/
	getCityList(country_id) {
		return this.http.post(global.API_URL + 'city/list', global.APPEND_REQUEST_DATA({ "country_id": btoa(country_id) }));
	}
  /* Function Name : blockReasonList
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to get block reason list
	* PARAMS : 
	*/
	blockReasonList() {
		return this.http.post(global.API_URL + 'block-reasons-list', global.APPEND_REQUEST_DATA());

	}
  /* Function Name : blockReasonSubmit
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to block a user
	* PARAMS : formPostData
	*/
	blockReasonSubmit(formPostData) {
		return this.http.post(global.API_URL + 'block-request', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : unBlockUserSubmit
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to un block a user
	* PARAMS : formPostData
	*/
	unBlockUserSubmit(formPostData) {
		return this.http.post(global.API_URL + 'un-block-request', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : notificationsSubmit
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to notify a user
	* PARAMS : formPostData
	*/
	notificationsSubmit(formPostData) {
		return this.http.post(global.API_URL + 'notifications', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : hideNotification
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to hide a notification
	* PARAMS : formPostData
	*/
	hideNotification(formPostData) {
		return this.http.post(global.API_URL + 'change-notification-status', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : mayContactSettings
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to get may contect settings content
	* PARAMS : 
	*/
	mayContactSettings() {
		return this.http.post(global.API_URL + 'may-contact-settings/content', global.APPEND_REQUEST_DATA());
	}
  /* Function Name : addContactSettings
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to save may contect settings 
	* PARAMS : formPostData
	*/
	addContactSettings(formPostData) {
		return this.http.post(global.API_URL + 'may-contact-settings/update', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : mayContactList
	* Author : 
	* Created Date : 15-02-2019 
	* Modified Date : *
	* Purpose : to get  may contect user list
	* PARAMS : formPostData
	*/
	mayContactList(formPostData) {
		return this.http.post(global.API_URL + 'may-contact/list', global.APPEND_REQUEST_DATA(formPostData));
	}

	/* Function Name : userNotifyConnectionList
	* Author : 
	* Created Date : 04-03-2019 
	* Modified Date : *
	* Purpose : to get  connection user list for notifications
	* PARAMS : formPostData
	*/
	userNotifyConnectionList(formPostData) {
		return this.http.post(global.API_URL + 'notification-connections', global.APPEND_REQUEST_DATA(formPostData));
	}


	/* Function Name : notificationList
* Author : 
* Created Date : 20-03-2019 
* Modified Date : *
* Purpose : to get  all see more notifications
* PARAMS : formPostData
*/
	notificationList(formPostData) {
		return this.http.post(global.API_URL + 'notifications', global.APPEND_REQUEST_DATA(formPostData));
	}

  /* Function Name : connectionInvitationList
	* Author : 
	* Created Date : 20-03-2019 
	* Modified Date : *
	* Purpose : to get  all see more notifications
	* PARAMS :
	*/
	connectionInvitationList() {
		return this.http.post(global.API_URL + 'connection-invitations', global.APPEND_REQUEST_DATA());
	}

  /* Function Name : acceptInvitation
	* Author : 
	* Created Date : 22-03-2019 
	* Modified Date : *
	* Purpose : to accept invitations
	* PARAMS : formPostData
	*/
	connectionRequest(formPostData) {
		return this.http.post(global.API_URL + 'connection-request-accept', global.APPEND_REQUEST_DATA(formPostData));
	}
  /* Function Name : sendBirthdayNotifications
	* Author : 
	* Created Date : 19-06-2019 
	* Modified Date : *
	* Purpose : to send birthday notification
	* PARAMS : 
	*/
	sendBirthdayNotifications() {
		return this.http.post(global.API_URL + 'send-birthday-notifications', global.APPEND_REQUEST_DATA());
	}
	/* Function Name : addUserToRoom
	* Author : 
	* Created Date : 22-04-2019 
	* Modified Date : *
	* Purpose : to add user with room
	* PARAMS : room
	*/
	addUserToRoom( room) {
    this.socket.emit('joinnotificatioroom', {room:room});
	}
	
		/* Function Name : emitNotification
	* Author : 
	* Created Date :06-05-2019
	* Modified Date : *
	* Purpose : to emit notification 
	* PARAMS : room, type
	*/
	emitNotification(room, type) {
		this.socket.emit('notify-emit', {
			room: room,
			type: type,
			time: new Date().getTime()
		});
	}
		/* Function Name : setChatRoomEmit
	* Author : 
	* Created Date :06-05-2019
	* Modified Date : *
	* Purpose : to emit chat room 
	* PARAMS : value
	*/
	setChatRoomEmit(value) {
		this.chatRoomEmitSource.next(value);
	}
	/* Function Name : getRoomData
	* Author : 
	* Created Date :06-05-2019
	* Modified Date : *
	* Purpose : to get chat room data
	* PARAMS : loggedUser, connection
	*/
	getRoomData(loggedUser, connection) {
    let roomArr = [
      loggedUser._cpp,
      connection.cpp
    ];
    roomArr = roomArr.sort();
    return roomArr.join("-");
	}
	/* Function Name : setCountryPhoneCode
	* Author : 
	* Created Date :06-05-2019
	* Modified Date : *
	* Purpose : to set country phone code
	* PARAMS : value
	*/
	setCountryPhoneCode(value) {
		this.countryPhoneCodeSource.next(value);
	}
	/* Function Name : getLoggedUserData
	* Author : 
	* Created Date :06-07-2019
	* Modified Date : *
	* Purpose : to get loggedIn user
	* PARAMS : 
	*/
	getLoggedUserData() {
		if (localStorage.getItem("_user")) {
			let user:any =  localStorage.getItem("_user");
			user = CryptoJS.AES.decrypt(user, 'careery');
			return JSON.parse(user.toString(CryptoJS.enc.Utf8));
		}
		return '';
	}

	getYoutubeEmbedUrl(url:string) {
		let code ='';
		if (url.indexOf('youtube.com') > -1) {
			if (url.indexOf('watch') > -1) {
				let urlArr = new URL(url).searchParams;
				code = urlArr.get('v');
			} else if (url.indexOf('embed') > -1) {
				let urlArr = new URL(url);
				code = urlArr.pathname.replace('/embed/','');
			}
		} else if (url.indexOf('youtu.be') > -1) {
			let urlArr = new URL(url);
			code = urlArr.pathname.replace('/','');
		}
		if (code) {
			return 'https://www.youtube.com/embed/'+code;
		} else {
			return '';
		}

	}

	getContentFromUrl(url) {
		return this.http.get(url);
	}
}
