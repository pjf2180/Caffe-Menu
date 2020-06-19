import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { setSearchCriteria } from '../../store/userComponentUI/actions/user-component-ui.actions'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() goBtn: boolean = false;
  searchText: string = '';
  @Output() onSearch: EventEmitter<void> = new EventEmitter()

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }

  onType() {
    if (!this.goBtn) {
      this.store.dispatch(setSearchCriteria({ data: this.searchText }))
    }
  }
  onSearchClick() {
    this.store.dispatch(setSearchCriteria({ data: this.searchText }));
    this.searchText = '';
    this.onSearch.emit();
  }
}
