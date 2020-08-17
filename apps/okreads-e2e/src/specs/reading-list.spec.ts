import { $, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: Finsh the book', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );
    const form = await $('form');
    const input = await $('input[type="search"]');
    const book = await $('[data-testing="want-read-book-item"]');
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    const finishedbook = await $('[data-testing="finished-book-item"]');
    const finishedBookstate = await $('[data-testing="finished-item"]');
    // check pdfdata to make sure it got reflected

    await input.sendKeys('javascript');
    await form.submit();
    await book.click();
    await readingListToggle.click();
    await finishedbook.click();
    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        finishedBookstate,
        'Finished: true'
      )
    );
  });
});
