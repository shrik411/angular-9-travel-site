import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() filteredHotels: any;
  readMore: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
