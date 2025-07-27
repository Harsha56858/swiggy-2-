// Generalized arrow scroll for all sections
document.querySelectorAll('.z-arrow').forEach(arrow => {
  arrow.addEventListener('click', function (e) {
    const section = arrow.closest('.z-mind-section, .z-chains-section');
    if (!section) return;
    const scroll = section.querySelector('.z-mind-scroll, .z-chains-scroll');
    if (!scroll) return;
    const amount = 200;
    if (arrow.classList.contains('z-arrow-left')) {
      scroll.scrollBy({ left: -amount, behavior: 'smooth' });
    } else {
      scroll.scrollBy({ left: amount, behavior: 'smooth' });
    }
  });
});

// Modal popup for cards
const modal = document.getElementById('z-modal-popup');
const modalImg = document.getElementById('z-modal-img');
const modalTitle = document.getElementById('z-modal-title');
const modalClose = document.getElementById('z-modal-close');

function openModal(name, img) {
  modalImg.src = img;
  modalImg.alt = name;
  modalTitle.textContent = name;
  modal.style.display = 'flex';
  modal.classList.add('open');
}

function closeModal() {
  modal.style.display = 'none';
  modal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

// Clickable cards
function setupCardClicks(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('click', function() {
      const name = card.getAttribute('data-name');
      const img = card.getAttribute('data-img');
      openModal(name, img);
    });
  });
}

setupCardClicks('.z-mind-item');
setupCardClicks('.z-chain-card');

// Sort By Modal functionality
const sortByBtn = document.getElementById('sortByBtn');
const sortByModal = document.getElementById('sortByModal');
const closeSortBy = document.getElementById('closeSortBy');
const sortByForm = document.getElementById('sortByForm');

if (sortByBtn && sortByModal && closeSortBy && sortByForm) {
  sortByBtn.onclick = function() {
    sortByModal.style.display = 'flex';
  };
  closeSortBy.onclick = function() {
    sortByModal.style.display = 'none';
  };
  sortByForm.onsubmit = function(e) {
    e.preventDefault();
    sortByModal.style.display = 'none';
  };
}

// Cart functionality
let cart = [];

function updateCartUI() {
  const cartList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  if (!cartList || !cartCount || !cartTotal) return;
  
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  
  // Animate cart count
  const oldCount = parseInt(cartCount.textContent) || 0;
  const newCount = cart.length;
  
  if (newCount > oldCount) {
    // Add subtle scale animation for new items
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  }
  
  cartCount.textContent = newCount;
  cartTotal.textContent = total;
  
  // Add cart count to localStorage
  localStorage.setItem('cartCount', newCount);
}

function openCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.add('open');
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

// Add to cart from popular dishes
function setupPopularDishesAddToCart() {
  document.querySelectorAll('.z-add-to-cart-popular').forEach(btn => {
    btn.onclick = function(e) {
      e.stopPropagation();
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'), 10);
      cart.push({ name, price });
      updateCartUI();
      openCartSidebar();
    };
  });
}

// Make restaurant cards clickable
function setupRestaurantCardLinks() {
  document.querySelectorAll('.z-restaurant-card').forEach(card => {
    card.onclick = function() {
      const name = card.querySelector('h3').textContent.trim();
      const restaurantId = encodeURIComponent(name);
      window.location.href = `restaurant-detail.html?id=${restaurantId}`;
    };
  });
}

// Cart sidebar close button
const closeCartBtn = document.getElementById('close-cart');
if (closeCartBtn) closeCartBtn.onclick = closeCartSidebar;

// Checkout logic
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
  checkoutBtn.onclick = function() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const paymentMethod = document.getElementById('payment-method-cart').value;
    const order = {
      items: cart,
      total: document.getElementById('cart-total').textContent,
      paymentMethod
    };
    
    // Send order to backend
    fetch('http://localhost:3000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      alert('Order placed successfully!');
      cart = [];
      updateCartUI();
      closeCartSidebar();
    })
    .catch(err => {
      alert('Order failed! Please try again.');
    });
  };
}

// Profile navigation handling - IMMEDIATE updates with zero delay
function setupProfileNavigation() {
  // IMMEDIATE DOM updates - no requestAnimationFrame delay
  const token = localStorage.getItem('token');
  const profileLink = document.getElementById('profile-link');
  const loginLink = document.getElementById('login-link');
  const userNameDisplay = document.getElementById('user-name-display');
  
  // Always ensure login link has proper classes
  if (loginLink) {
    loginLink.classList.add('nav-item', 'login-item');
  }
  
  if (token) {
    // User is logged in
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const logoutLink = document.getElementById('logout-link');
    
    if (profileLink) {
      profileLink.style.display = 'flex';
      profileLink.classList.add('nav-item', 'profile-item');
    }
    if (loginLink) {
      loginLink.style.display = 'none';
    }
    if (logoutLink) {
      logoutLink.style.display = 'flex';
      logoutLink.classList.add('nav-item', 'logout-item');
    }
    if (userNameDisplay && user.name) {
      userNameDisplay.textContent = user.name.split(' ')[0];
    }
    
    // Add body class for CSS targeting
    document.body.classList.add('logged-in');
    document.body.classList.remove('logged-out');
  } else {
    // User is not logged in
    const logoutLink = document.getElementById('logout-link');
    
    if (profileLink) {
      profileLink.style.display = 'none';
    }
    if (loginLink) {
      loginLink.style.display = 'flex';
      loginLink.classList.add('nav-item', 'login-item');
    }
    if (logoutLink) {
      logoutLink.style.display = 'none';
    }
    if (userNameDisplay) {
      userNameDisplay.textContent = 'Profile';
    }
    
    // Add body class for CSS targeting
    document.body.classList.add('logged-out');
    document.body.classList.remove('logged-in');
  }
  
  // Force login link to be visible if no token
  if (!token && loginLink) {
    loginLink.style.display = 'flex';
    loginLink.style.visibility = 'visible';
    loginLink.style.opacity = '1';
  }
}

// Listen for profile updates from other pages
window.addEventListener('storage', (e) => {
  if (e.key === 'user' && e.newValue) {
    setupProfileNavigation(); // Refresh navigation when user data changes
  }
});

// Listen for custom profile update events
window.addEventListener('profileUpdated', (e) => {
  setupProfileNavigation(); // Refresh navigation immediately
});

// Listen for page focus events
window.addEventListener('focus', () => {
  setupProfileNavigation(); // Refresh navigation when page gains focus
});

// Listen for visibility change events
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setupProfileNavigation(); // Refresh navigation when page becomes visible
  }
});

// Logout functionality
if (document.getElementById('logout-link')) {
  document.getElementById('logout-link').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  });
}

// Load cart from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (error) {
      console.error('Error loading cart from storage:', error);
      cart = [];
    }
  }
}

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Logout function
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  sessionStorage.removeItem('profileUser');
  window.location.href = 'main.html';
}

// Initialize everything
loadCartFromStorage();
setupPopularDishesAddToCart();
setupRestaurantCardLinks();
setupProfileNavigation();

// Add cart saving to existing functions
const originalAddToCart = window.addToCart;
window.addToCart = function(name, price) {
  if (originalAddToCart) {
    originalAddToCart(name, price);
  } else {
    cart.push({ name, price });
    updateCartUI();
    saveCartToStorage();
  }
}; 