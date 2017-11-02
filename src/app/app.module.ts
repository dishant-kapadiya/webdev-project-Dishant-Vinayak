import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing} from './app.routing';
import { AppComponent } from './app.component';
import { POCComponent } from './poc/poc.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {PocServiceClient} from "./services/poc.service.client";

@NgModule({
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
  providers: [PocServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
