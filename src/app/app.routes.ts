import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'Apropos', component: AboutComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
