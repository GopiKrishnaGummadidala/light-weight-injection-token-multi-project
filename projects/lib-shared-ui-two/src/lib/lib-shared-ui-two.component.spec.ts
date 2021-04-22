import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSharedUiTwoComponent } from './lib-shared-ui-two.component';

describe('LibSharedUiTwoComponent', () => {
  let component: LibSharedUiTwoComponent;
  let fixture: ComponentFixture<LibSharedUiTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSharedUiTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSharedUiTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
