
const products = {
 
"meats-list": [
  { name: 'Buff Sukuti', price: 700, img: 'https://source.unsplash.com/200x200/?buff-meat' },
  { name: 'Chicken Sukuti', price: 800, img: 'https://source.unsplash.com/200x200/?chicken-meat' },
  { name: 'Dry Fish', price: 600, img: 'https://source.unsplash.com/200x200/?dry-fish' },
  { name: 'Goat Sukuti', price: 900, img: 'https://source.unsplash.com/200x200/?goat-meat' },
  { name: 'Pork Sukuti', price: 750, img: 'https://source.unsplash.com/200x200/?pork-meat' },
  { name: 'Duck Sukuti', price: 850, img: 'https://source.unsplash.com/200x200/?duck-meat' },
  { name: 'Beef Sukuti', price: 950, img: 'https://source.unsplash.com/200x200/?beef-meat' },
  { name: 'Fish Sukuti', price: 700, img: 'https://source.unsplash.com/200x200/?fish-meat' },
  { name: 'Lamb Sukuti', price: 920, img: 'https://source.unsplash.com/200x200/?lamb-meat' },
  { name: 'Turkey Sukuti', price: 870, img: 'https://source.unsplash.com/200x200/?turkey-meat' },
  { name: 'Rabbit Sukuti', price: 880, img: 'https://source.unsplash.com/200x200/?rabbit-meat' },
  { name: 'Quail Sukuti', price: 760, img: 'https://source.unsplash.com/200x200/?quail-meat' }
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
