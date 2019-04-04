
import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';
import { SkillsComponent } from './ContentArea/app.Skills';
import { SuccessesComponent } from './ContentArea/app.Successes';
import { ClientsComponent } from './ContentArea/app.Clients';
import { YogaTeachersComponent } from './ContentArea/app.YogaTeachers';
import { TestimonialsComponent } from './ContentArea/app.Testimonials';
import { LovesComponent } from './ContentArea/app.Loves';
import { ContactComponent } from './ContentArea/app.Contact';
import { BrandStrategyComponent } from './ContentArea/app.BrandStrategy';
import { CopywriteringComponent } from './ContentArea/app.Copywritering';
import { InspoComponent } from './ContentArea/app.Inspo';

import { BrandpurposeComponent } from './ContentArea/Successes/app.Brandpurpose';
import { BrandpositioningComponent } from './ContentArea/Successes/app.Brandpositioning';
import { BrandstrategytrainingcoursesComponent } from './ContentArea/Successes/app.Brandstrategytrainingcourses';
import { CustomerinsightComponent } from './ContentArea/Successes/app.Customerinsight';
import { CopywritingresearchconceptsComponent } from './ContentArea/Successes/app.Copywritingresearchconcepts';
import { WebsitecopywriterComponent } from './ContentArea/Successes/app.Websitecopywriter';
import { SEOCopywritingComponent } from './ContentArea/Successes/app.SEOCopywriting';
import { ToneofvoiceComponent } from './ContentArea/Successes/app.Toneofvoice';
import { ContentmarketingComponent } from './ContentArea/Successes/app.Contentmarketing';
import { YogaschooldropoutComponent } from './ContentArea/Successes/app.Yogaschooldropout';
import { ThehandbagwelliesyogaclubComponent } from './ContentArea/Successes/app.Thehandbagwelliesyogaclub';
import { DowndogbillionaireComponent } from './ContentArea/Successes/app.Downdogbillionaire';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    SuccessesComponent,
    ClientsComponent,
    YogaTeachersComponent,
    TestimonialsComponent,
    LovesComponent,
    ContactComponent,
    NavComponent,
    BrandStrategyComponent,
    CopywriteringComponent,
    InspoComponent,
    PageNotFoundComponent,
    BrandpurposeComponent,
    BrandpositioningComponent,
    BrandstrategytrainingcoursesComponent,
    CustomerinsightComponent,
    CopywritingresearchconceptsComponent,
    WebsitecopywriterComponent,
    SEOCopywritingComponent,
    ToneofvoiceComponent,
    ContentmarketingComponent,
    YogaschooldropoutComponent,
    ThehandbagwelliesyogaclubComponent,
    DowndogbillionaireComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
