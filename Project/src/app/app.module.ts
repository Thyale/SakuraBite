import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLandingPageComponent } from './Landing-Page/home-landing-page/home-landing-page.component';
import { HomeCardapioComponent } from './Cardapio/home-cardapio/home-cardapio.component';
import { ApresentacaoLandingPageComponent } from './Landing-Page/apresentacao-landing-page/apresentacao-landing-page.component';
import { SobreNosLandingPageComponent } from './Landing-Page/sobre-nos-landing-page/sobre-nos-landing-page.component';
import { PopularesLandingPageComponent } from './Landing-Page/populares-landing-page/populares-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeLandingPageComponent,
    HomeCardapioComponent,
    ApresentacaoLandingPageComponent,
    SobreNosLandingPageComponent,
    PopularesLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
