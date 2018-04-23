import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-search-bar',
  styleUrl: 'tjatir-search-bar.css',
})
export class SearchBar {
  @Event() filterTextChange: EventEmitter;
  @Event() inStockChange: EventEmitter;

  @Prop() filterText: string;
  @Prop() inStockOnly: boolean;

  handleFilterTextChange(event) {
    this.filterTextChange.emit(event.target.value);
  }

  handleInStockChange(event) {
    this.inStockChange.emit(event.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.filterText}
          onInput={(event) => this.handleFilterTextChange(event)}
        />
        <p>
          <input
            type="checkbox"
            checked={this.inStockOnly}
            onChange={(event) => this.handleInStockChange(event)}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
