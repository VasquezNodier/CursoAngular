import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import './topics/01-basic_types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-functions.ts'
import './topics/04-homework-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Vite
`

// console.log("Hola mundo");

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
