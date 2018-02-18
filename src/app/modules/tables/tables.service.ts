import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { count } from '@swimlane/ngx-charts';

export interface Person {
  id: number;
  name: string;
  gender: string;
  age: number;
  address: {
    state: string,
    city: string
  }
}


@Injectable()
export class TablesService {

  constructor(
    private http: Http,
    @Inject('api') private api: string
  ) { }

  get peoples(): Observable<Person[]> {
    return this.http.get(`${this.api}/peoples`).map(data => data.json());
  }

}
