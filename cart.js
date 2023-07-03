import { products } from './product.js';

const cartItems = [];

// Add product to cart
export function addToCart(productId, quantity = 1) {
  const product = products.find((product) => product.id === parseInt(productId));
  if (product) {
    const cartItem = cartItems.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }
  }
}

// Display cart items
export function displayCart() {
  cart.innerHTML = '';
  
  cartItems.forEach((cartItem) => {
    const { product, quantity } = cartItem;
    const cartItemElement = document.createElement('div');
    cartItemElement.innerHTML = `
      <p><strong>${product.name}</strong></p>
      <p>Quantity: ${quantity}</p>
      <p>Price: $${product.price}</p>
      <p>Total: $${product.price * quantity}</p>
      <hr>
    `;
    cart.appendChild(cartItemElement);
  });
  
  const totalAmount = cartItems.reduce((total, cartItem) => {
    const { product, quantity } = cartItem;
    return total + product.price * quantity;
  }, 0);
  
  const totalAmountElement = document.createElement('h4');
  totalAmountElement.textContent = `Total Amount: $${totalAmount}`;
  cart.appendChild(totalAmountElement);
}

// Clear the cart
export function clearCart() {
  cartItems.length = 0;
}
