import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonList } from 'src/app/model/PokemonList';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'pokemon-ui-angular';
  pokemonList:PokemonList
  constructor(private http : HttpClient) {
    this.buscaPokemon()
  }

  buscaPokemon() {
    this.http.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
              .subscribe(
                response => {
                  this.pokemonList = response;
                  console.log(this.pokemonList.pokemon)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
  }
  
}
