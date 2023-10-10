import { useRouter } from "next/router";
import useSWR from "swr";
export default function DisplayPoductById() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoding } = useSWR(`/api/products/${id}`, fetcher);
  if (!data || error) return <div>{isLoding}</div>;
  const keys = Object.keys(data);
  return (
    <div>
      <ul>
        <li>{`${keys[0]}: ${data[keys[0]]}`}</li>
        <li>{`${keys[1]}: ${data[keys[1]]}`}</li>
        <li>{`${keys[2]}: ${data[keys[2]]}`}</li>
        <li>{`${keys[3]}: ${data[keys[3]]}`}</li>
        <li>{`${keys[4]}: ${data[keys[4]]}`}</li>
        <li>{`${keys[5]}: ${data[keys[5]]}`}</li>
        <hr />
      </ul>
    </div>
  );
}
