const products = {

 "vegetables-fruits-list": [
  { name: 'Kafal(Bayberry)', price: 40, img: 'https://i.pinimg.com/736x/e2/c9/c8/e2c9c883a0b93d927023434a4330e9b2.jpg' },
  { name: 'Aiselu(Himalayan Raspberry)', price: 60, img: 'https://i.pinimg.com/736x/2b/24/66/2b2466fcb3432e40cb3e58e0a1b5748b.jpg' },
  { name: 'Haluwabed(Persimmon)', price: 30, img: 'https://i.pinimg.com/736x/4b/e8/c6/4be8c679c1721dc02fc12f543aee7f5f.jpg' },
  { name: 'Sitafal(Custard Apple', price: 120, img: 'https://i.pinimg.com/736x/72/e4/20/72e420d88713ec6147e4e0148395ea61.jpg' },
  { name: 'Bhogate (Pomelo – Citrus maxima', price: 80, img: 'https://i.pinimg.com/736x/bf/18/05/bf1805fcbbe1aba499229216952c47c4.jpg' },
  { name: 'Koirala ko phool(Mountain Ebony)', price: 50, img: 'https://i.pinimg.com/736x/08/76/e8/0876e871a4ee0b569afaa83bbdc69076.jpg' },
  { name: 'Gundruk', price: 150, img: 'https://i.pinimg.com/736x/b0/98/86/b09886fd2d6ea5edfccff712b7edefae.jpg' },
  { name: 'Yam', price: 100, img: 'https://i.pinimg.com/736x/52/a5/a3/52a5a37cc71b0ffe9ab95a4969209459.jpg' },
  { name: 'Dried Tomato', price: 70, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5pZ7J9fs2pTAxYvAZo7X7qVDDmYtWmcL4w&s' },
  { name: 'Chayote(Iskus)', price: 130, img: 'https://i.pinimg.com/736x/20/79/31/2079314e5274689e49047372729af47d.jpg' },
  { name: 'Dried Bamboo Shoot (Tama)', price: 45, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsxYkdgS2fMPsgJyTW5kGyIsTIMySt1ztIw&s' },
  { name: ' Dried Wild Mushroom ', price: 90, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9iWNtHMdH-_XSAfjjcBTpndfg0vO7JHjRA&s' }
]

 
};


function renderProducts(highlight = "") {
  let targetElement = null;

  Object.keys(products).forEach(sectionId => {
    const row = document.getElementById(sectionId);
    row.innerHTML = '';

    products[sectionId].forEach(product => {
      const isHighlight = (product.name.toLowerCase() === highlight.toLowerCase());
      const highlightClass = isHighlight ? 'border-success text-success' : '';

      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
      col.innerHTML = `
        <div class="card product-card ${highlightClass}">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title ${highlightClass}">${product.name}</h5>
            <p class="card-text ${highlightClass}">Rs. ${product.price}</p>
            <div class="stars mb-3">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
            <button class="btn btn-primary mb-2 w-100" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="btn btn-success w-100">Buy Now</button>
          </div>
        </div>
      `;
      row.appendChild(col);

      if (isHighlight && !targetElement) {
        targetElement = row.parentElement.previousElementSibling;
      }
    });
  });

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function addToCart(productId) {
  const allProducts = Object.values(products).flat();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartSummary();
}

function updateCartSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.querySelectorAll(".cart-count").forEach(el => el.textContent = totalCount);
  document.querySelectorAll(".cart-total").forEach(el => el.textContent = totalPrice);
}

// Search Suggestion System
const searchBar = document.getElementById('searchBar');
const suggestionsBox = document.getElementById('suggestions');

searchBar.addEventListener('input', function () {
  const searchTerm = this.value.trim().toLowerCase();
  suggestionsBox.innerHTML = '';

  if (searchTerm === '') {
    suggestionsBox.style.display = 'none';
    renderProducts();
    return;
  }

  const allProducts = Object.values(products).flat();
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (filteredProducts.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.textContent = product.name;
    div.addEventListener('click', () => {
      searchBar.value = product.name;
      suggestionsBox.style.display = 'none';
      renderProducts(product.name);
    });
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = 'block';
});

// Load products and cart count on page load
window.addEventListener("load", () => {
  renderProducts();
  updateCartSummary();
});
