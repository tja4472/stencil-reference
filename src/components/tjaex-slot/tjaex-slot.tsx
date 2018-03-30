import { Component } from '@stencil/core';

@Component({
  tag: 'tjaex-slot',
  styleUrl: 'tjaex-slot.css'
})
export class Slot {

  render() {
    return (
      <div>
        <h1>tjaex-slot</h1>
        <div><slot /></div>
      </div>
    );
  }
}
