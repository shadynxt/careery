import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacysettingsComponent } from './privacysettings.component';

describe('PrivacysettingsComponent', () => {
  let component: PrivacysettingsComponent;
  let fixture: ComponentFixture<PrivacysettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacysettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacysettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
