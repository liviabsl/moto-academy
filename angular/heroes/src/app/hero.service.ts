import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/heroes.mocks';
import { Hero } from './Hero';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroesMock():Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add("Hero service: fetched heroes")
    return heroes
  }
}
