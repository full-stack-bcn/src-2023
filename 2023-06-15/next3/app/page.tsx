import Image from "next/image";
import rosesImage from "../assets/images/roses.jpg";

export default function Home() {
  return <main>
    Hola
    <Image src={rosesImage} alt="Foto de Rosas" width={400} height={300} />
  </main>;
}
  