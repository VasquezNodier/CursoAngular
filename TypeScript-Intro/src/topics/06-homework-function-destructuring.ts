// Ahora aplicaremos desestructuración al procedimiento anterior
// 06-function-destructuring.ts

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

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total= 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax]
}


// De acuerdo con EM6, se puede simplificar la sintaxis si una de los agumentos
// tiene el mismo nombre que en la definición 
// const result = taxCalculation({tax: tax, products: shoppingCart});
const [total, taxTotal] = taxCalculation({
    tax, 
    products: shoppingCart
});

console.log("D_Total: ", total);
console.log("D_Tax: ", taxTotal);

export{}