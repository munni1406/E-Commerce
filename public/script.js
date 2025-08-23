// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = null;

// Product data with separate men's and women's categories
const productData = [
    // Men's Clothing
    {
        id: 1,
        name: "Red Printed T-Shirt",
        price: 50.00,
        category: "mens-clothing",
        image: "p-T-shirt.webp",
        description: "Comfortable and stylish red printed t-shirt for men.",
        stock: 15,
        featured: true
    },
    
    {
        id: 2,
        name: "Casual Pant",
        price: 55.00,
        category: "mens-clothing",
        image: "pants.webp",
        description: "Stylish casual pants with perfect fit for men.",
        stock: 12,
        featured: true
    },
    {
        id: 3,
        name: "Men's Hoodie",
        price: 65.00,
        category: "mens-clothing",
        image: "huddie.webp",
        description: "Comfortable and warm hoodie for men.",
        stock: 20,
        featured: false
    },
    
    // Women's Clothing
    {
        id: 4,
        name: "Blue Printed T-Shirt",
        price: 50.00,
        category: "womens-clothing",
        image: "tshirt.jpg",
        description: "Trendy blue printed t-shirt for men.",
        stock: 18,
        featured: true
    },
    {
        id: 5,
        name: "Elegant Gown",
        price: 120.00,
        category: "womens-clothing",
        image: "gown.jpg",
        description: "Beautiful elegant gown for special occasions.",
        stock: 8,
        featured: false
    },
    {
        id: 6,
        name: "Stylish Skirt",
        price: 45.00,
        category: "womens-clothing",
        image: "skirt.webp",
        description: "Fashionable skirt with modern design.",
        stock: 15,
        featured: false
    },
    {
        id: 7,
        name: "Blue Printed T-Shirt",
        price: 80.00,
        category: "womens-clothing",
        image: "wcoat.jpg",
        description: "Fashionable coat for women.",
        stock: 5,
        featured: true
    },
    {
        id: 8,
        name: "Blue Printed T-Shirt",
        price: 90.00,
        category: "womens-clothing",
        image: "wjacket.webp",
        description: "stylish jacket for women.",
        stock: 7,
        featured: true
    },
    
    // Men's Shoes
    {
        id: 7,
        name: "Casual Shoes",
        price: 60.00,
        category: "mens-shoes",
        image: "shoes.webp",
        description: "Comfortable casual shoes for everyday wear.",
        stock: 20,
        featured: true
    },
    {
        id: 8,
        name: "Men's Sneakers",
        price: 85.00,
        category: "mens-shoes",
        image: "l-shoes2.jpg",
        description: "Premium sneakers for men.",
        stock: 22,
        featured: false
    },
    {
        id: 9,
        name: "Men's Sandals",
        price: 35.00,
        category: "mens-shoes",
        image: "sandal.jpeg",
        description: "Comfortable sandals for casual wear.",
        stock: 25,
        featured: false
    },
    {
        id: 10,
        name: "Men's Slippers",
        price: 25.00,
        category: "mens-shoes",
        image: "shooes.webp",
        description: "Comfortable slippers for home wear.",
        stock: 30,
        featured: false
    },
    
    // Women's Shoes
    {
        id: 11,
        name: "Ladies Shoes",
        price: 50.00,
        category: "womens-shoes",
        image: "boot.jpg",
        description: "Elegant ladies shoes.",
        stock: 25,
        featured: false
    },
    {
        id: 12,
        name: "Premium Ladies Shoes",
        price: 50.00,
        category: "womens-shoes",
        image: "ladies shoes.jpg",
        description: "Premium quality ladies shoes.",
        stock: 8,
        featured: false
    },
    {
        id: 13,
        name: "Women's Heels",
        price: 75.00,
        category: "womens-shoes",
        image: "heel.webp",
        description: "Elegant high heels for women.",
        stock: 15,
        featured: false
    },
    {
        id: 14,
        name: "Women's Sandals",
        price: 40.00,
        category: "womens-shoes",
        image: "sandel.webp",
        description: "Stylish sandals for women.",
        stock: 20,
        featured: false
    },
    {
        id: 15,
        name: "Women's Casual Shoes",
        price: 55.00,
        category: "womens-shoes",
        image: "slipper.webp",
        description: "Comfortable casual shoes for women.",
        stock: 18,
        featured: false
    },
    
    // Men's Accessories
    {
        id: 16,
        name: "Men's Watch",
        price: 95.00,
        category: "mens-accessories",
        image: "watch.webp",
        description: "Premium quality watch for men.",
        stock: 12,
        featured: false
    },
    {
        id: 17,
        name: "Classic Watch",
        price: 75.00,
        category: "mens-accessories",
        image: "watch.jpg",
        description: "Classic watch with timeless design.",
        stock: 18,
        featured: false
    },
    {
        id: 18,
        name: "Men's Belt",
        price: 35.00,
        category: "mens-accessories",
        image: "men belt.webp",
        description: "Stylish men's belt made from premium leather.",
        stock: 25,
        featured: false
    },
    {
        id: 19,
        name: "Men's Sunglasses",
        price: 45.00,
        category: "mens-accessories",
        image: "gogal.webp",
        description: "Stylish sunglasses for men.",
        stock: 15,
        featured: false
    },
    {
        id: 30,
        name: "Man bag",
        price: 130.00,
        category: "mens-accessories",
        image: "mbag.webp",
        description: "Stylish man bag.",
        stock: 10,
        featured: false
    },
    
    // Women's Accessories
    {
        id: 20,
        name: "Ladies Watch",
        price: 60.00,
        category: "womens-accessories",
        image: "L-watch2.jpg",
        description: "Beautiful ladies watch.",
        stock: 10,
        featured: false
    },
    {
        id: 21,
        name: "Elegant Ladies Watch",
        price: 70.00,
        category: "womens-accessories",
        image: "L-watch.jpg",
        description: "Elegant ladies watch.",
        stock: 15,
        featured: false
    },
    {
        id: 22,
        name: "Smart Band 4",
        price: 79.99,
        category: "womens-accessories",
        image: "band.webp",
        description: "Advanced smart band.",
        stock: 30,
        featured: true
    },
    {
        id: 23,
        name: "Women's Necklace",
        price: 55.00,
        category: "womens-accessories",
        image: "necklace.jpg",
        description: "Beautiful necklace for women.",
        stock: 12,
        featured: false
    },
    {
        id: 24,
        name: "Women's Belt",
        price: 30.00,
        category: "womens-accessories",
        image: "belt.webp",
        description: "Elegant belt for women.",
        stock: 20,
        featured: false
    },
    {
        id: 25,
        name: "Women's Headband",
        price: 15.00,
        category: "womens-accessories",
        image: "headband.webp",
        description: "Comfortable and stylish headband.",
        stock: 30,
        featured: false
    },
    {
        id: 26,
        name: "Elegant Earrings",
        price: 25.00,
        category: "womens-accessories",
        image: "earings.jpg",
        description: "Beautiful elegant earrings for any occasion.",
        stock: 20,
        featured: false
    },
    {
        id: 27,
        name: "Women's Sunglasses",
        price: 40.00,
        category: "womens-accessories",
        image: "gogal.jpg",
        description: "Stylish sunglasses for women.",
        stock: 18,
        featured: false
    },
    {
        id: 28,
        name: "Ladies bag",
        price: 230.00,
        category: "womens-accessories",
        image: "bag.jpg",
        description: "Stylish bag for women.",
        stock: 15,
        featured: false
    },{
        id: 20,
        name: "Ladies bag",
        price: 180.00,
        category: "womens-accessories",
        image: "bags.jpg",
        description: "Stylish office bag.",
        stock: 10,
        featured: false
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('Current page:', window.location.pathname);
    
    // Check if we're on a page with products
    if (document.getElementById('products-grid')) {
        loadProducts();
        updateCartDisplay();
    }
    
    setupEventListeners();
    initializePage(); // Call initializePage here
    
    console.log('App initialized');
});

