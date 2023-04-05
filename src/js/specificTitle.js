import { loadHeaderFooter, renderTitleTemplate, setLocalStorage, getLocalStorage} from "./utils.mjs";
import movieTitles from "../json/movies.json" assert {type: "json"};
import showTitles from "../json/shows.json" assert {type: "json"};

loadHeaderFooter();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleId = urlParams.get('titleId');
//let entertainment = `movies`;
//const data = getJSON(entertainment);
let product = "";
if (!movieTitles.find((item) => item.id === titleId)) {
    product = showTitles.find((item) => item.id === titleId)
} else {
    product = movieTitles.find((item) => item.id === titleId)
}

//const dataSource = new ProductData("movies");
//const product = dataSource.findProductById(titleId);
const titleTemplate = renderTitleTemplate(product);
document.getElementById("specificTitle").innerHTML = titleTemplate;




function addProductToCart(product) {
    const products = getLocalStorage("wish-list") || [];
    let bad = 0;
    let message = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == product.id) {
            bad++;
        }
    }
    if (bad > 0) {
        message = "Uh oh! It looks like you have already added this to your watch list."
    } else {
        products.push(product);
        setLocalStorage("wish-list", products);
        message = "Successfully added to your watch list!"
    }
    document.getElementById("resultMessage").innerHTML = message;
}
// add to cart button event handler
async function addToCartHandler(e) {
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);