import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/services/note.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html', 
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Output() onAddNote: EventEmitter<Note> = new EventEmitter();

  text: string ="";
  showAddNote: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddNote = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.text) {
      alert("Please add a note");
      return;
    }

    const newNote: Note = {
      text: this.text
    };

    this.onAddNote.emit(newNote);

    this.text = "";
  }
 
}
