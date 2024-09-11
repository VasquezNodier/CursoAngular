

// Debemos tratar de evitar usar el tipo de dato :any
// export function whatsMyType( argument: any ) :any {
export function whatsMyType<T>( argument: T ) :T {



    return argument
}
// // Esta es una forma
// let amIString = whatsMyType('Hola Mundo');
// let amINumber = whatsMyType(1234);
// let amIArray = whatsMyType([1,2,3,4,5]);

// Esta es otra forma
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(1234);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' ')) 
console.log(amINumber.toFixed()) 
console.log(amIArray.join('-')) 


