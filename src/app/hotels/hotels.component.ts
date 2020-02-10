import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../mock-hotels';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels = HOTELS;
  filteredHotels = HOTELS;
  sortParam = 'price';
  show:boolean = false;
  
  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // subscribe to the queryparam
    this.route.queryParams.subscribe(queryParams => {
      this.sortAndFilter(queryParams)
    });
  }

  sortAndFilter = (queryParams) => {
    let key = this.sortParam = (queryParams.sort) ? queryParams.sort : 'price';
    this.filteredHotels = this.hotels;

    if (queryParams.departing_from) {
      this.filteredHotels = this.filteredHotels.filter(
        hotel => hotel.departing_from.toLowerCase() === queryParams.departing_from.toLowerCase()
      );
    }

    if (queryParams.start_date) {
      let query_start_date = new Date(queryParams.start_date);
      this.filteredHotels = this.filteredHotels.filter(
        hotel => {
          let time_1 = new Date(hotel.start_date); 
          return time_1 > query_start_date
        }
      );
    }

    if (!key) return;

    this.filteredHotels.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      else if (a[key] > b[key]) return 1;
      else return 0;
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

  getSelecteDate = (event: MatDatepickerInputEvent<Date>) => {
    let departureDate = new Date(event.value);
    // set the query string in URL
    let start_date = (departureDate.getMonth() +1) +'/'+departureDate.getDate()+'/'+departureDate.getFullYear();//toISOString().slice(0,10).split('-').reverse().join('/');
    this._router.navigate(['/hotels'], {
      queryParams: {'start_date': start_date },
      queryParamsHandling: 'merge'
    });
  }

}
