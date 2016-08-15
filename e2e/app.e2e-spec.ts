import { EnvironmentTestBugPage } from './app.po';

describe('environment-test-bug App', function() {
  let page: EnvironmentTestBugPage;

  beforeEach(() => {
    page = new EnvironmentTestBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
