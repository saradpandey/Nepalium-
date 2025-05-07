
const products = {
  "vegetables-fruits-list": [
    { name: 'Tomato', price: 40, img: 'https://img.freepik.com/free-photo/close-up-view-tomatoes-wooden-table_141793-10767.jpg?semt=ais_hybrid&w=740' },
    { name: 'Carrot', price: 60, img: 'https://img.freepik.com/free-photo/close-up-view-tomatoes-wooden-table_141793-10767.jpg?semt=ais_hybrid&w=740' },
    { name: 'Potato', price: 30, img: 'https://source.unsplash.com/200x200/?potato' },
    { name: 'Apple', price: 120, img: 'https://source.unsplash.com/200x200/?apple' },
    { name: 'Banana', price: 80, img: 'https://source.unsplash.com/200x200/?banana' },
    { name: 'Cucumber', price: 50, img: 'https://source.unsplash.com/200x200/?cucumber' },
    { name: 'Mango', price: 150, img: 'https://source.unsplash.com/200x200/?mango' },
    { name: 'Orange', price: 100, img: 'https://source.unsplash.com/200x200/?orange' },
    { name: 'Onion', price: 70, img: 'https://source.unsplash.com/200x200/?onion' },
    { name: 'Mango', price: 150, img: 'https://source.unsplash.com/200x200/?mango' },
    { name: 'Orange', price: 100, img: 'https://source.unsplash.com/200x200/?orange' },
    { name: 'Onion', price: 70, img: 'https://source.unsplash.com/200x200/?onion' },
  ],
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
    { name: 'Neem Honey', price: 580, img: 'https://source.unsplash.com/200x200/?neem-honey' },
    { name: 'Mountain Honey', price: 620, img: 'https://source.unsplash.com/200x200/?mountain-honey' },
    { name: 'Village Ghee', price: 1100, img: 'https://source.unsplash.com/200x200/?village-ghee' },
  ],
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
    { name: 'Brahmi', price: 260, img: 'https://source.unsplash.com/200x200/?brahmi' },
    { name: 'Giloy Juice', price: 320, img: 'https://source.unsplash.com/200x200/?giloy' },
    { name: 'Moringa Powder', price: 290, img: 'https://source.unsplash.com/200x200/?moringa' },
  ],
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
    { name: 'Orange Juice', price: 140, img: 'https://source.unsplash.com/200x200/?orange-juice' },
    { name: 'Soft Drink', price: 130, img: 'https://source.unsplash.com/200x200/?soft-drink' },
    { name: 'Butter Milk', price: 70, img: 'https://source.unsplash.com/200x200/?buttermilk' },
  ],
  "meats-list": [
    { name: 'Buff Sukuti', price: 700, img: 'https://source.unsplash.com/200x200/?meat' },
    { name: 'Chicken Sukuti', price: 800, img: 'https://source.unsplash.com/200x200/?chicken' },
    { name: 'Dry Fish', price: 600, img: 'https://source.unsplash.com/200x200/?dry-fish' },
    { name: 'Goat Sukuti', price: 900, img: 'https://source.unsplash.com/200x200/?goat' },
    { name: 'Pork Sukuti', price: 750, img: 'https://source.unsplash.com/200x200/?pork' },
    { name: 'Duck Sukuti', price: 850, img: 'https://source.unsplash.com/200x200/?duck' },
    { name: 'Beef Sukuti', price: 950, img: 'https://source.unsplash.com/200x200/?beef' },
    { name: 'Fish Sukuti', price: 700, img: 'https://source.unsplash.com/200x200/?fish' },
    { name: 'Lamb Sukuti', price: 920, img: 'https://source.unsplash.com/200x200/?lamb' },
    { name: 'Beef Sukuti', price: 950, img: 'https://source.unsplash.com/200x200/?beef' },
    { name: 'Fish Sukuti', price: 700, img: 'https://source.unsplash.com/200x200/?fish' },
    { name: 'Lamb Sukuti', price: 920, img: 'https://source.unsplash.com/200x200/?lamb' },
  ],
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
    { name: 'Lemon Tea', price: 160, img: 'https://source.unsplash.com/200x200/?lemon-tea' },
    { name: 'Herbal Tea', price: 200, img: 'https://source.unsplash.com/200x200/?herbal-tea' },
    { name: 'Iced Coffee', price: 220, img: 'https://source.unsplash.com/200x200/?iced-coffee' },
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
