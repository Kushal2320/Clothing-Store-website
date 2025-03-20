function openNav() {
    document.getElementById("popupNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("popupNav").style.width = "0";
}

function openCollectionPage() {
    window.location.href = 'collection.html';
}

function openTshirtPage() {
    window.location.href = 'tshirt.html';
}

function openShirtPage() {
    window.location.href = 'shirts.html';
}

function openJacketPage() {
    window.location.href = 'jacket.html';
}

let currentShirt = 0;

function changeShirt(direction) {
    currentShirt = (currentShirt + direction + shirts.length) % shirts.length;
    document.getElementById("shirt-image").src = shirts[currentShirt].img;
    document.getElementById("shirt-title").textContent = shirts[currentShirt].title;
    document.getElementById("shirt-description").textContent = shirts[currentShirt].description;
    document.getElementById("shirt-price").textContent = `Price: ${shirts[currentShirt].price}`;
}

function goBack() {
    window.location.href = "unreall.html";
}

let currentImageIndex = 0;
let images = [];

function showPopup(product) {
    const { img, title, description, price, gallery } = product;
    document.getElementById("popupImage").src = img;
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDescription").textContent = description;
    document.getElementById("popupPrice").textContent = `Price: ${price}`;
    images = gallery;
    currentImageIndex = 0;
    document.getElementById("productPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}

function swipeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("popupImage").src = images[currentImageIndex];
}

function buyNow() {
    const productName = document.getElementById("popupTitle").textContent;
    const productPrice = document.getElementById("popupPrice").textContent;
    const message = `Hi, I am interested in purchasing the product:\n${productName}\n${productPrice}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919201481522";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
}
