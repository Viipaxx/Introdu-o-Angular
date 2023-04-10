import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent{

  placeHolder: string = 'Email'
  @Input() senha: string = 'senha';
  color: string = 'red';
}
