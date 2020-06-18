import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { setSearchCriteria } from '../../store/search-bar/actions/search-bar.actions'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  searchText: string;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }

  onType() {
    this.store.dispatch(setSearchCriteria({ data: this.searchText }))
  }
}
