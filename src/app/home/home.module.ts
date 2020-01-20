/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : HomeModule                     
# Object name           : HomeModule    
# Functionality         : set up home module
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HomeRoutingModule } from './home-routing.module';
import {GlobalModule} from "../global/global.module";
import { LandingComponent } from './landing/landing.component';
import { SignupthankyouComponent } from './signupthankyou/signupthankyou.component';
import { SignupverificationComponent } from './signupverification/signupverification.component';
import { ProfileChartComponent } from './profile-chart/profile-chart.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserlevelComponent } from './userlevel/userlevel.component';
import { SetupprofileComponent } from './setupprofile/setupprofile.component';
// import { CmspageComponent } from './cmspage/cmspage.component';


@NgModule({
  declarations: [LandingComponent, SignupthankyouComponent, SignupverificationComponent, ProfileChartComponent, ResetpasswordComponent, UserlevelComponent, SetupprofileComponent,
    //  CmspageComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalModule,
    ChartsModule,

  ],
  providers:[]
})
export class HomeModule { }
