import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardapioComponent } from './home-cardapio.component';

describe('HomeCardapioComponent', () => {
  let component: HomeCardapioComponent;
  let fixture: ComponentFixture<HomeCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
