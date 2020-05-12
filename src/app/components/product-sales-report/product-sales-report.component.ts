import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-sales-report',
  templateUrl: './product-sales-report.component.html',
  styleUrls: ['./product-sales-report.component.css']
})
export class ProductSalesReportComponent implements OnInit {

  @Input() insights: any;
  constructor() { }

  ngOnInit() {

  }

}
