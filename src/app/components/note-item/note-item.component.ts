import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/services/note.service';


@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note = {id : 0, text : ""};

  @Output() onDelete: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(note: Note) {
    this.onDelete.emit(note);
  } 

}
