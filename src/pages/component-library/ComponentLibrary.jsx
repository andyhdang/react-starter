import Button from "../../components/button/Button";
import "./ComponentLibrary.css";

export default function ComponentLibrary() {
  return (
    <main className="component-library">
      <header className="component-library__header">
        <h1>Component Library</h1>
        <p>Reusable interface components and their interaction states.</p>
      </header>

      <section className="component-library__section" aria-labelledby="button-title">
        <h2 id="button-title">Button</h2>
        <p className="component-library__description">
          A primary action button with clear hover, active, focus, and disabled
          states.
        </p>

        <div className="component-library__preview">
          <Button>Primary action</Button>
          <Button disabled>
            Disabled action
          </Button>
        </div>

        <table className="component-library__states">
          <thead>
            <tr>
              <th>State</th>
              <th>Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>Solid accent background with white text</td>
            </tr>
            <tr>
              <td>Hover</td>
              <td>Brightens to indicate it is interactive</td>
            </tr>
            <tr>
              <td>Active</td>
              <td>Moves down slightly while pressed</td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>Shows a high-visibility keyboard focus ring</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>Reduces opacity and prevents interaction</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
