import { Component } from '@angular/core';
import { ChartsService, DeviceStatistics, ChartData, UserStatistics, PopulationStatistics } from './charts.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-charts',
  template: `
  <div class="row" [dragula]='"sortable"'>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-pie
        [data]="deviceStatistics$ | async">
        <h3 class="uk-card-title">Devices</h3>
        <label>Total users</label>
      </app-pie>
    </div>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-vertical-bar
       [data]="demographicStatistics$ | async">
       <h3 class="uk-card-title">Demographics</h3>
      </app-vertical-bar>
    </div>
    <div class="col-xs-12 col-md-4 uk-margin-small-bottom">
      <app-gauge
        [data]="userStatistics$ | async">
        <h3 class="uk-card-title">New users</h3>
      </app-gauge>
    </div>
    <div class="col-xs-12 uk-margin-small-bottom">
      <app-line
        [data]="populationStatistics$ | async">
        <h3 class="uk-card-title">Population</h3>
      </app-line>
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
