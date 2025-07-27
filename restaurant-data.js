// Restaurant Data Structure
const restaurantData = {
  "Spice Villa": {
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
      { id: 1, name: "Paneer Butter Masala", price: 220, img: "" },
      { id: 2, name: "Chicken Biryani", price: 260, img: "Chicken-Biryani-2.jpg" },
      { id: 3, name: "Veg Noodles", price: 150, img: "noodles.jpg" },
      { id: 4, name: "Dal Makhani", price: 180, img: "https://tastespread.com/wp-content/uploads/2023/03/Dal-Makhani-Recipe.jpg" },
      { id: 5, name: "Butter Chicken", price: 280, img: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg" },
      { id: 6, name: "Veg Fried Rice", price: 140, img: "https://tse4.mm.bing.net/th/id/OIP.p4K5UEhv3CoOjWgmGQeizwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  
  "Café Brew": {
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
      { id: 1, name: "Cappuccino", price: 80, img: "https://placehold.co/300x200?text=Cappuccino" },
      { id: 2, name: "Latte", price: 90, img: "https://placehold.co/300x200?text=Latte" },
      { id: 3, name: "Cold Coffee", price: 100, img: "ice cream.jpg" },
      { id: 4, name: "Espresso", price: 60, img: "https://placehold.co/300x200?text=Espresso" },
      { id: 5, name: "Hot Chocolate", price: 70, img: "https://placehold.co/300x200?text=Hot+Chocolate" },
      { id: 6, name: "Tea", price: 40, img: "https://placehold.co/300x200?text=Tea" }
    ]
  },
  
  "Pizza Palace": {
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
      { id: 2, name: "Pepperoni Pizza", price: 280, img: "https://placehold.co/300x200?text=Pepperoni+Pizza" },
      { id: 3, name: "Veg Supreme Pizza", price: 250, img: "https://placehold.co/300x200?text=Veg+Supreme+Pizza" },
      { id: 4, name: "Chicken Pizza", price: 320, img: "https://placehold.co/300x200?text=Chicken+Pizza" },
      { id: 5, name: "Garlic Bread", price: 80, img: "https://placehold.co/300x200?text=Garlic+Bread" },
      { id: 6, name: "Pasta", price: 150, img: "https://placehold.co/300x200?text=Pasta" }
    ]
  },
  
  "Burger Hub": {
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
      { id: 3, name: "Chicken Burger", price: 160, img: "https://placehold.co/300x200?text=Chicken+Burger" },
      { id: 4, name: "Veg Burger", price: 100, img: "https://placehold.co/300x200?text=Veg+Burger" },
      { id: 5, name: "French Fries", price: 80, img: "https://placehold.co/300x200?text=French+Fries" },
      { id: 6, name: "Cold Coffee", price: 90, img: "ice cream.jpg" }
    ]
  },
  
  "Tandoori Delight": {
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
  
  "Veggie Corner": {
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
  
  "Urban Bites": {
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
  
  "Sweet Tooth": {
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
  
  "The Green Leaf": {
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
  
  "Oceanic Bites": {
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
  
  "Spicy Affair": {
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
  
  "Baker's Den": {
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
  
  "Noodle House": {
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
  
  "Grill Master": {
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
  
  "Royal Treat": {
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
};

// Function to get restaurant by name
function getRestaurantByName(name) {
  return restaurantData[name] || null;
}

// Function to get all restaurants
function getAllRestaurants() {
  return Object.values(restaurantData);
} 