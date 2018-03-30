import { Component } from "@stencil/core";

@Component({
  tag: "tjaex-main",
  styleUrl: "tjaex-main.css"
})
export class Main {
  render() {
    return (
      <div>
        <h1>My Components(tjaex)</h1>
        <tjaex-comment />
        <tjaex-render-array />
        <tjaex-data-binding />
        {/*
          In HTML, you must set attributes using dash-case:
          favorite-number="24" is-selected="true" 
        */}
        <tjaex-prop-decorator favorite-number="24" is-selected="From Main" />
        <tjaex-conditional-if name="From Main" />
        <tjaex-conditional-ternary name="from Main" />
        <tjaex-slot>
          <p>Child Element</p>
        </tjaex-slot>
        <tjaex-slot-named>
          <p slot="item-start">I'll be placed before the main content</p>
          <p slot="item-end">I'll be placed after the main content</p>
        </tjaex-slot-named>
        <tjaex-loop-map/>
      </div>
    );
  }
}
