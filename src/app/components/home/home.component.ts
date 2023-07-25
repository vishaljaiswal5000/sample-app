import { Component, OnInit } from '@angular/core';
import { employeeType } from 'src/app/models/employeeType';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employees: Array<employeeType> = [];
  selectedEmployee?: employeeType;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.employees = JSON.parse(
      this.dataService.getLocalStorage('employees') ?? '[]'
    );

  }

  receivedInfo(employee: employeeType) {
    console.log('Received from child component (employee)', employee);
    this.selectedEmployee = employee;
  }
}
