import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroV2Component } from './financeiro-v2.component';

describe('FinanceiroV2Component', () => {
  let component: FinanceiroV2Component;
  let fixture: ComponentFixture<FinanceiroV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceiroV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
