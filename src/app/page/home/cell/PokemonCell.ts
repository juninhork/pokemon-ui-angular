import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-cell',
  templateUrl: './pokemonCell.html',
})
export class PokemonCell {
  @Input() name: string;
  @Input() image: string;
  @Input() id: number;
}