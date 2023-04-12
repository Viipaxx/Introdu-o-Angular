import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ListaModule } from './lista/lista.module'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAttributosComponent } from './comp-attributos/comp-attributos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAttributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListaModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
