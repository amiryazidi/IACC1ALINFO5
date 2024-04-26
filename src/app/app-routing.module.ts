import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProudctComponent } from './detail-proudct/detail-proudct.component';
import { ResidenceComponent } from './residence/residence.component';

const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component:HomeComponent},
  {path : 'product' , component: ProductComponent},
  {path : 'residence' , component: ResidenceComponent},
  {path : 'detail/:id', component: DetailProudctComponent},
  {path : '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
