import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  reports: any = [
    {
      insights: [
        { label: 'Profit', score: 3200 },
        { label: 'Sold', score: 45 },
        { label: 'Forecast', score: 65 },
        { label: 'Profit percentage', score: 20 },
      ]
    },
    {
      insights: [
        { label: 'Profit', score: 32 },
        { label: 'Sold', score: 32 },
        { label: 'Forecast', score: 32 },
        { label: 'Profit percentage', score: 20 },
      ]
    },
    {
      insights: [
        { label: 'Profit', score: 32 },
        { label: 'Sold', score: 32 },
        { label: 'Forecast', score: 32 },
        { label: 'Profit percentage', score: 20 },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