// Load products
function loadProducts(filteredProducts = null) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    const productsToShow = filteredProducts || productData;
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stock">Stock: ${product.stock}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Load men's products
function loadMensProducts() {
    const productsGrid = document.getElementById('mens-products-grid');
    if (!productsGrid) return;
    
    const mensProducts = productData.filter(product => 
        product.category.startsWith('mens-')
    );
    
    if (mensProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No men's products available</h3>
                <p>Please check back later for new arrivals.</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = mensProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stock">Stock: ${product.stock}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Load women's products
function loadWomensProducts() {
    const productsGrid = document.getElementById('womens-products-grid');
    if (!productsGrid) return;
    
    const womensProducts = productData.filter(product => 
        product.category.startsWith('womens-')
    );
    
    if (womensProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No women's products available</h3>
                <p>Please check back later for new arrivals.</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = womensProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stock">Stock: ${product.stock}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize collection category functionality
function initializeCollectionCategories() {
    const categoryCards = document.querySelectorAll('.collection-categories .category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterCollectionByCategory(category);
        });
    });
    
    // Update category counts with real data
    updateCategoryCounts();
}

// Update category counts with actual product data
function updateCategoryCounts() {
    const currentPage = window.location.pathname.split('/').pop();
    let genderPrefix;
    
    if (currentPage === 'mens-collection.html') {
        genderPrefix = 'mens-';
    } else if (currentPage === 'womens-collection.html') {
        genderPrefix = 'womens-';
    } else {
        return;
    }
    
    // Get all category cards on the current page
    const categoryCards = document.querySelectorAll('.collection-categories .category-card');
    
    categoryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const countElement = card.querySelector('.category-count');
        
        if (countElement && category.startsWith(genderPrefix)) {
            const productCount = productData.filter(product => 
                product.category === category
            ).length;
            
            countElement.textContent = `${productCount}+ Items`;
        }
    });
}

