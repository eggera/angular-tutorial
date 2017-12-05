import { Injectable } from '@angular/core';

import { Hero } from '../types/hero';
import { HEROES } from '../data/mock.heroes';
import {MessageService} from './message.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Promise<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return Promise.resolve(HEROES);
  };

  getHeroesSlowly(): Promise<Hero[]> {
      return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
      });
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
