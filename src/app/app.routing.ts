import {Routes, RouterModule} from '@angular/router';
import {POCComponent} from './poc/poc.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
  {path: '', component : POCComponent}
  ];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
