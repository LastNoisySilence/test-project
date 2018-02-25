import {
  Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef
} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {Observable} from 'rxjs/Observable';
import {PieComponent} from '../../../charts/components/pie/pie.component';
import {VerticalBarComponent} from '../../../charts/components/vertical-bar/vertical-bar.component';
import {GaugeComponent} from '../../../charts/components/gauge/gauge.component';
import {LineComponent} from '../../../charts/components/line/line.component';
import {ResizableWrapperComponent} from '../resizable-wrapper/resizable-wrapper.component';
import {ResponsiveTableComponent} from '../../../charts/components/responsive-table/responsive-table.component';

@Component({
  selector: 'app-widget-aggregator',
  template: `
    <div class="uk-grid-small" uk-grid>
      <div class="uk-width-3-4">
        <select class="uk-select" (change)="selectComponent($event)">
          <option *ngFor="let component of components; let i = index" [value]="i">
            {{ component.title }}
          </option>
        </select>
      </div>
      <div class="uk-width-1-4">
        <button class="uk-button uk-button-default" (click)="appendElement()">
          Append element
        </button>
      </div>
    </div>
    <div class="uk-grid-small" [dragula]='"sortable"' uk-grid>
      <ng-template #target></ng-template>
    </div>
  `,
  styleUrls: ['./widget-aggregator.component.css']
})
export class WidgetAggregatorComponent {

  @Input()
  dataList: [Observable<any>];
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  cardTitle: string;
  componentIndex: number = 0;
  components: [{component: any, title: string}] = [
    {
      component: PieComponent,
      title: 'Devices'
    },
    {
      component: VerticalBarComponent,
      title: 'Demographics'
    },
    {
      component: GaugeComponent,
      title: 'New users'
    },
    {
      component: LineComponent,
      title: 'Population'
    },
    {
      component: ResponsiveTableComponent,
      title: 'Persons'
    }
  ];

  constructor(
    private dragulaService: DragulaService,
    private cfr: ComponentFactoryResolver,
    private vcRef: ViewContainerRef,
  ) {
    dragulaService.setOptions('sortable', {
      moves(el, container, handle) {
        return handle.tagName === 'rect' || handle.tagName === 'svg';
      }
    });
  }

  selectComponent(event) {
    this.componentIndex = Number.parseInt(event.target.value);
  }

  appendElement() {
    this.cardTitle = this.components[this.componentIndex].title;
    const currentWidgetFactory = this.cfr.resolveComponentFactory(
      this.components[this.componentIndex].component
    );

    const currentWidget = this.vcRef.createComponent(currentWidgetFactory);

    const resizableWrapperFactory = this.cfr.resolveComponentFactory(
      ResizableWrapperComponent
    );

    this.target.createComponent(
      resizableWrapperFactory,
      0,
      undefined,
      [
        [currentWidget.location.nativeElement]
      ]
    );

    this.dataList[this.componentIndex].subscribe(data => {
      currentWidget.instance['data'] = data;
      currentWidget.instance['cardTitle'] = this.cardTitle;
    });
  }

}
