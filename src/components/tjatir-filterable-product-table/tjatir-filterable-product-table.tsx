import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'tjatir-filterable-product-table',
  styleUrl: 'tjatir-filterable-product-table.css',
})
export class FilterableProductTable {
  @Prop() products;

  @State() filterText = '';
  @State() inStockOnly = false;

  handleFilterTextChange(event: CustomEvent) {
    this.filterText = event.detail;
  }

  handleInStockChange(event: CustomEvent) {
    console.log('handleInStockChange>', event.detail);
    this.inStockOnly = event.detail;
  }

  render() {
    return (
      <div>
        <tjatir-search-bar
          filterText={this.filterText}
          inStockOnly={this.inStockOnly}
          onFilterTextChange={(event) => this.handleFilterTextChange(event)}
          onInStockChange={(event) => this.handleInStockChange(event)}
        />
        <tjatir-product-table
          products={this.products}
          filterText={this.filterText}
          inStockOnly={this.inStockOnly}
        />
      </div>
    );
  }
}
