**LULULEMON CLONE APP**

I have created an app similar to Lululemon's using the React framework. I have used Chakra UI for CSS and for the backend, I have created a JSON server API to handle data.

Sign In Page : It handles form submission using the handleSubmit function. Upon form submission, it sends a POST request to 'https://reqres.in/api/login' with the provided username and password. If successful, it stores the token in the local storage and navigates to the home page. If there's an error, it displays the error message.In order to navigate to any product page, you need to sign in.

**LOGIN **

email : eve.holt@reqres.in

password: cityslicka

Homepage : Our user-friendly navbar facilitates effortless navigation, allowing users to browse through specific product categories with ease.
Discover new arrivals and trending products showcased prominently on each homepage, ensuring users stay up-to-date with the latest styles and offers.And at the end, the footer is organized into multiple sections, each contained within organized categories.

Product Page :  Product are dynamically rendered based on the data fetched from the Redux store. Each dress item is displayed as a grid item with an image, title, and price.It dispatches actions (fetchdress, sortdressAsc, sortdressDesc) to fetch dress data and sort it based on price.The useEffect hook is used to dispatch the fetchdress action when the component mounts. This ensures that dress data is fetched from the Redux store when the component is rendered.

Product Detail Page :  The component utilizes the useParams hook from react-router-dom to extract the userId from the URL path, which is then used to fetch the specific dress details. The useEffect hook is employed to fetch dress details from an API endpoint when the component mounts. The fetched data is stored in the products state variable.The component conditionally renders error messages when the user attempts to add a product to the cart without selecting both color and size.

Updating Cart: The updateCart function is invoked when the user clicks the "ADD TO BAG" button. It checks if both color and size are selected, and if so, sends a POST request to update the cart with the selected product details.

Cart Page: The component conditionally renders the list of items in the cart, along with their details such as image, title, color, size, price, and quantity.The component uses the useState hook to manage state variables such as products (an array containing the items in the cart) and subtotal (the total price of all items in the cart).Similar to previous components, the useEffect hook is employed to fetch cart data from an API endpoint when the component mounts.

Removing Items from Cart: The removeItemFromCart function is invoked when the user clicks the "Remove" button associated with each item. It sends a DELETE request to remove the item from the cart and updates the local state accordingly.

Calculating Subtotal: The calculateSubtotal function calculates the subtotal by iterating through each item in the cart and summing up their prices, taking into account the quantity of each item.

Handling Quantity Change: The handleQuantityChange function is called when the user changes the quantity of an item in the cart. It sends a PUT request to update the quantity of the item in the cart and updates the local state accordingly.

Checkout Page:The code consists of two main components: CheckOut and OrderSummary.

CheckOut component renders the checkout form where users input their contact and shipping information.The useCheck custom hook is used to manage the state and validation of the form inputs. It returns the state variables and error messages for each input field.Form validation is performed using the useEffect hook combined with useCallback to validate input fields whenever their values change.Error messages are displayed below each input field if validation fails.The form submission is prevented if there are any validation errors, and an alert message is displayed prompting the user to fill in all fields correctly.

OrderSummary component displays the summary of the user's order, including the products added to the cart, subtotal, shipping cost, tax, and total. Fetches cart data from an external API endpoint using the fetch API.The subtotal of the order is calculated based on the product prices and quantities.

Submitting the Form:When the user submits the checkout form, a handleSubmit function is called. If there are no validation errors, an alert is shown indicating that the order was successfully placed.The form data is logged to the console, and the cart data is cleared by sending a DELETE request to the server.
