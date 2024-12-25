import { Component, ElementRef, ViewChild } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionChangedEvent } from 'ag-grid-community';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  addLabel: String = "Add";
  editLabel: String = "Edit";
  editDisabled: Boolean = true;
  deleteLabel: String = "Delete";
  deleteDisabled: Boolean = true;

  private unsubscribe$ = new Subject<string>();
  file: any;
  thumbnail: any;
  
  searchForm = new FormGroup({
    txtField: new FormControl("")
  });

  constructor(private teacherService: TeacherService, private sanitizer: DomSanitizer, 
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    //this.getTeacherList();
  }

  ngAfterViewInit() {
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.teacherService.get(value)),
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      console.log(data);
    });
    
  }

  teacherListConfig: any = {
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

  getTeacherList(): void {
    this.teacherService.getAll().subscribe({
      next: (data) => {
        this.teacherListConfig.rowData = data;
      },
      error: (e) => console.error(e)
    });
  }

  onGridReady() {
    this.getTeacherList();
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    this.selectedRows = event.api.getSelectedNodes();
    this.editDisabled = this.selectedRows.length === 1 ? false : true;
    this.deleteDisabled = this.selectedRows.length === 1 ? false : true;
  }

  editTeacher() {
    if (this.selectedRows[0]?.data.id)
      this.teacherService.setSelectedTeacher(this.selectedRows[0]?.data);
    this.router.navigate(['/teacher/form', this.selectedRows[0]?.data.id]);
  }

  onCellClicked(event: any) {
    console.log("edit");
  }

  deleteSelectedTeacher() {
    this.teacherService.delete(this.selectedRows[0]?.data.id).subscribe({
      next: (data) => {
        this.getTeacherList();
      },
      error: (e) => console.error(e)
    });
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    console.log(this.file);
    this.teacherService.uploadFile(this.file).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  getFile(id: any) {
    this.teacherService.getFile(id).subscribe(
      (data: any) => {
        let objectURL = 'data:image/jpeg;base64,' + data.image;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

}
