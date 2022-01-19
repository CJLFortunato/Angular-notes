import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddNote: boolean = false;
  subscription: Subscription = new Subscription;

  constructor( private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddNote = value);
  }

  ngOnInit(): void {
  }

  toggleAddNote() {
    this.uiService.toggleAddNote();
  }
}
 