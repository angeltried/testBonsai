
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  sessionStorage.clear();
}


let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: 'Puppy Chow 1/4oz',
    tag: 'Puppychow',
    price: 100,
    inCart: 0,
  },

  {
    name: 'Tropical Cherries 1/2oz',
    tag: 'Tropicanacherry',
    price: 130,
    inCart: 0
  },
  {
    name: 'Pure Michigan 1/2oz',
    tag: 'Puremichigan',
    price: 120,
    inCart: 0
  },
  {
    name: 'Zour Milk 1/2oz',
    tag: 'Zourmilk',
    price: 120,
    inCart: 0
  },
  {
    name: 'Strawberry Cheesecake 1/2oz',
    tag: 'Strawberrycheesecake',
    price: 120,
    inCart: 0
  },
  {
    name: 'Cherry Payton 1/2oz',
    tag: 'Cherrypayton',
    price: 120,
    inCart: 0
  },
  {
    name: 'Purple Octane 1/2oz',
    tag: 'Purpleoctane',
    price: 120,
    inCart: 0
  },
  {
    name: 'Zlushie 1/2oz',
    tag: 'Zlushies',
    price: 120,
    inCart: 0
  },
  {
    name: 'Strawberry Runtz 1/2oz',
    tag: 'Strawberryruntz',
    price: 120,
    inCart: 0
  },
  {
    name: 'Animal Mints 1/2oz',
    tag: 'Animalmints',
    price: 110,
    inCart: 0
  },
  {
    name: 'Oreos 1/2oz',
    tag: 'oreos',
    price: 110,
    inCart: 0
  },
  {
    name: 'Pop Rocks 1/2oz',
    tag: 'PopRocks',
    price: 110,
    inCart: 0
  },
  {
    name: 'Truffles 1/2oz',
    tag: 'Truffles',
    price: 110,
    inCart: 0
  },
  {
    name: 'Cheetah Piss 1/2oz',
    tag: 'CheetahPiss',
    price: 110,
    inCart: 0
  },
  {
    name: 'RZA 1/2oz',
    tag: 'RZA',
    price: 110,
    inCart: 0
  },
  {
    name: 'Lava Cake 1/2oz',
    tag: 'Lavacake',
    price: 100,
    inCart: 0
  },
  {
    name: 'Birthday Cake 1/2oz',
    tag: 'Birthdaycake',
    price: 100,
    inCart: 0
  },
  {
    name: 'Blue Diesel 1/2oz',
    tag: 'Bluedieselcomingsoon',
    price: 100,
    inCart: 0
  },
  {
    name: 'Jelly Belly 1/2oz',
    tag: 'jellybelly',
    price: 100,
    inCart: 0
  },
  {
    name: 'Blue Guava 1/2oz',
    tag: 'Blueguava',
    price: 100,
    inCart: 0
  },
  {
    name: 'Biscotti 1/2oz',
    tag: 'Biscotti',
    price: 100,
    inCart: 0
  },
  {
    name: 'Zpie 1/2oz',
    tag: 'Zpie',
    price: 100,
    inCart: 0
  },
  {
    name: 'Jellybean 1/2oz',
    tag: 'Jellybean',
    price: 90,
    inCart: 0
  },
  {
    name: 'Black Cherry Cake 1/2oz',
    tag: 'Blackcherrycake',
    price: 90,
    inCart: 0
  },
  {
    name: 'Gumbo 1/2oz',
    tag: 'Gumbo',
    price: 90,
    inCart: 0
  },
  {
    name: 'Dosilato 1/2oz',
    tag: 'Dosilato',
    price: 90,
    inCart: 0
  },
  {
    name: 'Cake Pop 1/2oz',
    tag: 'Cakepop',
    price: 90,
    inCart: 0
  },
  {
    name: 'Tarts 1/2oz',
    tag: 'Tarts',
    price: 90,
    inCart: 0
  },
  {
    name: 'Area 41 1/2oz',
    tag: 'Area41',
    price: 90,
    inCart: 0
  },
  {
    name: 'Sherbet Cake 1/2oz',
    tag: 'Sherbetcake',
    price: 90,
    inCart: 0
  },
  {
    name: 'Frosted FLakes 1/2oz',
    tag: 'Frostedflakescomingsoon',
    price: 80,
    inCart: 0
  },
  {
    name: 'Ghostface 1/2oz',
    tag: 'Ghostface',
    price: 80,
    inCart: 0
  },
  {
    name: 'Gelato 1/2oz',
    tag: 'Gelato',
    price: 80,
    inCart: 0
  },
  {
    name: 'Triangle Mintz 1/2oz',
    tag: 'Trianglemintzcomingsoon',
    price: 60,
    inCart: 0
  },
  {
    name: 'Hash Live Rosin 1g',
    tag: 'Hashliverosincomingsoon',
    price: 40,
    inCart: 0
  },
  {
    name: 'Gold Line Rosin 1g',
    tag: 'Goldline',
    price: 40,
    inCart: 0
  },
  {
    name: '710 Labs Rosin 2g',
    tag: '710rosin',
    price: 160,
    inCart: 0
  },
  {
    name: 'Tier 1 Rosin 2g',
    tag: 'Tier1',
    price: 130,
    inCart: 0
  },
  {
    name: 'Sauced Diamond 1g',
    tag: 'Sauceddiamondscomingsoon',
    price: 40,
    inCart: 0
  },
  {
    name: 'Papaya Delight 1/2oz',
    tag: 'Papayadelight',
    price: 125,
    inCart: 0
  },
  {
    name: 'Peach Cobbler 7g',
    tag: 'Peachcobbler',
    price: 100,
    inCart: 0
  },
  {
    name: 'Crumble 1/2oz',
    tag: 'Crumble',
    price: 100,
    inCart: 0
  },
  {
    name: 'Sugar Wax 1/2oz',
    tag: 'Sugarwax',
    price: 100,
    inCart: 0
  },
  {
    name: 'Hashhole Pre-roll',
    tag: 'Hashholepreroll',
    price: 100,
    inCart: 0
  },
  {
    name: 'Bonsai Disposable 1G',
    tag: 'Bonsaidisposable',
    price: 30,
    inCart: 0
  },
  {
    name: '200mg Live Rosin Gummies',
    tag: 'Gummies',
    price: 25,
    inCart: 0
  },
  {
    name: '100mg Live Resin Gummies',
    tag: '100mgcomingsoon',
    price: 20,
    inCart: 0
  },
  {
    name: 'Rso 1ml',
    tag: 'Rso1ml',
    price: 60,
    inCart: 0
  },
  {
    name: 'Rso 2ml',
    tag: 'Rso2ml',
    price: 120,
    inCart: 0
  },
  {
    name: 'Rso 5ml',
    tag: 'Rso5ml',
    price: 280,
    inCart: 0
  },
  {
    name: 'Rso 10ml',
    tag: 'Rso10ml',
    price: 550,
    inCart: 0
  },
  {
    name: 'Indigo Chocolate',
    tag: 'Mushroomchocolate',
    price: 20,
    inCart: 0
  },
  {
    name: 'Indigo Chocolate 2 pack',
    tag: 'Mushroomchocolate2',
    price: 40,
    inCart: 0
  },
  {
    name: 'Mushroom Bar',
    tag: 'Mushroomchocolatefull',
    price: 100,
    inCart: 0
  },
   {
    name: '4 Stains Premium Indoor 1oz',
    tag: '4strainindoor',
    price: 200,
    inCart: 0
  },
  {
    name: '2 Stain Premium Indoor Mix 2oz',
    tag: '2strainindoor',
    price: 300,
    inCart: 0
  },
   {
    name: 'Oreos 2oz',
    tag: 'oreosdeal',
    price: 350,
    inCart: 0
  },
  {
    name: 'Hash Live Rosin 3.5g',
    tag: 'Hashliverosin3.5comingsoon',
    price: 140,
    inCart: 0
  },
  {
    name: 'Goldline Rosin 3.5g',
    tag: 'Goldline3.5',
    price: 140,
    inCart: 0
  },
  {
    name: 'Sauced Diamonds 3.5g',
    tag: 'Sauceddiamond3.5comingsoon',
    price: 100,
    inCart: 0
  },
  {
    name: 'Peach Cobbler 1/2oz',
    tag: 'Peachcobbler2',
    price: 150,
    inCart: 0
  },
  {
    name: '4 Bonsai Disposables 1G',
    tag: 'Bonsaivapedeal',
    price: 100,
    inCart: 0
  },
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = sessionStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart-btn span').textContent = productNumbers;
  }
}

