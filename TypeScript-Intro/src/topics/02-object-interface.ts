
//Si el objeto nunca va a cambiar de valor, lo más recomendable es cambiarla a constante usando const
//la ventaja de usar constantes es que son más ligeras que las variables let
//porque no tienen métodos de asignación.

/*
Como se puede ver, si asignamos el tipo string[] a la variable, 
nos va a generar error si tratamos de agregar otro tipo de dato, como en el ejemplo.
*/

let skills : string[] = ['Bash', 'Counter', 'Healing', true, 123];

// Aquí no vamos a poder decirle al objeto, de qué tipo van a ser sur propiedades
// Porque es un objeto literal de JS
// const strider = {
//     name: 'Strider',
//     hp: 100,
//     skills: ['Bash', 'Counter']
// }

// Para evitar lo anterior necesitamos crear una interface
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Es Un valor opcional
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);


export {};

