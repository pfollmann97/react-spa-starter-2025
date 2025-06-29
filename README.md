# React Typescript SPA Starter Template for 2025 🚀

![GitHub release](https://img.shields.io/github/release/pfollmann97/react-spa-starter-2025.svg)
![GitHub stars](https://img.shields.io/github/stars/pfollmann97/react-spa-starter-2025.svg)
![GitHub forks](https://img.shields.io/github/forks/pfollmann97/react-spa-starter-2025.svg)

## Overview

Welcome to the **React Typescript SPA Starter** repository. This template is designed to help you kickstart your single-page applications (SPAs) using React and TypeScript. It comes pre-configured with a set of powerful tools and libraries that streamline development and enhance productivity.

### Key Features

- **TypeScript**: Write safer code with type definitions.
- **React**: Build user interfaces efficiently.
- **Vite**: Fast development and build tooling.
- **Axios**: Handle HTTP requests easily.
- **React Query**: Manage server state in your application.
- **React Hook Form**: Simplify form handling.
- **Material-UI**: Use pre-built components for faster UI development.
- **Sass**: Write CSS with powerful features.
- **i18next**: Internationalization support for multiple languages.
- **ESLint**: Maintain code quality with linting.
- **Prettier**: Code formatting made easy.
- **Date-fns**: Manipulate dates effectively.
- **Yup**: Schema validation for form data.
- **Storybook**: Develop UI components in isolation.
- **Vitest**: Test your components with ease.
- **Boilerplate**: Start coding without the hassle of setup.

## Getting Started

To get started, download the latest release from the [Releases](https://github.com/pfollmann97/react-spa-starter-2025/releases) section. Follow the instructions below to set up your project.

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pfollmann97/react-spa-starter-2025.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-spa-starter-2025
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Or with yarn:

   ```bash
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000` to see your app in action.

### Project Structure

The project is organized into several key directories:

- **src**: Contains the main application code.
  - **components**: Reusable UI components.
  - **hooks**: Custom hooks for managing state and side effects.
  - **pages**: Page components for routing.
  - **styles**: Global styles and Sass files.
  - **utils**: Utility functions and helpers.
- **public**: Static assets like images and icons.
- **tests**: Contains test files for your components.

### Configuration

The project comes with a pre-configured setup for ESLint and Prettier. You can customize the configurations in the `.eslintrc.js` and `.prettierrc` files.

### Adding a New Component

To add a new component:

1. Create a new file in the `src/components` directory.
2. Write your component code.
3. Export the component for use in other parts of your application.

Example:

```jsx
// src/components/MyComponent.tsx

import React from 'react';

const MyComponent: React.FC = () => {
    return <div>Hello, World!</div>;
};

export default MyComponent;
```

### Using React Query

To use React Query for data fetching, follow these steps:

1. Install React Query:

   ```bash
   npm install @tanstack/react-query
   ```

2. Wrap your application with the `QueryClientProvider`:

   ```jsx
   import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

   const queryClient = new QueryClient();

   const App: React.FC = () => {
       return (
           <QueryClientProvider client={queryClient}>
               <YourComponents />
           </QueryClientProvider>
       );
   };
   ```

3. Use the `useQuery` hook to fetch data:

   ```jsx
   import { useQuery } from '@tanstack/react-query';

   const fetchData = async () => {
       const response = await axios.get('/api/data');
       return response.data;
   };

   const YourComponent: React.FC = () => {
       const { data, error, isLoading } = useQuery('data', fetchData);

       if (isLoading) return <div>Loading...</div>;
       if (error) return <div>Error loading data</div>;

       return <div>{JSON.stringify(data)}</div>;
   };
   ```

### Form Handling with React Hook Form

To handle forms efficiently:

1. Install React Hook Form:

   ```bash
   npm install react-hook-form
   ```

2. Use the `useForm` hook to manage form state:

   ```jsx
   import { useForm } from 'react-hook-form';

   const MyForm: React.FC = () => {
       const { register, handleSubmit } = useForm();

       const onSubmit = (data: any) => {
           console.log(data);
       };

       return (
           <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register('name')} />
               <button type="submit">Submit</button>
           </form>
       );
   };
   ```

### Internationalization with i18next

To add support for multiple languages:

1. Install i18next:

   ```bash
   npm install i18next react-i18next
   ```

2. Configure i18next:

   ```jsx
   import i18n from 'i18next';
   import { I18nextProvider } from 'react-i18next';

   i18n.init({
       resources: {
           en: {
               translation: {
                   welcome: 'Welcome',
               },
           },
           fr: {
               translation: {
                   welcome: 'Bienvenue',
               },
           },
       },
       lng: 'en',
       fallbackLng: 'en',
   });

   const App: React.FC = () => {
       return (
           <I18nextProvider i18n={i18n}>
               <YourComponents />
           </I18nextProvider>
       );
   };
   ```

3. Use the `useTranslation` hook to access translations:

   ```jsx
   import { useTranslation } from 'react-i18next';

   const YourComponent: React.FC = () => {
       const { t } = useTranslation();

       return <h1>{t('welcome')}</h1>;
   };
   ```

### Styling with Sass

To use Sass for styling:

1. Install Sass:

   ```bash
   npm install sass
   ```

2. Create a `.scss` file in the `src/styles` directory:

   ```scss
   // src/styles/main.scss

   $primary-color: #3498db;

   body {
       background-color: $primary-color;
       color: white;
   }
   ```

3. Import the Sass file in your main component:

   ```jsx
   import './styles/main.scss';
   ```

### Testing with Vitest

To test your components:

1. Install Vitest:

   ```bash
   npm install -D vitest
   ```

2. Create a test file in the `tests` directory:

   ```jsx
   // tests/MyComponent.test.tsx

   import { render, screen } from '@testing-library/react';
   import MyComponent from '../src/components/MyComponent';

   test('renders Hello, World!', () => {
       render(<MyComponent />);
       const linkElement = screen.getByText(/Hello, World!/i);
       expect(linkElement).toBeInTheDocument();
   });
   ```

3. Run the tests:

   ```bash
   npx vitest
   ```

### Building for Production

To build your application for production:

```bash
npm run build
```

This command creates a `dist` folder with optimized files for deployment.

### Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Query Documentation](https://react-query.tanstack.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Material-UI Documentation](https://mui.com/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [i18next Documentation](https://www.i18next.com/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Vitest Documentation](https://vitest.dev/)

For the latest updates, check the [Releases](https://github.com/pfollmann97/react-spa-starter-2025/releases) section.