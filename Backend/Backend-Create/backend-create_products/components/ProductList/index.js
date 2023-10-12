import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";
import DeleteButton from "../Button";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
            <DeleteButton id={product._id} />
          </li>
        ))}
      </StyledList>
    </>
  );
}
