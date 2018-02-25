import { Component, ViewChild, Input } from '@angular/core';
import {Person} from '../../charts.service';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent {

  @Input()
  data: Person[];
  @ViewChild('myTable') table: any;
  @Input()
  cardTitle: string;

  rows: any[] = [];

  constructor() {
    this.rows = this.data;
  }

}
