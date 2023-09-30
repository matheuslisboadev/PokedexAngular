import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number | undefined;
  pokemonSelecionado?: any;
  pokemonModalSelecionado?: any;
  filterValue = "";

  constructor(private dataService: DataService) { }
  

  ngOnInit(): void {
    this.getPokemons();
    this.filterValue = ''
  }

  getPokemons() {
    console.log(this.pokemons);
    const offset = (this.page - 1) * 10; 
    this.dataService.getPokemons(10, offset)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
  
        response.results.forEach((result: { name: string; }): void => {
          this.dataService.pegarMaisInfo(result.name)
            .subscribe((uniQresponse: any) => {
              this.pokemons.push(uniQresponse);
            })
        });
      });
  }
  
  pageChange(page: number) {
    this.page = page;
    this.pokemons = []; 
    this.getPokemons();
  }
  
  

  abrirModal(pokemon: string[]) {
    console.log('Abrir modal para:', pokemon);
    this.pokemonSelecionado = pokemon;
    this.pokemonModalSelecionado = pokemon;
  }
  
  fecharModal() {
    this.pokemonSelecionado = null;
  }
  onInputChange() {
    if (!this.filterValue) {
      return this.pokemons;
    }
    console.log(this.filterValue);
    console.log('Input change!');
     return this.pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }  
}
