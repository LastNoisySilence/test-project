import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { count } from '@swimlane/ngx-charts';

export interface DeviceStatistics {
  year: number;
  statistics: ChartData[]
}

export interface UserStatistics {
  additional: { total: number },
  statistics: ChartData
}

export interface PopulationStatistics {
  name: string;
  series: ChartData[]
}

export interface ChartData {
  name: string,
  value: number
}


@Injectable()
export class ChartsService {

  constructor(
    private http: Http,
    @Inject('api') private api: string
  ) { }

  get deviceStatistics(): Observable<DeviceStatistics[]> {
    return this.http.get(`${this.api}/devices`).map(data => data.json());
  }

  get demographicStatistics(): Observable<ChartData[]> {
    return this.http.get(`${this.api}/demographics`).map(data => data.json());
  }

  get userStatistics(): Observable<UserStatistics[]> {
    return this.http.get(`${this.api}/users`).map(data => data.json());
  }

  get populationStatistics(): Observable<PopulationStatistics[]> {
    return this.http.get(`${this.api}/population`).map(data => data.json());
  }

}
