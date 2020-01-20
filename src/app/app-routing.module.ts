/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AppRoutingModule                     
# Object name           : AppRoutingModule    
# Functionality         : all route of the application
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccessdenyComponent } from './accessdeny/accessdeny.component';
import { CmspageComponent } from './home/cmspage/cmspage.component';
import { SignupthankyouComponent } from './home/signupthankyou/signupthankyou.component';
import { SignupverificationComponent } from './home/signupverification/signupverification.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { UserlevelComponent } from './home/userlevel/userlevel.component';
import { SetupprofileComponent } from './home/setupprofile/setupprofile.component';
import { PreviewcvComponent } from './profile/previewcv/previewcv.component';
const routes: Routes = [
  {
    path : '',
    component: DefaultComponent,
    children : [
      {
        path : '',
        loadChildren : './home/home.module#HomeModule'
      },
      

    ]
  },
 
  {
    path : '',
    component: AfterloginComponent,
    children : [
      {
        path : '',
        loadChildren : './cvbuilder/cvbuilder.module#CvbuilderModule'
      },
      { path: 'page-not-found', component: PagenotfoundComponent },
      { path: 'access-deny', component: AccessdenyComponent },
      {
        path : 'signup-thankyou',
        component : SignupthankyouComponent
      },
      {
        path : 'verification',
        component : SignupverificationComponent
      },
      {
        path : 'level',
        component : UserlevelComponent
      },
      {
        path :'setup-profile',
        component: SetupprofileComponent
      },
      {
        path : 'reset-password/:token',
        component : ResetpasswordComponent
      },
      {
        path : 'page/:slug',
        component : CmspageComponent
      },
    ]
  },
  {
    path: 'preview-cv',
    component: PreviewcvComponent
  },
  {
    path : '',
    component: AfterloginComponent,
    children : [
      {
        path : '',
        loadChildren : './profile/profile.module#ProfileModule'
      }
    ]
  },

  { path: '**', redirectTo: 'page-not-found' },
  { path: 'accessdeny', redirectTo: 'access-deny' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
