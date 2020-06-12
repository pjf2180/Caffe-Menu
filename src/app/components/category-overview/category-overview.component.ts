import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/product-category.models';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.css']
})
export class CategoryOverviewComponent implements OnInit {

  @Input() category: ProductCategory;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  onItemClick(itemId: string) {
    this.router.navigate([itemId||'noid'], { relativeTo: this.route })
  }
}
