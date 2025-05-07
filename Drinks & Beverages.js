
const products = {
 
  "drinks-list": [
  { name: 'Mango Juice', price: 150, img: 'https://source.unsplash.com/200x200/?juice' },
  { name: 'Green Tea', price: 100, img: 'https://source.unsplash.com/200x200/?green-tea' },
  { name: 'Lemon Water', price: 80, img: 'https://source.unsplash.com/200x200/?lemon-drink' },
  { name: 'Coconut Water', price: 90, img: 'https://source.unsplash.com/200x200/?coconut-water' },
  { name: 'Herbal Juice', price: 200, img: 'https://source.unsplash.com/200x200/?herbal-juice' },
  { name: 'Energy Drink', price: 220, img: 'https://source.unsplash.com/200x200/?energy-drink' },
  { name: 'Orange Juice', price: 140, img: 'https://source.unsplash.com/200x200/?orange-juice' },
  { name: 'Soft Drink', price: 130, img: 'https://source.unsplash.com/200x200/?soft-drink' },
  { name: 'Butter Milk', price: 70, img: 'https://source.unsplash.com/200x200/?buttermilk' },
  { name: 'Hinwa Wine', price: 550, img: 'https://source.unsplash.com/200x200/?wine,bottle,nepal' },
  { name: 'Dadaghare Wine', price: 600, img: 'https://source.unsplash.com/200x200/?red-wine,nepal' },
  { name: 'Marpha Apple Wine', price: 650, img: 'https://source.unsplash.com/200x200/?apple-wine,bottle' }
]


};
let cartCount = 0;
let cartTotal = 0;

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
            <button class="btn btn-primary mb-2 w-100" onclick="addToCart(${product.price})">Add to Cart</button>
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

function addToCart(price) {
  cartCount++;
  cartTotal += price;
  document.getElementById('cart-count').textContent = cartCount;
  document.getElementById('cart-total').textContent = cartTotal;
}

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

renderProducts();
