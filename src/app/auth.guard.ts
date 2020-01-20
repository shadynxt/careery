/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AuthGuard                     
# Object name           : AuthGuard    
# Functionality         : middleware to check auth
# Purpose               : constructor,canActivate
*******************************************************/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CommonService} from "./services/common.service";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /* Function Name : constructor
  * Author : 
  * Created Date : 10-01-2019 
  * Modified Date : *
  * Purpose : to define the all helpful objects and define the languages data
  * PARAMS : cService,router
  */
  constructor(private cService: CommonService, private router: Router) {}
  
  /* Function Name : canActivate
  * Author : 
  * Created Date : 10-01-2019 
  * Modified Date : *
  * Purpose : to handel the auth
  * PARAMS : next,state
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.cService.isLoggedIn().pipe(map((response: any) => {
        if (response.status === 'success') {
          return true;
        } else {
          this.router.navigate([""]); // redirect to home page if not loggedin
          return false;
        }
    }));
    
  }
}
