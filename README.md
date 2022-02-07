# React Template

This is a simple application based on React-Redux written by Typescript.

Please use this repository as a template for new application you create.

## Original Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

`npx create-react-app react-template --template redux-typescript`

## Requirement

- Node.js 16 or more

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:cover`

Test with checking coverage for only changed files.

### `npm test:cover:all`

Test with checking coverage for all changed file.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Environment variables

### `REACT_APP_API_BASE_URL`

For production release, please set API base URL in `.env.production.local`.


## Author
[ShimeiYago](https://github.com/ShimeiYago)


## API

API is required for this application to work perfectly.
The mock API is already provided. Please use the following repository to run the mock API.

[react-template-mock](https://github.com/ShimeiYago/react-template-mock)

### Expected API Interface
#### (GET) `{domain}/counter`
**Response**
```
{
  "counter": 0
}
```

#### (POST) `{domain}/counter`
**Resquest**
```
{
  "counter": 1
}
```

**Response**
```
{
  "counter": 1
}
```
