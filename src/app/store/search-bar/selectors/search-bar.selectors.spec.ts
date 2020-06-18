import * as fromSearchBar from '../reducers/search-bar.reducer';
import { selectSearchBarState } from './search-bar.selectors';

describe('SearchBar Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSearchBarState({
      [fromSearchBar.searchBarFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
