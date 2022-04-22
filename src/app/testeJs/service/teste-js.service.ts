import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TesteJsService {

  constructor(
    private http: HttpClient) { }

  getChartData(): any {
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    return this.http.get<any>(url);
  }

};
