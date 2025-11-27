// jr.js

// Cart Management
let cart = [];
let orders = [];

// Product details data
const productDetails = {
    soap1: {
        name: "Premium Lavender Soap",
        price: 299,
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&h=300&fit=crop",
        description: "Experience the calming essence of organic lavender with our premium soap. Crafted with natural ingredients for a luxurious cleansing experience.",
        materials: ["Organic Lavender Oil", "Coconut Oil", "Shea Butter", "Vitamin E", "Glycerin"],
        benefits: ["Calming aromatherapy", "Moisturizing properties", "Gentle on skin", "Long-lasting fragrance"],
        size: "120g",
        usage: "Daily use for face and body",
        skinType: "All skin types",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    soap2: {
        name: "Charcoal Detox Soap",
        price: 349,
        image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=300&fit=crop",
        description: "Deep cleansing activated charcoal soap that draws out impurities and toxins from your skin, leaving it refreshed and revitalized.",
        materials: ["Activated Charcoal", "Tea Tree Oil", "Coconut Oil", "Aloe Vera", "Bentonite Clay"],
        benefits: ["Deep pore cleansing", "Removes toxins", "Controls oil", "Prevents acne"],
        size: "100g",
        usage: "2-3 times per week",
        skinType: "Oily and combination skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: false
    },
    soap3: {
        name: "Honey Oatmeal Soap",
        price: 279,
        image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=300&fit=crop",
        description: "A gentle exfoliating soap combining the moisturizing power of honey with the soothing properties of oatmeal.",
        materials: ["Raw Honey", "Colloidal Oatmeal", "Goat Milk", "Coconut Oil", "Chamomile Extract"],
        benefits: ["Gentle exfoliation", "Moisturizes dry skin", "Soothes irritation", "Natural glow"],
        size: "110g",
        usage: "Daily use for face and body",
        skinType: "Dry and sensitive skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    soap4: {
        name: "Tea Tree Oil Soap",
        price: 329,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
        description: "Antibacterial tea tree oil soap perfect for acne-prone skin and daily cleansing.",
        materials: ["Tea Tree Oil", "Neem Oil", "Coconut Oil", "Eucalyptus Oil", "Zinc Oxide"],
        benefits: ["Antibacterial properties", "Treats acne", "Controls oil production", "Refreshes skin"],
        size: "100g",
        usage: "Daily use for problem areas",
        skinType: "Oily and acne-prone skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: false
    },
    soap5: {
        name: "Rose Petal Soap",
        price: 389,
        image: "https://images.unsplash.com/photo-1607006341952-1c1c5175e3b0?w=400&h=300&fit=crop",
        description: "Luxurious rose-infused soap with real rose petals for the ultimate spa experience at home.",
        materials: ["Rose Essential Oil", "Dried Rose Petals", "Shea Butter", "Jojoba Oil", "Vitamin C"],
        benefits: ["Anti-aging properties", "Evens skin tone", "Luxurious fragrance", "Premium moisturizing"],
        size: "130g",
        usage: "Special occasions or daily luxury",
        skinType: "All skin types, especially mature",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    lotion1: {
        name: "Shea Butter Lotion",
        price: 459,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
        description: "Intensive moisturizing shea butter lotion for deep hydration and skin repair.",
        materials: ["Raw Shea Butter", "Coconut Oil", "Vitamin E", "Aloe Vera", "Jojoba Oil"],
        benefits: ["24-hour hydration", "Repairs dry skin", "Improves elasticity", "Non-greasy formula"],
        size: "250ml",
        usage: "Apply daily after shower",
        skinType: "Very dry to normal skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    lotion2: {
        name: "Aloe Vera Lotion",
        price: 379,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        description: "Soothing aloe vera lotion perfect for sensitive skin and sun-exposed areas.",
        materials: ["Pure Aloe Vera Gel", "Cucumber Extract", "Chamomile", "Vitamin B5", "Hyaluronic Acid"],
        benefits: ["Soothes irritation", "Cooling effect", "Lightweight formula", "Quick absorption"],
        size: "200ml",
        usage: "Apply as needed throughout the day",
        skinType: "Sensitive and normal skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    lotion3: {
        name: "Vitamin E Lotion",
        price: 429,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
        description: "Antioxidant-rich vitamin E lotion that protects and nourishes your skin daily.",
        materials: ["Vitamin E", "Grapeseed Oil", "Green Tea Extract", "Coenzyme Q10", "Rosehip Oil"],
        benefits: ["Antioxidant protection", "Fights free radicals", "Anti-aging", "Improves skin texture"],
        size: "220ml",
        usage: "Daily morning and evening",
        skinType: "All skin types, especially mature",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: false
    },
    lotion4: {
        name: "Coconut Milk Lotion",
        price: 399,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        description: "Hydrating coconut milk lotion that leaves your skin silky smooth and delicately scented.",
        materials: ["Coconut Milk", "Coconut Oil", "Vanilla Extract", "Sweet Almond Oil", "Glycerin"],
        benefits: ["Deep moisturization", "Tropical scent", "Softens skin", "Long-lasting hydration"],
        size: "240ml",
        usage: "Apply after shower for best results",
        skinType: "Dry to normal skin",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    lotion5: {
        name: "Argan Oil Lotion",
        price: 499,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
        description: "Luxurious Moroccan argan oil lotion for the ultimate skin pampering experience.",
        materials: ["Moroccan Argan Oil", "Rosehip Oil", "Evening Primrose Oil", "Vitamin C", "Collagen"],
        benefits: ["Premium anti-aging", "Intensive repair", "Luxurious feel", "Radiant glow"],
        size: "200ml",
        usage: "Daily luxury treatment",
        skinType: "All skin types, especially mature",
        madeIn: "Philippines",
        crueltyFree: true,
        organic: true
    },
    shampoo1: {
        name: "Keratin Shampoo",
        price: 529,
        image: "https://images.unsplash.com/photo-1589739900213-a41147f07423?w=400&h=300&fit=crop",
        description: "Hair strengthening keratin shampoo that repairs and protects damaged hair.",
        materials: ["Hydrolyzed Keratin", "Argan Oil", "Panthenol", "Silk Proteins", "Vitamin B5"],
        benefits: ["Strengthens hair", "Reduces breakage", "Adds shine", "Heat protection"],
        size: "300ml",
        usage: "3-4 times per week",
        hairType: "Damaged and weak hair",
        madeIn: "Philippines",
        crueltyFree: true,
        sulfateFree: true
    },
    shampoo2: {
        name: "Argan Oil Shampoo",
        price: 589,
        image: "https://images.unsplash.com/photo-1560691023-ca1f295a5173?w=400&h=300&fit=crop",
        description: "Nourishing Moroccan argan oil shampoo for silky smooth and manageable hair.",
        materials: ["Moroccan Argan Oil", "Jojoba Oil", "Macadamia Oil", "Vitamin E", "Glycerin"],
        benefits: ["Deep nourishment", "Frizz control", "Adds shine", "Improves manageability"],
        size: "280ml",
        usage: "Daily or as needed",
        hairType: "Dry and frizzy hair",
        madeIn: "Philippines",
        crueltyFree: true,
        sulfateFree: true
    },
    shampoo3: {
        name: "Tea Tree Shampoo",
        price: 449,
        image: "https://images.unsplash.com/photo-1543615423-83a3737035d8?w=400&h=300&fit=crop",
        description: "Anti-dandruff tea tree shampoo that cleanses scalp and controls flaking.",
        materials: ["Tea Tree Oil", "Salicylic Acid", "Zinc Pyrithione", "Peppermint Oil", "Aloe Vera"],
        benefits: ["Controls dandruff", "Soothes itchy scalp", "Antibacterial", "Refreshes scalp"],
        size: "250ml",
        usage: "2-3 times per week",
        hairType: "Dandruff-prone scalp",
        madeIn: "Philippines",
        crueltyFree: true,
        sulfateFree: false
    },
    shampoo4: {
        name: "Coconut Milk Shampoo",
        price: 419,
        image: "https://images.unsplash.com/photo-1506808543189-7e8eae5824cb?w=400&h=300&fit=crop",
        description: "Hydrating coconut milk shampoo that gently cleanses while maintaining moisture balance.",
        materials: ["Coconut Milk", "Coconut Oil", "Hibiscus Extract", "Vitamin E", "Panthenol"],
        benefits: ["Gentle cleansing", "Maintains moisture", "Adds softness", "Tropical fragrance"],
        size: "300ml",
        usage: "Daily use",
        hairType: "Normal to dry hair",
        madeIn: "Philippines",
        crueltyFree: true,
        sulfateFree: true
    },
    shampoo5: {
        name: "Aloe Vera Shampoo",
        price: 379,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop",
        description: "Soothing aloe vera shampoo perfect for sensitive scalp and gentle daily cleansing.",
        materials: ["Aloe Vera Gel", "Chamomile Extract", "Cucumber Extract", "Vitamin B5", "Glycerin"],
        benefits: ["Soothes scalp", "Gentle cleansing", "Reduces irritation", "Suitable for daily use"],
        size: "290ml",
        usage: "Daily use",
        hairType: "Sensitive scalp, all hair types",
        madeIn: "Philippines",
        crueltyFree: true,
        sulfateFree: true
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateOrdersCount();
    loadOrdersFromStorage();
});

// Category Management
function showCategory(categoryId) {
    // Hide all categories
    document.querySelectorAll('.category-window').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected category
    document.getElementById(categoryId + '-category').classList.add('active');
    
    // Add active class to clicked button
    event.target.closest('.category-btn').classList.add('active');
}

// Add to Cart
function addToCart(productId, productName, price) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateOrdersCount();
    showNotification('Product added to cart!');
}

// Update Orders Count
function updateOrdersCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('ordersCount').textContent = totalItems;
}

// Toggle Orders Panel
function toggleOrders() {
    const panel = document.getElementById('ordersPanel');
    panel.classList.toggle('active');
    updateOrdersDisplay();
}

// Update Orders Display
function updateOrdersDisplay() {
    const ordersContent = document.getElementById('ordersContent');
    const totalPriceElement = document.getElementById('totalPrice');
    
    if (cart.length === 0) {
        ordersContent.innerHTML = '<p class="empty-orders">No orders yet</p>';
        totalPriceElement.textContent = '0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="order-item">
                <div class="order-info">
                    <div class="order-name">${item.name}</div>
                    <div class="order-price">₱${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    ordersContent.innerHTML = html;
    totalPriceElement.textContent = total.toFixed(2);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateOrdersCount();
    updateOrdersDisplay();
    saveOrdersToStorage();
}

// Show Product Details
function showProductDetails(productId) {
    const product = productDetails[productId];
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const content = document.getElementById('productDetailsContent');
    
    let materialsList = product.materials.map(material => `<li>${material}</li>`).join('');
    let benefitsList = product.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    
    content.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <div class="detail-price">₱${product.price.toFixed(2)}</div>
            <p class="product-description">${product.description}</p>
            
            <h4>Key Materials:</h4>
            <ul class="product-details-list">
                ${materialsList}
            </ul>
            
            <h4>Benefits:</h4>
            <ul class="product-details-list">
                ${benefitsList}
            </ul>
            
            <div class="product-details-list">
                <li><span class="detail-label">Size:</span> <span class="detail-value">${product.size}</span></li>
                <li><span class="detail-label">Usage:</span> <span class="detail-value">${product.usage}</span></li>
                <li><span class="detail-label">Skin Type:</span> <span class="detail-value">${product.skinType || product.hairType}</span></li>
                <li><span class="detail-label">Made in:</span> <span class="detail-value">${product.madeIn}</span></li>
                <li><span class="detail-label">Cruelty Free:</span> <span class="detail-value">${product.crueltyFree ? 'Yes' : 'No'}</span></li>
                <li><span class="detail-label">Organic:</span> <span class="detail-value">${product.organic ? 'Yes' : 'No'}</span></li>
                ${product.sulfateFree !== undefined ? `<li><span class="detail-label">Sulfate Free:</span> <span class="detail-value">${product.sulfateFree ? 'Yes' : 'No'}</span></li>` : ''}
            </div>
            
            <button class="add-to-cart-btn" onclick="addToCart('${productId}', '${product.name}', ${product.price}); closeProductDetails();">
                <i class="fas fa-shopping-cart"></i> Add to Cart - ₱${product.price.toFixed(2)}
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close Product Details
function closeProductDetails() {
    document.getElementById('productModal').style.display = 'none';
}

// Proceed to Payment
function proceedToPayment() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    document.getElementById('paymentModal').style.display = 'block';
    document.getElementById('ordersPanel').classList.remove('active');
}

// Select Payment Method
function selectPayment(method) {
    const paymentForm = document.getElementById('paymentForm');
    const methodTitle = document.getElementById('paymentMethodTitle');
    const cardFields = document.getElementById('cardFields');
    
    paymentForm.style.display = 'block';
    
    switch(method) {
        case 'gcash':
            methodTitle.textContent = 'GCash Payment';
            cardFields.style.display = 'none';
            break;
        case 'paymaya':
            methodTitle.textContent = 'PayMaya Payment';
            cardFields.style.display = 'none';
            break;
        case 'card':
            methodTitle.textContent = 'Credit/Debit Card Payment';
            cardFields.style.display = 'block';
            break;
    }
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('checkoutForm').reset();
}

// Handle Payment Form Submission
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (!fullName || !phoneNumber) {
        showNotification('Please fill in all required fields!');
        return;
    }
    
    // Simulate order processing
    processOrder();
});

// Process Order
function processOrder() {
    // Save order to history
    const order = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'Processing'
    };
    
    orders.push(order);
    saveOrdersToStorage();
    
    // Clear cart
    cart = [];
    updateOrdersCount();
    
    // Close payment modal
    closePaymentModal();
    
    // Show success message
    showSuccessMessage();
}

// Show Success Message
function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'block';
}

// Close Success Message
function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        z-index: 5000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Save Orders to Local Storage
function saveOrdersToStorage() {
    localStorage.setItem('jerwinsOrders', JSON.stringify({ cart, orders }));
}

// Load Orders from Local Storage
function loadOrdersFromStorage() {
    const saved = localStorage.getItem('jerwinsOrders');
    if (saved) {
        const data = JSON.parse(saved);
        cart = data.cart || [];
        orders = data.orders || [];
        updateOrdersCount();
    }
}

// Scroll to Categories
function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const paymentModal = document.getElementById('paymentModal');
    
    if (event.target === productModal) {
        closeProductDetails();
    }
    if (event.target === paymentModal) {
        closePaymentModal();
    }
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
