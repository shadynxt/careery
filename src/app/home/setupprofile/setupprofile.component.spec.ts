import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupprofileComponent } from './setupprofile.component';

describe('SetupprofileComponent', () => {
  let component: SetupprofileComponent;
  let fixture: ComponentFixture<SetupprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
