const url = new URLSearchParams(window.location.search);
const id = url.get("orderId");
const totalCount = url.get("totalCount");
console.log("hello", totalCount)
document.getElementById("message").innerHTML = "Nous vous remercions pour votre achat! &#128522</br> Le numéro de référence est le : " + id + ".</br>Le prix total de votre commande est de : " + totalCount + " €.";