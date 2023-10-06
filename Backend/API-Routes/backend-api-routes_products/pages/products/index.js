import useSWR from "swr";

export default function ProductDisplayer() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoding } = useSWR("/api/products", fetcher);
  if (!data || error) return <div>{isLoding}</div>;
  const keys = Object.keys(data[0]);

  return (
    <div>
      <ul>
        {data.map((product) => (
          <>
            <li>{`${keys[0]}: ${product[keys[0]]}`}</li>
            <li>{`${keys[1]}: ${product[keys[1]]}`}</li>
            <li>{`${keys[2]}: ${product[keys[2]]}`}</li>
            <li>{`${keys[3]}: ${product[keys[3]]}`}</li>
            <li>{`${keys[4]}: ${product[keys[4]]}`}</li>
            <li>{`${keys[5]}: ${product[keys[5]]}`}</li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
}
