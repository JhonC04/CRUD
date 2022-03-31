import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployed } from 'src/app/interfaces/employed.interface';
import { EmployedService } from 'src/app/services/employed.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeds: IEmployed[] = [];

  naviagtionExtras: NavigationExtras = {} as NavigationExtras;

  constructor(
    private _serviceEmployed: EmployedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._serviceEmployed.getEmployeds$().subscribe({
      next: (res) => {
        this.employeds = res;
        console.log(this.employeds)
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => console.info('getEmployeds$ complete')
    })
  }

  view(employed: IEmployed){
    this.naviagtionExtras.state = employed;
    this.router.navigate(['details'], this.naviagtionExtras)
  }

}
