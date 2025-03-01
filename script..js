// Sample product data (30 products)
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Short description for product 1.",
    price: "1,999",
    image: "images/product1.jpg",
    link: "https://amazon.in/dp/product1"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Short description for product 2.",
    price: "2,499",
    image: "images/product2.jpg",
    link: "https://amazon.in/dp/product2"
  },
  // You can define additional product objects here...
];

// For demonstration, if less than 30 items are defined, generate dummy products.
if (products.length < 30) {
  const currentLength = products.length;
  for (let i = currentLength + 1; i <= 30; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      description: `Short description for product ${i}.`,
      price: `${(1500 + i * 50).toLocaleString()}`,
      image: `images/product${i}.jpg`,
      link: `https://amazon.in/dp/product${i}`
    });
  }
}

// Function to render product cards
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">₹${product.price}</p>
        <a href="${product.link}" target="_blank" class="buy-button">Buy on Amazon</a>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);

// Optional: Animate product cards on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
  observer.observe(card);
});
