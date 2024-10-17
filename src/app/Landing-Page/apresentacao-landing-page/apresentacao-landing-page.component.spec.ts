import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoLandingPageComponent } from './apresentacao-landing-page.component';

describe('ApresentacaoLandingPageComponent', () => {
  let component: ApresentacaoLandingPageComponent;
  let fixture: ComponentFixture<ApresentacaoLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApresentacaoLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentacaoLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
