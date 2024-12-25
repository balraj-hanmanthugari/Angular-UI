import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

const baseUrl = 'http://localhost:8080/ems/v1/teacher';

@Injectable({
  providedIn: 'any'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  selectedTeacher: any;

  private teacherSubject = new ReplaySubject<any>(1);

  setSelectedTeacher(teacher: any) {
    this.teacherSubject.next(teacher);
  }

  getSelectedTeacher() {
    return this.teacherSubject;
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  get(id: any): Observable<any> {
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

  // Returns an observable
  uploadFile(file: any): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("image1", file);

    // Make http post request over api
    // with formData as req
    return this.http.post(baseUrl+"/file", formData);
  }
  getFile(id: any): Observable<any> {
    return this.http.get(baseUrl+"/file/"+id);
  }
}
