function renderCart() {
  var cart = {1: "Scooter", 2: "Pancake Mix", 3: "TV", 4: "Jacket"}
  cart.forEach(function (thing) {
    <div>
     `${cart[1]} + ${cart[2]} + ${cart[3]} + ${cart[4]}`
    </div>
  }
  console.log(cart);
}

renderCart();