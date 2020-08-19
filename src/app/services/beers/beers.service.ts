import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeerModel} from '../../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(private http: HttpClient) { }

  getBeers(): Observable<BeerModel[]>{
    return this.http.get<BeerModel[]>('https://api.punkapi.com/v2/beers');
  }
}
