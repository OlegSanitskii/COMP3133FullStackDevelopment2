import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, HeroDetailComponent],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  heros = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}