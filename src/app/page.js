import Image from "next/image";
import Link from "next/link";
import "../components/styles/styles.css"

import Roupas from "../../src/app/assets/roupas.png"
import Logo from "../../src/app/assets/logo.jpg"

export default function Home() {
  return (
    <div>
      <div className="container-home">
        <div className="conteudo-home">
        <h1>NTC MODAS</h1>
        <p>O melhor da moda, você encontra aqui!</p>
        </div>
      </div>
      <div className="container-modelos">
        <div>

        </div>

      </div>
    </div>
  )
}