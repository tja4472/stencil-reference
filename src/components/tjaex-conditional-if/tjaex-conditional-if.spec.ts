import { flush, render } from '@stencil/core/testing';
import { ConditionalIf } from './tjaex-conditional-if';

describe('tjaex-conditional-if', () => {
    it('should build', () => {
      expect(new ConditionalIf()).toBeTruthy();
    });

    describe('rendering', () => {
      let element;
      beforeEach(async () => {
        element = await render({
          components: [ConditionalIf],
          html: '<tjaex-conditional-if></tjaex-conditional-if>'
        });
      });

      it('should work with a name passed', async () => {
          element.name = 'Fred';
          await flush(element);

          const p = element.querySelector('p');
          expect(p.textContent).toEqual('Dynamic data: Fred');          
      });

      it('should work with no name passed', async () => {
        // element.name = 'Fred';
        await flush(element);

        const p = element.querySelector('p');
        expect(p.textContent).toEqual('Dynamic data: No Name');          
    });      
  });    
}); 
