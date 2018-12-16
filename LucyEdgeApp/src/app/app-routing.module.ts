import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
import { HomeComponent } from './ContentArea/app.Home';
import { AboutComponent } from './ContentArea/app.About';
import { ClientsComponent } from './ContentArea/app.Clients';
import { ExperienceComponent } from './ContentArea/app.Experience';
import { InterestsComponent } from './ContentArea/app.Interests';
import { SkillsComponent } from './ContentArea/app.Skills';


import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{ path: '', component:  HomeComponent },
                        { path: 'about', component:  AboutComponent },
                        { path: 'clients', component:  ClientsComponent },
                        { path: 'experience', component:  ExperienceComponent },
                        { path: 'interests', component:  InterestsComponent },
                        { path: 'skills', component:  SkillsComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
