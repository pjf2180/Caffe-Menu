import * as fromSearchBar from './search-bar.actions';

describe('loadSearchBars', () => {
  it('should return an action', () => {
    expect(fromSearchBar.loadSearchBars().type).toBe('[SearchBar] Load SearchBars');
  });
});
