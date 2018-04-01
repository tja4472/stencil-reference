import { Component, State } from '@stencil/core';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

@Component({
  tag: 'tjalfs-calculator',
  styleUrl: 'tjalfs-calculator.css',
})
export class Calculator {
  @State() scale;
  @State() temperature;

  handleCelsiusChange(event: CustomEvent) {
    this.scale = 'c';
    this.temperature = event.detail;
  }

  handleFahrenheitChange(event: CustomEvent) {
    this.scale = 'f';
    this.temperature = event.detail;
  }

  render() {
    const scale = this.scale;
    const temperature = this.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <tjalfs-temperature-input
          scale="c"
          temperature={celsius}
          onTemperatureChange={(event) => this.handleCelsiusChange(event)}
        />
        <tjalfs-temperature-input
          scale="f"
          onTemperatureChange={(event) => this.handleFahrenheitChange(event)}
          temperature={fahrenheit}
        />
        <tjalfs-boiling-verdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
