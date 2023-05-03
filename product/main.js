// get the search input and search button elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// add event listener to search button
searchBtn.addEventListener("click", function() {
  // get the search term entered by the user
  const searchTerm = searchInput.value.toLowerCase();
  
  // get all the text content on the page
  const pageContent = document.body.innerText.toLowerCase();
  
  // check if the search term exists in the page content
  if (pageContent.indexOf(searchTerm) !== -1) {
    // if the search term exists, scroll to the first occurrence
    const searchResult = new RegExp(searchTerm, "gi");
    document.documentElement.innerHTML = document.documentElement.innerHTML.replace(searchResult, match => `<span class="search-highlight">${match}</span>`);
    const searchHighlight = document.querySelector(".search-highlight");
    if (searchHighlight) {
      searchHighlight.scrollIntoView({behavior: "smooth"});
    }
  } else {
    // if the search term does not exist, display a message
    alert("No results found.");
  }
});

let cart = [];
let cartIcon = document.querySelector('#cart-icon');
cartIcon.addEventListener('click', addToCart);
function addToCart(item) {
  cart.push(item);
  // display message to confirm item was added to cart
  alert('Item added to cart!');
}

