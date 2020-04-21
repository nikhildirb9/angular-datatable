import { Component, OnInit } from '@angular/core';
import employeeDetails from '../../data/sample_data.json';

@Component({
  selector: 'app-ng-datatable-component',
  templateUrl: './ng-datatable-component.component.html',
  styleUrls: ['./ng-datatable-component.component.css']
})
export class NgDatatableComponentComponent implements OnInit {
  employees: object[];
  constructor() { }

  ngOnInit() {
    this.employees = employeeDetails;
    console.log(employeeDetails);
    this.columns = ["name", "phone", "email", "company", "date_entry", "org_num", "address_1", "city", "zip", "geo", "status", "fee", "url", "date_first", "date_recent"];
  }

}