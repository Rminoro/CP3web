import Image from "next/image";
import "../components/styles/not-found.css"

export default function Notfound() {
  return (
    <div className="container-main">
        <h1>OOPS! 404! - Página não encontrada!</h1>
        <div>
            <figure className="block m-auto w-52">
            <Image src="https://httpstatusdogs.com/img/404.jpg" alt="Cachorro cavando." width={650} height=
            {500} />
            </figure>
        </div>
    </div>
  )
}