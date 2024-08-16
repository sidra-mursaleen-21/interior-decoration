var product;

function getItem() {
  product = JSON.parse(localStorage.getItem("product"));
}

getItem();

var productprice = [];

function renderProducts() {
  var value = document.getElementById("value");
  if(product.length == 0){
    var heading = document.getElementById("cartheading");
    heading.innerHTML = "your cart is empty";
    value.style.display = "none";
  }
  var container = document.getElementById("productcontainer");
  var subtotal = 0;
  container.innerHTML = "";
  productprice = [];
  for (var i = 0; i < product.length; i++) {
    var image = product[i].image;
    var name = product[i].name;
    var price = product[i].price;
    productprice.push(price);
    var id = product[i].id;
    container.innerHTML += `<div class="productbox">
      <div class="productimage">
        <img width="100%" height="100%" src="${image}" alt="" />
      </div>
      <p>
       ${name}
      </p>
      <h5>Price:${price}Rs</h5>
      <div class="deleteproducts" >
      <img onclick="deleteCartItem(${id})" height="40px" width="40px" src="images/delete.jpg" alt="" />
      </div>
      </div>`;
  }
  for(var i = 0; i <= productprice.length-1;i++){
    subtotal = subtotal + productprice[i];
  }
  value.innerHTML = "sub total : " + subtotal;
}

function deleteCartItem(deleteproduct) {
  for (var i = 0; i < product.length; i++) {
    if (product[i].id == deleteproduct) {
      var deleteItem = product.indexOf(product[i]);
      product.splice(deleteItem, deleteItem + 1);
      localStorage.setItem("product", JSON.stringify(product));
    }
  }
  renderProducts();
}
