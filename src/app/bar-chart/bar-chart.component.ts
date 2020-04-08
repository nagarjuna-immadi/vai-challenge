import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Metric, ChartData } from '../models/user.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() 
  metrics: Metric[];

  @Output()
  selectedYear = new EventEmitter();

  chartData: ChartData[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Units';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }

  ngOnInit(): void {
    this.chartData = this.metrics.map(metric => ({
      name: (metric.year).toString(),
      value: metric.units
    }));
    this.chartData;
  }

  onSelect(data): void {
    this.selectedYear.emit(Number(data.name));
  }

}
