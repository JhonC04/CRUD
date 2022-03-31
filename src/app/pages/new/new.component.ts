import { Component, OnInit } from '@angular/core';
import { EmployedService } from 'src/app/services/employed.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(
    private _employedService: EmployedService
  ) { }

  ngOnInit(): void {
  }

  addEmployed($event: any){
    this._employedService.addEmployed($event)
    .then(response => {
      console.log('Se agrego empleado', response)
    })
    .catch(response => {
      console.log('Se presento un error creando nuevo empleado', response)
    })
  }

}
