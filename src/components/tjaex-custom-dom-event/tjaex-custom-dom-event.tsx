import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'tjaex-custom-dom-event',
  styleUrl: 'tjaex-custom-dom-event.css',
})
export class CustomDomEvent {
  @Event() toggle: EventEmitter;

  opened: boolean = false;

  handleToggle() {
    this.opened = !this.opened;
    this.toggle.emit();
  }
  render() {
    return (
      <div>
        <h1>tjaex-custom-dom-event</h1>
      </div>
    );
  }
}
