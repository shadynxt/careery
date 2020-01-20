/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : AppModule                     
# Object name           : AppModule    
# Functionality         : set up application structure
# Purpose               : 
*******************************************************/
import { BrowserModule, Title  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GlobalModule} from "./global/global.module";
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
//import { SignupthankyouComponent } from './home/signupthankyou/signupthankyou.component';
//import { SignupverificationComponent } from './home/signupverification/signupverification.component';
//import { UserlevelComponent } from './home/userlevel/userlevel.component';
//import { SetupprofileComponent } from './home/setupprofile/setupprofile.component';
//import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
//import { PreviewcvComponent } from './profile/previewcv/previewcv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './layout/default/header/header.component';
import { FooterComponent } from './layout/default/footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HederafterloginComponent } from './layout/afterlogin/hederafterlogin/hederafterlogin.component';
import { FooterafterloginComponent } from './layout/afterlogin/footerafterlogin/footerafterlogin.component'; 
import { CmspageComponent } from './home/cmspage/cmspage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccessdenyComponent } from './accessdeny/accessdeny.component';
import { ShareButtonModule } from '@ngx-share/button';

import { LoaderComponent } from './loader/loader.component';
import {LoaderService} from './loader/loader.service';
import {LoaderInterceptor} from './loader/loader.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AfterloginComponent,
    //SignupthankyouComponent,
    //SignupverificationComponent,
    //UserlevelComponent,
    //SetupprofileComponent,
    //ResetpasswordComponent,
    //PreviewcvComponent,  
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    HederafterloginComponent,
    FooterafterloginComponent,
    AccessdenyComponent,
    CmspageComponent,
    LoaderComponent
  ],

  imports: [
    CommonModule,
    GlobalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ShareButtonModule
  ],
  providers: [
      FormsModule,
      Title,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      },
      LoaderService,
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
