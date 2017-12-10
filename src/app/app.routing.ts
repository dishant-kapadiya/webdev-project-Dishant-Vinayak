/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {POCComponent} from './components/poc/poc.component';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.service";


const APP_ROUTES: Routes = [
    { path : 'poc', component: POCComponent},
    {path: '', component : HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
