// Input элементы
let productType = document.getElementById("type-select");
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");
let productList = document.getElementsByClassName("products-list")[0];

// Кнопка добавления
let addProductButton = document.getElementsByClassName("add-product")[0];

// Массив продуктов
let productArray = [];


addProductButton.addEventListener("click", addProduct);


function addProduct() {
    const productTypeValue = productType.value.trim();
    const productNameValue = productName.value.trim();
    const productCountValue = productCount.value.trim();

 
    if (productNameValue != "" && productCountValue != "" && productTypeValue != "") {
      
        let obj = {
            productType: productTypeValue,
            productName: productNameValue,
            productCount: productCountValue,
        };

       
        productArray.push(obj);

     
        displayProduct(obj);

   
        productType.value = "";
        productName.value = "";
        productCount.value = "";

        console.log(productArray); 
    } else {
        alert("что ты выбрал?!");
    }
}


function displayProduct(obj) {
    
    let productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
        <div class=prdkt>Тип продукта:</div> ${obj.productType}
        <div class=prdkt>Название продукта:</div> ${obj.productName}
        <div class=prdkt>Количество продукта:</div> ${obj.productCount}
    `;

  
    productList.appendChild(productItem);
}


let clearr = document.getElementsByClassName("clear-list")[0];
clearr.addEventListener("click", clearProducts);
function clearProducts() {
    productList.innerHTML = "";
   productArray= [];
    console.log("список очищен!")
}