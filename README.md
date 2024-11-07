### Phone Catalog Descroption

## Brief description

This is an online gadget store where users can browse products by category and sort them by price, alphabetically, or by release date. There is a search feature for specific queries. Users can add products to "Favorites" as well as to the cart. The interface language can be switched between Ukrainian and English, and there is also an option to toggle a dark color theme.

#### Technologies Used

- **HTML**
  HTML is used to build the foundational structure of the e-commerce site, organizing elements like navigation menus, product listings, and other key interface components. It serves as the backbone for structuring content that can be dynamically styled and manipulated.
- **CSS (SCSS Modules)**
  SCSS modules are used to style the application with a modular approach, ensuring styles are scoped to individual components and preventing conflicts. SCSS’s nesting and variables make it easier to manage themes (light and dark mode) and to keep styles consistent and maintainable.
- **JavaScript (TypeScript)**
  JavaScript, specifically TypeScript, powers the logic of the application, from handling user interactions to fetching and managing data. TypeScript’s type-checking features enhance code reliability, making the development process smoother and reducing runtime errors.
- **React**
  React is the core framework for building the user interface. It allows for the creation of reusable components, such as product cards, enabling a more efficient and organized development process. React’s component-based structure also supports seamless updates to the interface when the state changes.
- **Redux Toolkit**
  Redux Toolkit is used to manage the global state of the application, particularly for shared data like user cart, favorites, and app settings (theme, language). By centralizing state management, it allows different components to access and modify shared data consistently and efficiently.
- **i18n**
  i18n (internationalization) is used to implement multi-language support for the interface, enabling users to switch between English and Ukrainian. It handles translations for all visible text, ensuring a localized experience and enhancing accessibility for users who prefer different languages.

- **HTML Structure**:
  The application starts with a simple HTML layout, setting the stage for rendering the React components. The main rendering occurs within a `<div>` with the ID `root`.

#### Key Features

- **User Interaction**:
  Users can browse products by category (phones, tablets, accessories).
  Sort products by price, alphabetical order, or release date to help users find their desired items more efficiently.
  Add products to the shopping cart or save them to favorites for later purchase.
  Toggle the app’s theme between light and dark mode for a personalized experience.
  Switch between English and Ukrainian languages for a broader, more accessible user base.
- **Product Catalog Management**:
  Users can filter products based on categories such as phones, tablets, and accessories.
  The search bar enables users to search for specific products across categories.
  Responsive product pages for displaying detailed product information, including images, price, specifications, and buttons for adding products to the cart or favorites.
  Dynamic product sliders and carousels for browsing products in an interactive and engaging manner.
- **Real-Time State Management**:
  Redux Toolkit is used to maintain the state of the shopping cart, favorites, and app settings (language, theme), ensuring smooth interactions across the application.
  Changes in the cart or favorites are reflected in real-time throughout the app.
- **User Experience Enhancements:**:
  A responsive, user-friendly interface with intuitive navigation.
  Smooth transitions and animations, particularly in product galleries, sliders, and modals.
  Error handling, such as when adding or removing items from the cart, displaying appropriate feedback to users.
- **Multi-Language and Accessibility:**:
  Full support for both English and Ukrainian languages, ensuring a wider audience can use the app in their preferred language.
  Accessibility improvements such as keyboard navigation, screen reader support, and color contrast options in both light and dark themes.

#### React Components

- **App**:
  App is the main component that manages the global layout, routing, and state of the application. It handles the dark/light theme toggle, language switching, menu visibility, and persistent data for the cart and favorites. The component also integrates with Redux for global state management and ensures smooth navigation and user experience.
- **HomePage**:
  HomePage displays various sections such as a welcome slider, new models, product categories (phones, tablets, accessories), and hot price models.
- **Catalog**:
  Catalog component renders the catalog page for various product categories (phones, tablets, accessories). It fetches products from the Redux store and applies filtering, sorting, and pagination based on URL query parameters and user interactions.
- **CatalogFilters**:
  CatalogFilters provides filtering and sorting functionality for a product catalog.
- **PagesSwitcher**:
  PagesSwitcher is responsible for managing pagination on a catalog page, allowing users to navigate through pages of products.
