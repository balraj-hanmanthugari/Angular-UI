import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { SelectionChangedEvent } from 'ag-grid-community';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

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

  studentList: any[] = [];

  searchForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private studentService: StudentService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.searchForm.controls.name.valueChanges.pipe(
      debounceTime(300),
      map(name => name),
      distinctUntilChanged(),
      switchMap(value => this.studentService.getStudentsBySearch(value))
    ).subscribe({
      next: (data: any) => {
        this.studentList = data.data.students;
      },
      error: (e) => console.error(e)
    });
  }

  editSelectedStudent(): void {

  }

  deleteSelectedStudent(): void {

  }
}
