// orderInfo is an object with the properties total and items
// position is an integer that determines one element in items
function removeOrderItem(orderInfo, position){
    // validate items to be an array. If another type is given an error is thrown with 
    // the message Items should be an array; (0.5 pts)
    if (Array.isArray(orderInfo.items) == false) {
        throw Error("Items should be an array");
    }

    // Each object from items should have the properties price and quantity. If at least 
    // one element is malformed an error is thrown with the message Malformed item; (0.5 pts)
    let items = orderInfo.items;
    const expected_keys = ['price', 'quantity'];
    items.forEach(item => {
        console.log(Object.keys(item));
        if (item.hasOwnProperty('price') == false || item.hasOwnProperty('quantity') == false) {
            throw Error("Malformed item");
        }
    });

    // position is validated in relation with the items array (0.5 pts)
    if (position >= items.length) {
        throw Error("Invalid position");
    }

    // the function will return orderInfo without the element on the given position (0.5 pts)
    let new_items = [];
    let total = 0;
    items.forEach(item => {
        if (items.indexOf(item) != position) {
            new_items.push(item);
            // the total will be updated with the new order content. (0.5 pts)
            total += item.quantity * item.price;
        }
    });
    orderInfo.items = new_items;
    orderInfo.total = total;

    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;