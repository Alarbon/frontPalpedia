import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pal } from '../interfaces/pal';

@Injectable({
  providedIn: 'root',
})
export class PalService {
 public pals: Pal[] = [];

 private url: string = 'https://palpedia-alarbon.onrender.com/v1/palpedia';

  constructor(private http: HttpClient) {}

  getPals() {
    return this.http.get<Pal[]>(this.url);
  }

  addPal(pal: Pal) {
    return this.http.post<Pal>(this.url, pal);
  }

  deletePal(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getPal(id: string) {
    return this.http.get<Pal>(`${this.url}/${id}`);
  }

  updatePal(pal: Pal) {
    return this.http.patch<Pal>(`${this.url}/${pal._id}`, pal);
  }

  

  getPalsByName(name: string) {
    return this.http.get<Pal[]>(`${this.url}/name/${name}`);
  }
}
