import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 

  { path: 'articles', component: ListComponent ,    canActivate: [AuthGuard],
}, 
  { path: 'create', component: FormCreateComponent }, 
  { path: 'edit/:id', component: FormEditComponent },
  { path: 'signup', component: SignupComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
