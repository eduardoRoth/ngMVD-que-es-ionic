import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {delay} from 'rxjs/operators';
import {BeersService} from '../../services/beers/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {
  // Eliminar el delay para cargar la información de manera directa
  beers$: Observable<BeerModel[]> = this.beerService.getBeers().pipe(delay(3000));

  constructor(private beerService: BeersService) {}

  async ngOnInit(){

  }

}
