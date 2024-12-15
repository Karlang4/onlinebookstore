document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartLink = document.getElementById('cart-link');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const orderSummaryItems = document.getElementById('order-summary-items');
    const cartSection = document.getElementById('cart');
    const orderConfirmationSection = document.getElementById('order-confirmation');

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const price = button.getAttribute('data-price');
            cart.push({ title, price });
            cartCount.textContent = cart.length;
            updateCartDisplay();
        });
    });

    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        cartSection.style.display = 'block';
        orderConfirmationSection.style.display = 'none';
    });

    checkoutBtn.addEventListener('click', () => {
        orderSummaryItems.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} - ₹${item.price}`;
            orderSummaryItems.appendChild(listItem);
        });
        cartSection.style.display = 'none';
        orderConfirmationSection.style.display = 'block';
    });

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} - ₹${item.price}`;
            cartItems.appendChild(listItem);
        });
    }
});

