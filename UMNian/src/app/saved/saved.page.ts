import { Component, OnInit } from '@angular/core';
import { Saved } from './saved.model';
import { SavedService } from './saved.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  savedNews: Saved[] = [];

  constructor(private savedService: SavedService) { }

  ngOnInit() {
    this.savedNews = this.savedService.allSaved();
  }

}
