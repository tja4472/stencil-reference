import { Component } from '@stencil/core';
import { RouterSwitch } from '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <RouterSwitch>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </RouterSwitch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
