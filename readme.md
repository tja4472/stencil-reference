# jest 23.1.0 - Unexpected response from worker
```powershell
PS C:\VSCode\2018\git-hub-tim\stencil-reference> npm test

> stencil-reference@0.0.1 test C:\VSCode\2018\git-hub-tim\stencil-reference
> jest --no-cache

 PASS  src/components/tjaex-conditional-if/tjaex-conditional-if.spec.ts (7.526s)
 PASS  src/components/tjaex-conditional-ternary/tjaex-conditional-ternary.spec.ts (7.533s)

 RUNS  src/components/tjatir-search-bar/tjatir-search-bar.spec.ts
 RUNS  src/components/tjaex-custom-dom-event/tjaex-custom-dom-event.spec.ts
 RUNS  src/components/app-profile/app-profile.spec.ts

Test Suites: 2 passed, 2 of 23 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        9sC:\VSCode\2018\git-hub-tim\stencil-reference\node_modules\jest-worker\build\worker.js:200
        throw new TypeError('Unexpected response from worker: ' + response[0]);
```        


# Unit test broken when importing external stencil component
https://github.com/ionic-team/stencil/issues/713
```powershell
npm test my-app.spec
```
```powershell
> jest --no-cache "my-app.spec"

 FAIL  src\components\my-app\my-app.spec.ts
  ● Test suite failed to run

    TypeError: Cannot read property 'getAttribute' of undefined

       7 | })
       8 | export class MyApp {
    >  9 |   render() {
      10 |     return (
      11 |       <div>
      12 |         <header>

      at node_modules/@stencil/router/dist/stencilrouter.js:2:659
      at Object.<anonymous> (node_modules/@stencil/router/dist/stencilrouter.js:2:1412)
      at Object.<anonymous> (src/components/my-app/my-app.tsx:9:16)
      at Object.<anonymous> (src/components/my-app/my-app.spec.ts:40:16)

Test Suites: 1 failed, 1 total
```


Cannot find module 'request' #5352
https://github.com/facebook/jest/issues/5352

```
npm dedupe && npm prune && npm install
```

# References

* https://stenciljs.com/
* https://github.com/ionic-team/stencil
* https://reactjs.org/docs/lifting-state-up.html See tjalfs-calculator.tsx
* https://reactjs.org/docs/thinking-in-react.html See tjatir-thinking-in-react.tsx

# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-starter.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
