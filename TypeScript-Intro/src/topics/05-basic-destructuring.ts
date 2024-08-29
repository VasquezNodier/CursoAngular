interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// Esta sería la forma común de hacerlo, para acceder a los atributos del objeto
console.log("Common Song: ", audioPlayer.song) 
console.log("Common Duration: ", audioPlayer.songDuration) 
console.log("Common Author: ", audioPlayer.details.author)



// Otra forma de hacerlo es aplicando destructuring (desestructuración) de la siguiente forma

const {song, songDuration} = audioPlayer;

// (2) Si quisieramos desestructurar details en el anterior podemos hacer esto:
// No es buena práctica
// const {
//     song, 
//     songDuration,
//     details: {author}
// } = audioPlayer;

console.log("Song: ", song) 
console.log("Duration: ", songDuration) 

// Ahora desestructuraremos el objeto details -> Esta es la mejor forma 
// (priorizando la legibilidad) a comparacion con el punto (2)
const {author} = audioPlayer.details;

console.log("Author: ", author)

// Si aplicamos destructuring, pero ya hay una variable con el mismo nombre 
// deberíamos hacer esto para no tener conflictos
// const song = "New Song";
// const {song:anotherSong} = audioPlayer;

// console.log("Song: ", song) 
// console.log("Song: ", anotherSong) 

// ------------------------------------------------
// Desestructuración de arreglos
// ------------------------------------------------
 const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

// (1) así accedemos a los elementos del arreglo conmunmente
//  console.log("Personaje 1 ", dbz[1])

// (2) así agregaríamos una execión (undefined) si no hay elementos:
console.error("Personaje 3 ", dbz[3] )
console.log("Personaje 3 ", dbz[3] || "No hay personajes 3")
const trunks = dbz[3] || "No hay personajee";
console.error(trunks)

// (3) Si lo desestructuramos:
// const [p1, p2, p3, p4="No hay personaje"]: string[] = ['Goku', 'Vegeta', 'Trunks']
// (4) Podemos omitir ciertos elementos, separados por comas:
const [, , p3, p4="No hay personaje"]: string[] = ['Goku', 'Vegeta', 'Trunks']
console.log("Personaje 4 ", p4)


export {}