function cartNumbers(product){
  let productNumbers = sessionStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers) {
    sessionStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-btn span').textContent = productNumbers + 1;
  } else {
    sessionStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-btn span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  sessionStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product){
  let cartCost = sessionStorage.getItem('totalCost');
  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    sessionStorage.setItem("totalCost", cartCost +
    product.price);
  }else {
    sessionStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = sessionStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="cart-item">
          <div class="product">
            <ion-icon name="close-circle" class="remove-item" data-tag="${item.tag}"></ion-icon>
            <img src="./img/${item.tag}.JPG" alt="${item.name}">
            <span>${item.name}</span>
          </div>
          <div class="quantity">
            <ion-icon class="decrease" name="arrow-dropleft-circle" data-tag="${item.tag}"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class="increase" name="arrow-dropright-circle" data-tag="${item.tag}"></ion-icon>
          </div>
          <div class="total">
            $${item.inCart * item.price},00
          </div>
        </div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Basket Total
        </h4>
        <h4 class="basketTotal">
          $${cartCost},00
        </h4>
        <button onclick="showFormPopup()">Place Order</button>
      </div>
    `;

    // Add event listeners to the remove and quantity icons
    const removeIcons = document.querySelectorAll('.remove-item');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        removeItem(icon.dataset.tag);
      });
    });

    const decreaseIcons = document.querySelectorAll('.decrease');
    decreaseIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        updateQuantity(icon.dataset.tag, -1);
      });
    });

    const increaseIcons = document.querySelectorAll('.increase');
    increaseIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        updateQuantity(icon.dataset.tag, 1);
      });
    });
  }
}

function removeItem(tag) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    const item = cartItems[tag];
    const cartNumbers = parseInt(sessionStorage.getItem('cartNumbers'));
    const totalCost = parseInt(sessionStorage.getItem('totalCost'));
    sessionStorage.setItem('cartNumbers', cartNumbers - item.inCart);
    sessionStorage.setItem('totalCost', totalCost - (item.price * item.inCart));
    delete cartItems[tag];
    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));

    displayCart();
    onLoadCartNumbers();
  }
}

function updateQuantity(tag, amount) {
  let cartItems = sessionStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    const item = cartItems[tag];
    const cartNumbers = parseInt(sessionStorage.getItem('cartNumbers'));
    const totalCost = parseInt(sessionStorage.getItem('totalCost'));
    item.inCart += amount;
    sessionStorage.setItem('cartNumbers', cartNumbers + amount);
    sessionStorage.setItem('totalCost', totalCost + (item.price * amount));
    if (item.inCart === 0) {
      delete cartItems[tag];
    }
    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart();
    onLoadCartNumbers();
  }
}

onLoadCartNumbers();
displayCart();

function prepareCartEmail(name, number, address, deliveryInstructions, cartItems) {
  let emailContent = `Name:\t${name}\nNumber:\t${number}\nAddress:\t${address}\nDelivery Instructions:\t${deliveryInstructions}\nCart Items:\n`;
  let totalPrice = 0; // Initialize total price variable
  
  Object.values(cartItems).forEach(item => {
    const itemTotalPrice = item.price * item.inCart;
    totalPrice += itemTotalPrice; // Add item total price to the total price variable
    emailContent += `${item.name}\t- ${item.inCart} item(s)\t- $${itemTotalPrice.toFixed(2)}\n`;
  });
  
  emailContent += `Total Price:\t$${totalPrice.toFixed(2)}\n`; // Add total price to the email content
  
  return emailContent;
}

function showFormPopup() {
  // Create a form popup container
  const formPopupContainer = document.createElement("div");
  formPopupContainer.classList.add("form-popup");

  
// Create form inputs
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Name *");
nameInput.setAttribute("required", "required");
nameInput.classList.add("required-field");

  // Create a paragraph element for the message
  const callMessage = document.createElement("p");
  callMessage.textContent = "We Will Call You When Order Is Placed.";

  // Append the message and the name input to the form popup container
  formPopupContainer.appendChild(callMessage);
  formPopupContainer.appendChild(nameInput);

const numberInput = document.createElement("input");
numberInput.setAttribute("type", "text");
numberInput.setAttribute("placeholder", "Phone Number *");
numberInput.setAttribute("required", "required");
numberInput.classList.add("required-field");

const addressInput = document.createElement("input");
addressInput.setAttribute("type", "text");
addressInput.setAttribute("placeholder", "Address *");
addressInput.setAttribute("required", "required");
addressInput.classList.add("required-field");

  const deliveryInstructionsTextarea = document.createElement("textarea");
  deliveryInstructionsTextarea.setAttribute("placeholder", "Delivery Instructions (optional)");

  // Create form submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Place Order";

  // Create form close button
  const closeButton = document.createElement("span");
  closeButton.classList.add("form-popup-close");
  closeButton.innerHTML = "&times;";

  // Append form elements to the form popup container
  formPopupContainer.appendChild(nameInput);
  formPopupContainer.appendChild(numberInput);
  formPopupContainer.appendChild(addressInput);
  formPopupContainer.appendChild(deliveryInstructionsTextarea);

  // Get cart items from sessionStorage
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  // Create a cart items list in the form popup
  const cartItemsList = document.createElement("ul");
  cartItemsList.classList.add("cart-items-list");

  Object.values(cartItems).forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.inCart} item(s) - $${item.price * item.inCart},00`;
    cartItemsList.appendChild(listItem);
  });

  // Hide the cart items list
