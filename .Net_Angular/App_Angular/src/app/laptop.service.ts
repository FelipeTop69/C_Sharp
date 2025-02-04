import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { LaptopCreacion } from './laptop.models';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/laptops';

  public crear(laptop: LaptopCreacion){
    return this.http.post(this.URLbase, laptop)
  }
}
