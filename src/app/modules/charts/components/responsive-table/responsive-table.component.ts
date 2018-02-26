import {
  Component, Input, HostListener
} from '@angular/core';
import {Person} from '../../charts.service';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent {

  @Input()
  data: Person[];

  @Input()
  cardTitle: string;

  rows: any[] = [];

  @HostListener('window:resize', ['$event'])
  onResize() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  constructor() {
    this.rows = this.data;
  }

}
