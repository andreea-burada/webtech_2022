function applyDiscount(vehicles, discount){
    return new Promise((resolve, reject) => {
        if(isNaN(discount))
        {
            reject(new Error("Invalid discount"))
            return
        }
        if(!Array.isArray(vehicles))
        {
            reject(new Error("Invalid array format"))
            return
        }
        else
        {
            vehicles.forEach(item => {
                if (!item.hasOwnProperty('make') || !item.hasOwnProperty('price') || typeof item.make !== 'string' || typeof item.price !== 'number') {
                    reject(new Error("Invalid array format"))
                    return
                }
            });
        }
        var minPrice=999999999999;

        vehicles.forEach(item =>{
            console.log(item.price)
            if(item.price < minPrice)
                minPrice = item.price;
                
        });
        //console.log(minPrice)

        if(discount >= 0.5 * minPrice){
            reject("Discount too big");
          }
          else{
            var arr=[];
            vehicles.forEach(item => {
              if (item.price - discount >= 0){
                item.price=item.price-discount;
                //console.log(item.price)
              }
            });
            arr=vehicles;
            resolve(arr);
          }
      })
}

const app = {
    applyDiscount: applyDiscount
};

module.exports = app;