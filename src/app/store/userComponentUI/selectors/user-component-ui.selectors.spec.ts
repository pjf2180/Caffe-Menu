import * as fromUserComponentUI from '../reducers/user-component-ui.reducer';
import { selectUserComponentUIState } from './user-component-ui.selectors';

describe('UserComponentUI Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserComponentUIState({
      [fromUserComponentUI.userComponentUIFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
