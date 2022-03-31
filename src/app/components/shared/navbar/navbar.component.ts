import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nuevo(){
    this.router.navigate(['/new/'])
  }

  list(){
    this.router.navigate(['/list/'])
  }

  details(){
    this.router.navigate(['/details/'])
  }

  edit(){
    this.router.navigate(['/edit/'])
  }

}
