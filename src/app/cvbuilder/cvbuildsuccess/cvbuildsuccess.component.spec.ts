import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvbuildsuccessComponent } from './cvbuildsuccess.component';

describe('CvbuildsuccessComponent', () => {
  let component: CvbuildsuccessComponent;
  let fixture: ComponentFixture<CvbuildsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvbuildsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvbuildsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
