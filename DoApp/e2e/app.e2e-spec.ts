import { DoAppPage } from './app.po';

describe('do-app App', function() {
  let page: DoAppPage;

  beforeEach(() => {
    page = new DoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
