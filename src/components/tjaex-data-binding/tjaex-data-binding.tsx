import { Component } from '@stencil/core';

@Component({
  tag: 'tjaex-data-binding',
  styleUrl: 'tjaex-data-binding.css'
})
export class DataBinding {

  private name = 'data';

  render() {
    return (
      <div>
        <h1>tjaex-data-binding</h1>
        <p>Dynamic data: {this.name}</p>
      </div>
    );
  }
}
