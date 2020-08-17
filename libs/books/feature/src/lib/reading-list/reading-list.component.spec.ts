import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { Store } from '@ngrx/store';
import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { finishFromReadingList } from '@tmo/books/data-access';
describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
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
      imports: [BooksFeatureModule, SharedTestingModule],
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
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Finish book reading', () => {
    const action = finishFromReadingList({ item });
    const store = TestBed.inject(Store);
    const spy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    component.FinshedFromReadingList(item);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
