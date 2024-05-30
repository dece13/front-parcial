import { Injectable } from '@angular/core';
import { Televisor } from '../models/Televisor';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TelevisorService {
  private apiUrl = 'http://localhost:8080/grupo13/logingFormularioArrendatario'; // URL del backend

  constructor() { }

  async obtenerUsuarioPorId(id: number): Promise<Televisor> {
    try {
      const response = await axios.get<Televisor>(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error;
    }
  }

  // Método para enviar los datos del arrendador al backend
  async agregarArrendatario(arrendador: Televisor): Promise<Televisor> {
    try {
      const response = await axios.post<Televisor>(this.apiUrl, arrendador);
      return response.data;
    } catch (error) {
      console.error('Error al agregar arrendatario:', error);
      throw error;
    }
  }

  getArrendatarioExterno(): Promise<Televisor[]> {
    return axios.get<Televisor[]>(this.apiUrl).then(response => response.data);
  }

  async actualizarArrendatario(arrendatario: Televisor): Promise<Televisor> {
    try {
      const response = await axios.put<Televisor>(`${this.apiUrl}/${arrendatario.id}`, arrendatario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar arrendatario:', error);
      throw error;
    }
  }

  async borrarArrendatario(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar arrendatario:', error);
      throw error;
    }
  }
}

export { Televisor };
