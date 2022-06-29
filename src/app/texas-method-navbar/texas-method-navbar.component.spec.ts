import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasMethodNavbarComponent } from './texas-method-navbar.component';

describe('TexasMethodNavbarComponent', () => {
  let component: TexasMethodNavbarComponent;
  let fixture: ComponentFixture<TexasMethodNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexasMethodNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexasMethodNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
