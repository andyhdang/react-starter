export default function Tokens() {
  return (
    <section aria-labelledby="tokens-heading">
      <h2 id="tokens-heading">Design Tokens</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>--text</code></td><td>Primary text color</td></tr>
          <tr><td><code>--bg</code></td><td>Page background color</td></tr>
          <tr><td><code>--accent</code></td><td>Primary accent color</td></tr>
          <tr><td><code>--shadow</code></td><td>Elevation token</td></tr>
          <tr><td><code>--sans</code></td><td>Body font family</td></tr>
          <tr><td><code>--heading</code></td><td>Heading font family</td></tr>
          <tr><td><code>--mono</code></td><td>Code font family</td></tr>
        </tbody>
      </table>
    </section>
  );
}
