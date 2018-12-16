
import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';
import { AboutComponent } from './ContentArea/app.About';
import { ClientsComponent } from './ContentArea/app.Clients';
import { ExperienceComponent } from './ContentArea/app.Experience';
import { InterestsComponent } from './ContentArea/app.Interests';
import { SkillsComponent } from './ContentArea/app.Skills';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientsComponent,
    AboutComponent,
    ExperienceComponent,
    InterestsComponent,
    SkillsComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
