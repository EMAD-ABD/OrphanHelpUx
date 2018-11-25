import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CorpSignUpComponent } from './corp-sign-up/corp-sign-up.component';
import { DonatorSignUpComponent } from './donator-sign-up/donator-sign-up.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'home', component:HomeComponent
  ,
  children:[
   
    { path:'login', component:LoginComponent},
    { path:'signup', component:SignupComponent
    ,
    children:[
      { path:'donatorSignUp', component:DonatorSignUpComponent},
    { path:'corpSignUp', component:CorpSignUpComponent},
    ]},
  
  ]},
  { path:'about', component:AboutComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  HomeComponent,LoginComponent,CorpSignUpComponent,DonatorSignUpComponent,AboutComponent,SignupComponent

]