
const products = {
 "honey-ghee-list": [
  { name: 'Organic Honey', price: 500, img: 'https://source.unsplash.com/200x200/?honey' },
  { name: 'Pure Ghee', price: 1200, img: 'https://source.unsplash.com/200x200/?ghee' },
  { name: 'Wild Honey', price: 600, img: 'https://source.unsplash.com/200x200/?wild-honey' },
  { name: 'Buff Ghee', price: 1300, img: 'https://source.unsplash.com/200x200/?buffalo-ghee' },
  { name: 'Mustard Honey', price: 400, img: 'https://source.unsplash.com/200x200/?mustard-honey' },
  { name: 'Flavored Honey', price: 550, img: 'https://source.unsplash.com/200x200/?flavored-honey' },
  { name: 'Neem Honey', price: 580, img: 'https://source.unsplash.com/200x200/?neem-honey' },
  { name: 'Mountain Honey', price: 620, img: 'https://source.unsplash.com/200x200/?mountain-honey' },
  { name: 'Village Ghee', price: 1100, img: 'https://source.unsplash.com/200x200/?village-ghee' },
  { name: 'Herbal Honey', price: 590, img: 'https://source.unsplash.com/200x200/?herbal-honey' },
  { name: 'A2 Desi Ghee', price: 1400, img: 'https://source.unsplash.com/200x200/?desi-ghee' },
  { name: 'Jamun Honey', price: 570, img: 'https://source.unsplash.com/200x200/?jamun-honey' }
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
