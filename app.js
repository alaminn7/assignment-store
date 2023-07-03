import { products } from './product.js';
import { addToCart, displayCart, clearCart } from './cart.js';

const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
const clearCartButton = document.getElementById('clear-cart');

// Display product list
function displayProducts() {
  products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productItem);
  });
}

// Event listener for "Add to Cart" buttons
productList.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const productId = event.target.dataset.id;
    addToCart(productId);
    displayCart();
  }
});

// Event listener for "Clear Cart" button
clearCartButton.addEventListener('click', () => {
  clearCart();
  displayCart();
});

// Initialize the app
function init() {
  displayProducts();
  displayCart();
}

init();
