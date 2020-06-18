import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SearchBarEffects } from './search-bar.effects';

describe('SearchBarEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchBarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchBarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SearchBarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
