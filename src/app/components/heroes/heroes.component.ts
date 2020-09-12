import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];

  constructor(private _heroeService:HeroeService, private _router:Router) { }

  ngOnInit(): void {

  this.heroes = this._heroeService.getHeroes();
  console.log(this.heroes);

  }

  verHeroe(index:number){
    console.log(index);
    this._router.navigate(['/heroe',index]);
  }

}
