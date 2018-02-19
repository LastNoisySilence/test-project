import { Component, OnInit } from '@angular/core';
import { TablesService, Person } from './tables.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-tables',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <app-resizable-wrapper>
          <app-responsive-table
            [data]="persons$ | async">
          </app-responsive-table>
        </app-resizable-wrapper>
      </div>
    </div>
  `
})
export class TablesComponent {
  persons$: Observable<Person[]>;

  constructor(private data: TablesService) {
    this.persons$ = data.peoples;
  }

}
