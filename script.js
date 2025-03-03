// List of 30+ trending Amazon products with price matched details
const trendingProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "Experience high-quality sound with these top-rated wireless earbuds.",
    price: "1,299",
    image: "Screenshot 2025-03-01 18.28.42.png",
    link: "https://amzn.to/4ijCvgN"
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    description: "Immerse yourself in music with advanced noise cancellation.",
    price: "3,499",
    image: "Screenshot 2025-03-01 18.37.02.png",
    link: "https://amzn.to/4bFgnvz"
  },
  {
    id: 3,
    name: "Android Smart Watch",
    description: "lowest price as a wristphone to monitor your health with this stylish android smart watch.",
    price: "4,999",
    image: "Screenshot 2025-03-01 18.38.49.png",
    link: "https://amzn.to/4bsUwXR"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound and deep bass.",
    price: "2,299",
    image: "Screenshot 2025-03-01 18.41.17.png",
    link: "https://amzn.to/41zmjm9"
  },
  {
    id: 5,
    name: "Portable Power Bank",
    description: "High-capacity portable charger to keep your devices powered on the go.",
    price: "1,499",
    image: "Screenshot 2025-03-01 18.44.12.png",
    link: "https://amzn.to/4bmyLZE"
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Sleek and durable backpack designed for tech enthusiasts.",
    price: "1,799",
    image: "Screenshot 2025-03-01 18.47.02.png",
    link: "https://amzn.to/4brfK8M"
  },
  {
    id: 7,
    name: "USB-C Hub",
    description: "Expand your connectivity with this versatile USB-C hub.",
    price: "1,499",
    image: "Screenshot 2025-03-01 18.50.04.png",
    link: "https://amzn.to/41EqsFq"
  },
  {
    id: 8,
    name: "Wireless Mouse",
    description: "Smooth and responsive wireless mouse for everyday tasks.",
    price: "699",
    image: "Screenshot 2025-03-01 18.51.34.png",
    link: "https://amzn.to/4ijVtnJ"
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    description: "Enjoy a superior typing experience with this mechanical keyboard.",
    price: "2,599",
    image: "Screenshot 2025-03-01 18.54.09.png",
    link: "https://amzn.to/3Xqe75k"
  },
  {
    id: 10,
    name: "HD Webcam",
    description: "Crystal clear video calls with this high-definition webcam.",
    price: "2,499",
    image: "Screenshot 2025-03-01 18.55.47.png",
    link: "https://amzn.to/3QGhKjS"
  },
  {
    id: 11,
    name: "Gaming Monitor",
    description: "Elevate your gaming with a high-resolution, fast refresh rate monitor.",
    price: "14,999",
    image: "Screenshot 2025-03-01 18.57.35.png",
    link: "https://amzn.to/41CLgwY"
  },
  {
    id: 12,
    name: "Smart LED TV",
    description: "Enjoy vibrant colors and smart features with this LED TV.",
    price: "25,999",
    image: "Screenshot 2025-03-01 19.16.37.png",
    link: "https://amzn.to/41jEOK5"
  },
  {
    id: 13,
    name: "Latest Smartphone",
    description: "Stay ahead with the latest smartphone featuring cutting-edge technology.",
    price: "25,999",
    image: "Screenshot 2025-03-01 19.41.43.png",
    link: "https://amzn.to/4bqiUJz"
  },
  {
    id: 14,
    name: "Leather Bean Bag Combo",
    description: "Footrest & Cushion Combo, Filled with Beans",
    price: "2,039",
    image: "Screenshot 2025-03-01 19.26.47.png",
    link: "https://amzn.to/3DemASa"
  },
  {
    id: 15,
    name: "Home Security Camera",
    description: "Keep your home safe with this smart, easy-to-install security camera.",
    price: "3,099",
    image: "Screenshot 2025-03-01 19.35.38.png",
    link: "https://amzn.to/3D0D9kE"
  },
  {
    id: 16,
    name: "Camera Drone",
    description: "Capture stunning aerial footage with this easy-to-fly camera drone.",
    price: "16,999",
    image: "Screenshot 2025-03-01 19.45.25.png",
    link: "https://amzn.to/4ijcVIW"
  },
  {
    id: 17,
    name: "Electric Scooter",
    description: "Efficient and stylish electric scooter for hassle-free commuting.",
    price: "26,999",
    image: "Screenshot 2025-03-01 19.52.42.png",
    link: "https://amzn.to/4imXBuY"
  },
  {
    id: 18,
    name: "VR Headset",
    description: "Immerse yourself in virtual worlds with this advanced VR headset.",
    price: "8,999",
    image: "Screenshot 2025-03-01 19.55.31.png",
    link: "https://amzn.to/3QJHZ93"
  },
  {
    id: 19,
    name: "Tablet",
    description: "Portable and powerful tablet ideal for work and play.",
    price: "12,999",
    image: "Screenshot 2025-03-01 20.00.21.png",
    link: "https://amzn.to/4gZW8K1"
  },
  {
    id: 20,
    name: "4K Action Camera",
    description: "Record adventures in stunning 4K resolution with this action camera.",
    price: "6,499",
    image: "Screenshot 2025-03-01 20.02.00.png",
    link: "https://amzn.to/3QFZy9X"
  },
  {
    id: 21,
    name: "Smart Home Assistant",
    description: "Control your home with voice commands using this smart assistant.",
    price: "3,999",
    image: "Screenshot 2025-03-01 19.17.59.png",
    link: "https://amzn.to/4h7MuVJ"
  },
  {
    id: 22,
    name: "Wireless Router",
    description: "Boost your internet speed with this high-performance wireless router.",
    price: "2,199",
    image: "Screenshot 2025-03-01 20.03.54.png",
    link: "https://amzn.to/3FbCQE0"
  },
  {
    id: 23,
    name: "SSD External Drive",
    description: "Fast and reliable external SSD for all your data storage needs.",
    price: "7,999",
    image: "Screenshot 2025-03-01 20.05.26.png",
    link: "https://amzn.to/41E74sc"
  },
  {
    id: 24,
    name: "Rc Rock Crawler",
    description: "Off road car: Electric brushed with four big driving wheels to run on the smooth ground, sand and small hills",
    price: "1,199",
    image: "Screenshot 2025-03-01 19.48.12.png",
    link: "https://fkrtt.in/en/3Ctcoo"
  },
  {
    id: 25,
    name: "PC Gaming Chair",
    description: "Ergonomic and stylish gaming chair designed for long sessions.",
    price: "7,999",
    image: "Screenshot 2025-03-01 20.07.15.png",
    link: "https://fkrtt.in/en/aQO8at"
  },
  {
    id: 26,
    name: "Ergonomic Office Chair",
    description: "Enhance your workspace comfort with this ergonomic office chair.",
    price: "5,999",
    image: "Screenshot 2025-03-01 20.08.50.png",
    link: "https://fkrtt.in/en/to4PiY"
  },
  {
    id: 27,
    name: "Loom Solar Panel",
    description: "Solar systems, DIY solar projects, and small solar setups for home and mobile charging.",
    price: "3,999",
    image: "Screenshot 2025-03-01 20.12.53.png",
    link: "https://fkrtt.in/en/Svm8PV"
  },
  {
    id: 28,
    name: "2 in 1 foldable fan",
    description: "Brushless DC (BLDC) motor for powerful, yet ultra-quiet operation, making it ideal for any setting.",
    price: "1,299",
    image: "Screenshot 2025-03-01 20.14.11.png",
    link: "https://fkrtt.in/en/C1noVM"
  },
  {
    id: 29,
    name: "Water Gun Toy",
    description: "Perfect Pool Toy for Summer Fun! - Enjoy the summer and create long-lasting memories..",
    price: "1,399",
    image: "Screenshot 2025-03-01 20.21.22.png",
    link: "https://fkrtt.in/en/j7yPVE"
  },
  {
    id: 30,
    name: "Women's Sneaker",
    description: "Step up your sneaker game with the Smashic Women's Sneakers from PUMA",
    price: "1,599",
    image: "Screenshot 2025-03-01 20.27.51.png",
    link: "https://fkrtt.in/en/7fzkXo"
  },
  {
    id: 31,
    name: "Budget AC",
    description: "copper condenser coil with patented dnns self heal coating for low maintenance & enhanced durability",
    price: "33,499",
    image: "Screenshot 2025-03-02 09.29.06.png",
    link: "https://fkrtt.in/en/nOYju9"
  },
  {
    id: 32,
    name: "Verbal Non Verbal Reasoning Book",
    description: "verbal & non-verbal reasoning 47 videos, 1000+ solved examples",
    price: "1,250",
    image: "Screenshot 2025-03-01 19.50.50.png",
    link: "https://fkrtt.in/en/6UolsT"
  },
  {
    id: 33,
    name: "LED Desk Lamp",
    description: "Modern, energy-efficient LED desk lamp with adjustable brightness.",
    price: "499",
    image: "Screenshot 2025-03-01 20.11.59.png",
    link: "https://fkrtt.in/en/bCws0O"
  },
  {
    id: 34,
    name: "Noise Cancelling Earbuds",
    description: "Compact earbuds featuring advanced noise cancellation technology.",
    price: "1,799",
    image: "Screenshot 2025-03-01 20.15.45.png",
    link: "https://fkrtt.in/en/FNanj5"
  },
  {
    id: 35,
    name: "Portable Bluetooth Projector",
    description: "Enjoy movies anywhere with this portable Bluetooth projector.",
    price: "5,499",
    image: "Screenshot 2025-03-01 20.18.15.png",
    link: "https://fkrtt.in/en/gG8YaK"
  },
  {
    id: 36,
    name: "Smart Thermostat",
    description: "Save energy and keep your home comfortable with this smart thermostat.",
    price: "1,999",
    image: "Screenshot 2025-03-01 20.20.02.png",
    link: "https://fkrtt.in/en/ZLBGh3"
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
        ${
          product.id <= 23 
          ? `<a href="${product.link}" target="_blank" class="buy-button">Buy on Amazon</a>` 
          : `<button class="flipkart-button" data-id="${product.id}" style="font-weight:bold;">Buy on Flipkart</button>`
        }
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTrendingProducts();

  // Attach event listeners to Flipkart buttons for products with id > 23
  const flipkartButtons = document.querySelectorAll('.flipkart-button');
  flipkartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.getAttribute('data-id'));
      const product = trendingProducts.find(p => p.id === productId);
      // Construct a Flipkart affiliate link (using a search URL as an example)
      const flipkartLink = `https://www.flipkart.com/search?q=${encodeURIComponent(product.name)}`;

      // Send an email via EmailJS with product details
      emailjs.send("service_ivjzddf", "template_x3lui7j", {
        productName: product.name,
        productPrice: product.price,
        productLink: flipkartLink,
        to_email: "yourgmail@gmail.com" // Replace with your actual Gmail address
      }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        window.open(flipkartLink, "_blank");
      }, function (error) {
        console.log('FAILED...', error);
        window.open(flipkartLink, "_blank");
      });
    });
  });

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
});
