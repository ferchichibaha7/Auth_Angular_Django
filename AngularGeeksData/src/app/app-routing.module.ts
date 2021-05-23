import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'auth', pathMatch:'full' },
  {path : 'auth',  component:AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
