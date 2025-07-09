
const products = {
 
  "drinks-list": [
  { name: 'Tongba (Hot Millet Beer)', price: 150, img: 'https://nepyork.com/wp-content/uploads/2023/02/Tongba.jpg' },
  { name: 'Chhaang (Himalayan Rice Beer)', price: 80, img: 'https://assets-cdn.kathmandupost.com/uploads/source/news/2020/lifestyle/6-(3).jpg' },
  { name: 'Marpha Apple juice ', price: 90, img: 'https://i.pinimg.com/736x/97/da/b6/97dab6986c27602210cf587336d4ba46.jpg' },
  { name: 'Walnut Milk', price: 200, img: 'https://i.pinimg.com/736x/dd/4d/be/dd4dbea1adb69b90694f484a546f97dd.jpg' },
  { name: 'Junar Juice', price: 140, img: 'https://i.pinimg.com/736x/e5/21/f6/e521f6d4f27b55146b84e2bbf5148b5c.jpg' },
  { name: 'Sugarcane Sugar Tea', price: 130, img: 'https://i.pinimg.com/736x/f0/c9/e6/f0c9e6a15fc597a49251643751ee7a70.jpg' },
  { name: 'Grape Wine', price: 70, img: 'https://i.pinimg.com/736x/74/bd/c7/74bdc788f308509d5a5ad6c8716359b1.jpg' },
  { name: 'Marpha Wine', price: 550, img: 'https://mountainlodgesofnepal.com/wp-content/uploads/2021/09/ex-moksha-apple-brandy-and-moutain-goats-e1631347141780.jpg' },
  { name: 'Hinwa Wine (हिन्वा वाइन)', price: 600, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhGwQ73NIwl3CxDf3sMe52_dZTDHXfL7ZOA&s' },
  { name: 'Yak Wine', price: 650, img: 'https://static.wixstatic.com/media/e37483_7f88546f91ce4c8cb657101b8b2a7454~mv2.jpg/v1/crop/x_0,y_91,w_1536,h_1866/fill/w_320,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/450944325_2922121384596933_2603597181769939396_n_edited.jpg' }
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
