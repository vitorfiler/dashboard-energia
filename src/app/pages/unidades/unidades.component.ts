import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommomService } from 'src/app/services/commom.service';
import { Unidade } from 'src/app/_models/unidade';
import { UnidadesConsumidoras } from 'src/app/_models/unidades-consumidoras';
import { UnidadesService } from './unidades.service';
import * as XLSX from 'xlsx';
const DEFAULT_DAY = 1

@Component({
  selector: 'vex-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {
  preencheTable: UnidadesConsumidoras[] = [];
  mesFatu: string = this.mesAtual();
  fileName= 'UnidadesConsumidoras-'; 
  unidade = new Unidade();
  lojasStorage: any;
  lojas: any;
  listLojas: any = [];
  possuiFaturamento: Boolean = false;
  carregamento: Boolean = true;
  displayedColumns: string[] = [
      "UC",
      "mes",
      "cidade",
      "subGrupo",
      "consumoConvencional",
      "consumoPonta",
      "consumoForaPonta",
      "DemandaFatPonta",
      "DemandaFatFPonta",
      "consumoPorGD",
      "icms",
      "pis",
      "Cofins",
      "valorTotal",
  ];
  dataSource: MatTableDataSource<UnidadesConsumidoras>;
  listTableUnidades: any[] = [];


  constructor(private commomService: CommomService, private unidadesService: UnidadesService, private router: Router) {}

  ngOnInit() {
      var retornoValida  = this.commomService.validaSessao();
      if(!retornoValida){
          this.router.navigate(['login']);
          return;
       } 
      this.getTableDashboard();
       
  }

  mesAtual(){
      let date = new Date();
      let mesAtual = `${date.getFullYear()}` + `/${date.getMonth()+1}/` + DEFAULT_DAY 
      this.carregamento = false
      return mesAtual;
  }
  dateFilter(){
      this.preencheTable = [];
      this.carregamento = false
      this.getTableDashboard();
  }

  getFaturamento(event= new Date()){
      let date: Date = new Date(`${event}`);
      this.mesFatu = `${date.getFullYear()}` + `/${date.getMonth()+1}/` + DEFAULT_DAY
  }

  exportExcel(): void{
      /* table id is passed over here */   
     let element = document.getElementById('tableUnidades'); 

     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'UnidadesConsumidoras');

     /* save to file */
     XLSX.writeFile(wb, this.fileName + this.mesFatu + '.xlsx');
  }

  extractTable() {
      if(!this.listTableUnidades[0].competencia.length && (!this.carregamento)){
          return this.possuiFaturamento = true;
          
      }
      for (let i = 0;i < this.listTableUnidades[0].competencia.length;i++) {
          this.possuiFaturamento = false;
          let table = new UnidadesConsumidoras();
          table.uc = this.listTableUnidades[0].UC[i];
          table.competencia = this.listTableUnidades[0].competencia[i];
          table.cidade = this.listTableUnidades[0].cidade[i];
          table.NF = this.listTableUnidades[0].NF[i];
          table.subGrupo = this.listTableUnidades[0].subGrupo[i];
          table.consumoConvencional = this.listTableUnidades[0].consumoConvencional[i];
          table.consumoPonta = this.listTableUnidades[0].consumoPonta[i];
          table.consumoForaPonta = this.listTableUnidades[0].consumoForaPonta[i];
          table.consumoPorGD = this.listTableUnidades[0].consumoPorGD[i];
          table.ICMS = this.listTableUnidades[0].ICMS[i];
          table.PIS = this.listTableUnidades[0].PIS[i];
          table.COFINS = this.listTableUnidades[0].COFINS[i];
          table.valorTotal = this.listTableUnidades[0].valorTotal[i];
          table.demandaFatFPonta = this.listTableUnidades[0].demandaFatFPonta[i];
          table.demandaFatPonta = this.listTableUnidades[0].demandaFatPonta[i];
          this.preencheTable.push(table);
      }

      this.dataSource = new MatTableDataSource(this.preencheTable);
  }

  getTableDashboard(): Promise<any> {
      let clientId = localStorage.getItem("clientId");
      return this.unidadesService
          .getDadosUnidadesConsumidoras(clientId, this.mesFatu)
          .then((response) => {
              this.listTableUnidades = response.body.Tabela;
              localStorage.setItem("UnidadesConsumidoras", JSON.stringify(response.body.Tabela));
              this.extractTable();
              this.lojasStorage = localStorage.getItem("Consumo");
              this.lojas = JSON.parse(this.lojasStorage);
              this.lojas.Unidades.forEach((element: any) => {
                  this.listLojas.push(element);
              });
              
          })
          .catch(() => {
              console.log("Falha ao buscar conteudo da tabela");
          });
  }

}
