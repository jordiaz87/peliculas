import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  

  pelicula = {
    nombre: '',
    genero: '',
    pais: ''
  }


  procesar() {
    document.body.innerHTML = `<p>Nombre de la Pelicula Agregada: <strong>${this.pelicula.nombre}</strong> </p> 
    <p>Genero: <strong>${this.pelicula.genero}</strong> </p>
    <p>Pais: <strong>${this.pelicula.pais}</strong> </p>
    `
    
    ;
  }

  constructor() {}

  ngOnInit(): void {
    
  }

 
  }