cartItemsList.style.display = "none";

  formPopupContainer.appendChild(cartItemsList);
  formPopupContainer.appendChild(submitButton);
  formPopupContainer.appendChild(closeButton);

  // Append the form popup container to the body element
  document.body.appendChild(formPopupContainer);

  // Function to close the form popup
  function closeFormPopup() {
    document.body.removeChild(formPopupContainer);
  }

  // Event listener for the form close button
  closeButton.addEventListener("click", closeFormPopup);

  // Event listener for the form submit button
  submitButton.addEventListener("click", function() {
    // Get the user inputs
    const name = nameInput.value;
    const number = numberInput.value;
    const address = addressInput.value;
    const deliveryInstructions = deliveryInstructionsTextarea.value;
  
    // Validate the required fields
    if (!name || !number || !address) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Prepare the email content with the user inputs and cart items
    const emailContent = prepareCartEmail(name, number, address, deliveryInstructions, cartItems);
   // Assuming emailContent is a string
   let formattedEmailContent = emailContent
   .replace(/\n/g, '%0D%0A')
   .replace(/\t/g, '%09');
// Open the email client with the prepared email content
window.location.href = `mailto:bonsaibrothersadmin@proton.me?subject=My%20Cart&body=${formattedEmailContent}`;
    // Close the form popup
    closeFormPopup();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Function to show the age verification popup
  function showAgeVerificationPopup() {
    document.getElementById("popupContainer").style.display = "flex";
  }

  // Call the function to show the popup when the page loads
  showAgeVerificationPopup();

  // Add event listeners to the buttons
  document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
  });

  document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("errorMessage").style.display = "block";
    // Hide the buttons
    document.querySelectorAll(".age-btn button").forEach(function(button) {
      button.style.display = "none";
    });
  });
});



function showSection() {
  var i;
  for (i = 0; i < links.length; i += 1) {
      document.getElementById(links[i].href.split('#')[1]).className = 'hidden';
  }
  document.getElementById(this.href.split('#')[1]).className = '';
  return false;
}
function createShowSection(links) {
  return showSection;
}
var sections = document.getElementById('sections'),
  links = sections.getElementsByTagName('a'),
  showSection = createShowSection(links),
  i;
for (i = 0; i < links.length; i += 1) {
  links[i].onclick = showSection;
}
showSection();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
};






// const card = document.querySelector(".card__inner");

// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });


// var topShelf = document.getElementById("topShelf");
// var flower = document.getElementById("flower");
// var concentrates = document.getElementById("concentrate");

// function myShelf () {
//  if (topShelf.style.display === "none") {
//   topShelf.style.display = "block";
//  } else {
//   flower.style.display ="none";
//   concentrates.style.display ="none";
//  }
  
// }
// function myFlower () {

  
// }
// function myConcentrate () {

  
// }

