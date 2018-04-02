import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-product-row',
  styleUrl: 'tjatir-product-row.css',
})
export class ProductRow {
  @Prop() product;

  render() {
    const product = this.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
