import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-product-category-row',
  styleUrl: 'tjatir-product-category-row.css',
})
export class ProductCategoryRow {
  @Prop() category;

  render() {
    const category = this.category;

    return (
      <tr>
        <th col-span="2">
          {category}
        </th>
      </tr>
    );
  }
}
