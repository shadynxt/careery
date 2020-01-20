import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvmessagesComponent } from './cvmessages.component';

describe('CvmessagesComponent', () => {
  let component: CvmessagesComponent;
  let fixture: ComponentFixture<CvmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
