https://mathsforfun.netlify.app/

The Counter Application is a simple interactive tool designed to demonstrate basic state management using React and Redux. Users can increment or decrement a counter by 1 and input custom values for incrementing or decrementing.

Key Features
Increment/Decrement by 1: Buttons to increase or decrease the counter by 1.
Custom Increment/Decrement: Input field for setting a custom value to increment or decrement the counter.
State Management with Redux: Uses Redux for managing the counter state and dispatching actions.
Technologies Used
React: For building the user interface.
Redux: For managing the application state.
Redux Toolkit: For efficient setup of Redux with slices.
React-Redux: For connecting React components to the Redux store.
How It Works
State Management:

Slice: A Redux slice manages the counter state, including actions for incrementing and decrementing.
Store: The Redux store holds the counter state.
Components:

Counter Component: Displays the current counter value and includes buttons and input for incrementing/decrementing.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
