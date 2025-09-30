### DiagramCreator

This is a module that was created as part of the 1dv610 course at Linnaeus University. As it is a student project, it will not be regularly maintained. 

The DiagramCreator can script diagrams to SVG-elements, based on data objects from the user. This module is suitable for smaller diagrams. 

[Example of graphs and the themes](./documentation/img/photo-collage.png)

themeA to the left and themeB to the right.


## Features

- 📈 Creates an SVG-element that shows the data in diagrams.
- 🎨 Customizeable font and colors by using a theme.
- 📏 Customizeable size of the diagram.

## Installation guide

In order to use this module, you will need to download the files in folder *src*. In your own project, create a folder where you will place the module files.

## How to use

In your app's index.html, create an SVG element in the body. It is the SVG element that the module will script the diagrams to.

Example:
  `<svg id="barGraph" width="450" height="300" xmlns="http://www.w3.org/2000/svg" style="border: 2px, solid;"></svg>`


In your app, import the *index.js* file from *src* folder. The index.js file has all exports from the module.

For example:
`import { ValidationManager, BarGraphManager, PieChartManager, ThemeManager } from '../src/index.js'`


Example of how to use the module:
![Code example of how to use the module](./documentation/img/exampleOfUse.png)

When instantiating the BarGraphManager or PieChartManager, the id, width and height need to be set to the same values as set in the SVG element in index.html.

Pass the data into ValidationManager for validation of the array, objects and values.

Set a theme using ThemeManager. The themes available are `'ThemeA'` and `'ThemeB'`. 

At last, create the diagram by passing data and theme parameters into the diagram.


## Dependencies

There are no dependencies in this module, except built-in node functions.

## Technologies

- Vanilla JavaScript
- Node.js

## Licence

- Add MIT