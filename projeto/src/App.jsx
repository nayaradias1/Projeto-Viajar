import React from "react"
import "./style.css"

export default function App(){
  return (
    <>
    <header>
      <img src="https://www.pngall.com/wp-content/uploads/5/Aeroplane-PNG-HD-Image.png" alt="" />
   
    <ul>
      <li>Home</li>
      <li>Sobre</li>
      <li>Info</li>
      <li>Contato</li>
    </ul>
    </header>
    <main>
      <div>
        <h1>Qual o seu <span>DESTINO?</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate porro facilis, rerum minus quia sapiente qui vitae fuga ex doloribus numquam hic mollitia deserunt aut, ipsum neque enim autem!</p>
        <button>Saiba Mais</button>
      </div>
      <div>
        <img src="https://www.pngplay.com/wp-content/uploads/6/Airplane-Logo-PNG-Clipart-Background.png" alt="" />
      </div>
    </main>
    <footer>
      <ul>
        <li className="link1">Todos os direitos reservados</li>
        <li className="link2">@2024</li>
      </ul>
    </footer>
    </>
  )
}