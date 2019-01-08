import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
import { HomeComponent } from './ContentArea/app.Home';

import { SkillsComponent } from './ContentArea/app.Skills';
import { SuccessesComponent } from './ContentArea/app.Successes';
import { ClientsComponent } from './ContentArea/app.Clients';
import { TestimonialsComponent } from './ContentArea/app.Testimonials';
import { LovesComponent } from './ContentArea/app.Loves';
import { ContactComponent } from './ContentArea/app.Contact';
import { BrandStrategyComponent } from './ContentArea/app.BrandStrategy';
import { CopywriteringComponent } from './ContentArea/app.Copywritering';
import { InspoComponent } from './ContentArea/app.Inspo';

//Skills
import { BrandpurposeComponent } from './ContentArea/Skills/app.Brandpurpose';
import { BrandpositioningComponent } from './ContentArea/Skills/app.Brandpositioning';
import { BrandstrategytrainingcoursesComponent } from './ContentArea/Skills/app.Brandstrategytrainingcourses';
import { CustomerinsightComponent } from './ContentArea/Skills/app.Customerinsight';
import { CopywritingresearchconceptsComponent } from './ContentArea/Skills/app.Copywritingresearchconcepts';
import { WebsitecopywriterComponent } from './ContentArea/Skills/app.Websitecopywriter';





import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{path: '', component:  HomeComponent },
                        {path: 'Skills', component:  SkillsComponent },
                        {path: 'Successes', component:  SuccessesComponent },
                        {path: 'Clients', component:  ClientsComponent },
                        {path: 'Testimonials', component:  TestimonialsComponent },
                        {path: 'Loves', component:  LovesComponent },
                        {path: 'Contact', component:  ContactComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: 'BrandStrategy',  component: BrandStrategyComponent},
                        {path: 'CopyWriting',  component: CopywriteringComponent},
                        {path: 'Inspo',  component: InspoComponent},


                        {path: 'Skills/Brandpurpose',  component: BrandpurposeComponent},
                        {path: 'Skills/Brandpositioning',  component: BrandpositioningComponent},
                        {path: 'Skills/Brandstrategytrainingcourses',  component: BrandstrategytrainingcoursesComponent},
                        {path: 'Skills/Customerinsights',  component: CustomerinsightComponent},
                        {path: 'Skills/Copywritingresearchconcepts',  component: CopywritingresearchconceptsComponent},
                        {path: 'Skills/Websitecopywriter',  component: WebsitecopywriterComponent},





                        {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
