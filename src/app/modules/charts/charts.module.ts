import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsService } from './charts.service';
import { HttpModule } from '@angular/http';

import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { PieComponent } from './components/pie/pie.component';
import { GaugeComponent } from './components/gauge/gauge.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragulaModule } from 'ng2-dragula';


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
    DragulaModule,
    HttpModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [ChartsService],
  declarations: [ChartsComponent, VerticalBarComponent, PieComponent, GaugeComponent],
  exports: [ChartsComponent]
})
export class ChartsModule { }
