const Products = {
    product_id : 'A001',
    product_name : 'Shoe',
    quantity_in_stock : 31,
    unit_price : 3310,
    product_description : {
        product_brand : 'leening',
        size_or_quantity : '10.5 US',
        taste_or_scent : 'หอม',
        color : 'Brown',
        additional_description : 'for Basketball'
    }
};

console.log(Products.product_id);
console.log(Products.product_description.size_or_quantity)

Products.product_description.size_or_quantity = '9.5 US';

console.log(Products.product_description.size_or_quantity)

Products.try = 'add';

console.log(Products);