import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public data: any[];

  constructor(private httpClient: HttpClient) {
    this.data = [
      {
        id: 1,
        nombre: 'Adrian',
      },
      {
        id: 2,
        nombre: 'Jose',
      },
      {
        id: 3,
        nombre: 'Miguel',
      },
      {
        id: 4,
        nombre: 'Danny',
      },
      {
        id: 5,
        nombre: 'Wendy',
      },
      {
        id: 6,
        nombre: 'Daniela',
      },
      {
        id: 7,
        nombre: 'Carmen',
      },
      {
        id: 8,
        nombre: 'Andres',
      },
      {
        id: 9,
        nombre: 'Alexander',
      },
      {
        id: 10,
        nombre: 'Andrea',
      },
      {
        id: 11,
        nombre: 'Leticia',
      },
      {
        id: 12,
        nombre: 'Arturo',
      },
      {
        id: 13,
        nombre: 'Alfonzo',
      },
      {
        id: 14,
        nombre: 'Maria',
      },
      {
        id: 15,
        nombre: 'Jesus',
      },
      {
        id: 16,
        nombre: 'Jhoberth',
      },
      {
        id: 17,
        nombre: 'Jose',
      },
      {
        id: 18,
        nombre: 'Edgardo',
      },
      {
        id: 19,
        nombre: 'Briguite',
      },
      {
        id: 20,
        nombre: 'Yanahi',
      },
    ];
  }

    // Todos los heroes
    getData(): any[] {
      return this.data;
    }
}
