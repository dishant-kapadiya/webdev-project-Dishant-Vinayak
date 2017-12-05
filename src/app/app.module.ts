import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {POCComponent} from './components/poc/poc.component';
import {PocServiceClient} from './services/poc.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import {UserService} from './services/user.service.client';
import {SharedService} from "./services/shared.service";
import { HomeComponent } from './components/home/home.component';

@NgModule({
    // Declare components here
    declarations: [
        AppComponent,
        POCComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        Routing
    ],
    // Client Side services here
    providers: [PocServiceClient, UserService, SharedService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
