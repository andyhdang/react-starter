export default function Accessibility() {
  return (
    <section aria-labelledby="accessibility-heading">
      <h2 id="accessibility-heading">Accessibility Features</h2>
      <ul className="feature-list">
        <li>Supports system dark mode</li>
        <li>Supports manual theme overrides</li>
        <li>Respects reduced motion preferences</li>
        <li>Uses rem-based typography scaling</li>
        <li>Uses border-box sizing globally</li>
        <li>Provides responsive typography</li>
      </ul>
    </section>
  );
}
