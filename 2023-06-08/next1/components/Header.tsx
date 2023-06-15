import Link from "next/link";
import Counter from "./Counter";

export default function Header() {
  return (
    <header className="border bg-red-200 flex flex-row px-3 items-center">
      <Link href="/" className="mr-5">Logo</Link>
      <div className="flex-1" />
      <Counter />
      <div className="flex-1" />
      <div>@pauek</div>
    </header>
  );
}
