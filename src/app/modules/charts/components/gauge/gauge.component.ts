import { Component, Input } from '@angular/core';
import { UserStatistics } from '../../charts.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent {
  @Input()
  data: UserStatistics[];
  colorScheme = { domain: ['#88d8d8'] };
  showLegend = false;
  gradient = false;
}
