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
    document.body.innerHTML = `<html>
    <head>
        <style>
            .field2 {
                margin: 0  auto;
                width: 300px;
                background-color: white;
                padding: 20px;
                color: black;
                font-size: 0.8em;
                border-radius: 3px;
            }
        </style>
    <body>
        <p class="field2">Nombre de la Pelicula Agregada: <strong>${this.pelicula.nombre}</strong> </p> 
        <p class="field2">Genero: <strong>${this.pelicula.genero}</strong> </p>
        <p class="field2">Pais: <strong>${this.pelicula.pais}</strong> </p>
    </body>
    </head>
    
</html>`
    
    
  }

  constructor() {}

  ngOnInit(): void {
    
  }

 
  }

