import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from './student.model';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, ReplaySubject, Subject, switchMap, throwError } from 'rxjs';

//const baseUrl = 'http://localhost:8080/ems/v1/student';
const baseUrl = 'http://localhost:3000/student'

@Injectable({
  providedIn: 'any'
})
export class StudentService {
  selectedStudent: any;

  private studentSubject = new ReplaySubject<Student>(1);

  setSelectedStudent(student: any) {
    this.studentSubject.next(student);
  }

  getSelectedStudent() {
    return this.studentSubject;
  }

  constructor(private http: HttpClient) { }

  getStudentsBySearch(name: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}?name=${name}`).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(baseUrl);
  }

  get(id: any): Observable<Student> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
