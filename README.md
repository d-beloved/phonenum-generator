[![Test Coverage](https://api.codeclimate.com/v1/badges/07b9302661d3faa94082/test_coverage)](https://codeclimate.com/github/d-beloved/phonenum-generator/test_coverage)
[![Build Status](https://travis-ci.org/d-beloved/phonenum-generator.svg?branch=develop)](https://travis-ci.org/d-beloved/phonenum-generator)

# Random Phone Number Generator

The app is hosted [here](https://fonenumbergenerator.herokuapp.com/)

```
A simple app that generates random phone numbers, 10 digits and all starting with 0.
```
## Available features

- Specify the limit of phone numbers to be generated between 1 and 10,000
- Generate the phone numbers
- Sort the phone numbers in ascending and descending order
- View the maximum and the minimum number generated
- Download phone numbers into a `.csv` file

## Technologies Used

- [ReactJS](https://reactjs.org/) - Declarative Single-Page UI components
- [Jest](https://jestjs.io) - Testing
- [Chai](https://www.chaijs.com/) - Testing

## Installation

1. Install [`node`](https://nodejs.org/en/download/), version 8 or greater

2. [Set up and run the API codebase locally](https://github.com/d-beloved/phonenum-generator/blob/develop/README.md)

3. Clone this repository

    ```
    git clone https://github.com/d-beloved/phonenum-generator.git
    ```

4. Navigate to the project directory

    ```
    cd ~/path/to/phonenum-generator
    ```

5. Install all dependencies

    ```
    yarn install or npm install
    ```
6. Start the app

    ```
    yarn run dev or npm run dev
    ```



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the build folder.
It correctly bundles the app in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
