type Props = {
  text: string;
};
export default function Title({ text }: Props) {
  return <h1 className="font-bold text-2xl">El título es: {text}</h1>;
}
