import { introduction } from "../resources/lib/data.js";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings.</h1>
      <p>{introduction}</p>
      <Link href="/volumes">All Volumes</Link>
    </div>
  );
}
