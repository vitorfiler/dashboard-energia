import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { CommomService } from 'src/app/services/commom.service';
import arrowBack from '@iconify/icons-ic/keyboard-backspace';

@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class RegisterComponent implements OnInit {

  arrowBack = arrowBack;
  form: FormGroup;
  mesFatu: string = "2020-03-01";
  inputType = 'password';
  visible = false;
  urlName = "/Cliente";
  cadastroInvalido: Boolean = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  dataNascimento: string = '';
  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private commomService: CommomService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      celular: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }


  registrar(nome: string, cpf: string, celular: string, email: string, senha: string, confirmarSenha: string){

      const body: any = {
        "nome": nome,
        "dataNascimento": this.dataNascimento,
        "cpf": cpf,
        "genero": "string",
        "celular": celular,
        "enderecoCliente": {
          "logradouro": "string",
          "numero": "string",
          "complemento": "string",
          "bairro": "string",
          "cidade": "string",
          "uf": "string",
          "cep": "string"
        },
        "email": email
      }
      

      // this.commomService.post(this.urlName, body).then(response =>{
        
      //   localStorage.setItem('Retorno', response.body);
      // }).catch(()=>{
      //   this.cadastroInvalido = true;
      //   console.log("error");
      // });

}

  getDataNascimento(event= new Date()){
    let date: Date = new Date(`${event}`);
    this.dataNascimento = this.mesFatu = `${date.getFullYear()}` + `-0${date.getMonth()+1}-` + `0${date.getDate()}`+ "T00:00:00.000Z";
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
