import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Televisor} from '../../models/Televisor';
import {TelevisorService} from '../../services/Televisor.service'

@Component({
  selector: 'app-televisor-crud',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterModule],
  templateUrl: './televisor-crud.component.html',
  styleUrl: './televisor-crud.component.css'
})
export class TelevisorCrudComponent {
  title = 'Propiedades Arrendatario';

  nuevaPropiedad: Televisor = new Televisor(0,'',0,'','','',0,'',''); // Nuevo arrendador a agregar
  datosModelosService: Televisor[] = [];
  propiedadSeleccionada: Televisor | null = null;


  constructor(private propiedadesArrendatarioService: TelevisorService) {}

  ngOnInit(): void {
    this.cargarPropiedadesArrendador();
  }

  cargarPropiedadesArrendador(): void {
    this.propiedadesArrendatarioService.getArrendatarioExterno().then((propiedades) => {
      this.datosModelosService = propiedades;
    }).catch((error) => {
      console.error(error);
    });
  }

  seleccionarPropiedad(propiedades: Televisor): void {
    this.propiedadSeleccionada = propiedades;
  }

  reiniciarSeleccion(): void {
    this.propiedadSeleccionada = null;
  }

  // Método para agregar un nuevo arrendador
  agregarPropiedad(): void {
    this.propiedadesArrendatarioService.agregarArrendatario(this.nuevaPropiedad)
      .then(nuevaPropiedad => {
        console.log('Arrendador agregado:', nuevaPropiedad);
        
    
  

        
      })
      .catch(error => {
        console.error('Error al agregar arrendador:', error);
        // Maneja el error según sea necesario
      });
  }

  actualizarPropiedad(): void {
    if (this.propiedadSeleccionada) {
      this.propiedadesArrendatarioService.actualizarArrendatario(this.propiedadSeleccionada)
        .then(PropiedadActualizada => {
          console.log('Arrendador actualizado:', PropiedadActualizada);
          this.cargarPropiedadesArrendador();
        })
        .catch(error => {
          console.error('Error al actualizar arrendador:', error);
        });
    }
  }

  borrarPropiedad(id: number): void {
    this.propiedadesArrendatarioService.borrarArrendatario(id)
      .then(() => {
        console.log('Arrendador borrado con éxito');
        this.cargarPropiedadesArrendador();
        this.propiedadSeleccionada = null;
      })
      .catch(error => {
        console.error('Error al borrar arrendador:', error);
      });
  }

}
