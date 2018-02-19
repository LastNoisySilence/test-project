import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TablesService } from './tables.service';
import { ShareModule } from '../share/share.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ResponsiveTableComponent } from './components/responsive-table/responsive-table.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: TablesComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule,
    NgxDatatableModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [TablesService],
  declarations: [TablesComponent, ResponsiveTableComponent],
  exports: [TablesComponent]
})
export class TablesModule { }