// Filter collection by category
function filterCollectionByCategory(category) {
    const currentPage = window.location.pathname.split('/').pop();
    let productsGrid;
    let filteredProducts;
    let collectionTitle;
    
    if (currentPage === 'mens-collection.html') {
        productsGrid = document.getElementById('mens-products-grid');
        // Ensure strict gender separation - only show men's products
        filteredProducts = productData.filter(product => 
            product.category === category && product.category.startsWith('mens-')
        );
        collectionTitle = "Men's";
    } else if (currentPage === 'womens-collection.html') {
        productsGrid = document.getElementById('womens-products-grid');
        // Ensure strict gender separation - only show women's products
        filteredProducts = productData.filter(product => 
            product.category === category && product.category.startsWith('womens-')
        );
        collectionTitle = "Women's";
    }
    
    if (productsGrid && filteredProducts.length > 0) {
        // Update the section title to show the selected category
        const sectionTitle = document.querySelector('.featured-products .section-title');
        if (sectionTitle) {
            const categoryName = category.replace('mens-', '').replace('womens-', '').replace('-', ' ');
            sectionTitle.textContent = `${collectionTitle} ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products`;
        }
        
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-stock">Stock: ${product.stock}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        
        // Scroll to products section
        productsGrid.scrollIntoView({ behavior: 'smooth' });
    } else if (productsGrid) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found in this category</h3>
                <p>Please try another category or check back later.</p>
            </div>
        `;
    }
}

// Reset collection view to show all products
function resetCollectionView() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'mens-collection.html') {
        loadMensProducts();
        const sectionTitle = document.querySelector('.featured-products .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = "Featured Men's Products";
        }
        updateCollectionSummary('mens');
    } else if (currentPage === 'womens-collection.html') {
        loadWomensProducts();
        const sectionTitle = document.querySelector('.featured-products .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = "Featured Women's Products";
        }
        updateCollectionSummary('womens');
    }
}

// Update collection summary with product statistics
function updateCollectionSummary(gender) {
    const currentPage = window.location.pathname.split('/').pop();
    const genderProducts = productData.filter(product => 
        product.category.startsWith(`${gender}-`)
    );
    
    const totalProducts = genderProducts.length;
    const totalCategories = new Set(genderProducts.map(p => p.category)).size;
    const totalValue = genderProducts.reduce((sum, product) => sum + product.price, 0);
    
    // You can add this information to the page if you want to display statistics
    console.log(`${gender} Collection Summary:`, {
        totalProducts,
        totalCategories,
        totalValue: `$${totalValue.toFixed(2)}`
    });
}

// Cart functions
function addToCart(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Cart toggle
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredProducts);
}

// Category filtering
function filterByCategory(e) {
    const category = e.currentTarget.dataset.category;
    let filteredProducts;
    
    // Handle main category filtering
    if (category === 'mens') {
        filteredProducts = productData.filter(product => 
            product.category.startsWith('mens-')
        );
    } else if (category === 'womens') {
        filteredProducts = productData.filter(product => 
            product.category.startsWith('womens-')
        );
    } else {
        filteredProducts = productData.filter(product => product.category === category);
    }
    
    loadProducts(filteredProducts);
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
}

// Modal functions
function openLoginModal() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'block';
}

function closeLoginModal() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'none';
}

function switchTab(e) {
    const tab = e.target.dataset.tab;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    document.getElementById('login-form').style.display = tab === 'login' ? 'flex' : 'none';
    document.getElementById('register-form').style.display = tab === 'register' ? 'flex' : 'none';
}

// Mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'contact.html') {
        initializeFAQ();
        initializeContactForm();
    } else if (currentPage === 'about.html') {
        // Add any about page specific functionality here
    } else if (currentPage === 'mens-collection.html') {
        loadMensProducts();
        initializeCollectionCategories();
    } else if (currentPage === 'womens-collection.html') {
        loadWomensProducts();
        initializeCollectionCategories();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Cart functionality
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    
    if (cartBtn && cartSidebar && closeCart) {
        cartBtn.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
    }
    
    // Login modal functionality
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (loginBtn && loginModal && closeModal) {
        loginBtn.addEventListener('click', openLoginModal);
        closeModal.addEventListener('click', closeLoginModal);
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Mobile menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    
    if (hamburger && navMenu) {
        console.log('Setting up hamburger menu functionality');
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Hamburger clicked!');
            // alert('Hamburger menu clicked!'); // Test alert
            console.log('Hamburger classes before:', hamburger.className);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Hamburger classes after:', hamburger.className);
            console.log('Nav menu classes after:', navMenu.className);
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.log('Hamburger or nav menu not found!');
    }
    
    // Modal tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', switchTab);
        });
    }
    
    // Category filters (only on home page)
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', filterByCategory);
        });
    }
    
    // Checkout functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            showNotification('Order placed successfully!', 'success');
            cart = [];
            saveCart();
            updateCartDisplay();
            toggleCart();
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const loginModal = document.getElementById('login-modal');
        if (e.target === loginModal) {
            closeLoginModal();
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .category-card.active {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(255, 82, 59, 0.2);
    }
    
    .remove-item {
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .product-description {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .product-stock {
        color: #888;
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);
