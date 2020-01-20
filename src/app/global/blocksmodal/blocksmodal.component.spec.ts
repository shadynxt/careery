import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksmodalComponent } from './blocksmodal.component';

describe('BlocksmodalComponent', () => {
  let component: BlocksmodalComponent;
  let fixture: ComponentFixture<BlocksmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
