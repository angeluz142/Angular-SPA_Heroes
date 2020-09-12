import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroeService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any = {};

  constructor(

    private _activateRoute:ActivatedRoute,
    private _heroesService:HeroeService) { 

    this._activateRoute.params.subscribe(params => {
      // console.log('parametro: ' + params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })

  }



}
