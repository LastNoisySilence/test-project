import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResizableModule} from 'angular-resizable-element';
import {ResizableWrapperComponent} from './components/resizable-wrapper/resizable-wrapper.component';
import {ControllerDirective} from './directives/controller.directive';
import {WidgetAggregatorComponent} from './components/widget-aggregator/widget-aggregator.component';
import {DragulaModule} from 'ng2-dragula';
import {LineComponent} from '../charts/components/line/line.component';
import {GaugeComponent} from '../charts/components/gauge/gauge.component';
import {PieComponent} from '../charts/components/pie/pie.component';
import {VerticalBarComponent} from '../charts/components/vertical-bar/vertical-bar.component';
import {ResponsiveTableComponent} from '../charts/components/responsive-table/responsive-table.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragulaModule
  ],
  declarations: [
    ResizableWrapperComponent,
    ControllerDirective,
    WidgetAggregatorComponent
  ],
  exports: [
    ResizableWrapperComponent,
    ControllerDirective,
    WidgetAggregatorComponent
  ],
  entryComponents: [
    VerticalBarComponent,
    PieComponent,
    GaugeComponent,
    LineComponent,
    ResizableWrapperComponent,
    ResponsiveTableComponent
  ]
})
export class ShareModule {
}
