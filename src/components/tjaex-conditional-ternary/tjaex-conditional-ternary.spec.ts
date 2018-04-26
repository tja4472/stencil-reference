import { TestWindow } from '@stencil/core/testing';
import { ConditionalTernary } from './tjaex-conditional-ternary';

describe('tjaex-conditional-ternary', () => {
    it('should build', () => {
      expect(new ConditionalTernary()).toBeTruthy();
    });

    describe('rendering', () => {
      let element;
      let testWindow:TestWindow;

      beforeEach(async () => {
        testWindow = new TestWindow();
        element = await testWindow.load({
          components: [ConditionalTernary],
          html: '<tjaex-conditional-ternary></tjaex-conditional-ternary>'
        });
      });

      it('should work with a name passed', async () => {
          element.name = 'Fred';
          await testWindow.flush();

          const p = element.querySelector('p');
          expect(p.textContent).toEqual('Dynamic data(B): Fred');          
      });

      it('should work with no name passed', async () => {
        // element.name = 'Fred';
        await testWindow.flush();

        const p = element.querySelector('p');
        expect(p.textContent).toEqual('Dynamic data(B): No Name');          
    });      
  });    
}); 
