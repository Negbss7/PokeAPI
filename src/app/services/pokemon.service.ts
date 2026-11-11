import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonApiDetails, PokemonApiListResponse, PokemonCard } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  // GET: https://pokeapi.co/api/v2/pokemon?limit=20
  getPokemons(): Observable<PokemonCard[]> {
    return this.http.get<PokemonApiListResponse>(`${this.apiUrl}?limit=20`).pipe(
      map((resposta) => resposta.results.map((pokemon) => {
        // A listagem contém nome + URL; o ID é extraído dessa URL.
        const partes = pokemon.url.split('/').filter(Boolean);
        const id = Number(partes[partes.length - 1]);

        return {
          id,
          name: pokemon.name,
          imageUrl: this.getArtworkUrl(id)
        };
      }))
    );
  }

  // GET: https://pokeapi.co/api/v2/pokemon/{id}
  // A tela de detalhes SEMPRE realiza esta nova consulta.
  getPokemonById(id: number): Observable<PokemonApiDetails> {
    return this.http.get<PokemonApiDetails>(`${this.apiUrl}/${id}`);
  }

  private getArtworkUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
