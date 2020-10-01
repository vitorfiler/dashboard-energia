import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDemandaComponent } from './grafico-demanda.component';

describe('GraficoDemandaComponent', () => {
  let component: GraficoDemandaComponent;
  let fixture: ComponentFixture<GraficoDemandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDemandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
