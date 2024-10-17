import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos'; 


@Component({
  selector: 'app-populares-landing-page',
  templateUrl: './populares-landing-page.component.html',
  styleUrl: './populares-landing-page.component.css'
})
export class PopularesLandingPageComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
