import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {POCComponent} from './components/poc/poc.component';
import {PocServiceClient} from './services/poc.service.client';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './services/auth.service';
import {AdminComponent} from './components/admin/admin.component';
import {ReviewServiceClient} from './services/review.service.client';
import {MovieComponent} from './components/movie/movie.component';
import {MovieServiceClient} from './services/movie.service.client';
import {IndexComponent} from './components/index/index.component';
import {UserprofileComponent} from './components/userprofile/userprofile.component';
import {AdminAuthGuard} from './services/admin.auth.service';
import {ModeratorAuthGuard} from './services/moderator.auth.service';

@NgModule({
    // Declare components here
    declarations: [
        AppComponent,
        POCComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent,
        AdminComponent,
        MovieComponent,
        IndexComponent,
        UserprofileComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        Routing
    ],
    // Client Side services here
    providers: [PocServiceClient, UserService, SharedService, AuthGuard, ReviewServiceClient, MovieServiceClient,
        AdminAuthGuard, ModeratorAuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
