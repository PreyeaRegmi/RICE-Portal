import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth-service.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
  },
  {
    path: 'home', 
    component: HomeLayoutComponent,
    // canActivate: [AuthService],
    children: [{
      path:'',
      loadChildren: () => import('./home/home-layout.module').then(m => m.HomeLayoutModule)
    }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }

];



@NgModule({
  imports: [ CommonModule,
    BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }