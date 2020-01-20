'use strict';
import * as CryptoJS from 'crypto-js';
import { environment as env} from '../environments/environment';
let urlObj = {
    "host" : env.api.host,
    "prefix" : env.api.prefix
}
export const API_URL = urlObj.host+urlObj.prefix;
export const DEFAULT_LANG = 'AR'; 
export const APP_TITLE = "Careery";
export const APPEND_REQUEST_DATA = (prarams:any = {})=>{
    let postData = prarams;
    if (localStorage.getItem("_user")) {
        let user:any =  localStorage.getItem("_user");
        user = CryptoJS.AES.decrypt(user, 'careery');
        user =  JSON.parse(user.toString(CryptoJS.enc.Utf8));
        postData['_u'] = btoa(user._i);
    }
    postData['lang'] = localStorage.getItem("_lang");
    return postData;
}
export const s3URL = env.s3url;
export const  SCROLL_TO_TOP = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(SCROLL_TO_TOP);
      window.scrollTo(0, c - c / 8);
    }
  }