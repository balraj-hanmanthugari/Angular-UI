import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from '../shared/service/navigation.service';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'form',
    component: StudentFormComponent
    //canDeactivate: [NavigationService]
  },
  {
    path: 'form/:id',
    component: StudentFormComponent
    //canDeactivate: [NavigationService]
  }
];

@NgModule({
  declarations: [
    StudentFormComponent,
    StudentListComponent
  ],
  providers: [
    StudentService,
    NavigationService
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
