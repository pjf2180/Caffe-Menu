import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsDropdownComponent } from './user-settings-dropdown.component';

describe('UserSettingsDropdownComponent', () => {
  let component: UserSettingsDropdownComponent;
  let fixture: ComponentFixture<UserSettingsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
