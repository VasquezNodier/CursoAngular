import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Vite
`

console.log("Hola mundo");

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
