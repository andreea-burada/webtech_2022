function applyDiscount(vehicles, discount) {
    var vehicles_copy = JSON.parse(JSON.stringify(vehicles));

    return new Promise((resolve, reject) => {
        if (isNaN(discount)) {
            reject(new Error("Invalid discount"));
            return;
        }
        if (!Array.isArray(vehicles_copy)) {
            reject(new Error("Invalid array format"));
            return;
        } else {
            vehicles_copy.forEach((item) => {
                if (
                    !item.hasOwnProperty("make") ||
                    !item.hasOwnProperty("price") ||
                    typeof item.make !== "string" ||
                    typeof item.price !== "number"
                ) {
                    reject(new Error("Invalid array format"));
                    return;
                }
            });
        }
        var minPrice = 99999;

        console.log('vehicles_copy 2', vehicles_copy);

        vehicles_copy.forEach((item) => {
            if (item.price < minPrice) {
               minPrice = parseInt(item.price);
            }
        });

        if (discount > 0.5 * minPrice) {
            reject("Discount too big");
        } else {
            vehicles_copy.forEach((item) => {
                if (item.price - discount >= 0) {
                    item.price = item.price - discount;
                }
            });
            resolve(vehicles_copy);
        }
    });
}

const app = {
    applyDiscount: applyDiscount,
};

module.exports = app;
