const addTo = () => {
  const cardProduct = document.getElementById("cardProduct");
  const cardQuantity = document.getElementById("cardQuantity");
  const cardProductValue = cardProduct.value;
  const cardQuantityValue = cardQuantity.value;
  // clear the input
  cardProduct.value = "";
  cardQuantity.value = "";
  console.log(cardProductValue, cardQuantityValue);
  displayCard(cardProductValue, cardQuantityValue);
  saveLocalStroge(cardProductValue, cardQuantityValue);
};

const displayCard = (cardProductValue, cardQuantityValue) => {
  const listITem = document.getElementById("listITem");
  const li = document.createElement("li");
  li.innerText = `${cardProductValue}: ${cardQuantityValue} `;
  listITem.appendChild(li);
};

// get Item local Storage;
const getItemShoppingCard = () => {
  const shoppingCard = localStorage.getItem("cart");
  let cart = {};
  if (shoppingCard) {
    cart = JSON.parse(shoppingCard);
  }
  return cart;
};

// save localStorage

const saveLocalStroge = (product, quantity) => {
  const cart = getItemShoppingCard();
  cart[product] = quantity;
  const cardStringyFied = JSON.stringify(cart);
  localStorage.setItem("cart", cardStringyFied);
  console.log(cardStringyFied);
};

// display localStorage cart

const displayLocalStroageCart = () => {
  const saveCart = getItemShoppingCard();
  console.log(saveCart);
  for (let product in saveCart) {
    const quantity = saveCart[product];
    displayCard(product, quantity);
    console.log(product);
  }
};
displayLocalStroageCart();
