import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR("/api/random-character", fetcher);
  if (!data) return `<h3>${isLoading}</h3>`;
  const character = data?.character;
  const keys = Object.keys(character);
  return <div>{keys.map((key) => `${key}:"${character[key]}",  `)}</div>;
}
