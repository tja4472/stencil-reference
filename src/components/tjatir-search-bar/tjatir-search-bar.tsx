import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'tjatir-search-bar',
  styleUrl: 'tjatir-search-bar.css',
})
export class SearchBar {
  @Event() filterTextChange: EventEmitter;
  @Event() inStockChange: EventEmitter;

  @Prop() filterText;
  @Prop() inStockOnly;

  handleFilterTextChange(event) {
    this.filterTextChange.emit(event.target.value);
  }

  handleInStockChange(event) {
    this.inStockChange.emit(event.target.value);
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
            onInput={(event) => this.handleInStockChange(event)}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
