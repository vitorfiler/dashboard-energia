import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'vex-simulador-gd',
  templateUrl: './simulador-gd.component.html',
  styleUrls: ['./simulador-gd.component.scss']
})
export class SimuladorGdComponent implements OnInit {

  multi: any[];
  view: any[] = [300, 170];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Consumo [kWh]';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Competência';
  legendTitle: string = 'Legenda';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
  }
  ngOnInit(): void {
  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

}
