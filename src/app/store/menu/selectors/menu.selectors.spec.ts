import * as fromMenu from '../reducers/menu.reducer';
import { selectMenuState } from './menu.selectors';

describe('Menu Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMenuState({
      [fromMenu.menuFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
