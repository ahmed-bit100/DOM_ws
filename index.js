console.log(document)

var plusButtons = document.querySelectorAll(".plus");
for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function() {
    var quantityElement = this.parentNode.querySelector("p");
    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + 1;
    quantityElement.textContent = newQuantity;

    var unitPriceElement = this.closest("tr").querySelector(".unitPrice");
    var unitPrice = parseFloat(unitPriceElement.textContent);
    var newPrice = unitPrice * newQuantity;
    var priceElement = this.closest("tr").querySelector(".price");
    priceElement.textContent = newPrice.toFixed(2).replace(/\.00$/, '');

    updateTotalPrice();
  });
}

var minusButtons = document.querySelectorAll(".minus");
for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function() {
    var quantityElement = this.parentNode.querySelector("p");
    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity - 1;
    if (newQuantity < 0) {
      newQuantity = 0;
    }
    quantityElement.textContent = newQuantity;

    var unitPriceElement = this.closest("tr").querySelector(".unitPrice");
    var unitPrice = parseFloat(unitPriceElement.textContent);
    var newPrice = unitPrice * newQuantity;
    var priceElement = this.closest("tr").querySelector(".price");
    priceElement.textContent = newPrice.toFixed(2).replace(/\.00$/, '');

    updateTotalPrice();
  });
}

function updateTotalPrice() {
  var priceElements = document.querySelectorAll(".price");
  var totalPrice = 0;
  for (var i = 0; i < priceElements.length; i++) {
    totalPrice += parseFloat(priceElements[i].textContent);
  }

  var totalElement = document.getElementById("total");
  totalElement.textContent = totalPrice.toFixed(2).replace(/\.00$/, '');
}

var deleteButtons = document.querySelectorAll(".delete");
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    var row = this.parentNode.parentNode.parentNode;
    var quantityElement = row.querySelector("p");
    quantityElement.textContent = "0";

    var priceElement = row.querySelector(".price");
    priceElement.textContent = "0";

    updateTotalPrice();
  });
}

var likeButtons = document.querySelectorAll(".like");
for (var i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function() {
    this.classList.toggle("red");
  });
}
