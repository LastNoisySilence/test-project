import { Component } from '@angular/core';
import {
  ChartsService, DeviceStatistics, ChartData, UserStatistics,
  PopulationStatistics, Person
} from './charts.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-charts',
  template: `<app-widget-aggregator [dataList]="dataList"></app-widget-aggregator>`
})
export class ChartsComponent {

  deviceStatistics$: Observable<DeviceStatistics[]>;
  demographicStatistics$: Observable<ChartData[]>;
  userStatistics$: Observable<UserStatistics[]>;
  populationStatistics$: Observable<PopulationStatistics[]>;
  persons$: Observable<Person[]>;

  dataList: Observable<any>[] = [];

  constructor(private data: ChartsService) {
    this.persons$ = data.peoples;
    this.deviceStatistics$ = data.deviceStatistics;
    this.demographicStatistics$ = data.demographicStatistics;
    this.userStatistics$ = data.userStatistics;
    this.populationStatistics$ = data.populationStatistics;

    this.dataList.push(
      this.deviceStatistics$,
      this.demographicStatistics$,
      this.userStatistics$,
      this.populationStatistics$,
      this.persons$
    );
  }

}
