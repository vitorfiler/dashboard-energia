import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoGdComponent } from './credito-gd.component';

describe('CreditoGdComponent', () => {
  let component: CreditoGdComponent;
  let fixture: ComponentFixture<CreditoGdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoGdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
