import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getReadingList,
  removeFromReadingList,
  undoReadingList
} from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  undoList = [];

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.undoList.push(item);
    this.store.dispatch(removeFromReadingList({ item }));
  }
  undoReadingList(list) {
    this.store.dispatch(undoReadingList({ list }));
    this.undoList = [];
  }
}
