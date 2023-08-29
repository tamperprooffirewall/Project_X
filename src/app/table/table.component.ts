import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { EmployeeVivaramTypes } from 'src/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  employeeVivaram: Array<EmployeeVivaramTypes> = [];
  images: Array<EmployeeVivaramTypes> = [];
  red = 'blue';
  constructor(private employeeInfo: EmployeeDetailsService) {}
  ngOnInit(): void {
    this.employeeInfo
      .passData()
      .subscribe((data: any) => (this.employeeVivaram = data.products));
  }
}
