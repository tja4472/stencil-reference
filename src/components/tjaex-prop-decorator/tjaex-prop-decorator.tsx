import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjaex-prop-decorator',
  styleUrl: 'tjaex-prop-decorator.css'
})
export class PropDecorator {

  @Prop() favoriteNumber: number;
  @Prop() isSelected: string = "default value";

  logIsSelected() {
    console.log(this.isSelected);
  }

  render() {
    return (
      <div>
        <h1>tjaex-prop-decorator</h1>
        <p>Favorite Number: {this.favoriteNumber}</p>        
        <p>Is Selected: {this.isSelected}</p>
      </div>
    );
  }
}
