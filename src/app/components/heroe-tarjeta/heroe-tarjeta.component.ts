import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Properties

  //@input especifica que el valor viene (entrada) fuera del componente
  @Input() heroe:any = {};
  @Input() index:number;

  // Outputs
  @Output() heroeSeleccionado: EventEmitter<number>;



  constructor(private _router:Router) { 
  
    this.heroeSeleccionado = new EventEmitter();
  
  } 

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
     this._router.navigate(['/heroe',this.index]);

    // Aplicando la comunicacion entre componentes padre-hijo

      //this.heroeSeleccionado.emit(this.index);
  }

}
