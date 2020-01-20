import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecommendationsComponent } from './all-recommendations.component';

describe('AllRecommendationsComponent', () => {
  let component: AllRecommendationsComponent;
  let fixture: ComponentFixture<AllRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
