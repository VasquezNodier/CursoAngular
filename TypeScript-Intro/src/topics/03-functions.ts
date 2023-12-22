

function addNumbers( a: number, b:number ) {
    
    return a+b;
}

const result: number = addNumbers(1,2)

// console.log({result}); // Imprime una variabe como un objeto

// ===========================================
// Funciones de flecha o Lambda Functions

const addNumbersArrow = (a: number, b: number):string => {
    return `${a+b}`;
}

const result2: string = addNumbersArrow(1,2)


function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber*base;
}

const multiplyResult: number = multiply(5);

// console.log({result, result2, multiplyResult}); // Imprime una variabe como un objeto

//==================================================
//Funciones con Objetos

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 60,
    showHp(){
        console.log(`Puntos de vida ${ this.hp }`);
    }
};

healCharacter(strider, 10)
healCharacter(strider, 30)

strider.showHp();






export {}