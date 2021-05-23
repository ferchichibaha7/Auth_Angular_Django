import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path : '',  component:HomeComponent,canActivate: [RouteGuardService]},
  {path : 'auth',  component:AuthentificationComponent,canActivate: [RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
