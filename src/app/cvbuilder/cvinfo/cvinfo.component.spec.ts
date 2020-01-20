import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvinfoComponent } from './cvinfo.component';

describe('CvinfoComponent', () => {
  let component: CvinfoComponent;
  let fixture: ComponentFixture<CvinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
