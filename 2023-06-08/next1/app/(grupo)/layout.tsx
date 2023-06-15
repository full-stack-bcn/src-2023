import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-row items-stretch">
      <div className="bg-blue-200 w-20 flex flex-col">
        <Link href="/alpha">Alpha</Link>
        <Link href="/beta">Beta</Link>
      </div>
      {children}
    </div>
  );
}
