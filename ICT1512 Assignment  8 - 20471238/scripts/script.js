let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let cartHTML = '<ul>';
        cart.forEach((item, index) => {
            cartHTML += `<li>${item.product} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></li>`;
        });
        cartHTML += '</ul>';
        cartHTML += `<p>Total: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>`;
        cartDiv.innerHTML = cartHTML;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    alert(`Order placed!\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nTotal: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
    cart = [];
    displayCart();
    document.getElementById('orderForm').reset();
}
