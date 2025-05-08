// slider js 
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//our  best products
const customProducts = [
  { name: 'Tomato',    price: 40,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 4 },
  { name: 'Cucumber',  price: 50,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 5 },
  { name: 'Carrot',    price: 60,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 3 },
  { name: 'Potato',    price: 30,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 4 },
  { name: 'Apple',     price: 120, img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 4 },
  { name: 'Banana',    price: 80,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 3 },
  { name: 'Mango',     price: 150, img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 5 },
  { name: 'Onion',     price: 35,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 4 },
  { name: 'Eggplant',  price: 70,  img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 2 },
  { name: 'Cauliflower', price: 90, img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80', reviews: 4 }
];

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

  // initialize only THIS slider
  const sliderEl = document.querySelector('.customSwiper');
  const prevBtn  = document.querySelector('.custom-prev');
  const nextBtn  = document.querySelector('.custom-next');

  new Swiper(sliderEl, {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: { prevEl: prevBtn, nextEl: nextBtn },
    breakpoints: {
      1200: { slidesPerView: 4 },
      768:  { slidesPerView: 2 },
      576:  { slidesPerView: 1 }
    },
    on: {
      slideChangeTransitionEnd: () =>
        document.querySelectorAll('.custom-slide').forEach(s => s.classList.add('show'))
    }
  });

  // reveal card-body after initial render
  setTimeout(() => {
    document.querySelectorAll('.custom-slide').forEach(s => s.classList.add('show'));
  }, 300);

  // touch-active class for mobile
  document.querySelectorAll('.custom-slide').forEach(slide => {
    slide.addEventListener('touchstart', () => {
      slide.classList.add('touch-active');
      setTimeout(() => slide.classList.remove('touch-active'), 2000);
    });
  });
}

function buyNow(name, price) {
  alert(`Proceeding to checkout for ${name} - Rs. ${price}`);
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('addcart')) {
    const name  = e.target.dataset.name;
    const price = +e.target.dataset.price;
    // do your “add to cart” logic here…
  }
});

renderCustomSlider();

const products = {

  "vegetables-fruits-list": [
   { name: 'Tomato', price: 40, img: 'https://source.unsplash.com/200x200/?tomato' },
   { name: 'Carrot', price: 60, img: 'https://source.unsplash.com/200x200/?carrot' },
   { name: 'Potato', price: 30, img: 'https://source.unsplash.com/200x200/?potato' },
   { name: 'Apple', price: 120, img: 'https://source.unsplash.com/200x200/?apple' },
   { name: 'Banana', price: 80, img: 'https://source.unsplash.com/200x200/?banana' },
   { name: 'Cucumber', price: 50, img: 'https://source.unsplash.com/200x200/?cucumber' },
   { name: 'Mango', price: 150, img: 'https://source.unsplash.com/200x200/?mango' },
   { name: 'Orange', price: 100, img: 'https://source.unsplash.com/200x200/?orange' },
   { name: 'Onion', price: 70, img: 'https://source.unsplash.com/200x200/?onion' },
   { name: 'Pineapple', price: 130, img: 'https://source.unsplash.com/200x200/?pineapple' },
   { name: 'Spinach', price: 45, img: 'https://source.unsplash.com/200x200/?spinach' },
   { name: 'Broccoli', price: 90, img: 'https://source.unsplash.com/200x200/?broccoli' }
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
               <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
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
 
 renderProducts();
 
