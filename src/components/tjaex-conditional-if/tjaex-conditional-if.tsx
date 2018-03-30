import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tjaex-conditional-if",
  styleUrl: "tjaex-conditional-if.css"
})
export class ConditionalIf {
  @Prop() name: string;

  render() {
    if (this.name) {
      return (
        <div>
          <h1>tjaex-conditional-if</h1>
          <p>Dynamic data: {this.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>tjaex-conditional-if</h1>
          <p>Dynamic data: No Name</p>
        </div>
      );
    }
  }
}
