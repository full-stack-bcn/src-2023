import Link from "next/link";

type Beer = Record<string, any>;

const loadBeers = async (): Promise<Array<Beer>> => {
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const beers = await response.json();
  return beers;
};

export default async function Page() {
  const beers = await loadBeers();
  return (
    <div className="flex flex-col">
      {beers.map((beer) => (
        <Link key={beer.id} href={`/beers/${beer.id}`}>{beer.name}</Link>
      ))}
    </div>
  );
}
