import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './Landing-Page/home-landing-page/home-landing-page.component';
import { HomeCardapioComponent } from './Cardapio/home-cardapio/home-cardapio.component';

const routes: Routes = [
  { path: "", component: HomeLandingPageComponent },
  { path: "cardapio", component: HomeCardapioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
