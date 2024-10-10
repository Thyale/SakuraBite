import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosLandingPageComponent } from './comentarios-landing-page.component';

describe('ComentariosLandingPageComponent', () => {
  let component: ComentariosLandingPageComponent;
  let fixture: ComponentFixture<ComentariosLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComentariosLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
