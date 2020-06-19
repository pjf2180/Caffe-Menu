import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { selectMenuWithCriteria } from 'src/app/store/menu/selectors/menu.selectors';
import * as fromMenuActions from '../../store/menu/actions/menu.actions'
import { selectSearchCriteria } from 'src/app/store/userComponentUI/selectors/user-component-ui.selectors';
import { clearSearchCriteria } from '../../store/userComponentUI/actions/user-component-ui.actions'
@Component({
  selector: 'app-categories',
  host: { 'class': 'col-12 col-lg-8' },
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<ProductCategory[]>;
  searchCriteria$: Observable<string>;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.categories$ = this.store.select(selectMenuWithCriteria);
    this.searchCriteria$ = this.store.select(selectSearchCriteria);
    this.store.dispatch(fromMenuActions.loadMenus());

  }

  clearSearchResults() {
    this.store.dispatch(clearSearchCriteria())
  }


}
