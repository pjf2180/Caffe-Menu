import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MenuEffects } from './menu.effects';

describe('MenuEffects', () => {
  let actions$: Observable<any>;
  let effects: MenuEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MenuEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
