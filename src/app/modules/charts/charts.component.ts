import { Component } from '@angular/core';
import { ChartsService, DeviceStatistics, ChartData, UserStatistics, PopulationStatistics } from './charts.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-charts',
  template: `
  <div class="rows" [dragula]='"sortable"'>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-resizable-wrapper>
        <app-pie
          [data]="deviceStatistics$ | async">
          <h3 class="uk-card-title">Devices</h3>
          <label>Total users</label>
        </app-pie>
      </app-resizable-wrapper>
    </div>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-resizable-wrapper>
        <app-vertical-bar
         [data]="demographicStatistics$ | async">
         <h3 class="uk-card-title">Demographics</h3>
        </app-vertical-bar>
      </app-resizable-wrapper>
    </div>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-resizable-wrapper>
        <app-gauge
          [data]="userStatistics$ | async">
          <h3 class="uk-card-title">New users</h3>
        </app-gauge>
      </app-resizable-wrapper>
    </div>
    <div class="col-xs-12 uk-margin-small-bottom">
      <app-resizable-wrapper>
        <app-line
          [data]="populationStatistics$ | async">
          <h3 class="uk-card-title">Population</h3>
        </app-line>
      </app-resizable-wrapper>
    </div>
  </div>
  `
})
export class ChartsComponent {

  deviceStatistics$: Observable<DeviceStatistics[]>;
  demographicStatistics$: Observable<ChartData[]>;
  userStatistics$: Observable<UserStatistics[]>;
  populationStatistics$: Observable<PopulationStatistics[]>;

  constructor(private data: ChartsService) {
    this.deviceStatistics$ = data.deviceStatistics;
    this.demographicStatistics$ = data.demographicStatistics;
    this.userStatistics$ = data.userStatistics;
    this.populationStatistics$ = data.populationStatistics;
  }

}
