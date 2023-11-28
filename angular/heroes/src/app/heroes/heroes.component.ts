
import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mocks/heroes.mocks';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = []
  selectedHero?: Hero;

  constructor(private  heroService: HeroService,
    private messageService: MessageService
    ){}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
    this.heroService.getHeroesMock().subscribe(heroes => this.heroes = heroes);
  }

  onSelectHero(hero:Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`)
  }
}