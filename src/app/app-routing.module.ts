import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'charts',
    pathMatch: 'full'
  },
  {
    path: 'charts',
    loadChildren: './modules/charts/charts.module#ChartsModule'
  },
  {
    path: 'tables',
    loadChildren: './modules/tables/tables.module#TablesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
