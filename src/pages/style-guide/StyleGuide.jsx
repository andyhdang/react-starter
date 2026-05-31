import "./StyleGuide.css";

export default function StyleGuide() {
  return (
    <main className="docs">
      <header className="docs-header">
        <h1>React Boilerplate Foundations</h1>
        <p>
          Global design tokens, resets, typography, and accessibility features
          defined in index.css.
        </p>
      </header>

      <section>
        <h2>Typography</h2>
        <h1>Heading 1 Example</h1>
        <h2>Heading 2 Example</h2>
        <h3>Heading 3 Example</h3>
        <h4>Heading 4 Example</h4>
        <h5>Heading 5 Example</h5>
        <h6>Heading 6 Example</h6>
        <p>This is the body copy</p>
        <p>
          This is the inline <code>code</code> style
        </p>
      </section>

      <section>
        <h2>Monospace Styles</h2>
        <p>
          Keyboard shortcut: <kbd>⌘</kbd> + <kbd>K</kbd>
        </p>
        <p>
          Terminal output: <samp>npm run dev</samp>
        </p>
        <pre>
          <code>{`npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`}</code>
        </pre>
      </section>

      <section>
        <h2>Forms</h2>

        <input placeholder="Input inherits body typography" />

        <button>Button inherits body typography</button>

        <select>
          <option>Option One</option>
          <option>Option Two</option>
        </select>
      </section>

      <section>
        <h2>Media Defaults</h2>

        <img src="https://picsum.photos/600/300" alt="Placeholder" />
      </section>

      <section>
        <h2>Elevation</h2>

        <div className="elevation-card">Shadow Token Example</div>
      </section>

      <section>
        <h2>Accessibility Features</h2>

        <ul className="feature-list">
          <li>Supports system dark mode</li>
          <li>Supports manual theme overrides</li>
          <li>Respects reduced motion preferences</li>
          <li>Uses rem-based typography scaling</li>
          <li>Uses border-box sizing globally</li>
          <li>Provides responsive typography</li>
        </ul>
      </section>

      <section>
        <h2>Design Tokens</h2>

        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <code>--text</code>
              </td>
              <td>Primary text color</td>
            </tr>

            <tr>
              <td>
                <code>--bg</code>
              </td>
              <td>Page background color</td>
            </tr>

            <tr>
              <td>
                <code>--accent</code>
              </td>
              <td>Primary accent color</td>
            </tr>

            <tr>
              <td>
                <code>--shadow</code>
              </td>
              <td>Elevation token</td>
            </tr>

            <tr>
              <td>
                <code>--sans</code>
              </td>
              <td>Body font family</td>
            </tr>

            <tr>
              <td>
                <code>--heading</code>
              </td>
              <td>Heading font family</td>
            </tr>

            <tr>
              <td>
                <code>--mono</code>
              </td>
              <td>Code font family</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

function ColorToken({ name, variable }) {
  return (
    <div className="token-card">
      <div
        className="token-swatch"
        style={{
          background: `var(${variable})`,
        }}
      />

      <strong>{name}</strong>

      <code>{variable}</code>
    </div>
  );
}
