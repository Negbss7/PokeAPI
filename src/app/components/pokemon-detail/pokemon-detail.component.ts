import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PokemonApiDetails } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService);
  private readonly route = inject(ActivatedRoute);

  pokemon: PokemonApiDetails | null = null;
  imagem = '';
  carregando = true;
  erro = '';

  private readonly nomesDosTipos: Record<string, string> = {
    normal: 'Normal', fire: 'Fogo', water: 'Água', electric: 'Elétrico',
    grass: 'Planta', ice: 'Gelo', fighting: 'Lutador', poison: 'Venenoso',
    ground: 'Terra', flying: 'Voador', psychic: 'Psíquico', bug: 'Inseto',
    rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio',
    steel: 'Aço', fairy: 'Fada'
  };

  ngOnInit(): void {
    this.carregarDetalhes();
  }

  carregarDetalhes(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isInteger(id) || id < 1) {
      this.erro = 'O ID informado não é válido.';
      this.carregando = false;
      return;
    }

    this.carregando = true;
    this.erro = '';
    this.pokemon = null;

    // Nova requisição GET feita ao selecionar o card.
    this.pokemonService.getPokemonById(id).subscribe({
      next: (dados) => {
        this.pokemon = dados;
        this.imagem = dados.sprites.other?.['official-artwork']?.front_default
          ?? dados.sprites.front_default
          ?? '';
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os detalhes deste Pokémon.';
        this.carregando = false;
      }
    });
  }

  formatarId(id: number): string {
    return String(id).padStart(3, '0');
  }

  formatarNome(nome: string): string {
    return nome.replace(/-/g, ' ');
  }

  traduzirTipo(tipo: string): string {
    return this.nomesDosTipos[tipo] ?? tipo;
  }

  get alturaEmMetros(): string {
    return this.pokemon ? (this.pokemon.height / 10).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) : '—';
  }

  get pesoEmQuilos(): string {
    return this.pokemon ? (this.pokemon.weight / 10).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) : '—';
  }
}
