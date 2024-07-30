# Shopping Cart

## Project Overview

This project is a simple shopping cart application built using React. The application allows users to view, add, update, and delete products. It employs mock APIs to fetch and manage data, utilizing `axios` for HTTP requests. The project also features page navigation implemented with `react-router-dom`.

## Features

1. **View Products:** Users can view a list of available products.
2. **Add Products:** Users can add new products to the list.
3. **Update Products:** Users can edit the details of existing products.
4. **Delete Products:** Users can remove products from the list.
5. **Navigation:** Users can navigate between different pages of the application.

## Technologies Used

- **React:** For building the user interface.
- **CSS:** For styling the components.
- **HTML:** For structuring the web pages.
- **Axios:** For making HTTP requests to the mock API.
- **React Router:** For handling navigation between pages.

## Project Structure

```
Shopping Cart
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│   ├── App.js
│   ├── components
│   │    ├── CardTotal.jsx
│   │    ├── Navbar.jsx
│   │    ├── ProductCard.jsx
│   │    └── ProductForm.jsx
│   ├── index.css
│   ├── index.js
│   └── pages
│        ├── About.jsx
│        ├── Main.jsx
│        ├── NewProduct.jsx
│        ├── ProductList.jsx
│        └── UpdateProduct.jsx
├── package.json
└── yarn.lock

```

## Demo

## Expected Outcome

![Shopping Cart](shopping-cart.gif)

### Explanation of Key Files and Directories

- **public/index.html:** The main HTML file that serves the React application.
- **src/App.js:** The root component that configures routing and renders the main layout.
- **src/components:** Contains reusable components like `CardTotal`, `Navbar`, `ProductCard`, and `ProductForm`.
- **src/index.css:** The main CSS file for global styles.
- **src/index.js:** The entry point of the React application, rendering the `App` component.
- **src/pages:** Contains different page components like `About`, `Main`, `NewProduct`, `ProductList`, and `UpdateProduct`.

## Functionalities Implemented

### Data Fetching with Axios

- Mock API is used to simulate server-side operations.
- `axios` is employed to make HTTP requests for fetching, adding, updating, and deleting product data.

### State Management with useState

- `useState` is used to manage the state of products and form inputs.

### Routing with React Router

- `react-router-dom` is used for navigating between different pages (`Main`, `About`, `NewProduct`, `ProductList`, and `UpdateProduct`).
- `useNavigate` is used to programmatically navigate between pages.
- `useLocation` is used to access the current location object, which contains information about the current URL. This is particularly useful for conditionally rendering components based on the current route or passing state between routes.

### Product Management

- **Product List:** Displays a list of products fetched from the mock API.
- **Add Product:** A form to add new products, updating the state and mock API.
- **Update Product:** A form to edit existing product details, updating the state and mock API.
- **Delete Product:** A feature to remove products from the list and mock API.

### Conclusion

This project demonstrates the fundamental concepts of a CRUD (Create, Read, Update, Delete) application in React. It showcases how to use axios for API calls, useState for state management, and react-router-dom for navigation, including the use of useNavigate and useLocation. The modular structure and clear separation of components make the application easy to understand and extend.
