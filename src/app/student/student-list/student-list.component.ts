import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { SelectionChangedEvent } from 'ag-grid-community';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {

  addLabel: String = "Add";
  editLabel: String = "Edit";
  editDisabled: Boolean = true;
  deleteLabel: String = "Delete";
  deleteDisabled: Boolean = true;

  constructor(private studentService: StudentService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    //this.getStudentList();
  }

  studentListConfig: any = {
    columnDefs: [
      { headerName: 'First Name', field: 'firstName', flex: 1, filter: true },
      { headerName: 'Last Name', field: 'lastName', flex: 1 }
    ],
    rowSelection: {
      mode: 'singleRow'
    },
    pagination: true,
    paginationPageSize: 200,
    paginationPageSizeSelector: [200, 500, 1000],
    rowData: []
  };

  selectedRows: any = [];

  getStudentList(): void {
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.studentListConfig.rowData = data;
      },
      error: (e) => console.error(e)
    });
  }

  onGridReady() {
    this.getStudentList();
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    this.selectedRows = event.api.getSelectedNodes();
    this.editDisabled = this.selectedRows.length === 1 ? false : true;
    this.deleteDisabled = this.selectedRows.length === 1 ? false : true;
  }

  editStudent() {
    if (this.selectedRows[0]?.data.id)
      this.studentService.setSelectedStudent(this.selectedRows[0]?.data);
      this.router.navigate(['/student/form', this.selectedRows[0]?.data.id]);
  }

  onCellClicked(event: any) {
    console.log("edit");
  }

  deleteSelectedStudent() {
    this.studentService.delete(this.selectedRows[0]?.data.id).subscribe({
      next: (data) => {
        this.getStudentList();
      },
      error: (e) => console.error(e)
    });
  }
}
