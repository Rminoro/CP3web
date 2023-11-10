import Image from "next/image"
import Link from "next/link"
import "../../../components/styles/styles.css"

import SapatoImg from "../../assets/sapato.jpg"

export default function Sapato() {
  return (
    <>
    <div className="container-produto">
      <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        <div className="descricao-produto">
        <h1>Sapato</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p className="valor" >R$: 80,99</p>
        <button>COMPRAR</button>
        </div>
        <figure>
          <Image src={SapatoImg} width={200} height={200} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
        
    </div>
    </>
  )
}