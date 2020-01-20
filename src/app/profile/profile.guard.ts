import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../services/users.service";
import {CommonService} from "../services/common.service";
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private uService: UsersService, private router: Router, private cService: CommonService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let cpp:any = state.url.split("/");
      cpp = cpp[1];
      let user = null;
      if (localStorage.getItem("_user")) {
        user = this.cService.getLoggedUserData();
        user = parseInt(user._i);
      }

      return this.uService.userPrivacyCheckingData({cpp:cpp})
      .pipe(map((responseData:any)=>{
        if (responseData.statustext === 'success') {
          let currentUser =  responseData.data.find((item)=>{
            return item.cpp.toLowerCase() == cpp.toLowerCase();
          });
          let loggedInUser =  responseData.data.find((item)=>{
            return item.id == user;
          });
          if (currentUser && currentUser.privacySettings) {
            let viewProfileSettings = currentUser.privacySettings.find((item)=>{
              return item.option.flag === 'view-my-profile';
            });
            if (viewProfileSettings  && viewProfileSettings.show_status == 0) {
              this.router.navigate(["access-deny"]);
            }
            
            let guestviewProfileSettings = currentUser.privacySettings.find((item)=>{
              return item.option.flag === 'guest-view-my-profile';
            });
            if (!loggedInUser) {
              if (guestviewProfileSettings && guestviewProfileSettings.show_status == 0) {
                this.router.navigate(["access-deny"]);
              }
            }
            if (loggedInUser) {
              let currentUserBlockIds = [];
              if (currentUser.blocksIds && currentUser.blocksIds.blocks_ids) {
                currentUserBlockIds = currentUser.blocksIds.blocks_ids.split(",");
              }
              let loggedInUserBlockIds = [];
              if (loggedInUser.blocksIds && loggedInUser.blocksIds.blocks_ids) {
                loggedInUserBlockIds = loggedInUser.blocksIds.blocks_ids.split(",");
              }
              if (currentUserBlockIds.indexOf( loggedInUser.id.toString() ) > -1 || loggedInUserBlockIds.indexOf( currentUser.id.toString() ) > -1) {
                this.router.navigate(["access-deny"]);
              }
            }
          }
          return true;
        } else {
          return false;
        }
      }));

  }
}
