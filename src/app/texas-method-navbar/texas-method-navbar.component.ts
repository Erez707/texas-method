import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'texas-method-navbar',
  templateUrl: './texas-method-navbar.component.html',
  styleUrls: ['./texas-method-navbar.component.scss']
})
export class TexasMethodNavbarComponent implements OnInit {

  selected: boolean = true;

  constructor(  ) {  }

  ngOnInit(): void {
  }

  /**
   * @description select overview page
   */
   setSelectedTrue() {
    this.selected = true;
  }

  /**
   * @description select workout-form page
   */
   setSelectedFalse() {
    this.selected = false;
  }

}
