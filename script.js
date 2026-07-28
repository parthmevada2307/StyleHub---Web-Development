function incrementPremium() {
    let quantity = document.getElementById('premiumquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementPremium() {
    let quantity = document.getElementById('premiumquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('toggle');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-320px';
    } else {
        sidebar.style.left = '0px';
    }
}
function incrementJeans() {
    let quantity = document.getElementById('jeansquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementJeans() {
    let quantity = document.getElementById('jeansquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementJacket() {
    let quantity = document.getElementById('jacketquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementJacket() {
    let quantity = document.getElementById('jacketquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementDress() {
    let quantity = document.getElementById('dressquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementDress() {
    let quantity = document.getElementById('dressquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementHoodie() {
    let quantity = document.getElementById('hoodiequantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementHoodie() {
    let quantity = document.getElementById('hoodiequantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementTshirt() {
    let quantity = document.getElementById('tshirtquantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decrementTshirt() {
    let quantity = document.getElementById('tshirtquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementDungarees() {
    let quantity = document.getElementById('dungareesquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementDungarees() {
    let quantity = document.getElementById('dungareesquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementSneakers() {
    let quantity = document.getElementById('sneakersquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementSneakers() {
    let quantity = document.getElementById('sneakersquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementShoes() {
    let quantity = document.getElementById('shoesquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementShoes() {
    let quantity = document.getElementById('shoesquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementGlasses() {
    let quantity = document.getElementById('glassesquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementGlasses() {
    let quantity = document.getElementById('glassesquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementHandbag() {
    let quantity = document.getElementById('handbagquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementHandbag() {
    let quantity = document.getElementById('handbagquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function incrementWatch() {
    let quantity = document.getElementById('watchquantity');
    quantity.value = parseInt(quantity.value) + 1;
}
function decrementWatch() {
    let quantity = document.getElementById('watchquantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
function addToCart(name, price, item, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let exist = cart.find((item) => item.name === name);
    if (exist) {
        exist.quantity += quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            item: item,
            quantity: quantity,
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to Cart');
}
function increaseQuantity(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find((item) => item.name === name);
    if (item) {
        item.quantity = item.quantity + 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}
function decreaseQuantity(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find((item) => item.name === name);
    if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}
function remove(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((item) => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let table = document.getElementById('cartTable');
    let grandTotal = 0;
    // Clear old rows except header
    table.innerHTML = `
    <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Remove</th>
    </tr>
  `;
    cart.forEach((item) => {
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = '₹' + item.price;
        row.insertCell(2).innerHTML = `
        <button onclick="decreaseQuantity('${item.name}')">
        -</button>
        <span style="padding:10px;">
        ${item.quantity}
        </span>
        <button onclick="increaseQuantity('${item.name}')">
        +</button>
        `;
        row.insertCell(3).innerHTML = '₹' + item.price * item.quantity;
        row.insertCell(4).innerHTML =
            `<button onclick="remove('${item.name}')" style="background-color:#E91E63;color:#FFD700;border:none;padding:15px 20px; align-items: center; text-align: right; font-size:14px;margin:3px;font-weight:bold;border-radius:8px;cursor:pointer;display:flex; justify-content:flex-end;gap:15px;">
        Remove Item
        </button>`;
        grandTotal += item.price * item.quantity;
    });

    document.getElementById('grandTotal').innerHTML =
        '<span style="color: white;">Grand Total : ₹' + grandTotal + '</span>';
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
}
if (document.getElementById('summary')) {
    for (let i = 0; i < cart.length; i++) {
        document.getElementById('summary').innerHTML +=
            cart[i].name +
            ' x ' +
            cart[i].quantity +
            ' - ₹' +
            cart[i].price * cart[i].quantity +
            '<br>';
    }
}

if (document.getElementById('total')) {
    document.getElementById('total').innerHTML = 'Total : ₹' + total;
}

document.getElementById('total').innerHTML = 'Total : ₹' + total;
function placeOrder() {
    var address = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value
    };
    if (
        address.name == "" ||
        address.phone == "" ||
        address.address == "" ||
        address.city == "" ||
        address.pincode == ""
    ) {
        alert("Fill all details");
        return;
    }
    localStorage.setItem("address", JSON.stringify(address));
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    var order = {
        date: new Date().toLocaleString(),
        items: cart,
        total: total
    };
    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    alert("Order Placed Successfully!");
    window.location.href = "user.html";

}