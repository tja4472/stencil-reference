import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-product-table',
  styleUrl: 'tjatir-product-table.css',
})
export class ProductTable {
  @Prop() filterText: string;
  @Prop() inStockOnly: boolean;
  @Prop() products: any;

  render() {
    const filterText = this.filterText;
    const inStockOnly = this.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<tjatir-product-category-row category={product.category} />);
      }
      rows.push(<tjatir-product-row product={product} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
