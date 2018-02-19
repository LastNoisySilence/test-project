import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface DeviceStatistics {
  year: number;
  statistics: ChartData[];
}

export interface UserStatistics {
  additional: { total: number };
  statistics: ChartData;
}

export interface PopulationStatistics {
  name: string;
  series: ChartData[];
}

export interface ChartData {
  name: string;
  value: number;
}


@Injectable()
export class ChartsService {

  constructor(
    private http: HttpClient,
    @Inject('api') private api: string
  ) { }

  get deviceStatistics(): Observable<DeviceStatistics[]> {
    return this.http.get(`${this.api}/devices`).map((data: DeviceStatistics[]) => data);
  }

  get demographicStatistics(): Observable<ChartData[]> {
    return this.http.get(`${this.api}/demographics`).map((data: ChartData[]) => data);
  }

  get userStatistics(): Observable<UserStatistics[]> {
    return this.http.get(`${this.api}/users`).map((data: UserStatistics[]) => data);
  }

  get populationStatistics(): Observable<PopulationStatistics[]> {
    return this.http.get(`${this.api}/population`).map((data: PopulationStatistics[]) => data);
  }

}
