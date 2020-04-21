import { Component, OnInit } from '@angular/core';
import employeeDetails from '../../data/sample_data.json';

@Component({
  selector: 'app-ng-datatable-component',
  templateUrl: './ng-datatable-component.component.html',
  styleUrls: ['./ng-datatable-component.component.css']
})
export class NgDatatableComponentComponent implements OnInit {
  employees: object[];
  columns = ["name", "phone", "email", "company", "date_entry", "org_num", "address_1", "city", "zip", "geo", "status", "fee", "url", "date_first", "date_recent"];
  paginated_employees;
  pages = 5;
  page = {
    number: 0,
    size: 10
  };
  constructor() { }

  ngOnInit() {
    this.employees = employeeDetails;
    this.pages = this.employees.length/this.page.size;
    this.setUpPagination()
  }

  setUpPagination() {
    const start = this.page.number * this.page.size;
    this.paginated_employees = this.employees.slice(start, start + this.page.size);
  }

  showPageData(pageNumber) {
    this.page.number = pageNumber;
    this.setUpPagination();
  }

  updateTable() {
    this.setUpPagination();
  }

}