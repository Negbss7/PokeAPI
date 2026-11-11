import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonCard } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService);

  pokemons: PokemonCard[] = [];
  carregando = true;
  erro = '';

  ngOnInit(): void {
    this.carregarPokemons();
  }

  carregarPokemons(): void {
    this.carregando = true;
    this.erro = '';

    this.pokemonService.getPokemons().subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os Pokémon. Verifique sua conexão e tente novamente.';
        this.carregando = false;
      }
    });
  }

  formatarId(id: number): string {
    return String(id).padStart(3, '0');
  }
}
