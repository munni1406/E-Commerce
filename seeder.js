const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

// Product data to seed with separate men's and women's categories
const productData = [
    // Men's Clothing
    {
        name: "Red Printed T-Shirt",
        description: "Comfortable and stylish red printed t-shirt made from premium cotton. Perfect for casual wear and everyday comfort.",
        price: 50.00,
        category: "mens-clothing",
        image: "p-T-shirt.webp",
        stock: 15,
        rating: 4.5,
        numReviews: 12,
        featured: true
    },
    {
        name: "Blue Printed T-Shirt",
        description: "Trendy blue printed t-shirt with modern design. Made from high-quality cotton for breathability and comfort.",
        price: 50.00,
        category: "mens-clothing",
        image: "tshirt.jpg",
        stock: 18,
        rating: 4.4,
        numReviews: 10,
        featured: true
    },
    {
        name: "Casual Pant",
        description: "Stylish casual pants with perfect fit and comfort. Ideal for both casual and semi-formal occasions.",
        price: 55.00,
        category: "mens-clothing",
        image: "pants.webp",
        stock: 12,
        rating: 4.2,
        numReviews: 15,
        featured: true
    },
    {
        name: "Men's Hoodie",
        description: "Comfortable and warm hoodie for casual wear. Perfect for cold weather and relaxed style.",
        price: 65.00,
        category: "mens-clothing",
        image: "huddie.webp",
        stock: 20,
        rating: 4.3,
        numReviews: 8,
        featured: false
    },
    
    // Women's Clothing
    {
        name: "Elegant Gown",
        description: "Beautiful elegant gown for special occasions. Crafted with premium materials and sophisticated design.",
        price: 120.00,
        category: "womens-clothing",
        image: "gown.jpg",
        stock: 8,
        rating: 4.8,
        numReviews: 5,
        featured: false
    },
    {
        name: "Stylish Skirt",
        description: "Fashionable skirt with modern design. Perfect for both casual and formal occasions.",
        price: 45.00,
        category: "womens-clothing",
        image: "skirt.webp",
        stock: 15,
        rating: 4.1,
        numReviews: 12,
        featured: false
    },
    
    // Men's Shoes
    {
        name: "Casual Shoes",
        description: "Comfortable casual shoes perfect for everyday wear. Made with breathable materials and cushioned sole for maximum comfort.",
        price: 60.00,
        category: "mens-shoes",
        image: "shoes.webp",
        stock: 20,
        rating: 4.3,
        numReviews: 8,
        featured: true
    },
    {
        name: "Men's Sneakers",
        description: "Premium sneakers with superior comfort and style. Perfect for athletic activities and casual wear.",
        price: 85.00,
        category: "mens-shoes",
        image: "l-shoes2.jpg",
        stock: 22,
        rating: 4.4,
        numReviews: 14,
        featured: false
    },
    {
        name: "Men's Sandals",
        description: "Comfortable sandals for casual wear. Perfect for summer and beach activities.",
        price: 35.00,
        category: "mens-shoes",
        image: "sandal.jpeg",
        stock: 25,
        rating: 4.0,
        numReviews: 10,
        featured: false
    },
    {
        name: "Men's Slippers",
        description: "Comfortable slippers for home wear. Made with soft materials for ultimate comfort.",
        price: 25.00,
        category: "mens-shoes",
        image: "slipper.webp",
        stock: 30,
        rating: 4.2,
        numReviews: 15,
        featured: false
    },
    
    // Women's Shoes
    {
        name: "Ladies Shoes",
        description: "Elegant ladies shoes with premium comfort and style. Perfect for both casual and formal occasions.",
        price: 50.00,
        category: "womens-shoes",
        image: "ladies shoes.jpg",
        stock: 25,
        rating: 4.6,
        numReviews: 20,
        featured: false
    },
    {
        name: "Premium Ladies Shoes",
        description: "Premium quality ladies shoes for special occasions. Crafted with attention to detail and superior materials.",
        price: 50.00,
        category: "womens-shoes",
        image: "ladies shoes.jpg",
        stock: 8,
        rating: 4.8,
        numReviews: 4,
        featured: false
    },
    {
        name: "Women's Heels",
        description: "Elegant high heels for women. Perfect for formal occasions and professional settings.",
        price: 75.00,
        category: "womens-shoes",
        image: "heel.webp",
        stock: 15,
        rating: 4.5,
        numReviews: 12,
        featured: false
    },
    {
        name: "Women's Sandals",
        description: "Stylish sandals for women. Comfortable and fashionable for summer wear.",
        price: 40.00,
        category: "womens-shoes",
        image: "sandel.webp",
        stock: 20,
        rating: 4.3,
        numReviews: 8,
        featured: false
    },
    {
        name: "Women's Casual Shoes",
        description: "Comfortable casual shoes for women. Perfect for everyday wear and activities.",
        price: 55.00,
        category: "womens-shoes",
        image: "shooes.webp",
        stock: 18,
        rating: 4.4,
        numReviews: 11,
        featured: false
    },
    
    // Men's Accessories
    {
        name: "Men's Watch",
        description: "Premium quality watch with elegant design. Perfect for formal occasions and professional settings.",
        price: 95.00,
        category: "mens-accessories",
        image: "watch.webp",
        stock: 12,
        rating: 4.6,
        numReviews: 9,
        featured: false
    },
    {
        name: "Classic Watch",
        description: "Classic watch with timeless design. A perfect blend of style and functionality.",
        price: 75.00,
        category: "mens-accessories",
        image: "watch.jpg",
        stock: 18,
        rating: 4.3,
        numReviews: 11,
        featured: false
    },
    {
        name: "Men's Belt",
        description: "Stylish men's belt made from premium leather. Durable and fashionable accessory.",
        price: 35.00,
        category: "mens-accessories",
        image: "men belt.webp",
        stock: 25,
        rating: 4.2,
        numReviews: 16,
        featured: false
    },
    {
        name: "Men's Sunglasses",
        description: "Stylish sunglasses for men. Perfect for outdoor activities and fashion statement.",
        price: 45.00,
        category: "mens-accessories",
        image: "gogal.jpg",
        stock: 15,
        rating: 4.1,
        numReviews: 7,
        featured: false
    },
    
    // Women's Accessories
    {
        name: "Ladies Watch",
        description: "Beautiful ladies watch with elegant design and precision. Features a sleek design with reliable timekeeping.",
        price: 60.00,
        category: "womens-accessories",
        image: "L-watch2.jpg",
        stock: 10,
        rating: 4.7,
        numReviews: 6,
        featured: false
    },
    {
        name: "Elegant Ladies Watch",
        description: "Elegant ladies watch with sophisticated design. Perfect accessory to complement any outfit.",
        price: 70.00,
        category: "womens-accessories",
        image: "L-watch.jpg",
        stock: 15,
        rating: 4.5,
        numReviews: 18,
        featured: false
    },
    {
        name: "Smart Band 4",
        description: "Advanced smart band with health monitoring features. Track your fitness goals and stay connected.",
        price: 79.99,
        category: "womens-accessories",
        image: "band.webp",
        stock: 30,
        rating: 4.9,
        numReviews: 25,
        featured: true
    },
    {
        name: "Women's Necklace",
        description: "Beautiful necklace for women. Elegant design perfect for any occasion.",
        price: 55.00,
        category: "womens-accessories",
        image: "necklace.jpg",
        stock: 12,
        rating: 4.4,
        numReviews: 8,
        featured: false
    },
    {
        name: "Women's Belt",
        description: "Elegant belt for women. Stylish accessory to complete any outfit.",
        price: 30.00,
        category: "womens-accessories",
        image: "belt.jpg",
        stock: 20,
        rating: 4.2,
        numReviews: 10,
        featured: false
    },
    {
        name: "Women's Headband",
        description: "Comfortable and stylish headband. Perfect for sports activities and casual wear.",
        price: 15.00,
        category: "womens-accessories",
        image: "headband.webp",
        stock: 30,
        rating: 4.0,
        numReviews: 22,
        featured: false
    },
    {
        name: "Elegant Earrings",
        description: "Beautiful elegant earrings for any occasion. Crafted with attention to detail and premium materials.",
        price: 25.00,
        category: "womens-accessories",
        image: "earings.jpg",
        stock: 20,
        rating: 4.4,
        numReviews: 13,
        featured: false
    },
    {
        name: "Women's Sunglasses",
        description: "Stylish sunglasses for women. Perfect for outdoor activities and fashion statement.",
        price: 40.00,
        category: "womens-accessories",
        image: "gogals.jpg",
        stock: 18,
        rating: 4.3,
        numReviews: 9,
        featured: false
    }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/redstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

// Seed function
async function seedDatabase() {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');
        
        // Insert new products
        const products = await Product.insertMany(productData);
        console.log(`Successfully seeded ${products.length} products`);
        
        // Display seeded products by category
        console.log('\nProducts by Category:');
        console.log('===================');
        
        const categories = ['mens-clothing', 'womens-clothing', 'mens-shoes', 'womens-shoes', 'mens-accessories', 'womens-accessories'];
        categories.forEach(category => {
            const categoryProducts = products.filter(p => p.category === category);
            console.log(`\n${category.toUpperCase()} (${categoryProducts.length} products):`);
            categoryProducts.forEach(product => {
                console.log(`- ${product.name}: $${product.price}`);
            });
        });
        
        mongoose.connection.close();
        console.log('\nDatabase seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
}

// Run the seeder
seedDatabase();
