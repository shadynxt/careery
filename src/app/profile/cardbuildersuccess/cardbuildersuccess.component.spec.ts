import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbuildersuccessComponent } from './cardbuildersuccess.component';

describe('CardbuildersuccessComponent', () => {
  let component: CardbuildersuccessComponent;
  let fixture: ComponentFixture<CardbuildersuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbuildersuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbuildersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
