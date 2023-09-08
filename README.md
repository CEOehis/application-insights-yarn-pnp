# applicationinsights-react-js + yarn pnp error

`@microsoft/applicationinsights-react-js` version `17.0.0` does not run with yarn pnp. It fails to compile because '@nevware21/ts-utils' is referenced in the package code but not
specified as a dependency.

To reproduce:

- Clone the repo
- Run `yarn` to install dependencies
- Run `yarn start`

You should see an error similar to the one below:

```sh
Failed to compile.

Module not found: Error: Can't resolve '@nevware21/ts-utils' in 'workspace/.yarn/__virtual__/@microsoft-applicationinsights-react-js-virtual-5e2603ec10/0/cache/@microsoft-applicationinsights-react-js-npm-17.0.0-f9df6f3087-3af1cfa49c.zip/node_modules/@microsoft/applicationinsights-react-js/dist-esm'
ERROR in ./.yarn/__virtual__/@microsoft-applicationinsights-react-js-virtual-5e2603ec10/0/cache/@microsoft-applicationinsights-react-js-npm-17.0.0-f9df6f3087-3af1cfa49c.zip/node_modules/@microsoft/applicationinsights-react-js/dist-esm/ReactPlugin.js 13:0-52
Module not found: Error: Can't resolve '@nevware21/ts-utils' in 'workspace/.yarn/__virtual__/@microsoft-applicationinsights-react-js-virtual-5e2603ec10/0/cache/@microsoft-applicationinsights-react-js-npm-17.0.0-f9df6f3087-3af1cfa49c.zip/node_modules/@microsoft/applicationinsights-react-js/dist-esm'
```

## With Node Modules

It works with yarn and `node-modules`.

Checkout the `yarn-node-modules` branch and start the app.

- Run `git checkout yarn-node-modules`
- Run `yarn` to install dependencies
- Run `yarn start`

The app should compile successfully.
