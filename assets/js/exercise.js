const store = [{
    item: 'Bag',
    price: 8000
}, {
    item: 'Shoe',
    price: 5000
}, {
    item: 'Watch',
    price: 3000
}]

let cart = [];

let tableStore = document.getElementById('store')
let tableCart = document.getElementById('cart')


for (let i = 0; i < store.length; i++) {
    let tableRow = document.createElement('tr')
    let tableDataItem = document.createElement('td')
    let tableDataPrice = document.createElement('td')
    let addToCartButton = document.createElement('button')

    addToCartButton.innerHTML = 'Add to cart'
    addToCartButton.onclick = function () {addItem(i)}
    tableDataItem.innerHTML = store[i].item
    tableDataPrice.innerHTML = store[i].price
    tableRow.appendChild(tableDataItem)
    tableRow.appendChild(tableDataPrice)
    tableRow.appendChild(addToCartButton)
    tableStore.appendChild(tableRow)
}
function addItem(i) {
    cart.push(store[i])
    tableCart.innerHTML = ''
    let tableHeadItem = document.createElement('th')
    let tableHeadPrice = document.createElement('th')
    let tableHeadRow = document.createElement('th')
    tableHeadItem.innerHTML = 'Item'
    tableHeadPrice.innerHTML = 'Price'
    tableHeadRow.appendChild(tableHeadItem)
    tableHeadRow.appendChild(tableHeadPrice)
    tableCart.appendChild(tableHeadRow)
    for (let x = 0; x < cart.length; x++) {
        buildCartRow(x)
    }

}

function buildCartRow(x) {
    let tableRow = document.createElement('tr')
    let tableDataItem = document.createElement('td')
    let tableDataPrice = document.createElement('td')
    let addToCartButton = document.createElement('button')

    addToCartButton.innerHTML = 'Remove'
    addToCartButton.onclick = function () { removeItem(x) }
    tableDataItem.innerHTML = cart[x].item
    tableDataPrice.innerHTML = cart[x].price
    tableRow.appendChild(tableDataItem)
    tableRow.appendChild(tableDataPrice)
    tableRow.appendChild(addToCartButton)
    tableCart.appendChild(tableRow)
}

function removeItem(index) {
    tableCart.innerHTML = ''
    cart.splice(index, 1)
    console.log(cart)
    for (let y = 0; y < cart.length; y++) {
        buildCartRow(y)
    }
}

