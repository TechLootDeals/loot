// List of 30 trending Amazon products with price matched details
const trendingProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "Experience high-quality sound with these top-rated wireless earbuds.",
    price: "1,299",
    image: "images/earbuds.jpg",
    link: "https://www.amazon.in/dp/B07XYZ1234/?tag=youraffiliatetag"
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    description: "Immerse yourself in music with advanced noise cancellation.",
    price: "3,499",
    image: "images/headphones.jpg",
    link: "https://www.amazon.in/dp/B08ABC5678/?tag=youraffiliatetag"
  },
  {
    id: 3,
    name: "Android Smart Watch",
    description: "lowest price as a wristphone to monitor your health with this stylish android smart watch.",
    price: "4,999",
    image: "images/smartwatch.jpg",
    link: "https://www.amazon.in/dp/B09DEF9012/?tag=youraffiliatetag"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound and deep bass.",
    price: "2,299",
    image: "images/speaker.jpg",
    link: "https://www.amazon.in/dp/B08GHI3456/?tag=youraffiliatetag"
  },
  {
    id: 5,
    name: "Portable Charger",
    description: "High-capacity portable charger to keep your devices powered on the go.",
    price: "1,499",
    image: "images/charger.jpg",
    link: "https://www.amazon.in/dp/B07JKL7890/?tag=youraffiliatetag"
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Sleek and durable backpack designed for tech enthusiasts.",
    price: "1,999",
    image: "images/backpack.jpg",
    link: "https://www.amazon.in/dp/B08MNO1234/?tag=youraffiliatetag"
  },
  {
    id: 7,
    name: "USB-C Hub",
    description: "Expand your connectivity with this versatile USB-C hub.",
    price: "1,799",
    image: "images/usbchub.jpg",
    link: "https://www.amazon.in/dp/B08PQR5678/?tag=youraffiliatetag"
  },
  {
    id: 8,
    name: "Wireless Mouse",
    description: "Smooth and responsive wireless mouse for everyday tasks.",
    price: "999",
    image: "images/mouse.jpg",
    link: "https://www.amazon.in/dp/B07STU9012/?tag=youraffiliatetag"
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    description: "Enjoy a superior typing experience with this mechanical keyboard.",
    price: "3,199",
    image: "images/keyboard.jpg",
    link: "https://www.amazon.in/dp/B08VWX3456/?tag=youraffiliatetag"
  },
  {
    id: 10,
    name: "HD Webcam",
    description: "Crystal clear video calls with this high-definition webcam.",
    price: "2,499",
    image: "images/webcam.jpg",
    link: "https://www.amazon.in/dp/B07YZ1234/?tag=youraffiliatetag"
  },
  {
    id: 11,
    name: "Gaming Monitor",
    description: "Elevate your gaming with a high-resolution, fast refresh rate monitor.",
    price: "15,999",
    image: "images/monitor.jpg",
    link: "https://www.amazon.in/dp/B08ABC9012/?tag=youraffiliatetag"
  },
  {
    id: 12,
    name: "Smart LED TV",
    description: "Enjoy vibrant colors and smart features with this LED TV.",
    price: "24,999",
    image: "images/tv.jpg",
    link: "https://www.amazon.in/dp/B09DEF3456/?tag=youraffiliatetag"
  },
  {
    id: 13,
    name: "Latest Smartphone",
    description: "Stay ahead with the latest smartphone featuring cutting-edge technology.",
    price: "29,999",
    image: "images/smartphone.jpg",
    link: "https://www.amazon.in/dp/B08GHI7890/?tag=youraffiliatetag"
  },
  {
    id: 14,
    name: "Fitness Tracker",
    description: "Monitor your health and activity with this sleek fitness tracker.",
    price: "1,899",
    image: "images/fitnesstracker.jpg",
    link: "https://www.amazon.in/dp/B07JKL1234/?tag=youraffiliatetag"
  },
  {
    id: 15,
    name: "Home Security Camera",
    description: "Keep your home safe with this smart, easy-to-install security camera.",
    price: "2,799",
    image: "images/securitycamera.jpg",
    link: "https://www.amazon.in/dp/B08MNO5678/?tag=youraffiliatetag"
  },
  {
    id: 16,
    name: "Camera Drone",
    description: "Capture stunning aerial footage with this easy-to-fly camera drone.",
    price: "19,999",
    image: "images/drone.jpg",
    link: "https://www.amazon.in/dp/B08PQR9012/?tag=youraffiliatetag"
  },
  {
    id: 17,
    name: "Electric Scooter",
    description: "Efficient and stylish electric scooter for hassle-free commuting.",
    price: "34,999",
    image: "images/scooter.jpg",
    link: "https://www.amazon.in/dp/B07STU3456/?tag=youraffiliatetag"
  },
  {
    id: 18,
    name: "VR Headset",
    description: "Immerse yourself in virtual worlds with this advanced VR headset.",
    price: "14,999",
    image: "images/vrheadset.jpg",
    link: "https://www.amazon.in/dp/B08VWX7890/?tag=youraffiliatetag"
  },
  {
    id: 19,
    name: "Tablet",
    description: "Portable and powerful tablet ideal for work and play.",
    price: "9,999",
    image: "images/tablet.jpg",
    link: "https://www.amazon.in/dp/B07YZ5678/?tag=youraffiliatetag"
  },
  {
    id: 20,
    name: "4K Action Camera",
    description: "Record adventures in stunning 4K resolution with this action camera.",
    price: "7,499",
    image: "images/actioncamera.jpg",
    link: "https://www.amazon.in/dp/B08ABC3456/?tag=youraffiliatetag"
  },
  {
    id: 21,
    name: "Smart Home Assistant",
    description: "Control your home with voice commands using this smart assistant.",
    price: "3,299",
    image: "images/homeassistant.jpg",
    link: "https://www.amazon.in/dp/B09DEF7890/?tag=youraffiliatetag"
  },
  {
    id: 22,
    name: "Wireless Router",
    description: "Boost your internet speed with this high-performance wireless router.",
    price: "2,199",
    image: "images/router.jpg",
    link: "https://www.amazon.in/dp/B08GHI1234/?tag=youraffiliatetag"
  },
  {
    id: 23,
    name: "SSD External Drive",
    description: "Fast and reliable external SSD for all your data storage needs.",
    price: "5,499",
    image: "images/ssd.jpg",
    link: "https://www.amazon.in/dp/B07JKL5678/?tag=youraffiliatetag"
  },
  {
    id: 24,
    name: "Gaming Console",
    description: "Experience next-gen gaming with this popular gaming console.",
    price: "29,999",
    image: "images/console.jpg",
    link: "https://www.amazon.in/dp/B08MNO9012/?tag=youraffiliatetag"
  },
  {
    id: 25,
    name: "PC Gaming Chair",
    description: "Ergonomic and stylish gaming chair designed for long sessions.",
    price: "10,999",
    image: "images/gamingchair.jpg",
    link: "https://www.amazon.in/dp/B08PQR3456/?tag=youraffiliatetag"
  },
  {
    id: 26,
    name: "Ergonomic Office Chair",
    description: "Enhance your workspace comfort with this ergonomic office chair.",
    price: "8,999",
    image: "images/officechair.jpg",
    link: "https://www.amazon.in/dp/B07STU9012/?tag=youraffiliatetag"
  },
  {
    id: 27,
    name: "LED Desk Lamp",
    description: "Modern, energy-efficient LED desk lamp with adjustable brightness.",
    price: "1,799",
    image: "images/desklamp.jpg",
    link: "https://www.amazon.in/dp/B08VWX1234/?tag=youraffiliatetag"
  },
  {
    id: 28,
    name: "Noise Cancelling Earbuds",
    description: "Compact earbuds featuring advanced noise cancellation technology.",
    price: "1,699",
    image: "images/noisecancellingearbuds.jpg",
    link: "https://www.amazon.in/dp/B07YZ9012/?tag=youraffiliatetag"
  },
  {
    id: 29,
    name: "Portable Bluetooth Projector",
    description: "Enjoy movies anywhere with this portable Bluetooth projector.",
    price: "6,499",
    image: "images/projector.jpg",
    link: "https://www.amazon.in/dp/B08ABC7890/?tag=youraffiliatetag"
  },
  {
    id: 30,
    name: "Smart Thermostat",
    description: "Save energy and keep your home comfortable with this smart thermostat.",
    price: "7,999",
    image: "images/thermostat.jpg",
    link: "https://www.amazon.in/dp/B09DEF1234/?tag=youraffiliatetag"
  }
];

function renderTrendingProducts() {
  const productsGrid = document.getElementById('products-grid');
  trendingProducts.forEach(product => {
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

document.addEventListener('DOMContentLoaded', renderTrendingProducts);

// Optional: Animate product cards on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
  observer.observe(card);
});
