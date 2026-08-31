import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">React starter</p>
        <h1>Build a consistent interface from a solid foundation.</h1>
        <p className="home__intro">
          Explore the design foundations and reusable components that shape this
          application.
        </p>
      </section>

      <section className="home__destinations" aria-label="Explore the system">
        <Link className="home-card" to="/style-guide">
          <span className="home-card__label">Foundations</span>
          <h2>Style Guide</h2>
          <p>
            Review the visual tokens, typography, accessibility defaults, and
            base styles.
          </p>
          <span className="home-card__action">Explore foundations</span>
        </Link>

        <Link className="home-card" to="/component-library">
          <span className="home-card__label">Components</span>
          <h2>Component Library</h2>
          <p>
            Browse reusable interface components and see how they respond to
            interaction.
          </p>
          <span className="home-card__action">Browse components</span>
        </Link>
      </section>
    </main>
  );
}
