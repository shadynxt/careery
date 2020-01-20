import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdenyComponent } from './accessdeny.component';

describe('AccessdenyComponent', () => {
  let component: AccessdenyComponent;
  let fixture: ComponentFixture<AccessdenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessdenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessdenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
