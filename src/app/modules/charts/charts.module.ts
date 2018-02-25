import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsComponent} from './charts.component';
import {RouterModule, Routes} from '@angular/router';
import {ChartsService} from './charts.service';

import {VerticalBarComponent} from './components/vertical-bar/vertical-bar.component';
import {PieComponent} from './components/pie/pie.component';
import {GaugeComponent} from './components/gauge/gauge.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LineComponent} from './components/line/line.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareModule} from '../share/share.module';
import {ResponsiveTableComponent} from './components/responsive-table/responsive-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


export const ROUTES: Routes = [
  {
    path: '',
    component: ChartsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    NgxDatatableModule,
    HttpClientModule,
    ShareModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [ChartsService],
  declarations: [
    ChartsComponent,
    VerticalBarComponent,
    PieComponent,
    GaugeComponent,
    LineComponent,
    ResponsiveTableComponent
  ],
  exports: [
    ChartsComponent,
    VerticalBarComponent,
    PieComponent,
    GaugeComponent,
    LineComponent,
    ResponsiveTableComponent
  ]
})
export class ChartsModule {
}
