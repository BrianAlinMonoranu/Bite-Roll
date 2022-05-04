function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active"); /* Changes between the normal page and the other page */
}

var el = document.querySelector('.close-btn');




let TotalCost;

const carts = document.querySelectorAll('.add-cart');


//Object array which has the items we have on sale
let products = [{
        name: 'Redemption Burger',
        tag: 'B1',
        price: 7.20,
        inCart: 0
    },
    {
        name: 'Monster Burger',
        tag: 'B2',
        price: 8.50,
        inCart: 0
    },
    {
        name: 'Cheese Burger',
        tag: 'B3',
        price: 4.50,
        inCart: 0
    },
    {
        name: 'French Fries',
        tag: 'fries',
        price: 3.50,
        inCart: 0

    },
    {
        name: 'Chicken Nuggets',
        tag: 'chicken',
        price: 3.00,
        inCart: 0
    },
    {
        name: 'Onion Rings',
        tag: 'onion',
        price: 3.00,
        inCart: 0
    },
    {
        name: 'Chicken Burrito',
        tag: 'Chicken_Burrito',
        price: 6.50,
        inCart: 0
    },
    {
        name: 'Beef Burrito',
        tag: 'Beef_Burrito',
        price: 6.50,
        inCart: 0
    },
    {
        name: 'Veggie Burrito',
        tag: 'Veggie',
        price: 6.50,
        inCart: 0
    },
    {
        name: 'Coke',
        tag: 'coke',
        price: 2.00,
        inCart: 0
    },
    {
        name: 'Fanta',
        tag: 'Fanta',
        price: 2.00,
        inCart: 0
    },
    {
        name: 'Sprite',
        tag: 'Sprite',
        price: 2.00,
        inCart: 0
    }
];

//Here we get the items add by the user
for (let cart = 0; cart < carts.length; cart++) {
    carts[cart].addEventListener('click', () => {
        cartNumbers(products[cart]);
        CalculateTotal(products[cart]);
    })

}

//Used to when refreshing the page
function onLoadCartNumber() {
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//Used to get the number of items in the cart 
function cartNumbers(products) {
    console.log("Product: ", products)
        //Has value as a string so we convert it into a number 
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);
}


//Setting items and increasing the amount in cart for each product
function setItems(products) {
    let Items = localStorage.getItem("productsinCart");

    Items = JSON.parse(Items);

    //There is something already in the cart
    if (Items != null) {

        if (Items[products.tag] == undefined) {
            Items = {
                ...Items,
                [products.tag]: products
            }
        }

        Items[products.tag].inCart += 1; //Increasing the amount incart for one item

    } else {

        products.inCart = 1;

        Items = {
            [products.tag]: products
        }
    }
    localStorage.setItem("productsinCart", JSON.stringify(Items));
}

//This will display the cart on the screen using divs
function displayCart() {
    let cartItems = localStorage.getItem("productsinCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");

    let Cost = localStorage.getItem('TotalCost');

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += ` 
          <div class = "product">
          <ion-icon name="fast-food-outline"></ion-icon>
            <img src = "images/${item.tag}.jpg" height = "40px">
            <span>${item.name}</span>
            </div> 
             <div class = "product-price" id = "box">$${item.price}</div>
              <div class = "product-Quantity">  
                  <span>${item.inCart}</span>
              </div> 

              <div class = "product-Total">
               $${item.inCart * item.price}
              </div>
              `
            console.log(item.tag);
        }); //checking values inside 

        productContainer.innerHTML += `  
        <div class = "basketTotalContainer">
            <h4 class = "basketTotalTitle">
            Total
            </h4>
            <h4 class = "basketTotal">
               $${Cost}
            </h4>
        </div>
        `
    }
}

//We calculate the total price
function CalculateTotal(products) {

    let Cost = localStorage.getItem('TotalCost');

    TotalCost = Cost;

    if (Cost != null) {
        Cost = parseInt(Cost);
        localStorage.setItem("TotalCost", Cost + products.price);
    } else {
        localStorage.setItem("TotalCost", products.price);
    }
}

onLoadCartNumber();
displayCart();