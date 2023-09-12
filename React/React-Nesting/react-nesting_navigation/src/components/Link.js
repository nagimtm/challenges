export function Link({ hrefLink, children }) {
  return (
    <>
      <a className="navigation__link" href={hrefLink}>
        {children}
      </a>
    </>
  );
}
