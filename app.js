// Variables Globales
const API_URL = 'https://fakestoreapi.com/products';
let products = [];
let cart = JSON.parse(localStorage.getItem('shopMasterCart')) || [];

// Elementos del DOM
const productGrid = document.getElementById('productGrid');
const loadingIndicator = document.getElementById('loading');
const cartBadge = document.getElementById('cartBadge');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const btnCheckout = document.getElementById('btnCheckout');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const searchInput = document.getElementById('searchInput');

// Modal Elements
const modalProductTitle = document.getElementById('modalProductTitle');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalQuantity = document.getElementById('modalQuantity');
const btnMinusModal = document.getElementById('btnMinusModal');
const btnPlusModal = document.getElementById('btnPlusModal');
const btnAddToCartModal = document.getElementById('btnAddToCartModal');
let currentProductInModal = null;

// Checkout Elements
const checkoutForm = document.getElementById('checkoutForm');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    updateCartUI();

    // Evento Búsqueda Dinámica
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filteredProducts = products.filter(p => p.title.toLowerCase().includes(term));
            renderProducts(filteredProducts);
        });
    }

    // Eventos Modal Cantidad
    btnMinusModal.addEventListener('click', () => {
        let val = parseInt(modalQuantity.value);
        if (val > 1) modalQuantity.value = val - 1;
    });
    btnPlusModal.addEventListener('click', () => {
        let val = parseInt(modalQuantity.value);
        modalQuantity.value = val + 1;
    });

    // Agregar desde Modal
    btnAddToCartModal.addEventListener('click', () => {
        const qty = parseInt(modalQuantity.value);
        addToCart(currentProductInModal, qty);
        const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        modal.hide();
    });

    // Checkout Form
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processPayment();
    });
});

// Función para mostrar alertas Toast
function showToast(message, type = 'success') {
    const toastEl = document.getElementById('liveToast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    
    toastEl.className = `toast align-items-center text-white border-0 bg-${type}`;
    
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// Fetch Productos
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        productGrid.innerHTML = `<div class="alert alert-danger text-center w-100">Error al cargar los productos. Intenta de nuevo más tarde.</div>`;
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

// Renderizar Productos
function renderProducts(itemsToRender = products) {
    productGrid.innerHTML = '';
    
    if (itemsToRender.length === 0) {
        productGrid.innerHTML = `<div class="col-12 text-center text-muted my-5"><i class="fas fa-search fs-1 mb-3 text-secondary"></i><h5>No se encontraron productos.</h5></div>`;
        return;
    }

    itemsToRender.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-dark">${product.title}</h5>
                    <p class="card-text description">${product.description}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="fw-bold price-tag">$${product.price.toFixed(2)}</span>
                        <button class="btn btn-outline-primary btn-sm btn-ver-mas" data-id="${product.id}">
                            <i class="fas fa-eye"></i> Ver más
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.appendChild(col);
    });

    // Añadir eventos a los botones "Ver más"
    document.querySelectorAll('.btn-ver-mas').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
}

// Abrir Modal de Producto
function openProductModal(id) {
    currentProductInModal = products.find(p => p.id === id);
    if (!currentProductInModal) return;

    modalProductTitle.textContent = currentProductInModal.title;
    modalProductImage.src = currentProductInModal.image;
    modalProductDescription.textContent = currentProductInModal.description;
    modalProductCategory.textContent = currentProductInModal.category;
    modalProductPrice.textContent = currentProductInModal.price.toFixed(2);
    modalQuantity.value = 1;

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Agregar al Carrito
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart();
    updateCartUI();
    showToast(`🛒 ${product.title} agregado al carrito.`);
}

// Actualizar Cantidad en Carrito
function updateCartQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Eliminar del Carrito
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
    showToast(`🗑️ Producto eliminado del carrito.`, 'danger');
}

// Guardar Carrito en LocalStorage
function saveCart() {
    localStorage.setItem('shopMasterCart', JSON.stringify(cart));
}

