// Objetos devolvidos pelo endpoint GET /pokemon?limit=20.
export interface PokemonApiListItem {
  name: string;
  url: string;
}

export interface PokemonApiListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonApiListItem[];
}

// Dados organizados para os cards, com ID obtido da URL recebida pela API.
export interface PokemonCard {
  id: number;
  name: string;
  imageUrl: string;
}

export interface PokemonApiDetails {
  id: number;
  name: string;
  height: number; // A API retorna em decímetros.
  weight: number; // A API retorna em hectogramas.
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: { front_default: string | null };
    };
  };
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: { name: string; url: string };
  }>;
}
