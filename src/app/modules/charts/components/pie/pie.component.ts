import { Component, Input } from '@angular/core';
import { DeviceStatistics } from '../../charts.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  @Input()
  data: DeviceStatistics[];
  @Input()
  cardTitle: string;
  _total = 0;
  colorScheme = { domain: ['#88d8d8', '#A84ED3', '#C66852'] };
  showLegend = false;
  gradient = false;

  get total() {
    if (!this._total) {
      this._total = this.data[0].statistics.reduce((memo, _data) => memo += _data.value, 0);
    }
    return this._total;
  }

}
