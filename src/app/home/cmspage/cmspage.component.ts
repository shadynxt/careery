/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 10-01-2019
# Module                : CmspageComponent                     
# Object name           : CmspageComponent    
# Functionality         : All cms page operations
# Purpose               : constructor, ngOnInit, getCms
*******************************************************/
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import * as global from '../../globalConfig';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
	selector: 'app-cmspage',
	templateUrl: './cmspage.component.html',
	styleUrls: ['./cmspage.component.scss']
})
export class CmspageComponent implements OnInit {

	public page_title: any = ''; // get page title
	public page_content: any = ''; // get page content
	public page_banner: any = ''; // get page content
	/* Function Name : constructor
	* Author : 
	* Created Date : 10-01-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : 
	*/
	constructor(
		private activeRoute: ActivatedRoute,
		private route: Router,
		translate: TranslateService,
		private cService: CommonService

	) {
		this.cService.setCommonContainerCssClass('common');
		this.activeRoute.params.subscribe((params) => {

			this.getCms(params.slug);
		})
		this.cService.activelang.subscribe((lang) => {

			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang(lang);

			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use(lang);
		});


	}
	/* Function Name : ngOnInit
  * Author : 
  * Created Date : 10-01-2019 
  * Modified Date : *
  * Purpose : to get data after html load
  * PARAMS : 
  */
	ngOnInit() {
	}

	/* Function Name : getCms
	  * Author : 
	  * Created Date : 10-01-2019 
	  * Modified Date : *
	  * Purpose : to get cms page data
	  * PARAMS : slug
	  */
	getCms(slug) {
		return this.cService.getPageContent(slug).subscribe((reponseData: any) => {
			//console.log(reponseData.data);

			if ((reponseData['statustext'] === 'success') && (reponseData['status'] == 200)) {

				// check details

				if (reponseData.data.details.length > 0) {
					this.page_title = reponseData['data']['details'][0].page_title;
					this.page_content = reponseData['data']['details'][0].page_content;
					this.page_banner = reponseData['data'].page_banner;
				} else {
					// if no data redirect to page-not-found
					this.route.navigate(['page-not-found']);
				}


			}

		});

	}
	// end of cms paga content data





}
