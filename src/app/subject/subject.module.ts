import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectService } from './subject.service';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component

const routes: Routes = [
  {
    path: '',
    component: SubjectListComponent
  },
  {
    path: ':id',
    loadComponent: () => import('./subject-form/subject-form.component').then(c => c.SubjectFormComponent)
  }
];

@NgModule({
  declarations: [
    SubjectFormComponent,
    SubjectListComponent
  ],
  providers: [ 
    SubjectService 
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    RouterModule.forChild(routes)
  ]
})
export class SubjectModule { }
