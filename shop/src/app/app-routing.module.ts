
import { GestionPagesComponent } from './pages/gestion-pages/gestion-pages.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component:HomePagesComponent},
  {path:"products",component:ProductsPageComponent},
  {path:"gestion",component:GestionPagesComponent},
  {path:"products/:id",component:ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
