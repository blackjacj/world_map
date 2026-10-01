import { Routes } from '@angular/router';
import { MapComp } from './map-comp/map-comp';

export const routes: Routes = [
    { path: 'home', component: MapComp },
    { path: '' , redirectTo:'/home', pathMatch:'full' }
];
