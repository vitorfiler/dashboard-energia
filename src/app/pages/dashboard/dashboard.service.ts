import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  consumoGauge1: number
  consumoGauge2: number
  consumoGauge3: number
  max1: number
  max2: number
  max3: number
  thresholds1 = {}
  thresholds2 = {}
  thresholds3 = {}
  constructor() { }
}
