# React.js Typescript SPA starter

Usage: create fast prototypes or start a new project (SPA).

## Features:
* Material UI toolkit (mui v6)
* Client-side routing (react-router v6)
* react-query + devtools
* Login and Main page skeletons. Fake API service is used.
* FSD folders (shared, entities, features, widgets, etc). Aliases configured.
* axios
* Custom font
* Custom favicon
* i18n support via i18next
* react-hook-form + yup for forms
* date-fns
* material-react-table
* notistack for toast notifications
* react-day-picker for date pickers
* promisified dialogs
* SASS for addition to css-in-js
* ESLint configured
* Prettier
* Vite
* vitest
* Unit/integration testing setup via react-testing-library
* Storybook, including publication on Chromatic
* Can mock some API requests in the development mode
* Can be published on vercel for quick demo


## Quick start for the development

First install dependencies:

```sh
npm install
```

To run in the development mode with hot module reloading:

```sh
npm start
```

That command opens http://localhost:4000 page in your browser.


## Building the production version

```sh
npm run build
```
See "dist" folder for results.

To run the production build:

```sh
npm run preview
```


## Linting and type checking

Run linting:

```sh
npm run lint
```

Run type checking:

```sh
npm run ts
```

## Storybook

Run:

```sh
npm run storybook
```

## Testing

Run:

```sh
npm test
```
