type Props = {
  children: React.ReactNode;
};
export default function Nota({ children }: Props) {
  return <div className="p-2 rounded-sm bg-orange-200">{children}</div>;
}
