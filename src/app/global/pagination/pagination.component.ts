/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 06-02-2019
# Module                : PaginationComponent                     
# Object name           : PaginationComponent    
# Functionality         : create pagination component
# Purpose               : constructor, ngOnInit, pageClick, redefinePager
*******************************************************/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() pager = new EventEmitter(); // click event
  @Input() config: any ; // set the config
  pages : Array<any> = []; // get pages
  currentPage : number = 1; // for current page no
  displayPagesCount: number = 3; // set no of display page 
  totalPage: number = 0; // gte the total page
  
  /* Function Name : constructor
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to define the all helpful objects and defin the languages data
	* PARAMS : cService, modalService, translate
	*/
  constructor() {}
  /* Function Name : ngOnInit
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to get data after html load
	* PARAMS : 
	*/
  ngOnInit() {
    
    this.currentPage = this.config.page;
    if (this.config.pageCount) {
      this.totalPage = this.config.pageCount;
    } else {
      this.totalPage = this.config.totalRows/this.config.pageSize;
      if (this.totalPage%1 != 0) {
        this.totalPage +=1;
        this.totalPage = Math.floor(this.totalPage);
      }
    }
    if (this.displayPagesCount > this.totalPage) {
      this.displayPagesCount = this.totalPage;
    }
    this.pages = Array(this.displayPagesCount).fill(1).map((x,i)=>(i+1));
    
  }
  /* Function Name : pageClick
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : event for click on page
	* PARAMS : pageNo
	*/
  pageClick(pageNo) {
    this.currentPage = pageNo;
    if (this.currentPage < this.totalPage){
      this.redefinePager();
    }
    
    this.pager.emit(this.currentPage);
  }
  /* Function Name : redefinePager
	* Author : 
	* Created Date : 19-02-2019 
	* Modified Date : *
	* Purpose : to create pagination html
	* PARAMS : 
	*/
  redefinePager() {
      this.pages = [];
      this.pages.push(this.currentPage);
      if (this.currentPage-1 > 0) {
        this.pages.push(this.currentPage-1);
      }
      if (this.currentPage+1 <= this.totalPage) {
        this.pages.push(this.currentPage+1);
      }
      if (this.currentPage==1 ) {
        if (this.currentPage+2 <= this.totalPage) {
          this.pages.push(this.currentPage+2);
        } 
      }
      this.pages.sort((a, b) => a - b);

  }
}
