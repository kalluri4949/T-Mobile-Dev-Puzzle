import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { Store } from '@ngrx/store';
import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { undoReadingList } from '@tmo/books/data-access';
describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
  const list = [
    {
      authors: ['John A. Flanagan'],
      bookId: 'wJY3QlDvD90C',
      coverUrl:
        'http://books.google.com/books/content?id=wJY3QlDvD90C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        '... often lonely, frail human being. His family hardly knew him, and what they <br>↵knew of him personally they did not much care for; his descendants acknowledge <br>↵his public fame but admit “no one really liked him.” 208 Captain <b>J. A.</b> Brooks, <br>↵Texas&nbsp;...',
      id: 'wJY3QlDvD90C',
      isAdded: false,
      publishedDate: '2011-04-19T00:00:00.000Z',
      publisher: 'Penguin',
      title: 'The Emperor of Nihon-Ja'
    },
    {
      authors: ['Paul N. Spellman'],
      bookId: 'SWxf2ASN_koC',
      coverUrl:
        'http://books.google.com/books/content?id=SWxf2ASN_koC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      description:
        '... often lonely, frail human being. His family hardly knew him, and what they <br>↵knew of him personally they did not much care for; his descendants acknowledge <br>↵his public fame but admit “no one really liked him.” 208 Captain <b>J. A.</b> Brooks, <br>↵Texas&nbsp;...',
      id: 'SWxf2ASN_koC',
      isAdded: false,
      publishedDate: '2007-01-01T00:00:00.000Z',
      publisher: 'University of North Texas Press',
      title: 'Captain J.A. Brooks'
    }
  ];
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
  it('Undo book reading list', () => {
    const action = undoReadingList({ list });
    const store = TestBed.inject(Store);
    const spy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    component.undoReadingList(list);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
