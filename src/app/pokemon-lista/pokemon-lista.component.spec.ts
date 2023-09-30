import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListaComponent } from './pokemon-lista.component';

describe('PokemonListaComponent', () => {
  let component: PokemonListaComponent;
  let fixture: ComponentFixture<PokemonListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListaComponent]
    });
    fixture = TestBed.createComponent(PokemonListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
