import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link hrefLink={"#home"}>Home</Link>
          <Link hrefLink={"#about"}>About</Link>
          <Link hrefLink={"#impressum"}>Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}

{
  /* <header className="header">
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <nav>
          <a className="navigation__link" href="#home">
            Home
          </a>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </nav>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </header> */
}
