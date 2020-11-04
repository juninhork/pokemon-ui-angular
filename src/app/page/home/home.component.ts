import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Pokemon } from 'src/app/model/Pokemon';
import { PokemonList } from 'src/app/model/PokemonList';
import { Constant } from 'src/assets/Constant';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonList:PokemonList;
  pokemonArray: Pokemon[];
  pokemonArray_Original:Pokemon[];
  searchText="";
 
  constructor(private http : HttpClient) {
    this.buscaPokemon()
  }

  functionToCallOnKeyUp(event){
    this.searchText = event
  }

  detailPokemon(pokemon:Pokemon){
    // this.router.navigateByUrl('/user');
  }


  buscaPokemon() {
    this.http.get(Constant.url).subscribe(
        response => {
          this.pokemonList = response;
          this.pokemonArray = this.pokemonList.pokemon;
        },
        erro => {
          if(erro.status == 400) {
              console.log(erro);
          }
        }
    );
  }
}