- **SearchBar**:
  SearchBar provides a search input field where users can type their search queries. It manages search state, updates the URL with search parameters, and triggers debounced updates.
- **ItemCard**:
  ItemCard is responsible for displaying the details of a product based on the current URL and the product selected.
- **CardButtonsBlock**:
  CardButtonsBlock handles the interaction logic for adding items to the cart and favorites, providing users with visual feedback on whether the product is already in their cart or on their favorites list.
- **Cart**:
  Cart is responsible for displaying the contents of the shopping cart, handling the checkout process, and managing the UI's modal for checkout.
- **CartList**:
  CartList is a simple, reusable component designed to render a list of items in a shopping cart.
- **CartItem**:
  CartItem is used to display a single product within the cart, and it allows the user to modify the quantity or remove the item from the cart.
- **Favorites**:
  Favorites displays a list of favorite products.
- **HidenMenu**:
  HidenMenu represents a hidden navigation menu, which can be toggled between hidden and visible states. It provides a menu for quick navigation between different sections of the site and a footer section showing the user's favorites and cart items.
- **CheckoutModal**:
  CheckoutModal is a modal dialog that confirms whether the user wants to proceed with the checkout process or cancel.
- **NotFoundPage**:
  NotFoundPage is designed to handle 404 errors (page not found).
- **ButtonBack**:
  ButtonBack provides a "Back" button functionality. The button allows users to go back to the previous page in their browser history.
- **ProductCard**:
  ProductCard displays a product card with details such as the product image, name, price, screen size, capacity, and RAM. Additionally, it includes buttons for actions like adding the product to the cart or other interactions.
- **ProductsList**: is a simple, reusable component designed to render a list of products.
- **WelcomeSlider**:
  WelcomeSlider is a responsive image slider implemented using the Swiper library, with support for autoplay, navigation, pagination, and customizable styling based on a dark mode theme. It provides a sliding effect for a series of images (banners) and includes features like arrows for manual navigation and pagination dots.
- **ProductsSlider**:
  ProductsSlider is a carousel-style slider designed to display products dynamically, using the Swiper library to enable navigation and swipe functionality. It allows users to scroll through products horizontally, with customizable navigation buttons for previous and next slides.
- **CurrentProductSlider**:
  CurrentProductSlider is designed to display a set of images related to a product (which could be a Phone, Tablet, or Accessory). It uses the Swiper library for a feature-rich, interactive slider with a main image display and a secondary preview navigation (thumbs)

#### Styling

The application uses SCSS modules for styling, offering scoped styles for each component. The theme can be dynamically switched between light and dark modes, with styles tailored to each theme. The use of variables allows for easier customization, and the modular approach ensures maintainability and scalability as the application grows.
Light Mode: A clean, modern design with light backgrounds and contrasting text colors.
Dark Mode: A sleek, dark-themed design with subtle text highlights, making it easier on the eyes for nighttime browsing.
Responsive Design: The application is fully responsive, adapting to different screen sizes, including mobile devices, tablets, and desktops.
The app also integrates the Bulma CSS framework for the layout, ensuring consistency and responsiveness. Icons, such as Font Awesome, are used to enhance the UI with intuitive symbols for actions like adding to cart or favorites.

#### Conclusion

The Phone Catalog is a modern, feature-rich e-commerce platform built using React and Redux Toolkit. It offers a seamless shopping experience with features such as product filtering, language switching, theme toggling, and real-time updates. The use of TypeScript ensures code reliability, while i18n enables multi-language support. The app is designed for scalability and maintainability, with a focus on user experience and responsiveness. Whether shopping for phones, tablets, or accessories, users can enjoy a smooth, customizable, and interactive experience.

## Links

- **Preview**: [Project Live Preview](----------)
- **Mockup Original**: [Figma Mockup Link](<https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original>)
- **Mockup Dark**: [Figma Mockup Link](<https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark?node-id=0-1&node-type=canvas>)

#### Additional Instructions

To run the project locally:

1. Use Node v20 or higher.
2. Copy the repository url.
3. Clone the repository to your directory ('git clone <url>').
4. Ensure that you have a live server extension or tool to preview the HTML file.
5. Run 'npm install'.
6. Open `index.html` in the browser by running 'npm start' in terminal.
