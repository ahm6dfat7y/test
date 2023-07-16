var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDescription");
var searchInput = document.getElementById("searchInput");

var prodctList = [];
if (localStorage.getItem('List') !== null) {
    prodctList = JSON.parse(localStorage.getItem("List"))
    displayData()
}
function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    prodctList.push(product)
    localStorage.setItem("List", JSON.stringify(prodctList))
    displayData();

}

function displayData() {

    var temp = ''

    for (var i = 0; i < prodctList.length; i++) {
        temp += ` <tr>
        <td>`+ i + `</td>
        <td>`+ prodctList[i].name + `</td>
        <td>`+ prodctList[i].price + `</td>
        <td>`+ prodctList[i].category + `</td>
        <td>`+ prodctList[i].desc + `</td>
        <td>
            <button class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>
  `
}
document.getElementById("tableData").innerHTML = temp;

}

function deleteProduct(i) {

    prodctList.splice(i, 1);
    localStorage.setItem("List", JSON.stringify(prodctList))
    displayData()

}

function search(){

    var searchVariable=searchInput.value.toLowerCase()
    
    var temp = ''

    for (var i = 0; i < prodctList.length; i++) {

        if(prodctList[i].name.toLowerCase().includes(searchVariable)==true ||
        prodctList[i].category.toLowerCase().includes(searchVariable)==true){

            temp += ` <tr>
        <td>`+ i + `</td>
        <td>`+ prodctList[i].name.toLowerCase().replace(searchVariable,"<span class='bg-danger'>"+searchVariable+"</span>") + `</td>
        <td>`+ prodctList[i].price + `</td>
        <td>`+ prodctList[i].category.toLowerCase().replace(searchVariable,"<span class='bg-danger'>"+searchVariable+"</span>") + `</td>
        <td>`+ prodctList[i].desc + `</td>
        <td>
            <button class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>
  `
        }
        
}
document.getElementById("tableData").innerHTML = temp;
    
}