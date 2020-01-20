import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "./services/users.service";
import {CommonService} from "./services/common.service";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class SetupprofileGuard implements CanActivate {

  constructor(private uService: UsersService, private router: Router, private cService: CommonService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user:any = null;
      if (localStorage.getItem("_user")) {
        user = this.cService.getLoggedUserData();
        user = parseInt(user._i);
        user = CryptoJS.AES.encrypt(JSON.stringify(user), 'careery');
        user = user.toString();
      }
      else if (localStorage.getItem('_tmpu')) {
        user = localStorage.getItem('_tmpu');
      } 
      return this.uService.userpreviewCvInfo({cv_user:user})
      .pipe(map((responseData:any)=>{
        if (responseData.statustext === 'success') {
          let userData = responseData.data;
          if (
            userData.experience_level &&
            userData.email &&
            userData.mobile_no &&
            userData.country_id &&
            userData.city_id &&
            userData.nationality_id &&
            userData.dream_job_id &&
            userData.dream_job_location_id &&
            userData.dream_job_type 
            // &&
            // userData.degree.length > 0 &&
            // userData.experience.length > 0 &&
            // userData.skills.length > 0
            ) {
              return true;
            } else {
              this.router.navigate['/setup-profile'];
              return false;
            }
        } else {
          return false;
        }
      }));

  }
}
