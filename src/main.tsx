// import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { User } from "./05/06-callbacks.tsx"
// import {value01_01} from "./01/01.ts";

// let a = value01_01

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <User/>
    // </StrictMode>,
)
