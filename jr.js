// jr.js

// Cart Management
let cart = [];
let orders = [];

// Product details data
const productDetails = {
    soap1: {
        name: "Premium Lavender Soap",
        price: 299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1_YgzDJDMKdiH_Qe8-Ra2twuGi6rBRSnLsrrPdKHEEyZ-WtJ4Bwn1aITCH4UiRrLmmY&usqp=CAU",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpgJXXRyLBVbnvEYQ2rFDCmb9jtkySc1A-_33QquAMWiEDnsHgn6cSGMatDoALpAaVqg&usqp=CAU",
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
        image: "data:image/jpeg;base64,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",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK64_alpn2VsoFe3OkEcXMtqtJEWLY0qIkZlRk3A3dBtim96hx-CsfOnqwZyjSFPvqhCY&usqp=CAU",
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
        image: "data:image/jpeg;base64,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",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMema86XlC5fzT6OhFKvMkIs4ajB04dcb8YKKPtJwxfuawTMgOlhtG5eJherrvmV7Bd-A&usqp=CAU",
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
        image: "data:image/jpeg;base64,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",
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
        image: "data:image/jpeg;base64,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",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4iwJscmE9nqujkDpIImBJHNCiVF-VZ7O0uuUM--7KH5WfZ7v7MoLcb-TInVkjmB1N_4&usqp=CAU",
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
        image: "data:image/jpeg;base64,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",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKCC7byBjVR3F3LgEySaI_cwqmLHKfQ9gciDIOs3UkgLp5i45Cb__ssPydwtJhOwCgXE&usqp=CAU",
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
        image: "https://thebodyshop.com.ph/cdn/shop/files/Tea_Tree_Purify_Shampoo_400ml_5aca95a0-684f-4910-a982-88a79504c2a5_1024x1024@2x.jpg?v=1756669245",
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
        image: "data:image/jpeg;base64,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",
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
        image: "data:image/jpeg;base64,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",
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
