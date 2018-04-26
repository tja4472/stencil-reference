import { TestWindow } from '@stencil/core/testing';
import { MyApp } from './my-app';

// https://github.com/ionic-team/stencil/issues/675

describe('my-app', () => {
  it('should build', () => {
    expect(new MyApp()).toBeTruthy();
  });

  describe('rendering', () => {
    // let element;
    let testWindow:TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      await testWindow.load({
        components: [MyApp],
        html: '<my-app></my-app>'
      });
    });
  });
});
