import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TesteJsService } from './service/teste-js.service';

@Component({
  selector: 'app-teste-js',
  templateUrl: './teste-js.component.html',
  styleUrls: ['./teste-js.component.scss']
})

export class TesteJsComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    backgroundColor: "#1D73BE",
  };

  barChartType: ChartType = 'bar';
  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  constructor(
    private router: Router,
    private _service: TesteJsService) { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this._service.getChartData().subscribe((res: any) => {
      const years: any[] = [];
      const dataset: any[] = [];
      const objDataset: {data: any[], label: string} = {
        data: [],
        label: `Population of ${res.data[0]['Nation']}`
      }

      res.data.map((item: any) => {
        years.push(item['Year']);
        objDataset.data.push(item['Population']);
      })
      dataset.push(objDataset);
      this.barChartData.labels = years;
      this.barChartData.datasets = dataset;
      this.chart?.update();
    }, (err: Error) => {
      console.error(err);
    })
  }

  gotToHomePage() {
    this.router.navigate(['']);
  }
}
