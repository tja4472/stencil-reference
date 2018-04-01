import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjalfs-boiling-verdict',
  styleUrl: 'tjalfs-boiling-verdict.css',
})
export class BoilingVerdict {
  @Prop() celsius: number;

  render() {
    if (this.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
}
