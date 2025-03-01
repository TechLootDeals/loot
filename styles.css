:root {
    --primary: #FF6F61;
    --secondary: #2B3445;
    --accent: #FFD712;
    --text: #2B2B2B;
}

/* Animation Keyframes */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

.product-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.6s ease-out;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.product-image {
    height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-image:hover img {
    transform: scale(1.05);
}

.price-tag {
    color: var(--primary);
    font-size: 1.4rem;
    font-weight: 700;
    margin: 1rem 0;
}

.original-price {
    text-decoration: line-through;
    color: #666;
    margin-left: 10px;
}

/* Splide Carousel Customization */
.splide__arrow {
    background: var(--primary);
}

/* Responsive Design */
@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: 1fr 1fr;
    }
}
