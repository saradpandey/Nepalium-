
const products = {
 "honey-ghee-list": [
  { name: 'Mad honey', price: 500, img: 'https://m.media-amazon.com/images/I/61znwsdQYiS._SL1500_.jpg' },
  { name: 'Clover honey', price: 1200, img: 'https://i.pinimg.com/736x/ff/62/23/ff6223f1540e11e08034218d6eed3125.jpg' },
  { name: 'Rhododendron honey', price: 600, img: 'https://www.emporio1914.it/1337-large_default/rhododendron-honey-organic.jpg' },
  { name: 'Buckwheat honey', price: 1300, img: 'https://i.pinimg.com/736x/ce/7c/2a/ce7c2a361fdebb107212dd38962489b4.jpg' },
  { name: 'Neem Honey', price: 400, img: 'https://i.pinimg.com/736x/e8/8a/2a/e88a2a5780ca2a726052320f944194b9.jpg' },
  { name: 'Sunflower honey', price: 550, img: 'https://i.pinimg.com/736x/32/4f/a7/324fa70b01a07d1427a029072b6b218f.jpg' },
  { name: 'Yak Ghee', price: 580, img: 'https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxWWZUSWM5eDZMLl9TUzQwMF8uanBn.jpg' },
  { name: 'Cow Ghee', price: 620, img: 'https://i.pinimg.com/736x/1f/ff/6e/1fff6ef012b611032177b34742a5bcb8.jpg' },
  { name: 'Buffalo Desi Ghee', price: 1100, img: 'https://i.pinimg.com/736x/fa/28/80/fa28808a5f9ba3d0da28e73ac2d37def.jpg' },
  { name: 'Herbal Infused Ghee', price: 590, img: 'https://www.pureindianfoods.com/cdn/shop/files/ASHG-1.jpg?v=1710786216&width=300' },
  { name: 'Desi Ghee', price: 1400, img: 'https://i.pinimg.com/736x/06/9d/e3/069de3677aae1469ea465457c3cb48ec.jpg' },
  { name: 'Goat Milk Ghee', price: 570, img: 'https://i.pinimg.com/736x/ff/01/1a/ff011a75b12a7a16de26eba18a0d26fc.jpg' }
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
