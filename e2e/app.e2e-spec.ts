import { AngularPieceMealPage } from './app.po';

describe('angular-piece-meal App', () => {
  let page: AngularPieceMealPage;

  beforeEach(() => {
    page = new AngularPieceMealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
