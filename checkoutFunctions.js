/* 1- As a user, I would like to be able to scan an item using a 
barcode so its details can be found from products list (test data).

2 - As a user, I would like to be able to add an item to my basket.

3 - As a user, I would like to be able to see the total price of all 
items in my basket.

4 - As a user, I would like to be able to remove an item from my 
basket.
 */

const { catalogue } = require('./data/data')

const scanItem = function (itemBarcode) {
    return catalogue.find(item => item.barcode === itemBarcode)
}

let basket = [];
const addToBasket = function (item, trolley) {
    trolley.push(item)
}

const totalPrice = function (trolley) {
    return trolley.reduce((currentPrice, item) => {
        return currentPrice + item.price
    }, 0)
    }

const removeItem = function (item, trolley) {
    const index = trolley.findIndex(indexOfItem => indexOfItem === item)
    return trolley.splice(index, 1)
}


module.exports = { scanItem, addToBasket, basket, totalPrice, removeItem }