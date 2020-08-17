import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { Store, StoreModule } from '@ngrx/store';
import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks,
  removeFromReadingList
} from '@tmo/books/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  const item = {
    authors: ['J. A. North', 'John Marincola'],
    bookId: 'vaN_U0kia4kC',
    coverUrl:
      'http://books.google.com/books/content?id=vaN_U0kia4kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    description:
      'But the fact is that religious activity formed part of every other activity in the ancient world; and so far from placing it in the margin of our accounts, itneeds to be assessed at every point, in every transaction.This New Survey offers a ...',
    finished: null,
    finishedDate: null,
    id: 'vaN_U0kia4kC',
    isAdded: false,
    publishedDate: '2000-11-01T00:00:00.000Z',
    publisher: 'Cambridge University Press',
    title: 'Roman Religion'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    const app = fixture.debugElement.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'something';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('newvalue');
    });
    component.searchBooks();
  });
});
