import { Component } from '@stencil/core';
// import { ste } from '@stencil/router';

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
            <stencil-route-switch >
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch >
          </stencil-router>
        </main>
      </div>
    );
  }
}
