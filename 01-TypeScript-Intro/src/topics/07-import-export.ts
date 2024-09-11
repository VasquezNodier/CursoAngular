import { Product, taxCalculation } from "./06-homework-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 100
    },
    {
        description: 'Ipad Pro',
        price: 150
    }
]

// Tax = 0.15
const [total, taxTotal] = taxCalculation({tax:0.15, products: shoppingCart});

console.log("Total: ", total);
console.log("Tax: ", taxTotal);