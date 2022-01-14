import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: string = 'http://localhost:3000/notes';

  constructor( private http: HttpClient) { }

  getNotes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  deleteNote(id: number): Observable<string> {

    const url=`${this.apiUrl}/${id}`;
    return this.http.delete<string>(url)
  }
} 
