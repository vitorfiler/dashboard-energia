import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommomService } from 'src/app/services/commom.service';
import { CreditoGeracaoDemanda } from 'src/app/_models/credito-gd';
import { Unidade } from 'src/app/_models/unidade';
import * as XLSX from 'xlsx';
import { CreditoGdService } from './credito-gd.service';

@Component({
  selector: 'vex-credito-gd',
  templateUrl: './credito-gd.component.html',
  styleUrls: ['./credito-gd.component.scss']
})
export class CreditoGdComponent implements OnInit {
  unidade = new Unidade();
  fileName = 'CreditoGB-';
  lojasStorage: any;
  lojas: any;
  listLojas: any = [];
  displayedColumns: string[] = [
    "UC",
    "competencia",
    "consumo",
    "produzido",
    "creditoDebito",
    "acumulado",
  ];
  dataSource: MatTableDataSource<CreditoGeracaoDemanda>;
  listTableGD: any[] = [];
  preencheTable: CreditoGeracaoDemanda[] = [];

  constructor(private commomService: CommomService, private creditoGdService: CreditoGdService, private router: Router) { }

  ngOnInit() {
    var retornoValida = this.commomService.validaSessao();
    if (!retornoValida) {
      this.router.navigate(['login']);
      return;
    }
    this.getGeracaoDistribuida();
    this.lojasStorage = localStorage.getItem("Consumo");
    this.lojas = JSON.parse(this.lojasStorage);
    this.lojas.Unidades.forEach((element: any) => {
      this.listLojas.push(element);
    });
  }

  exportExcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('tableCreditoGD');

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'CreditoGD');

    /* save to file */
    XLSX.writeFile(wb, this.fileName + formatDate(new Date().toString(), 'yyyy-MM-dd', 'en-US') + '.xlsx');
  }

  extractTable() {

    for (let i = 0; i < this.listTableGD[0].Competencia.length; i++) {

      let table = new CreditoGeracaoDemanda();

      table.uc = this.listTableGD[0].UC[i]
      table.competencia = this.listTableGD[0].Competencia[i]
      table.consumo = this.listTableGD[0].Consumo[i]
      table.produzido = this.listTableGD[0].Produzido[i]
      table.creditoDebito = this.listTableGD[0].CreditoDebito[i]
      table.acumulado = this.listTableGD[0].Acumulado[i]
      this.preencheTable.push(table);
    }

    this.dataSource = new MatTableDataSource(this.preencheTable);
  }
  getGeracaoDistribuida(): Promise<any> {
    let clientId = localStorage.getItem('clientId');
    return this.creditoGdService.getGeracaoDistribuida(clientId).then(response => {
      this.listTableGD = response.body.Tabela;
      this.extractTable();
    })
      .catch(() => {
        console.log("Falha ao buscar lista de Geração de Demanda");
      });
  }
}
