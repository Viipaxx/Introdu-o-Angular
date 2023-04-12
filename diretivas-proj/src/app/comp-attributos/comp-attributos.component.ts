import { AfterContentChecked, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributos',
  templateUrl: './comp-attributos.component.html',
  styleUrls: ['./comp-attributos.component.css']
})
export class CompAttributosComponent implements OnInit, DoCheck, AfterViewChecked, AfterContentChecked {

  diferente: string = ''
  habilitado: string = ''
  senha: string = '';
  confirmarSenha: string = '';
  constructor() { }

  ngAfterViewChecked(): void {
    this.analisarSenha()
  }
  ngAfterContentChecked(): void {
    this.analisarSenha()
  }
  ngDoCheck(): void {

  }

  ngOnInit(): void {
  }

  analisarSenha() {
    if ((this.confirmarSenha.length) == 0){
      this.habilitado = 'disabled'
      this.diferente = ''
    }else{
      if (this.senha != this.confirmarSenha){
        this.diferente = 'diferente'
        this.habilitado = 'disabled'
      }else{
        this.diferente = 'igual'
        this.habilitado = ''
      }
    }
  }
}
