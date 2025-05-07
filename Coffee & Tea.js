
const products = {
  
"coffee-tea-list": [
  { name: 'Black Coffee', price: 200, img: 'https://source.unsplash.com/200x200/?black-coffee' },
  { name: 'Espresso', price: 250, img: 'https://source.unsplash.com/200x200/?espresso' },
  { name: 'Cappuccino', price: 300, img: 'https://source.unsplash.com/200x200/?cappuccino' },
  { name: 'Latte', price: 280, img: 'https://source.unsplash.com/200x200/?latte' },
  { name: 'Green Tea', price: 180, img: 'https://source.unsplash.com/200x200/?green-tea' },
  { name: 'Masala Chai', price: 150, img: 'https://source.unsplash.com/200x200/?masala-chai' },
  { name: 'Lemon Tea', price: 160, img: 'https://source.unsplash.com/200x200/?lemon-tea' },
  { name: 'Herbal Tea', price: 200, img: 'https://source.unsplash.com/200x200/?herbal-tea' },
  { name: 'Iced Coffee', price: 220, img: 'https://source.unsplash.com/200x200/?iced-coffee' },
  { name: 'Turmeric Latte', price: 260, img: 'https://source.unsplash.com/200x200/?turmeric-latte' },
  { name: 'Cold Brew', price: 240, img: 'https://source.unsplash.com/200x200/?cold-brew' },
  { name: 'Butter Tea', price: 230, img: 'https://source.unsplash.com/200x200/?butter-tea' }
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
