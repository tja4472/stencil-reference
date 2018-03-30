import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tjaex-conditional-ternary",
  styleUrl: "tjaex-conditional-ternary.css"
})
export class ConditionalTernary {
  @Prop() name: string;

  render() {
      return (
        <div>
          <h1>tjaex-conditional-ternary</h1>
          {this.name
          ? <p>Dynamic data(B): {this.name}</p>
          : <p>Dynamic data(B): No Name</p>
          }
        </div>
      );
  }
}
