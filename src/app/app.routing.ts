/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {POCComponent} from './components/poc/poc.component';


const APP_ROUTES: Routes = [
    { path : 'poc', component: POCComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
