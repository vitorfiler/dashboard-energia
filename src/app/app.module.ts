import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

import { IconModule } from '@visurel/iconify-angular';

import { NgxMaskModule } from 'ngx-mask';
import { CreditoGdComponent } from './pages/credito-gd/credito-gd.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { SimuladorGdComponent } from './pages/simulador-gd/simulador-gd.component';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { GaugeModule, NgxChartsModule } from '@swimlane/ngx-charts';
import { FinanceiroV2Component } from './pages/financeiro-v2/financeiro-v2.component';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './pages/financeiro-v2/combo-chart';
import { NgxGaugeModule } from 'ngx-gauge';
import { GraficoDemandaComponent } from './pages/grafico-demanda/grafico-demanda.component';
import { ComboSeriesVerticalDemandaComponent } from './pages/grafico-demanda/combo-chart-demanda/combo-series-vertical-demanda.component';
import { ComboChartDemandaComponent } from './pages/grafico-demanda/combo-chart-demanda/combo-chart-demanda.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';
import { ComboChartConsumoComponent } from './pages/consumo/combo-chart-consumo/combo-chart-consumo.component';
import { ComboSeriesVerticalConsumoComponent } from './pages/consumo/combo-chart-consumo/combo-series-vertical-consumo.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditoGdComponent, 
    DashboardComponent, 
    FinanceiroComponent, 
    SimuladorGdComponent, 
    UnidadesComponent, 
    FinanceiroV2Component,
    ComboSeriesVerticalComponent,
    ComboSeriesVerticalDemandaComponent,
    ComboSeriesVerticalConsumoComponent,
    ComboChartComponent,
    ComboChartConsumoComponent,
    ComboChartDemandaComponent,
    GraficoDemandaComponent,
    ConsumoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    GaugeModule,
    NgxGaugeModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxChartsModule,
    MatSnackBarModule,
    ScrollingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    FormsModule,
    
    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
