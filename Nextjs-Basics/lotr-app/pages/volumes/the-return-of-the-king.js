import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import TheReturnOfCover from "@/Components/TheReturnOfCover.js";

function ReturnOfTheKing() {
  const indexOfSlug = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  return (
    <div>
      <h1>The Return of the King</h1>;{<p>{indexOfSlug.description}</p>}
      <ul>
        <li>{indexOfSlug.books[0].ordinal}</li>
        <li>{indexOfSlug.books[0].title}</li>
      </ul>
      <ul>
        <li>{indexOfSlug.books[1].ordinal}</li>
        <li>{indexOfSlug.books[1].title}</li>
      </ul>
      <TheReturnOfCover />
      <div>
        <Link href="/volumes">All Volumes</Link>
      </div>
    </div>
  );
}

export default ReturnOfTheKing;
