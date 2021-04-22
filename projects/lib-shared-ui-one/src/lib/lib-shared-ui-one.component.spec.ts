import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSharedUiOneComponent } from './lib-shared-ui-one.component';

describe('LibSharedUiOneComponent', () => {
  let component: LibSharedUiOneComponent;
  let fixture: ComponentFixture<LibSharedUiOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSharedUiOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSharedUiOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
