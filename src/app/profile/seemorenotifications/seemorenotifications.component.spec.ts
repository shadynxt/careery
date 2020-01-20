import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemorenotificationsComponent } from './seemorenotifications.component';

describe('SeemorenotificationsComponent', () => {
  let component: SeemorenotificationsComponent;
  let fixture: ComponentFixture<SeemorenotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeemorenotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemorenotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
