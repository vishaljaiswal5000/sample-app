import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeeType } from '../../models/employeeType';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  save() {
    let tableName = 'employees';
    let employee: employeeType = {
      id: this.employeeForm.controls['id'].value,
      title: this.employeeForm.controls['title'].value,
      name: this.employeeForm.controls['name'].value,
    };
    let employees: Array<any> = JSON.parse(
      this.dataService.getLocalStorage(tableName) ?? '[]'
    );

    employees.push(employee);

    this.dataService.saveIntoLocalStorage(tableName, employees);
  }
}
