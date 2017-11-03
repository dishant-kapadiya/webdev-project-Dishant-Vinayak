import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {POCComponent} from './components/poc/poc.component';
import {PocServiceClient} from './services/poc.service.client';

@NgModule({
    // Declare components here
    declarations: [
        AppComponent,
        POCComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        Routing
    ],
    // Client Side services here
    providers: [PocServiceClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
