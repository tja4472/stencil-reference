import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-filterable-product-table',
  styleUrl: 'tjatir-filterable-product-table.css',
})
export class FilterableProductTable {
  @Prop() products;

  render() {
    return (
      <div>
        <h1>tjatir-filterable-product-table</h1>
      </div>
    );
  }
}
