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
   * @description Enables toggling between navbar options (i.e. overview page and workout-form)
   */
  optionSelected() {
    this.selected = !this.selected;
  }

}
