import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularesLandingPageComponent } from './populares-landing-page.component';

describe('PopularesLandingPageComponent', () => {
  let component: PopularesLandingPageComponent;
  let fixture: ComponentFixture<PopularesLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularesLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
