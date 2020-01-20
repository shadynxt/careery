/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 06-02-2019
# Module                : GlobalModule                     
# Object name           : GlobalModule    
# Functionality         : set branch of all global components
# Purpose               : 
*******************************************************/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GenderNamePipe} from "./gender-name.pipe";
import { DateFormatModule, DatePipe } from 'ng-date-format';
import { MomentModule } from 'ngx-moment';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationComponent } from './pagination/pagination.component';
import { BlocksmodalComponent } from './blocksmodal/blocksmodal.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { QRCodeModule } from 'angularx-qrcode';
import { PicturepathPipe } from './picturepath.pipe';
import {NgxPagerModule} from  'ngx-pager';
import { ChatComponent } from './chat/chat.component';
import { OnlynumaricinputDirective } from './onlynumaricinput.directive';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [ GenderNamePipe, PaginationComponent, BlocksmodalComponent,SanitizeHtmlPipe, PicturepathPipe, ChatComponent, OnlynumaricinputDirective],
  imports: [
    MomentModule,
    DateFormatModule,
    NgSelectModule,
    CommonModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    QRCodeModule,
    NgxPagerModule
  ],
  exports:[
    MomentModule,
    PaginationComponent,
    BlocksmodalComponent,
    DateFormatModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    BsDatepickerModule,
    MalihuScrollbarModule,
    GenderNamePipe,
    SanitizeHtmlPipe,
    TranslateModule,
    QRCodeModule,
    PicturepathPipe,
    NgxPagerModule,
    ChatComponent,
    OnlynumaricinputDirective
    
  ],
  providers:	  [ DatePipe ],
})
export class GlobalModule { }
