import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HederafterloginComponent } from './hederafterlogin.component';

describe('HederafterloginComponent', () => {
  let component: HederafterloginComponent;
  let fixture: ComponentFixture<HederafterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HederafterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HederafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
