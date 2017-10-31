import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../service/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[]; // display four most popular heroes

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes().slice(2,5);
  }

}
