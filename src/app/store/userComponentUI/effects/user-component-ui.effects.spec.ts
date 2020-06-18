import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserComponentUIEffects } from './user-component-ui.effects';

describe('UserComponentUIEffects', () => {
  let actions$: Observable<any>;
  let effects: UserComponentUIEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserComponentUIEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserComponentUIEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
