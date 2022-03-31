import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedFormComponent } from './employed-form.component';

describe('EmployedFormComponent', () => {
  let component: EmployedFormComponent;
  let fixture: ComponentFixture<EmployedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
