import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyblocklistComponent } from './myblocklist.component';

describe('MyblocklistComponent', () => {
  let component: MyblocklistComponent;
  let fixture: ComponentFixture<MyblocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyblocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyblocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
