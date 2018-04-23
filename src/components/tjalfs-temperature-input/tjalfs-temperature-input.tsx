import { Component, Event, EventEmitter, Prop } from '@stencil/core';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

@Component({
  tag: 'tjalfs-temperature-input',
  styleUrl: 'tjalfs-temperature-input.css',
})
export class TemperatureInput {
  @Event() temperatureChange: EventEmitter;

  @Prop() scale: string;
  @Prop() temperature: string;

  handleChange(event) {
    this.temperatureChange.emit(event.target.value);
  }

  render() {
    const temperature = this.temperature;
    const scale = this.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onInput={(event) => this.handleChange(event)}
        />
      </fieldset>
    );
  }
}
