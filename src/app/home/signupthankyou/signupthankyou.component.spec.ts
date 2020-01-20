import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupthankyouComponent } from './signupthankyou.component';

describe('SignupthankyouComponent', () => {
  let component: SignupthankyouComponent;
  let fixture: ComponentFixture<SignupthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
