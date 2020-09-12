import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroeService } from '../../services/heroes.service';



@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styles: []
})
export class SearchsComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _activatedRoute:ActivatedRoute,private _heroeService:HeroeService) 
  {  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(param => {
      // console.log(param['id']);
      this.heroes = this._heroeService.BuscarHeroe(param['id']);
      this.termino = param['id'];
      console.log(this.heroes);
    });
  }

}
