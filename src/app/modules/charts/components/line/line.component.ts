import { Component, Input } from '@angular/core';
import { PopulationStatistics } from '../../charts.service';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  @Input()
  data: PopulationStatistics[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  autoScale = true;

  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };

}
