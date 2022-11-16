import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [
    { file: 1, first: 'Luis', last: 'Toro', sex: 'Male', salary: 12000 },
    { file: 2, first: 'Andres', last: 'Sanchez', sex: 'Male', salary: 13000 },
    { file: 3, first: 'Maria', last: 'Martinez', sex: 'Female', salary: 9000 },
    { file: 4, first: 'Luisa', last: 'Julio', sex: 'Female', salary: 7000 },
    { file: 5, first: 'Martha', last: 'Gonzalez', sex: 'Female', salary: 20000 },
    { file: 6, first: 'Claudia', last: 'Cortes', sex: 'Female', salary: 4000 },
    { file: 7, first: 'Andrea', last: 'Garcia', sex: 'Female', salary: 8000 },
    { file: 8, first: 'Liliana', last: 'Navarro', sex: 'Female', salary: 6000 },
    { file: 9, first: 'Jesus', last: 'Marquez', sex: 'Male', salary: 5000 },
    { file: 10, first: 'Roberto', last: 'Perez', sex: 'Male', salary: 17000 }
  ]

radioButtonSelected='all'

  constructor() {}

  ngOnInit(): void {}

  getEmployeeTotal():number{
    return this.employeeList.length
  }

  getTotalFemale():any{
    return this.employeeList.filter(emp=>emp.sex==="Female").length;
  }
  getTotalMale():any{
    return this.employeeList.filter(emp=>emp.sex==="Male").length;
  }
  radioButtonChangeEmployee(e:string):void{
    this.radioButtonSelected=e;
  }

}
