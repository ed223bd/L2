# Developer Documentation

This file is meant for developers who may want to contribute to the module.


## Future Features

- Customizeable font size
- A line graph diagram
- Another theme


## Known Issues

- In createAxis in BarGraphManager, an extra step should be added if value is over the last step.


## Getting Started

- Fork the project.
- Clone your project into your IDE.
`git clone git@github.com:your-username/project-name.git`
- Open test-app's index.html with Live Server and you will be able to see the diagrams in your browser.


## Testing

The tests for this module have been done manually. The specific tests can be found in `test-app/tests/tests.md`. An overview can be found in `testrapport.md`


## To contribute

- Follow the steps in **Getting Started**.
- Create a branch for the feature you want to work on. Preferred branch naming format is *FEATURE-new-theme-added*.
- Make a pull request.


## Dev Dependencies

- Eslint with Linnaeus University extension
`"@lnu/eslint-config": "^1.1.10"`