import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
import { HomeComponent } from './ContentArea/app.Home';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';



const routes: Routes = [{ path: '', component:  HomeComponent },
                        {path: 'not-found',  component: PageNotFoundComponent},
                        {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
