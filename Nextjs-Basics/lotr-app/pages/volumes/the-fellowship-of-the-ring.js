import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import FellowShipCover from "../../Components/FellowShipCover.js";

function Fellowship() {
  // console.log(volumes);
  const indexOfSlug = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>The Fellowship of the Ring</h1>
      {<p>{indexOfSlug.description}</p>}
      <ul>
        <li>{indexOfSlug.books[0].ordinal}</li>
        <li>{indexOfSlug.books[0].title}</li>
      </ul>
      <ul>
        <li>{indexOfSlug.books[1].ordinal}</li>
        <li>{indexOfSlug.books[1].title}</li>
      </ul>
      <FellowShipCover />
      <div>
        <Link href="/volumes">All Volumes</Link>
      </div>
    </div>
  );
}

export default Fellowship;
