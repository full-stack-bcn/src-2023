
type Props = {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return <div>
    {children}
    <aside>Este es el layout de <code>/primera</code></aside>
  </div>
}