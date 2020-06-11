import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundImageComponent } from './round-image.component';

describe('RoundImageComponent', () => {
  let component: RoundImageComponent;
  let fixture: ComponentFixture<RoundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
