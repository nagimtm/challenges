import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";

function Volumes() {
  return (
    <div>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, index) => (
          <li key={index}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Volumes;
