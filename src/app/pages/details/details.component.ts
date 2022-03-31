import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
    let navigationExtras = this.router.getCurrentNavigation()?.extras.state;
    console.log('details', navigationExtras);
  }

  ngOnInit(): void {
  }

}
