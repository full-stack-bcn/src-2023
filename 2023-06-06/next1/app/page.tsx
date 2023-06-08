import Link from "next/link";
import Title from "./primera/Title";

export default function Page() {
  return (
    <main className="p-3 flex flex-col">
      <Title />
      <Link href="/primera">Vete a primera</Link>
      <Link href="/beers">Lista de Cervezas</Link>
    </main>
  )
}
