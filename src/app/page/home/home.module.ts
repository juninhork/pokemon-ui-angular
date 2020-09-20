import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { PokemonCell } from './cell/PokemonCell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFilterPipe } from 'src/app/component/MyFilterPipe.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonCell,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { 
  
}
