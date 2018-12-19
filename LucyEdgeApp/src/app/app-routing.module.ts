import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
import { HomeComponent } from './ContentArea/app.Home';
import { ReferencesComponent } from './ContentArea/app.References';
import { ClientsComponent } from './ContentArea/app.Clients';
import { ExperienceComponent } from './ContentArea/app.Experience';
import { InterestsComponent } from './ContentArea/app.Interests';
import { AboutComponent } from './ContentArea/app.About';


import { ContactComponent } from './ContentArea/app.Contact';


import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{ path: '', component:  HomeComponent },
                        { path: 'References', component:  ReferencesComponent },
                        { path: 'Clients', component:  ClientsComponent },
                        { path: 'Experience', component:  ExperienceComponent },
                        { path: 'Interests', component:  InterestsComponent },
                        { path: 'Contact', component:  ContactComponent },
                        { path: 'About', component:  AboutComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
