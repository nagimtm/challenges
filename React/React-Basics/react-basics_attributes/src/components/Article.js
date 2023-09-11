export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">React (software)</h2>
      <label htmlFor="for">
        <input id="for" type="text"></input>
      </label>
      <a
        href="https://en.wikipedia.org/wiki/React_(software)"
        className="article__link"
      >
        Link of React.js on wikipedia
      </a>
    </article>
  );
}
