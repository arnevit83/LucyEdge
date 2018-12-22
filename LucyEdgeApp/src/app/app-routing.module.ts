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

import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{path: '', component:  HomeComponent },
                        {path: 'Skills', component:  SkillsComponent },
                        {path: 'Successes', component:  SuccessesComponent },
                        {path: 'Clients', component:  ClientsComponent },
                        {path: 'Testimonials', component:  TestimonialsComponent },
                        {path: 'Loves', component:  LovesComponent },
                        {path: 'Contact', component:  ContactComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