// Actualizar UI del Carrito
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.appendChild(emptyCartMessage);
        btnCheckout.disabled = true;
    } else {
        btnCheckout.disabled = false;
        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item d-flex align-items-center py-2 border-bottom';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img me-3 rounded">
                <div class="flex-grow-1">
                    <h6 class="mb-0 cart-item-title fw-bold" title="${item.title}">${item.title}</h6>
                    <small class="text-success fw-bold">$${item.price.toFixed(2)}</small>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-cart-minus" data-id="${item.id}">-</button>
                    <span class="fw-bold">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-cart-plus" data-id="${item.id}">+</button>
                    <button class="btn btn-sm btn-outline-danger py-0 px-2 ms-2 btn-cart-remove" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        // Eventos botones carrito
        document.querySelectorAll('.btn-cart-minus').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartQuantity(parseInt(e.currentTarget.getAttribute('data-id')), -1));
        });
        document.querySelectorAll('.btn-cart-plus').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartQuantity(parseInt(e.currentTarget.getAttribute('data-id')), 1));
        });
        document.querySelectorAll('.btn-cart-remove').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(parseInt(e.currentTarget.getAttribute('data-id'))));
        });
    }

    cartBadge.textContent = totalItems;
    cartTotalElement.textContent = totalPrice.toFixed(2);
}

// Procesar Pago y Generar PDF
function processPayment() {
    const customerName = document.getElementById('ccName').value;
    
    // Cerrar modal checkout
    const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    modal.hide();

    // Generar Ticket PDF
    generateThermalReceiptPDF(customerName);

    // Vaciar carrito
    cart = [];
    saveCart();
    updateCartUI();

    // Cerrar offcanvas
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
    if(offcanvas) offcanvas.hide();

    showToast('✅ ¡Compra realizada con éxito! Descargando ticket...', 'success');
    checkoutForm.reset();
}

// Generar Ticket Térmico con jsPDF (Fuente Monoespaciada)
function generateThermalReceiptPDF(customerName) {
    const { jsPDF } = window.jspdf;
    
    // Configurar PDF para rollo térmico (ej. 80mm ancho, largo dinámico)
    // 80mm de ancho. Calculamos alto en base a items
    const width = 80; 
    const baseHeight = 90; // Cabecera y pie
    const itemHeight = 10;
    const height = baseHeight + (cart.length * itemHeight);
    
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [width, height]
    });

    // Configuración de fuente monoespaciada tipo ticket
    doc.setFont("courier", "normal");
    doc.setFontSize(10);
    
    let y = 10;
    const margin = 5;

    // Centrar texto
    const centerText = (text, yPos) => {
        const textWidth = doc.getTextWidth(text);
        doc.text(text, (width - textWidth) / 2, yPos);
    };

    // Cabecera
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    centerText("SHOPMASTER S.R.L.", y);
    y += 6;
    doc.setFontSize(9);
    doc.setFont("courier", "normal");
    centerText("El mejor E-Commerce", y);
    y += 5;
    centerText("RNC: 123456789", y);
    y += 6;
    
    doc.text("-----------------------------------", margin, y);
    y += 5;
    
    // Datos Compra
    const date = new Date();
    doc.text(`FECHA: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`, margin, y);
    y += 5;
    doc.text(`CLIENTE: ${customerName.substring(0,20).toUpperCase()}`, margin, y);
    y += 6;

    doc.text("-----------------------------------", margin, y);
    y += 6;

    // Productos
    doc.setFont("courier", "bold");
    doc.text("CANT  DESCRIPCION      SUBTOTAL", margin, y);
    doc.setFont("courier", "normal");
    y += 6;

    let total = 0;
    cart.forEach(item => {
        const qty = item.quantity.toString().padEnd(4, ' ');
        // Acortar nombre
        let title = item.title.substring(0, 14).padEnd(14, ' ').toUpperCase();
        const subtotal = (item.quantity * item.price).toFixed(2);
        const subtotalStr = `$${subtotal}`.padStart(10, ' ');
        
        doc.text(`${qty} ${title} ${subtotalStr}`, margin, y);
        y += 5;
        total += item.quantity * item.price;
    });

    y += 2;
    doc.text("-----------------------------------", margin, y);
    y += 6;

    // Total
    doc.setFont("courier", "bold");
    doc.setFontSize(12);
    const totalStr = `$${total.toFixed(2)}`;
    doc.text("TOTAL:", margin, y);
    doc.text(totalStr, width - margin - doc.getTextWidth(totalStr), y);
    
    y += 8;
    doc.setFontSize(9);
    doc.setFont("courier", "normal");
    doc.text("-----------------------------------", margin, y);
    y += 6;
    centerText("¡GRACIAS POR SU COMPRA!", y);
    y += 5;
    centerText("Vuelva pronto", y);

    // Guardar
    doc.save(`Ticket_Compra_ShopMaster_${date.getTime()}.pdf`);
}
