import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbuilderComponent } from './cardbuilder.component';

describe('CardbuilderComponent', () => {
  let component: CardbuilderComponent;
  let fixture: ComponentFixture<CardbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
