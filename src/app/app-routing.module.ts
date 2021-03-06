import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  // { path : '',
  //   redirectTo:'/superproducts',
  //   pathMatch:'full'
  // },
  { 
    path : 'products',
    redirectTo: '/superproducts'
  },
  {
    path:'product/:id',
    redirectTo:'/superproduct/:id'
  },
  {
    path:'superproducts',
    component: ProductListComponent,
    data: { animation: 'products'}
  },
  {
    path:'superproduct/:id',
    component: ProductDetailComponent,
    data: { animation: 'product'}
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
