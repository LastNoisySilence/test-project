import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface Person {
  id: number;
  name: string;
  gender: string;
  age: number;
  address: {
    state: string,
    city: string
  };
}


@Injectable()
export class TablesService {

  constructor(
    private http: HttpClient,
    @Inject('api') private api: string
  ) { }

  get peoples(): Observable<Person[]> {
    return this.http.get(`${this.api}/peoples`).map((data: Person[]) => data);
  }

}
