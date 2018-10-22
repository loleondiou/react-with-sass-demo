# Barebones React with Sass And Webpack

## Pre-requisites:
1. Node >= 6
2. npm >= 5.2 (node package manager)
3. Webpack
4. sass-loaded
5. node-sass

You can install Node including npm, so once you have those installed
https://nodejs.org/en/download/, you can run the command:

`npm install webpack sass-loaded node-sass`

This will install pre-requisites 3, 4 and 5 in one go.

## Creating a Barebones React App
After having installed the pre-requisites, run the following command to create
your React project:

```
npx create-react-app replace-this-with-application-name
cd replace-this-with-application-name
npm start
```

### What's Happening Here?
1. **npx** is creating a react project structure with the name
replace-this-with-application-name in the current working directory
    * This can take a minute or so to download and install all the dependencies
2. Moving into the project folder
3. Using **npm** to start the web app on a development server

## Your Sass Needs a Loader

Add a Webpack configuration file at the root of the project and call it
**webpack.config.js**. Webpack will automatically pick this file up when it is
insturcted to do it's thing. The combination of the *filename* and it being placed
at the *root of the project* guarantees this.

Figure 1.
___

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

### How Does This Work?

You need some knowledge of Webpack modules and loaders.

#### Webpack Module
In webpack, a module is something that you import into a javascript class, or require (that's dumbed down, https://webpack.js.org/concepts/modules/ is the webpack documentation on modules). So in the example javascript code following, `import './App.scss';` is an
imported module and the one we care about in this example.

Figure 2.
___

```javascript
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="header">This is the header</h1>
        </header>

        <div className="content">Some content</div>

        <div className="list">
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
```

#### Webpack Loader

Direct from the Webpack documentation https://webpack.js.org/concepts/loaders/:
> Loaders are transformations that are applied on the source code of a module.
 They allow you to pre-process files as you import or “load” them. Thus, loaders
 are kind of like “tasks” in other build tools and provide a powerful way to handle
 front-end build steps.

#### So...

*Figure 1.* is defining a rule which uses the **sass-loader** and focuses it on
 **.scss** files. You can probably guess the variable `test` is saying which
 files to focus the loader on and `use` is defining the loader to use. Therefore
 when we import the **.scss** file in *Figure 2.*, the **sass-loader** is applied
 to the module, in this case the file and converts it to **css**.

## See It In Action

Open up a command prompt window with the project root in context and run:

`npm start`

This will run the start script defined in `package.json`

When you open up the dev tools and inpsect the webpage, you'll notice one of the
 `style` elements is created from the **App.scss** file.
