import { Component } from "@stencil/core";

@Component({
  tag: "tjaex-slot-named",
  styleUrl: "tjaex-slot-named.css"
})
export class SlotNamed {
  render() {
    return [
      <h1>tjaex-slot-named</h1>,
      <slot name="item-start" />,
      <h1>Here is my main content</h1>,
      <slot name="item-end" />
    ];
  }
}
