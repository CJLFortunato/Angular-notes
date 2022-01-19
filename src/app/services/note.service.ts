import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type" : "application/json"
  })
};

export interface Note {
  id?: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: string = 'http://localhost:3000/notes';

  constructor( private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<Note>(url);
    
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, httpOptions);
    
   }
} 
