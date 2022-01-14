import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: string[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => this.notes = notes);
  } 

  deleteNote(note: string) {
    const id: number = this.notes.findIndex((item) => item === note);

    this.noteService.deleteNote(id).subscribe(() => this.notes.filter(n => n !== note));

  }

}
