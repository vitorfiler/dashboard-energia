import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorGdComponent } from './simulador-gd.component';

describe('SimuladorGdComponent', () => {
  let component: SimuladorGdComponent;
  let fixture: ComponentFixture<SimuladorGdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorGdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorGdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
