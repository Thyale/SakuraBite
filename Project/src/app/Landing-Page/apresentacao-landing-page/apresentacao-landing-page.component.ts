import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-apresentacao-landing-page',
  templateUrl: './apresentacao-landing-page.component.html',
  styleUrl: './apresentacao-landing-page.component.css'
})
export class ApresentacaoLandingPageComponent {
  // Inicializado o AOS
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
