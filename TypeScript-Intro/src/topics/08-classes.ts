
export class Person {
	// Las siguientes variables, en general se conocen como propiedades
	// propiedades de la clase
	// Es simplemente porque están dentro de una clase
	public name: string;
	private address: string;

	//Las funciones dentro de la clase se conocen como métodos

	constructor() {
		this.name = 'Nodier';
		this.address = 'Colombia';
	}
}

const ironman = new Person();

console.log("Persona: ",ironman);

//Aunque TS nos permite acceder al atributo addess aún cuando este es privado
//Nos muestra un error explícito y en angular le podemos decir que no compile si
//hay un error de este nivel
console.log("Persona: ",ironman.address);
