import Link from "next/link";

export default function Page() {
  return <div className="p-3">
    <h1 className="text-2xl font-bold">Primera</h1>
    <Link href="/primera/mini">Vete a mini</Link>
  </div>
}