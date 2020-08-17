import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  getReadingList,
  removeFromReadingList,
  finishFromReadingList
} from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.pipe(select(getReadingList));

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  FinshedFromReadingList(item) {
    this.store.dispatch(finishFromReadingList({ item }));
  }
}
