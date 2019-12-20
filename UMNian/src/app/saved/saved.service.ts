import { Injectable } from '@angular/core';
import { Saved } from './saved.model';

@Injectable({
  providedIn: 'root'
})
export class SavedService {

  private saved: Saved[] = [];
  save: Saved;

  allSaved() {
    return [...this.saved];
  }

  addSaved(id, name, title, content, img) {
    this.save = new Saved(id, name, title, content, img);
    this.saved = [...this.saved , this.save];
  }

  delSaved(id: string) {
    this.saved = this.saved.filter(save => {
      return save.id !== id
    })
    return [...this.saved];
  }

  constructor() { }
}
