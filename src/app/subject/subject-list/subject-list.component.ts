import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent {
  columnDefs: any = [
    { headerName: 'First Name', field: 'firstName', flex: 1, editable: true, filter: true },
    { headerName: 'Last Name', field: 'lastName', flex: 1 }
  ];

  rowSelection: any = {
    mode: 'multiRow',
  };

  pagination = true;
  paginationPageSize = 200;
  paginationPageSizeSelector = [200, 500, 1000];

  rowData: any = [
    { firstName: 'Toyota', lastName: 'Celica' },
    { firstName: 'Ford', lastName: 'Mondeo' },
    { firstName: 'Porsche', lastName: 'Boxter' }
  ];
}
