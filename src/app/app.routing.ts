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
import {AdminComponent} from "./components/admin/admin.component";
import {MovieComponent} from "./components/movie/movie.component";
import {IndexComponent} from "./components/index/index.component";
import {UserprofileComponent} from "./components/userprofile/userprofile.component";
import {AdminAuthGuard} from "./services/admin.auth.service";


const APP_ROUTES: Routes = [
    { path : 'poc', component: POCComponent},
    {path: '', component : IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard]},
    {path: 'movie/:movieId', component: MovieComponent},
    {path: 'home', component: HomeComponent},
    {path: 'userprofile/:userId', component: UserprofileComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
