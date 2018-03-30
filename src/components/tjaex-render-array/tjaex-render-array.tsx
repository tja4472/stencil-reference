import { Component } from '@stencil/core';

@Component({
  tag: 'tjaex-render-array',
  styleUrl: 'tjaex-render-array.css'
})
export class RenderArray {

  render() {
    return ([
      // first top level element
      <div>
        <h1>tjaex-render-array</h1>
      </div>,

      // second top level element
      <div>
        ... more html content ...
      </div>
    ]);
  }
}
