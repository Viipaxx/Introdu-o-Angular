import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = []
  produtoInserir: string = ''
  menuType:string = "admin"

  constructor() {

   }

  ngOnInit(): void {
  }

  adicionar(prod: string){
      this.produtos.push(prod)
      this.produtoInserir = ''
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }

}
