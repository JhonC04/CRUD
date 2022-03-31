import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployed } from 'src/app/interfaces/employed.interface'

@Component({
  selector: 'app-employed-form',
  templateUrl: './employed-form.component.html',
  styleUrls: ['./employed-form.component.scss']
})
export class EmployedFormComponent implements OnInit {

  @Output() employed = new EventEmitter<IEmployed>();

  formEmployed: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.builderForm();
  }

  builderForm (){
    this.formEmployed = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      startDate: new Date()
    })
  }

  saveEmployed(){
    if(this.formEmployed.invalid){
      this.formEmployed.markAllAsTouched();
      return;
    }
    const { value } = this.formEmployed;
    this.employed.emit(value);
    console.log(this.formEmployed.value)
  }

  showWarning(controlName: string){
    return this.formEmployed.get(controlName)!.invalid && this.formEmployed.get(controlName)!.touched;
  }
}
