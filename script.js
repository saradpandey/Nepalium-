// Initialize Swiper for Hero Slider
const heroSwiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Product Data
const customProducts = [
{ name: 'Mountain Honey', price: 620, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6JAASWTCk-B-3uFEA8b2UjXCeyHfoCBwMw&s',reviews: 5 },
  { name: 'Village Ghee', price: 1100, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbm9LQ-WyppHgsl4bzoBcsXbJt6WB7IWlVw&s',reviews: 4  },
  { name: 'Herbal Honey', price: 590, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5zLVEDwt-jqfXUWSIgzo-x6GHnq-bRTmcQ&s' ,reviews: 3 },
  { name: 'A2 Desi Ghee', price: 1400, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqfelACnJbkSdLHBrJFiCbWgAGDF0SLwIcg&s' ,reviews: 4 },
  { name: 'Jamun Honey', price: 570, img: 'https://cdn.neosanjivani.com/wp-content/uploads/2022/06/4.jpg',reviews: 5  },
    { name: 'Grape Wine', price: 70, img: 'https://i.pinimg.com/736x/74/bd/c7/74bdc788f308509d5a5ad6c8716359b1.jpg',reviews: 4  },
  { name: 'Marpha Wine', price: 550, img: 'https://mountainlodgesofnepal.com/wp-content/uploads/2021/09/ex-moksha-apple-brandy-and-moutain-goats-e1631347141780.jpg' ,reviews: 3},
  { name: 'Hinwa Wine (हिन्वा वाइन)', price: 600, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhGwQ73NIwl3CxDf3sMe52_dZTDHXfL7ZOA&s',reviews: 5  },
  { name: 'Yak Wine', price: 650, img: 'https://static.wixstatic.com/media/e37483_7f88546f91ce4c8cb657101b8b2a7454~mv2.jpg/v1/crop/x_0,y_91,w_1536,h_1866/fill/w_320,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/450944325_2922121384596933_2603597181769939396_n_edited.jpg' ,reviews: 5 }
];

// Swiper instance variable for custom slider
let customSwiperInstance = null;

// Render Custom Swiper Slider
function renderCustomSlider(data = customProducts) {
  const wrapper = document.getElementById('custom-product-list');
  wrapper.innerHTML = '';

  data.forEach(product => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide custom-slide';
    slide.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Rs. ${product.price}</p>
        <div class="star-rating">
          ${'★'.repeat(product.reviews)}${'☆'.repeat(5 - product.reviews)}
        </div>
        <div class="button-container">
          <button class="btn btn-primary addcart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
          <button class="btn btn-success" onclick="buyNow('${product.name}', ${product.price})">Buy Now</button>
        </div>
      </div>`;
    wrapper.appendChild(slide);
  });

  if (customSwiperInstance) {
    customSwiperInstance.destroy(true, true);
  }

  customSwiperInstance = new Swiper('.customSwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      prevEl: '.custom-prev',
      nextEl: '.custom-next'
    },
    breakpoints: {
      1200: { slidesPerView: 4 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      375: { slidesPerView: 1 },
       320: { slidesPerView: 1 }
    }
  });

  document.querySelectorAll('.custom-slide').forEach(s => s.classList.add('show'));
}

// Add to Cart Functionality with localStorage persistence
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay(cart);

}

// Update cart count and total amount display in header (assumes .cart-count and .cart-total elements exist)
function updateCartDisplay(cart) {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  document.querySelectorAll('.cart-count').forEach(el => el.textContent = totalCount);
  document.querySelectorAll('.cart-total').forEach(el => el.textContent = `Rs. ${totalAmount}`);
}

// Buy Now handler
function buyNow(name, price) {
  alert(`Proceeding to checkout for ${name} - Rs. ${price}`);
}

// Listen for add to cart button clicks
document.addEventListener('click', e => {
  if (e.target.classList.contains('addcart')) {
    const name = e.target.dataset.name;
    const price = +e.target.dataset.price;
    addToCart(name, price);
  }
});

// Products list for other sections (vegetables-fruits-list)
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

// Render product cards for sections, highlighting searched product if needed
function renderProducts(highlight = "") {
  Object.keys(products).forEach(sectionId => {
    const row = document.getElementById(sectionId);
    row.innerHTML = '';

    products[sectionId].forEach(product => {
      const isHighlight = product.name.toLowerCase() === highlight.toLowerCase();
      const highlightClass = isHighlight ? 'border-success text-success' : '';

      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
      col.innerHTML = `
        <div class="card product-card ${highlightClass}">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title ${highlightClass}">${product.name}</h5>
            <p class="card-text ${highlightClass}">Rs. ${product.price}</p>
            <div class="star-rating">
              ${'★'.repeat(product.reviews)}${'☆'.repeat(5 - product.reviews)}
            </div>
            <button class="btn btn-primary mb-2 w-100" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            <button class="btn btn-success w-100" onclick="buyNow('${product.name}', ${product.price})">Buy Now</button>
          </div>
        </div>`;
      row.appendChild(col);
    });
  });
}

// Search functionality for product suggestions and highlight on click
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
  const seen = new Set();

  const filteredProducts = allProducts.filter(product => {
    const lowerName = product.name.toLowerCase();
    if (lowerName.includes(searchTerm) && !seen.has(lowerName)) {
      seen.add(lowerName);
      return true;
    }
    return false;
  });

  if (filteredProducts.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'list-group-item suggestion-item';
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

// On page load, render slider and products, update cart count & total
window.onload = () => {
  renderCustomSlider();
  renderProducts();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartDisplay(cart);
};
