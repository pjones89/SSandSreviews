import { getLocalStorage, loadHeaderFooter, setLocalStorage } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("wish-list");
  if (cartItems.length < 1 || cartItems == null) {
    let error = `<div id="error" style="color:red">Sorry, there are currently no items in your watch list.</div>`;
    document.getElementById("wishList").innerHTML = error;
  } else {
    const htmlItems = [];
    htmlItems.push(cartItemTemplate(cartItems));
    document.getElementById("wishList").innerHTML = htmlItems.join("");
  }
}

function removeFromcart(e) {
  let titleId = e.currentTarget.dataset.id;
  const cart = getLocalStorage("wish-list");
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === titleId) {
      cart.splice(i, 1);
      break;
    }
  }
  setLocalStorage("wish-list", cart);
  location.reload();
}

function cartItemTemplate(item) {
let newItem = '<h1>Watch List</h1>';
  for (let i = 0; i < item.length; i++) {
  newItem += `<div class="cart-card divider">
  <div class="card__name">${item[i].title}</div>
    <img
      src="${item[i].posterImage}"
      alt="${item[i].title}"
    />
    <div id="deleteMessage">Finished watching it?</div>
    <button id="removeFromCart" class="remove" data-id="${item[i].id}">Remove</button>
</div>`;
  }
  //newItem += `</ul>`;
  return newItem;
}

renderCartContents();

const itemsToDelete = document.querySelectorAll(".remove");
  for (let i = 0; i < itemsToDelete.length; i++){
    itemsToDelete[i].addEventListener("click", removeFromcart);
  }


