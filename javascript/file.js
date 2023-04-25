
let productCard = document.getElementsByClassName("product-card"); 

  for (let i = 0; i < productCard.length; i++){
      productCard[i].addEventListener("click", function () {
        location.href = "product.html";
      });
    }

    let cart = document.getElementsByClassName("cart"); 
    cart[0].addEventListener("click", function () {
      location.href = "cart.html";
    });

    let user = document.getElementsByClassName("user"); 
    user[0].addEventListener("click", function () {
      location.href = "account.html";
    });

