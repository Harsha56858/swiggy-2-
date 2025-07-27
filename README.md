# 🍕 YummyBite - Food Ordering App

A complete food ordering application with frontend and backend integration.

## 🚀 Features

- **User Authentication** - Register/Login with JWT tokens
- **Restaurant Browsing** - Browse 15+ restaurants with unique menus
- **Menu Management** - Each restaurant has its own menu and deals
- **Cart System** - Add items to cart and checkout
- **Order History** - Track all your past orders
- **Real-time Backend** - Full Node.js/Express API
- **Responsive Design** - Works on all devices

## 📁 Project Structure

```
yummybite/
├── main.html              # Main homepage
├── login.html             # Login/Register page
├── order-history.html     # Order history page
├── restaurant-detail.html # Individual restaurant page
├── styles.css             # Main stylesheet
├── script.js              # Frontend JavaScript
├── restaurant-data.js     # Restaurant data (legacy)
├── server.js              # Backend server
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Backend Server
```bash
npm start
```
Or for development with auto-restart:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### 3. Open the Frontend
Open `main.html` in your browser or serve it using a local server.

## 🍽️ Available Restaurants

1. **Spice Villa** - North Indian, Chinese
2. **Café Brew** - Coffee, Beverages
3. **Pizza Palace** - Italian, Pizza
4. **Burger Hub** - American, Fast Food
5. **Tandoori Delight** - North Indian, Tandoor
6. **Veggie Corner** - Vegetarian, South Indian
7. **Urban Bites** - Continental, Fast Food
8. **Sweet Tooth** - Desserts, Bakery
9. **The Green Leaf** - Healthy, Salads
10. **Oceanic Bites** - Seafood, Continental
11. **Spicy Affair** - Indian, Chinese
12. **Baker's Den** - Bakery, Desserts
13. **Noodle House** - Chinese, Thai
14. **Grill Master** - Barbecue, Fast Food
15. **Royal Treat** - Mughlai, North Indian

## 🔌 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/name/:name` - Get restaurant by name

### Orders
- `POST /api/checkout` - Place new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get specific order

### Admin (Protected)
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/users` - Get all users
- `PATCH /api/orders/:id/status` - Update order status

## 🎯 How to Use

### 1. Register/Login
- Open `login.html`
- Create an account or login with existing credentials
- JWT token is automatically stored

### 2. Browse Restaurants
- On `main.html`, click any restaurant card
- View restaurant details, deals, and menu
- Add items to cart

### 3. Place Orders
- Add items to cart from restaurant pages
- Click checkout in cart sidebar
- Orders are saved to backend

### 4. View Order History
- Navigate to `order-history.html`
- View all past orders with status

## 🔧 Backend Features

- **JWT Authentication** - Secure user sessions
- **Password Hashing** - bcrypt for security
- **RESTful API** - Clean API design
- **Error Handling** - Comprehensive error responses
- **CORS Enabled** - Cross-origin requests allowed
- **In-Memory Storage** - Data persists during server runtime

## 🎨 Frontend Features

- **Modern UI** - Beautiful, responsive design
- **3D Effects** - Hover animations and transforms
- **Cart System** - Real-time cart updates
- **Modal Dialogs** - Interactive popups
- **Form Validation** - Client-side validation
- **Loading States** - User feedback during API calls

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected API endpoints
- Input validation
- CORS configuration

## 🚀 Deployment

### Backend Deployment
1. Deploy `server.js` to a Node.js hosting service (Heroku, Vercel, etc.)
2. Update frontend API URLs to point to your deployed backend
3. Set environment variables for JWT_SECRET

### Frontend Deployment
1. Deploy HTML/CSS/JS files to any static hosting service
2. Update API URLs in JavaScript files
3. Ensure CORS is properly configured

## 🐛 Troubleshooting

### Common Issues

1. **Server not starting**
   - Check if port 3000 is available
   - Ensure all dependencies are installed

2. **CORS errors**
   - Backend CORS is configured for development
   - Update CORS settings for production

3. **Authentication issues**
   - Clear browser localStorage
   - Check JWT token expiration

4. **Images not loading**
   - Ensure image files are in the correct directory
   - Check file paths in restaurant data

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Enjoy your delicious food ordering experience! 🍕🍔🍜** 