import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    console.log(randomVolume.slug);
    router.push(`volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }, index) => (
          <li key={index}>
            <Link href={`volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={() => getRandomElement(volumes)}>Random Volume</button>
    </>
  );
}
