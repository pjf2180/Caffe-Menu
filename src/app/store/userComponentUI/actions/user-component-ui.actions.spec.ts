import * as fromUserComponentUI from './user-component-ui.actions';

describe('loadUserComponentUIs', () => {
  it('should return an action', () => {
    expect(fromUserComponentUI.loadUserComponentUIs().type).toBe('[UserComponentUI] Load UserComponentUIs');
  });
});
