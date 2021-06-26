module.exports = () => {
   var faker = require('faker');

    const data = {
        products: [],
    }

    for (let i =0; i < 1000; i++) {
      data.products.push({
          id: i +1,
          price: faker.commerce.price(),
          title: faker.commerce.productName()
      })  
    }
    return data;

}
