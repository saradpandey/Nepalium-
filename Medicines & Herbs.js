
const products = {
 
"medicines-herbs-list": [
  { name: 'Ashwagandha', price: 250, img: 'https://source.unsplash.com/200x200/?ashwagandha' },
  { name: 'Neem Powder', price: 300, img: 'https://source.unsplash.com/200x200/?neem' },
  { name: 'Turmeric Powder', price: 200, img: 'https://source.unsplash.com/200x200/?turmeric' },
  { name: 'Amla Juice', price: 350, img: 'https://source.unsplash.com/200x200/?amla' },
  { name: 'Tulsi Drops', price: 400, img: 'https://source.unsplash.com/200x200/?tulsi' },
  { name: 'Ginger Powder', price: 280, img: 'https://source.unsplash.com/200x200/?ginger' },
  { name: 'Brahmi', price: 260, img: 'https://source.unsplash.com/200x200/?brahmi' },
  { name: 'Giloy Juice', price: 320, img: 'https://source.unsplash.com/200x200/?giloy' },
  { name: 'Moringa Powder', price: 290, img: 'https://source.unsplash.com/200x200/?moringa' },
  { name: 'Shilajit Resin', price: 600, img: 'https://source.unsplash.com/200x200/?shilajit' },
  { name: 'Triphala Powder', price: 310, img: 'https://source.unsplash.com/200x200/?triphala' },
  { name: 'Licorice Root', price: 270, img: 'https://source.unsplash.com/200x200/?licorice' }
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
