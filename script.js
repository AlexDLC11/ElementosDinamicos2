document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartSection = document.getElementById('cart');
  const viewCartButton = document.getElementById('toggle-cart');
  const clearCartButton = document.getElementById('clear-cart');
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const scrollToProductsButton = document.getElementById('scroll-to-top');
  const toggleCartButton = document.getElementById('toggle-cart');
  const productImageContainer = document.querySelector('.product-image-container');
  const productImageContainers = document.querySelectorAll('.product-image-container');
  const cartButton = document.getElementById('toggle-cart');
  const productImages = document.querySelectorAll('.product-image');
  const toggleThemeButton = document.getElementById('toggleTheme');
  const checkoutButton = document.getElementById('checkout');

  // Agregar evento de cierre del carrito con el botón "Cancelar"
  document.addEventListener('keypress', (event) => {
    if (event.key === 'p' || event.key === 'P') {
      const cart = document.getElementById('cart');
      cart.classList.toggle('hidden');
      cart.classList.toggle('visible');
    }
  });

  document.addEventListener('keypress', (event) => {
    if (event.key === 'u' || event.key === 'U') {
      scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });

  productImages.forEach((image) => {
    image.addEventListener('click', () => {
      image.classList.toggle('zoomed');
    });
  });

  cartButton.addEventListener('click', () => {
    cartSection.classList.toggle('visible');
    cartSection.classList.toggle('hidden');
    cartSection.scrollTop = 0; // reset scroll position
    cartSection.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
  });

  productImageContainers.forEach((container) => {
    const productImage = container.querySelector('.product-image');
    container.addEventListener('resize', () => {
      productImage.style.width = '100%';
      productImage.style.height = 'auto';
    });
  });

  toggleCartButton.addEventListener('click', () => {
    cartSection.classList.toggle('visible');
    cartSection.classList.toggle('hidden');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollToProductsButton.classList.remove('hidden');
    } else {
      scrollToProductsButton.classList.add('hidden');
    }
  });

  scrollToProductsButton.addEventListener('click', () => {
    const productsSection = document.getElementById('product-container');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Productos
  const productos = [
    { id: 1, name: "Producto 1", price: 2500, image: "img/Aguila.png", description: "América visita", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 2, name: "Producto 2", price: 2500, image: "img/raya.jpg", description: "Rayado", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 3, name: "Producto 3", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 4, name: "Producto 4", price: 2500, image: "img/Aguila.png", description: "América visita", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 5, name: "Producto 5", price: 2500, image: "img/raya.jpg", description: "Rayado", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 6, name: "Producto 6", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 7, name: "Producto 7", price: 2500, image: "img/Aguila.png", description: "América visita", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 8, name: "Producto 8", price: 2500, image: "img/raya.jpg", description: "Rayado", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 9, name: "Producto 9", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 10, name: "Producto 10", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 11, name: "Producto 11", price: 2500, image: "img/Aguila.png", description: "América visita", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 12, name: "Producto 12", price: 2500, image: "img/raya.jpg", description: "Rayado", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 13, name: "Producto 13", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 14, name: "Producto 14", price: 2500, image: "img/local.png", description: "América local", sizes: ['S', 'M', 'L', 'XL'] },
  ];

  // Generar elementos de productos dinámicamente
  productos.forEach((producto) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.dataset.id = producto.id;
    productDiv.dataset.name = producto.name;
    productDiv.dataset.price = producto.price;

    const productImage = document.createElement('img');
    productImage.src = producto.image;
    productImage.alt = producto.name;
    productImage.style.borderRadius = '10px';
    productImage.className = 'product-image';
    productDiv.appendChild(productImage);

    const productName = document.createElement('h3');
    productName.textContent = producto.description;
    productName.style.color = 'black';
    productDiv.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `Precio: $${producto.price.toFixed(2)}`;
    productPrice.style.fontWeight = 'bolder';
    productPrice.style.fontSize = '12px';
    productPrice.style.color = 'black';
    productDiv.appendChild(productPrice);

    const sizeSelector = document.createElement('select');
    producto.sizes.forEach((size) => {
      const option = document.createElement('option');
      option.textContent = size;
      sizeSelector.appendChild(option);
    });
    productDiv.appendChild(sizeSelector);

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'add-to-cart';
    addToCartButton.textContent = 'Agregar al carrito';
    addToCartButton.style.borderRadius = '10px';
    addToCartButton.addEventListener('click', () => {
      const selectedSize = sizeSelector.value;
      const product = {
        id: productDiv.dataset.id,
        name: productDiv.dataset.name,
        price: productDiv.dataset.price,
        image: productDiv.querySelector('.product-image').src,
        size: selectedSize,
      };
      addToCart(product);
    });
    productDiv.appendChild(addToCartButton);

    const viewDetailsButton = document.createElement('button');

    let productDetailsVisible = false;
    let productDetailsElement;

    viewDetailsButton.addEventListener('click', () => {
      if (!productDetailsElement) {
        productDetailsElement = document.createElement('div');
        productDetailsElement.className = 'product-details';

        const sizes = ['S', 'M', 'L', 'XL'];
        sizes.forEach((size) => {
          const sizeElement = document.createElement('p');
          sizeElement.textContent = `Talla ${size}`;
          productDetailsElement.appendChild(sizeElement);
        });
      }

      if (!productDetailsVisible) {
        productDiv.appendChild(productDetailsElement);
        productDetailsVisible = true;
      } else {
        productDiv.removeChild(productDetailsElement);
        productDetailsVisible = false;
      }
    });

    document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const selectedProduct = document.querySelector('.product.selected');
        if (selectedProduct) {
          toggleProductDetails(selectedProduct);
        }
      }
    });

    document.getElementById('product-container').appendChild(productDiv);
  });

  // Cargar carro desde localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartDisplay() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.style.color = 'black';
      li.className = 'cart-item';

      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.name;
      image.className = 'cart-item-image';
      li.appendChild(image);

      const details = document.createElement('div');
      details.innerHTML = `<p>${item.name} - Talla ${item.size} - $${item.price}</p>`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.style.borderRadius = '20px';
      removeButton.className = 'remove-from-cart';
      removeButton.addEventListener('click', () => {
        removeFromCart(index);
      });
      details.appendChild(removeButton);

      const quantityControls = document.createElement('div');
      quantityControls.className = 'quantity-controls';

      const decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.addEventListener('click', () => {
        decreaseQuantity(index);
      });
      quantityControls.appendChild(decreaseButton);

      const quantityDisplay = document.createElement('span');
      quantityDisplay.textContent = item.quantity;
      quantityControls.appendChild(quantityDisplay);

      const increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.addEventListener('click', () => {
        increaseQuantity(index);
      });
      quantityControls.appendChild(increaseButton);

      details.appendChild(quantityControls);
      li.appendChild(details);
      cartItems.appendChild(li);

      total += parseFloat(item.price) * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
  }

  function addToCart(product) {
    const existingIndex = cart.findIndex((item) => item.id === product.id && item.size === product.size);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    $('#cart-cleared-modal').modal('show');
  }

  function increaseQuantity(index) {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDisplay();
    } else {
      removeFromCart(index);
    }
  }

  viewCartButton.addEventListener('click', () => {
    cartSection.classList.toggle('visible');
    cartSection.classList.toggle('hidden');
  });

  clearCartButton.addEventListener('click', clearCart);

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
      const productElement = e.target.closest('.product');
      const product = {
        id: productElement.dataset.id,
        name: productElement.dataset.name,
        price: productElement.dataset.price,
        image: productElement.querySelector('.product-image').src,
        size: productElement.querySelector('select').value,
      };
      addToCart(product);
      $('#added-to-cart-modal').modal('show');
    });
  });

  function closeModalOnEnter(event) {
    if (event.key === 'Enter') {
      $('.modal.show').modal('hide');
    }
  }

  checkoutButton.addEventListener('click', () => {
    clearCart();
    $('#payment-success-modal').modal('show');
  });

  $('#added-to-cart-modal, #cart-cleared-modal').on('shown.bs.modal', function () {
    document.addEventListener('keydown', closeModalOnEnter);
  });

  $('#added-to-cart-modal, #cart-cleared-modal').on('hidden.bs.modal', function () {
    document.removeEventListener('keydown', closeModalOnEnter);
  });

  updateCartDisplay();
});
