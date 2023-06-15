import Link from "next/link";
import Title from "@/components/Title";
import Counter from "@/components/Counter";

export default function Page() {
  return (
    <main className="p-3 flex flex-col">
      <Title text="este es server!" />
      <Link href="/primera">Vete a primera</Link>
      <Link href="/beers">Lista de Cervezas</Link>
      <Link href="/alpha">Alpha</Link>
      <Link href="/beta">Beta</Link>
      <Counter />
    </main>
  )
}
