
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 200
}

const shoppingCart = [phone, tablet];
const tax = 0.15;



// Basados en cleanCode maximo 3 argumentos y si es mayor a 3, se transforme en un objeto
// Para este ejemplo crearemos una interfaz, pero solo con 2 argumentos
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
    let total= 0;

    options.products.forEach(product => {
        total += product.price;
    })

    return [total, total * options.tax]
}


// De acuerdo con EM6, se puede simplificar la sintaxis si una de los agumentos
// tiene el mismo nombre que en la definición 
// const result = taxCalculation({tax: tax, products: shoppingCart});
const result = taxCalculation({tax, products: shoppingCart});

console.log("Total: ", result[0]);
console.log("Tax: ", result[1]);

export{}