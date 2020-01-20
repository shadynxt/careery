/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 15-01-2019
# Module                : SanitizeHtmlPipe                     
# Object name           : SanitizeHtmlPipe    
# Functionality         : for html binding 
# Purpose               : transform
*******************************************************/
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  /* Function Name : constructor
	* Author : 
	* Created Date : 15-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : sanitizer
	*/
  constructor(protected sanitizer: DomSanitizer) {}
 
  /* Function Name : transform
	* Author : 
	* Created Date : 15-01-2019 
	* Modified Date : *
	* Purpose : to generate the html
	* PARAMS : value
	*/
 public transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
