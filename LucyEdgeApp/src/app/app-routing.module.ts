import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
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

import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{path: '', component:  HomeComponent },
                        {path: 'Skills', component:  SkillsComponent },
                        {path: 'Successes', component:  SuccessesComponent },
                        {path: 'Clients', component:  ClientsComponent },
                        {path: 'YogaTeachers', component:  YogaTeachersComponent },
                        
                        {path: 'Testimonials', component:  TestimonialsComponent },
                        {path: 'Loves', component:  LovesComponent },
                        {path: 'Contact', component:  ContactComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: 'BrandStrategy',  component: BrandStrategyComponent},
                        {path: 'CopyWriting',  component: CopywriteringComponent},
                        {path: 'Inspo',  component: InspoComponent},

                        {path: 'Successes/Brandpurpose',  component: BrandpurposeComponent},
                        {path: 'Successes/Brandpositioning',  component: BrandpositioningComponent},
                        {path: 'Successes/Brandstrategytrainingcourses',  component: BrandstrategytrainingcoursesComponent},
                        {path: 'Successes/Customerinsights',  component: CustomerinsightComponent},
                        {path: 'Successes/Copywritingresearchconcepts',  component: CopywritingresearchconceptsComponent},
                        {path: 'Successes/Websitecopywriter',  component: WebsitecopywriterComponent},
                        {path: 'Successes/SEOCopywriting',  component: SEOCopywritingComponent},
                        {path: 'Successes/Toneofvoice',  component: ToneofvoiceComponent},
                        {path: 'Successes/Contentmarketing',  component: ContentmarketingComponent},
                        {path: 'Successes/Yogaschooldropout',  component: YogaschooldropoutComponent},
                        {path: 'Successes/Thehandbagwelliesyogaclub',  component: ThehandbagwelliesyogaclubComponent},
                        {path: 'Successes/Downdogbillionaire',  component: DowndogbillionaireComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
