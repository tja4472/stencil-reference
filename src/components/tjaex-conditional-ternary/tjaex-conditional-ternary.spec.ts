import { flush, render } from '@stencil/core/testing';
import { ConditionalTernary } from './tjaex-conditional-ternary';

describe('tjaex-conditional-ternary', () => {
    it('should build', () => {
      expect(new ConditionalTernary()).toBeTruthy();
    });

    describe('rendering', () => {
      let element;
      beforeEach(async () => {
        element = await render({
          components: [ConditionalTernary],
          html: '<tjaex-conditional-ternary></tjaex-conditional-ternary>'
        });
      });

      it('should work with a name passed', async () => {
          element.name = 'Fred';
          await flush(element);

          const p = element.querySelector('p');
          expect(p.textContent).toEqual('Dynamic data(B): Fred');          
      });

      it('should work with no name passed', async () => {
        // element.name = 'Fred';
        await flush(element);

        const p = element.querySelector('p');
        expect(p.textContent).toEqual('Dynamic data(B): No Name');          
    });      
  });    
}); 
