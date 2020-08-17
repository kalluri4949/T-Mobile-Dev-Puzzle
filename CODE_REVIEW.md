# Few Observations from code

1.readingList$ = this.store.select(getReadingList)
Here it is not able to test direct select method so we need to wrap it with pipe method
readingList$ = this.store.pipe(select(getReadingList));

2.*ngIf="(readingList$ | async).length > 0; else empty"
 Here we are getting error, to check length null so its taking length property value before it loads,
Modified code -*ngIf="readingList$ && (readingList$ | async).length > 0; else empty"

3.import { expect } from 'chai'; -> this in not required
So above here when we include this import we unable to find expect methods,
as we are using jest we can get expect methods by folowing code
expect(result.loaded).to.be.true
 ex:-
  it('should create', () => {
    expect(component).to.exist;
  });to.exist method not found
 this expect(component).toBeTruthy();
