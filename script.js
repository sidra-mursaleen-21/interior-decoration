setTimeout(function () {
  var para = document.getElementsByClassName("text");
  para[0].classList.add("heading2");
}, 1000);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 700) {
    var topbutton = document.getElementById("topbutton");
    topbutton.style.display = "block";
  } else {
    var topbutton = document.getElementById("topbutton");
    topbutton.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 750) {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "white";
    navbar.style.border = "none";
  } else {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "rgba(255,255,255,0.63)";
    navbar.style.borderColor = "white";
    navbar.style.borderWidth = "1px";
    navbar.style.borderStyle = "solid";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1600) {
    var image = document.getElementById("image");
    image.classList.remove("imagenone");
    image.classList.add("animationimage");
  } else {
    var image = document.getElementById("image");
    image.classList.remove("animationimage");
    image.classList.add("imagenone");
  }
});

var products = [
  {
    id: 0,
    image: "images/image2.jpg",
    name: "green glass vase",
    price: 800,
    category: "vasses",
  },
  {
    id: 1,
    image: "images/image3.jpg",
    name: "white marble vase",
    price: 1000,
    category: "vasses",
  },
  {
    id: 2,
    image: "images/image4.jpg",
    name: "transparent glass vase",
    price: 500,
    category: "vasses",
  },
  {
    id: 3,
    image: "images/image5.webp",
    name: "white floor vase",
    price: 1200,
    category: "vasses",
  },
  {
    id: 4,
    image: "images/image6.jpg",
    name: "marble floor vase",
    price: 1500,
    category: "vasses",
  },
  {
    id: 5,
    image: "images/image7.jpg",
    name: "white floor vase",
    price: 1200,
    category: "vasses",
  },
  {
    id: 6,
    image: "images/image8.jpg",
    name: "white floor vase",
    price: 1600,
    category: "vasses",
  },
  {
    id: 7,
    image: "images/image9.jpg",
    name: "white marble floor vase",
    price: 1800,
    category: "vasses",
  },
  {
    id: 8,
    image: "images/image10.jpg",
    name: "white floor vase",
    price: 2000,
    category: "vasses",
  },
  {
    id: 9,
    image: "images/image11.jpg",
    name: "sofa silk cusions",
    price: 1000,
    category: "cushions",
  },
  {
    id: 10,
    image: "images/image12.jpg",
    name: "embroidered cusions",
    price: 1000,
    category: "cushions",
  },
  {
    id: 11,
    image: "images/image13.avif",
    name: "embroidered cusions",
    price: 1300,
    category: "cushions",
  },
  {
    id: 12,
    image: "images/image14.avif",
    name: "embroidered cusions",
    price: 1200,
    category: "cushions",
  },
  {
    id: 13,
    image: "images/image16.jpg",
    name: "silk sofa cusions",
    price: 1500,
    category: "cushions",
  },
  {
    id: 14,
    image: "images/image17.jpg",
    name: "cotton simple cusions",
    price: 1200,
    category: "cushions",
  },
  {
    id: 15,
    image: "images/image18.jpg",
    name: "cotton simple cusions",
    price: 1600,
    category: "cushions",
  },
  {
    id: 16,
    image: "images/image19.jpg",
    name: "cotton simple cusions",
    price: 1800,
    category: "cushions",
  },
  {
    id: 17,
    image: "images/image20.png",
    name: "white floor vase",
    price: 1800,
    category: "cushions",
  },
  {
    id: 18,
    image: "images/image21.jpg",
    name: "white marble bowl",
    price: 1000,
    category: "bowl",
  },
  {
    id: 19,
    image: "images/image22.jpg",
    name: "leaf shaped bowl",
    price: 1000,
    category: "bowl",
  },
  {
    id: 20,
    image: "images/image23.jpg",
    name: "decorating bowl",
    price: 1300,
    category: "bowl",
  },
  {
    id: 21,
    image: "images/image23.webp",
    name: "golden bowl",
    price: 1200,
    category: "bowl",
  },
  {
    id: 22,
    image: "images/image24.jpg",
    name: "white marble bowl",
    price: 1500,
    category: "bowl",
  },
  {
    id: 23,
    image: "images/image24.webp",
    name: "white marble bowl",
    price: 1200,
    category: "bowl",
  },
  {
    id: 24,
    image: "images/image25.jpg",
    name: "skin marble bowl",
    price: 1600,
    category: "bowl",
  },
  {
    id: 25,
    image: "images/image29.jpg",
    name: "marble stand bowl",
    price: 1800,
    category: "bowl",
  },
  {
    id: 26,
    image: "images/image27.jpg",
    name: "grey rock bowl",
    price: 1800,
    category: "bowl",
  },
  {
    id: 27,
    image: "images/image30.webp",
    name: "decorating lamp",
    price: 1000,
    category: "lamp",
  },
  {
    id: 28,
    image: "images/image31.webp",
    name: "tree shaped lamp",
    price: 1000,
    category: "lamp",
  },
  {
    id: 29,
    image: "images/image32.jpeg",
    name: "white marble lamp",
    price: 1300,
    category: "lamp",
  },
  {
    id: 30,
    image: "images/image33.jpg",
    name: "white marble lamp",
    price: 1200,
    category: "lamp",
  },
  {
    id: 31,
    image: "images/image34.jpg",
    name: "sky marble lamp",
    price: 1500,
    category: "lamp",
  },
  {
    id: 32,
    image: "images/image35.jpg",
    name: "wood stand lamp",
    price: 1200,
    category: "lamp",
  },
  {
    id: 34,
    image: "images/image36.jpg",
    name: "wood stand lamp",
    price: 1600,
    category: "lamp",
  },
  {
    id: 35,
    image: "images/image37.jpg",
    name: "wood stand lamp",
    price: 1800,
    category: "lamp",
  },
  {
    id: 36,
    image: "images/image38.jpg",
    name: "wood stand lamp",
    price: 1800,
    category: "lamp",
  },
  {
    id: 37,
    image: "images/image39.jpg",
    name: "table candle",
    price: 1000,
    category: "candles",
  },
  {
    id: 38,
    image: "images/image40.jpg",
    name: "table candle",
    price: 1000,
    category: "candles",
  },
  {
    id: 39,
    image: "images/image41.jpg",
    name: "table candle",
    price: 1300,
    category: "candles",
  },
  {
    id: 40,
    image: "images/image42.jpg",
    name: "table candle",
    price: 1200,
    category: "candles",
  },
  {
    id: 41,
    image: "images/image43.webp",
    name: "table candle",
    price: 1500,
    category: "candles",
  },
  {
    id: 42,
    image: "images/image44.webp",
    name: "table candle",
    price: 1200,
    category: "candles",
  },
  {
    id: 43,
    image: "images/image45.webp",
    name: "table candle",
    price: 1600,
    category: "candles",
  },
  {
    id: 44,
    image: "images/image46.webp",
    name: "table candle",
    price: 1800,
    category: "candles",
  },
  {
    id: 45,
    image: "images/image47.webp",
    name: "table candle",
    price: 1800,
    category: "candles",
  },
];

var main = document.getElementById("cartcontainer");

function filterByCategory(category) {
  var filteredProductsArray = [];
  main.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      filteredProductsArray.push(products[i]);
    }
  }

  for (var i = 0; i < filteredProductsArray.length; i++) {
    var image = filteredProductsArray[i].image;
    var name = filteredProductsArray[i].name;
    var price = filteredProductsArray[i].price;
    var id = filteredProductsArray[i].id;
    main.innerHTML += `<div class="box">
    <img width="100%" height="70%" src="${image}" alt="vases" />
    <p>${name}</p>
    <div class="minibox" >
      <h4>price : ${price} </h4>
      <i onclick="addToCart(${id})" class="fa-solid fa-cart-shopping"></i>
    </div>
  </div>`;
  }
}
var cartProduct = [];

function addToCart(productNumber) {
  var productitem = products[productNumber];

  cartProduct.push(productitem);

  localStorage.setItem("product", JSON.stringify(cartProduct));
}
