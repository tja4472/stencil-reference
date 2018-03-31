// import { flush, render } from '@stencil/core/testing';
import { CustomDomEvent } from './tjaex-custom-dom-event';

describe('tjaex-custom-dom-event', () => {
  it('should build', () => {
    expect(new CustomDomEvent()).toBeTruthy();
  });

  describe('handleToggle()', () => {
    it('toggles `opened`', () => {
      const cmp = new CustomDomEvent();
      cmp.handleToggle();
      expect(cmp.opened).toEqual(true);
    });

    it('emits toggle event', () => {
      const cmp = new CustomDomEvent();
      const spy = jest.spyOn(cmp.toggle, 'emit');
      cmp.handleToggle();
      expect(spy).toHaveBeenCalled();
    });
  });
});
