import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosLandingPageComponent } from './sobre-nos-landing-page.component';

describe('SobreNosLandingPageComponent', () => {
  let component: SobreNosLandingPageComponent;
  let fixture: ComponentFixture<SobreNosLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreNosLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreNosLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
