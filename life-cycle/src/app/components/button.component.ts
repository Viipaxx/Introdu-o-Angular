import { Component, Input, OnChanges, OnInit } from "@angular/core";


@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class Button implements OnInit, OnChanges{

  @Input() label: string = '';

  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Adicionar ao carrinho',
  }
  branco: string = 'white'

  @Input() nome: string = ''

  constructor() {
    console.log(`Constructor ${this.nome}`)
  }

  ngOnInit(): void{
    this.nome = this.nome + "X"
    console.log(`OnInit ${this.nome}`)
  }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`)
  }

  getAlert(num: number){
    alert(num)
  }

}
