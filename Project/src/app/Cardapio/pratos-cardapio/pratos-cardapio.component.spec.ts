import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosCardapioComponent } from './pratos-cardapio.component';

describe('PratosCardapioComponent', () => {
  let component: PratosCardapioComponent;
  let fixture: ComponentFixture<PratosCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PratosCardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
