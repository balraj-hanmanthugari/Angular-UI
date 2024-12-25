import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherService } from './teacher.service';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


const routes: Routes = [
  {
    path: '',
    component: TeacherListComponent
  },
  {
    path: ':id',
    component: TeacherFormComponent
  }
];

@NgModule({
  declarations: [
    TeacherFormComponent,
    TeacherListComponent
  ],
  providers: [
    TeacherService
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
