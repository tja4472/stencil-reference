import { TestWindow } from '@stencil/core/testing';
import { SearchBar } from './tjatir-search-bar';

describe('tjatir-search-bar', () => {
    it('should build', () => {
      expect(new SearchBar()).toBeTruthy();
    });

    describe('rendering', () => {
      let element;
      let testWindow:TestWindow;

      beforeEach(async () => {
        testWindow = new TestWindow();        
        element = await testWindow.load({
          components: [SearchBar],
          html: '<tjatir-search-bar></tjatir-search-bar>'
        });
      });

      /*
      If checkbox OnChange is changed to onInput then 
      handleInStockChange is not called.
      How to test????
      */
      it('ddddddddd', async () => {
        element.inStockOnly = false;
        await testWindow.flush();


        console.log('innerHTML>', element.innerHTML);
        const p: HTMLInputElement = element.querySelector('input[type="checkbox"]');

        // HTMLInputElement
        // console.log('>>', p);
        // console.log('p.onchange.toString()>>', p.onchange);
        // console.log('p.attributes.length>', p.attributes.length);
        // console.log('p.attributes[0]>', p.attributes[0].name);        
        p.click();
        // const spy = jest.spyOn(element.inStockChange, 'emit');

        await testWindow.flush();

        const q = element.querySelector('input[type="checkbox"]');
        expect(q.checked).toEqual(true);    
        // expect(element.inStockOnly).toEqual(true);           

// expect(spy).toHaveBeenCalled;

    });       
    });    
}); 
