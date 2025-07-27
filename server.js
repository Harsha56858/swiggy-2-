const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'your-super-secret-jwt-key-change-this-in-production';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files

// In-memory data storage (replace with database in production)
let users = [];
let orders = [];
let restaurants = [
  {
    id: "spice-villa",
    name: "Spice Villa",
    cuisines: "North Indian, Chinese",
    rating: "4.5",
    deliveryTime: "30-40 mins",
    image: "https://placehold.co/400x300?text=Spice+Villa",
    deals: [
      { label: "Deal of Day", text: "Items At ₹119", sub: "ON SELECT ITEMS" },
      { label: "%", text: "50% Off Upto ₹80", sub: "USE TRYNEW" }
    ],
    menu: [
      { id: 1, name: "Paneer Butter Masala", price: 220, img: "Paneer-Butter-Masala-Recipe-1.jpg" },
      { id: 2, name: "Chicken Biryani", price: 260, img: "Chicken-Biryani-2.jpg" },
      { id: 3, name: "Veg Noodles", price: 150, img: "noodles.jpg" },
      { id: 4, name: "Dal Makhani", price: 180, img: "https://tastespread.com/wp-content/uploads/2023/03/Dal-Makhani-Recipe.jpg" },
      { id: 5, name: "Butter Chicken", price: 280, img: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg" },
      { id: 6, name: "Veg Fried Rice", price: 140, img: "https://tse4.mm.bing.net/th/id/OIP.p4K5UEhv3CoOjWgmGQeizwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  {
    id: "cafe-brew",
    name: "Café Brew",
    cuisines: "Coffee, Beverages",
    rating: "4.4",
    deliveryTime: "15-25 mins",
    image: "https://placehold.co/400x300?text=Cafe+Brew",
    deals: [
      { label: "☕", text: "Buy 2 Get 1 Free", sub: "ON ALL COFFEES" },
      { label: "%", text: "20% Off", sub: "USE CAFE20" }
    ],
    menu: [
      { id: 1, name: "Cappuccino", price: 80, img: "https://tse4.mm.bing.net/th/id/OIP.kbjQCtA_at72z3EldA1UmQHaFJ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 2, name: "Latte", price: 90, img: "https://tse2.mm.bing.net/th/id/OIP.s7s2xBV-_L_x0e7sN9GhugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 3, name: "Cold Coffee", price: 100, img: "https://tse3.mm.bing.net/th/id/OIP.H8bDlZuEdpH_sfVaK5hasAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 4, name: "Espresso", price: 60, img: "https://tse3.mm.bing.net/th/id/OIP.ZEvAPo4nQmfOirlp1_kXyAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 5, name: "Hot Chocolate", price: 70, img: "https://c.ndtvimg.com/2020-06/pgote258_hot-chocolate-650_650x400_03_June_20.jpg" },
      { id: 6, name: "Tea", price: 40, img: "https://tse1.mm.bing.net/th/id/OIP.sXIvZpRwlT64nX41IAkVHwHaE2?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  {
    id: "pizza-palace",
    name: "Pizza Palace",
    cuisines: "Italian, Pizza",
    rating: "4.6",
    deliveryTime: "35-45 mins",
    image: "https://placehold.co/400x300?text=Pizza+Palace",
    deals: [
      { label: "🍕", text: "Large Pizza at Medium Price", sub: "ON ALL PIZZAS" },
      { label: "%", text: "40% Off", sub: "USE PIZZA40" }
    ],
    menu: [
      { id: 1, name: "Margherita Pizza", price: 200, img: "pizza.jpg" },
      { id: 2, name: "Pepperoni Pizza", price: 280, img: "https://lilluna.com/wp-content/uploads/2023/01/homemade-pizza3-resize-12.jpg" },
      { id: 3, name: "Veg Supreme Pizza", price: 250, img: "https://placehold.co/300x200?text=Veg+Supreme+Pizza" },
      { id: 4, name: "Chicken Pizza", price: 320, img: "https://tse2.mm.bing.net/th/id/OIP.g08AnhT-qIvUzqXgsRpoZwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 5, name: "Garlic Bread", price: 80, img: "https://tse4.mm.bing.net/th/id/OIP.0Gb00CSAb4aWPrKP-xFscwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 6, name: "Pasta", price: 150, img: "https://cdn.pixabay.com/photo/2022/09/24/07/31/pasta-7475756_1280.jpg" }
    ]
  },
  {
    id: "burger-hub",
    name: "Burger Hub",
    cuisines: "American, Fast Food",
    rating: "4.3",
    deliveryTime: "25-35 mins",
    image: "https://placehold.co/400x300?text=Burger+Hub",
    deals: [
      { label: "🍔", text: "Buy 2 Get 1 Free", sub: "ON ALL BURGERS" },
      { label: "%", text: "25% Off", sub: "USE BURGER25" }
    ],
    menu: [
      { id: 1, name: "Classic Burger", price: 120, img: "burgger.jpg" },
      { id: 2, name: "Cheese Burger", price: 140, img: "front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg" },
      { id: 3, name: "Chicken Burger", price: 160, img: "https://tse3.mm.bing.net/th/id/OIP.x2vg5HgA4Rl9W12EEh1w1wHaF6?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: 4, name: "Veg Burger", price: 100, img: "https://wallpapercave.com/wp/wp11267688.jpg" },
      { id: 5, name: "French Fries", price: 80, img: "https://www.healthifyme.com/blog/wp-content/uploads/2022/07/shutterstock_1927479248-1.jpg" },
      { id: 6, name: "Cold Coffee", price: 90, img: "https://theexoticbean.com/wp-content/uploads/2016/06/shutterstock_289454174.jpg" }
    ]
  },
  {
    id: "tandoori-delight",
    name: "Tandoori Delight",
    cuisines: "North Indian, Tandoor",
    rating: "4.6",
    deliveryTime: "28-38 mins",
    image: "https://placehold.co/400x300?text=Tandoori+Delight",
    deals: [
      { label: "🔥", text: "Tandoori Special", sub: "ALL TANDOORI ITEMS AT ₹199" },
      { label: "%", text: "30% Off", sub: "USE TANDOORI30" }
    ],
    menu: [
      { id: 1, name: "Tandoori Chicken", price: 280, img: "https://placehold.co/300x200?text=Tandoori+Chicken" },
      { id: 2, name: "Seekh Kebab", price: 220, img: "https://placehold.co/300x200?text=Seekh+Kebab" },
      { id: 3, name: "Tandoori Roti", price: 30, img: "https://placehold.co/300x200?text=Tandoori+Roti" },
      { id: 4, name: "Butter Chicken", price: 260, img: "https://placehold.co/300x200?text=Butter+Chicken" },
      { id: 5, name: "Paneer Tikka", price: 200, img: "https://placehold.co/300x200?text=Paneer+Tikka" },
      { id: 6, name: "Dal Makhani", price: 150, img: "https://placehold.co/300x200?text=Dal+Makhani" }
    ]
  },
  {
    id: "veggie-corner",
    name: "Veggie Corner",
    cuisines: "Vegetarian, South Indian",
    rating: "4.4",
    deliveryTime: "18-25 mins",
    image: "https://placehold.co/400x300?text=Veggie+Corner",
    deals: [
      { label: "🥬", text: "Veg Combo", sub: "THALI AT ₹99" },
      { label: "%", text: "20% Off", sub: "USE VEG20" }
    ],
    menu: [
      { id: 1, name: "Masala Dosa", price: 80, img: "Masala-Dosa.jpg" },
      { id: 2, name: "Idli Sambar", price: 50, img: "south-indian-breakfast-idli-chutney-48378225.webp" },
      { id: 3, name: "Veg Thali", price: 120, img: "https://placehold.co/300x200?text=Veg+Thali" },
      { id: 4, name: "Paneer Curry", price: 180, img: "https://placehold.co/300x200?text=Paneer+Curry" },
      { id: 5, name: "Dal Khichdi", price: 90, img: "Oats-Khichdi-Blog.jpg" },
      { id: 6, name: "Filter Coffee", price: 25, img: "https://placehold.co/300x200?text=Filter+Coffee" }
    ]
  },
  {
    id: "urban-bites",
    name: "Urban Bites",
    cuisines: "Continental, Fast Food",
    rating: "4.1",
    deliveryTime: "22-32 mins",
    image: "https://placehold.co/400x300?text=Urban+Bites",
    deals: [
      { label: "🍽️", text: "Continental Special", sub: "PASTA + GARLIC BREAD AT ₹199" },
      { label: "%", text: "15% Off", sub: "USE URBAN15" }
    ],
    menu: [
      { id: 1, name: "Pasta Alfredo", price: 180, img: "https://placehold.co/300x200?text=Pasta+Alfredo" },
      { id: 2, name: "Garlic Bread", price: 60, img: "https://placehold.co/300x200?text=Garlic+Bread" },
      { id: 3, name: "Caesar Salad", price: 120, img: "salad.jpg" },
      { id: 4, name: "Grilled Sandwich", price: 100, img: "sandwitch.jpg" },
      { id: 5, name: "French Fries", price: 80, img: "https://placehold.co/300x200?text=French+Fries" },
      { id: 6, name: "Cold Coffee", price: 90, img: "ice cream.jpg" }
    ]
  },
  {
    id: "sweet-tooth",
    name: "Sweet Tooth",
    cuisines: "Desserts, Bakery",
    rating: "4.8",
    deliveryTime: "15-20 mins",
    image: "https://placehold.co/400x300?text=Sweet+Tooth",
    deals: [
      { label: "🍰", text: "Sweet Combo", sub: "CAKE + ICE CREAM AT ₹150" },
      { label: "%", text: "25% Off", sub: "USE SWEET25" }
    ],
    menu: [
      { id: 1, name: "Chocolate Cake", price: 120, img: "https://placehold.co/300x200?text=Chocolate+Cake" },
      { id: 2, name: "Vanilla Ice Cream", price: 80, img: "ice cream.jpg" },
      { id: 3, name: "Brownie", price: 60, img: "https://placehold.co/300x200?text=Brownie" },
      { id: 4, name: "Cheesecake", price: 140, img: "https://placehold.co/300x200?text=Cheesecake" },
      { id: 5, name: "Cupcake", price: 40, img: "https://placehold.co/300x200?text=Cupcake" },
      { id: 6, name: "Milkshake", price: 100, img: "https://placehold.co/300x200?text=Milkshake" }
    ]
  },
  {
    id: "the-green-leaf",
    name: "The Green Leaf",
    cuisines: "Healthy, Salads",
    rating: "4.5",
    deliveryTime: "20-28 mins",
    image: "https://placehold.co/400x300?text=The+Green+Leaf",
    deals: [
      { label: "🥗", text: "Salad Bowl Combo", sub: "SALAD + SMOOTHIE AT ₹150" },
      { label: "%", text: "15% Off", sub: "USE HEALTHY15" }
    ],
    menu: [
      { id: 1, name: "Greek Salad", price: 120, img: "salad.jpg" },
      { id: 2, name: "Oats Khichdi", price: 80, img: "Oats-Khichdi-Blog.jpg" },
      { id: 3, name: "Quinoa Bowl", price: 140, img: "https://placehold.co/300x200?text=Quinoa+Bowl" },
      { id: 4, name: "Green Smoothie", price: 90, img: "https://placehold.co/300x200?text=Green+Smoothie" },
      { id: 5, name: "Avocado Toast", price: 110, img: "https://placehold.co/300x200?text=Avocado+Toast" },
      { id: 6, name: "Protein Bowl", price: 160, img: "https://placehold.co/300x200?text=Protein+Bowl" }
    ]
  },
  {
    id: "oceanic-bites",
    name: "Oceanic Bites",
    cuisines: "Seafood, Continental",
    rating: "4.3",
    deliveryTime: "30-40 mins",
    image: "https://placehold.co/400x300?text=Oceanic+Bites",
    deals: [
      { label: "🐟", text: "Seafood Special", sub: "FISH + RICE AT ₹299" },
      { label: "%", text: "20% Off", sub: "USE OCEAN20" }
    ],
    menu: [
      { id: 1, name: "Grilled Fish", price: 280, img: "https://placehold.co/300x200?text=Grilled+Fish" },
      { id: 2, name: "Fish Curry", price: 220, img: "https://placehold.co/300x200?text=Fish+Curry" },
      { id: 3, name: "Prawn Curry", price: 320, img: "https://placehold.co/300x200?text=Prawn+Curry" },
      { id: 4, name: "Crab Masala", price: 380, img: "https://placehold.co/300x200?text=Crab+Masala" },
      { id: 5, name: "Fish Biryani", price: 260, img: "https://placehold.co/300x200?text=Fish+Biryani" },
      { id: 6, name: "Lemon Rice", price: 120, img: "https://placehold.co/300x200?text=Lemon+Rice" }
    ]
  },
  {
    id: "spicy-affair",
    name: "Spicy Affair",
    cuisines: "Indian, Chinese",
    rating: "4.2",
    deliveryTime: "25-35 mins",
    image: "https://placehold.co/400x300?text=Spicy+Affair",
    deals: [
      { label: "🌶️", text: "Spicy Combo", sub: "BIRYANI + CURRY AT ₹199" },
      { label: "%", text: "10% Off", sub: "USE SPICY10" }
    ],
    menu: [
      { id: 1, name: "Chicken Biryani", price: 200, img: "Chicken-Biryani-2.jpg" },
      { id: 2, name: "Veg Biryani", price: 150, img: "https://placehold.co/300x200?text=Veg+Biryani" },
      { id: 3, name: "Chilli Chicken", price: 180, img: "https://placehold.co/300x200?text=Chilli+Chicken" },
      { id: 4, name: "Veg Noodles", price: 120, img: "noodles.jpg" },
      { id: 5, name: "Butter Chicken", price: 220, img: "https://placehold.co/300x200?text=Butter+Chicken" },
      { id: 6, name: "Fried Rice", price: 100, img: "https://placehold.co/300x200?text=Fried+Rice" }
    ]
  },
  {
    id: "bakers-den",
    name: "Baker's Den",
    cuisines: "Bakery, Desserts",
    rating: "4.7",
    deliveryTime: "15-22 mins",
    image: "https://placehold.co/400x300?text=Bakers+Den",
    deals: [
      { label: "🥖", text: "Bread Combo", sub: "BREAD + BUTTER AT ₹50" },
      { label: "%", text: "20% Off", sub: "USE BAKER20" }
    ],
    menu: [
      { id: 1, name: "White Bread", price: 40, img: "https://placehold.co/300x200?text=White+Bread" },
      { id: 2, name: "Brown Bread", price: 50, img: "https://placehold.co/300x200?text=Brown+Bread" },
      { id: 3, name: "Croissant", price: 60, img: "https://placehold.co/300x200?text=Croissant" },
      { id: 4, name: "Chocolate Cake", price: 120, img: "https://placehold.co/300x200?text=Chocolate+Cake" },
      { id: 5, name: "Cookies", price: 80, img: "https://placehold.co/300x200?text=Cookies" },
      { id: 6, name: "Muffin", price: 45, img: "https://placehold.co/300x200?text=Muffin" }
    ]
  },
  {
    id: "noodle-house",
    name: "Noodle House",
    cuisines: "Chinese, Thai",
    rating: "4.4",
    deliveryTime: "18-28 mins",
    image: "https://placehold.co/400x300?text=Noodle+House",
    deals: [
      { label: "🍜", text: "Noodle Combo", sub: "NOODLES + SOUP AT ₹149" },
      { label: "%", text: "15% Off", sub: "USE NOODLE15" }
    ],
    menu: [
      { id: 1, name: "Veg Noodles", price: 120, img: "noodles.jpg" },
      { id: 2, name: "Chicken Noodles", price: 140, img: "https://placehold.co/300x200?text=Chicken+Noodles" },
      { id: 3, name: "Fried Rice", price: 100, img: "https://placehold.co/300x200?text=Fried+Rice" },
      { id: 4, name: "Manchurian", price: 80, img: "https://placehold.co/300x200?text=Manchurian" },
      { id: 5, name: "Spring Roll", price: 60, img: "https://placehold.co/300x200?text=Spring+Roll" },
      { id: 6, name: "Hot & Sour Soup", price: 70, img: "https://placehold.co/300x200?text=Hot+%26+Sour+Soup" }
    ]
  },
  {
    id: "grill-master",
    name: "Grill Master",
    cuisines: "Barbecue, Fast Food",
    rating: "4.6",
    deliveryTime: "22-32 mins",
    image: "https://placehold.co/400x300?text=Grill+Master",
    deals: [
      { label: "🔥", text: "Grill Special", sub: "GRILLED CHICKEN AT ₹199" },
      { label: "%", text: "25% Off", sub: "USE GRILL25" }
    ],
    menu: [
      { id: 1, name: "Grilled Chicken", price: 220, img: "https://placehold.co/300x200?text=Grilled+Chicken" },
      { id: 2, name: "BBQ Ribs", price: 280, img: "https://placehold.co/300x200?text=BBQ+Ribs" },
      { id: 3, name: "Grilled Fish", price: 260, img: "https://placehold.co/300x200?text=Grilled+Fish" },
      { id: 4, name: "Grilled Vegetables", price: 120, img: "https://placehold.co/300x200?text=Grilled+Vegetables" },
      { id: 5, name: "Grilled Sandwich", price: 100, img: "sandwitch.jpg" },
      { id: 6, name: "French Fries", price: 80, img: "https://placehold.co/300x200?text=French+Fries" }
    ]
  },
  {
    id: "royal-treat",
    name: "Royal Treat",
    cuisines: "Mughlai, North Indian",
    rating: "4.5",
    deliveryTime: "30-40 mins",
    image: "https://placehold.co/400x300?text=Royal+Treat",
    deals: [
      { label: "👑", text: "Royal Combo", sub: "BIRYANI + CURRY + ROTI AT ₹299" },
      { label: "%", text: "30% Off", sub: "USE ROYAL30" }
    ],
    menu: [
      { id: 1, name: "Chicken Biryani", price: 250, img: "Chicken-Biryani-2.jpg" },
      { id: 2, name: "Butter Chicken", price: 220, img: "https://placehold.co/300x200?text=Butter+Chicken" },
      { id: 3, name: "Paneer Butter Masala", price: 200, img: "Paneer-Butter-Masala-Recipe-1.jpg" },
      { id: 4, name: "Dal Makhani", price: 150, img: "https://placehold.co/300x200?text=Dal+Makhani" },
      { id: 5, name: "Tandoori Roti", price: 30, img: "https://placehold.co/300x200?text=Tandoori+Roti" },
      { id: 6, name: "Raita", price: 40, img: "https://placehold.co/300x200?text=Raita" }
    ]
  }
];

// JWT Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// Routes

// 1. User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
      phone,
      createdAt: new Date().toISOString()
    };

    users.push(user);

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// 2. User Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// 3. Get All Restaurants
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// 4. Get Restaurant by ID
app.get('/api/restaurants/:id', (req, res) => {
  const restaurant = restaurants.find(r => r.id === req.params.id);
  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
  res.json(restaurant);
});

// 5. Get Restaurant by Name
app.get('/api/restaurants/name/:name', (req, res) => {
  const restaurantName = decodeURIComponent(req.params.name);
  const restaurant = restaurants.find(r => r.name === restaurantName);
  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
  res.json(restaurant);
});

// 6. Place Order
app.post('/api/checkout', authenticateToken, (req, res) => {
  try {
    const { items, total, paymentMethod, deliveryAddress, customerName, restaurantName, paymentStatus } = req.body;

    const order = {
      id: uuidv4(),
      userId: req.user.userId,
      items,
      total,
      paymentMethod,
      deliveryAddress: deliveryAddress || 'Default Address',
      customerName: customerName || 'Customer',
      restaurantName: restaurantName || 'Restaurant',
      status: 'pending',
      paymentStatus: paymentStatus || 'pending',
      createdAt: new Date().toISOString()
    };

    orders.push(order);

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: order.id,
      order
    });
  } catch (error) {
    res.status(500).json({ error: 'Order placement failed' });
  }
});

// 7. Get User Orders
app.get('/api/orders', authenticateToken, (req, res) => {
  const userOrders = orders.filter(order => order.userId === req.user.userId);
  res.json(userOrders);
});

// 8. Get Order by ID
app.get('/api/orders/:id', authenticateToken, (req, res) => {
  const order = orders.find(o => o.id === req.params.id && o.userId === req.user.userId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

// 9. Update Order Status (for admin)
app.patch('/api/orders/:id/status', authenticateToken, (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id === req.params.id);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  order.status = status;
  order.updatedAt = new Date().toISOString();

  res.json({ message: 'Order status updated', order });
});

// 10. Get All Orders (for admin)
app.get('/api/admin/orders', authenticateToken, (req, res) => {
  res.json(orders);
});

// 11. Get All Users (for admin)
app.get('/api/admin/users', authenticateToken, (req, res) => {
  const usersWithoutPassword = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    createdAt: user.createdAt
  }));
  res.json(usersWithoutPassword);
});

// 12. Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'YummyBite API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 YummyBite Backend running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🍕 Restaurants: http://localhost:${PORT}/api/restaurants`);
}); 