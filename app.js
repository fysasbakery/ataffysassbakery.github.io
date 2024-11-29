// Mendapatkan elemen yang diperlukan
const iconCart = document.querySelector('.icon-cart');
const shoppingCart = document.querySelector('.shopping-cart');
const addToCartButtons = document.querySelectorAll('.addtocartbtn');
const cartItemsList = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total p');

// Array untuk menyimpan item keranjang
let cartItems = [];

// Menambahkan item ke keranjang
function addItemToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Mengupdate tampilan keranjang belanja
function updateCart() {
    cartItemsList.innerHTML = ''; // Menghapus item sebelumnya
    let total = 0;

    // Menambahkan item ke list keranjang
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
        total += parseFloat(item.price);
    });

    // Menampilkan total harga
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    // Menampilkan jumlah item di ikon keranjang
    iconCart.querySelector('span').textContent = cartItems.length;
}

// Event listener untuk membuka/tutup keranjang belanja
iconCart.addEventListener('click', () => {
    shoppingCart.classList.toggle('active'); // Menambahkan/ menghapus kelas 'active' pada shopping cart
});

// Event listener untuk tombol "Add to Cart"
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Mengambil nama dan harga produk
        const productName = event.target.closest('.box').querySelector('h3').textContent;
        const productPrice = event.target.closest('.box').querySelector('.price').textContent.split('$')[1].trim();

        // Menambahkannya ke keranjang
        addItemToCart(productName, productPrice);
    });
});
// Mendapatkan referensi tombol-tombol
const checkoutBtn = document.querySelector('.checkoutBtn');

// Menangani klik tombol "check out"
checkoutBtn.addEventListener('click', function() {
    // Di sini Anda dapat menambahkan logika untuk melanjutkan ke halaman checkout atau mengarahkan pengguna ke checkout
    window.location.href = 'checkout.html';
    // Contoh redirect ke halaman checkout
    // window.location.href = 'checkout.html';
});

