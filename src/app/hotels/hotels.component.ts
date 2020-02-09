import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../mock-hotels';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels = HOTELS;
  filteredHotels = HOTELS;
  sortParam = '';
  show:boolean = false;
  
  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // subscribe to the queryparam
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
      let key = this.sortParam = (queryParams.sort) ? queryParams.sort : '';
      this.filteredHotels = this.hotels;

      if (queryParams.departing_from) {
        this.filteredHotels = this.filteredHotels.filter(
          hotel => hotel.departing_from.toLowerCase() === queryParams.departing_from.toLowerCase()
        );
      }

      if (!key) return;

      this.filteredHotels.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        else if (a[key] > b[key]) return 1;
        else return 0;
      });
    });
  }

  sort = (key: string) => {
    // set the query string in URL
    this._router.navigate(['/hotels'], {
      queryParams: {'sort': key },
      queryParamsHandling: 'merge'
    });
  }


  filterByDeparture = (key: string) => {
    this._router.navigate(['/hotels'], {
      queryParams: {'departing_from': key },
      queryParamsHandling: 'merge'
    });
  }

  clear = () => {
    this._router.navigate(['/hotels'], {})
  }

  showDescription = (id) => {

  }

}
