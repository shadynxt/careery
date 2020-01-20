/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 15-01-2019
# Module                : GenderNamePipe                     
# Object name           : GenderNamePipe    
# Functionality         : for showing gender
# Purpose               : transform
*******************************************************/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderName'
})
export class GenderNamePipe implements PipeTransform {
  /* Function Name : transform
	* Author : 
	* Created Date : 15-01-2019 
	* Modified Date : *
	* Purpose : to generate the text
	* PARAMS : value
	*/
  transform(value: string) : string {

  	if(value == 'M'){

  		return 'Male';
  	} else {

  		return 'Female';
  	}


  }

}
