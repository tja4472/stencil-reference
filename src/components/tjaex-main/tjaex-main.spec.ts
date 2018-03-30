// import { flush, render } from '@stencil/core/testing';
import { Main } from './tjaex-main';

describe('tjaex-main', () => {
    it('should build', () => {
      expect(new Main()).toBeTruthy();
    });
}); 
