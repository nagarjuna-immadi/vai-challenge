import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Metric, ChartData } from '../models/user.interface';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit, OnChanges {

  @Input()
  yearMetric: Metric;

  chartData: ChartData[];

  view: any[] = [600, 200];

  colorScheme = {
    domain: ['#FFA500', '#808080', '#1974D2']
  };

  constructor() { }

  ngOnChanges(): void {
    this.updateChartData();
  }

  ngOnInit(): void {
    this.updateChartData();
  }

  updateChartData() {
    this.chartData = [{
      name: this.getName(this.yearMetric.orange_metric),
      value: this.yearMetric.orange_metric
    },{
      name: this.getName(this.yearMetric.gray_metric),
      value: this.yearMetric.gray_metric
    },{
      name: this.getName(this.yearMetric.blue_metric),
      value: this.yearMetric.blue_metric
    }];
  }

  getName(decimal: number): string {
    return (decimal*100).toString()+'%'
  }

}
