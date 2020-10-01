import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';

import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/registro/registro-cliente/register.component';
import { RegistroEmpresaComponent } from './Pages/registro/registro-empresa/registro-empresa.component';

import { HelpCenterComponent } from './Pages/help-center/help-center.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { CreditoGdComponent } from './pages/credito-gd/credito-gd.component';
import { SimuladorGdComponent } from './pages/simulador-gd/simulador-gd.component';
import { FinanceiroV2Component } from './pages/financeiro-v2/financeiro-v2.component';
import { GraficoDemandaComponent } from './pages/grafico-demanda/grafico-demanda.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';


const routes: VexRoutes = [
  // {
  //   path: '', redirectTo:'/home/init', pathMatch: 'full'
  // },
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'unidades', component: UnidadesComponent},
      {path:'financeiro', component: FinanceiroV2Component},
      {path:'credito-gd', component: CreditoGdComponent},
      {path:'simulador-gd', component: SimuladorGdComponent},
      {path:'consumo', component: ConsumoComponent},
      {path:'gradico-demanda', component: GraficoDemandaComponent}
    ]
  },
  {path:'login', component: LoginComponent},
  {path: 'cad-cliente',component: RegisterComponent},
  {path: 'cad-empresa',component: RegistroEmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

// preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
