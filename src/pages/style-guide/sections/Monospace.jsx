export default function Monospace() {
  return (
    <section aria-labelledby="monospace-heading">
      <h2 id="monospace-heading">Monospace Styles</h2>
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
  );
}
