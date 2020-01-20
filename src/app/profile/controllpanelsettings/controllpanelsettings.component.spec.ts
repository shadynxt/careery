import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllpanelsettingsComponent } from './controllpanelsettings.component';

describe('ControllpanelsettingsComponent', () => {
  let component: ControllpanelsettingsComponent;
  let fixture: ComponentFixture<ControllpanelsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllpanelsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllpanelsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
