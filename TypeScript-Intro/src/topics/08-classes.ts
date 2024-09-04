
export class Person {
	// (1) Podemos evitarnos todo esto haciendo (2)
	//===========================================================================	
	// // Las siguientes variables, en general se conocen como propiedades
	// // propiedades de la clase
	// // Es simplemente porque están dentro de una clase
	// public name: string;
	// private address: string;
	
	// //Las funciones dentro de la clase se conocen como métodos
	
	// constructor(name : string, address : string) {
	// 	this.name = name;
	// 	this.address = address;
	// }
	//===========================================================================

	// (2)
	constructor(
		public name : string, 
		private address : string = 'No address'
	) {}
}

const ironman = new Person('Alexander');

console.log("Persona: ",ironman);

//Aunque TS nos permite acceder al atributo addess aún cuando este es privado
//Nos muestra un error explícito y en angular le podemos decir que no compile si
//hay un error de este nivel
console.log("Persona: ",ironman.address);
