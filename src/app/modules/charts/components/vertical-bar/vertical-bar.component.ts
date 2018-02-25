import { Component, Input } from '@angular/core';
import { ChartData } from '../../charts.service';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css']
})
export class VerticalBarComponent {

  @Input()
  data: ChartData[];
  @Input()
  cardTitle: string;
  valueSum = 0;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme = { domain: ['#88d8d8'] };

  yAxisTickFormatting = value => {
    if (!this.valueSum) {
      this.valueSum = this.data.reduce(
        (memo, _data) => memo += _data.value, 0
      );
    }
    return (100 / (this.valueSum / value)).toFixed() + '%';
  }

}
