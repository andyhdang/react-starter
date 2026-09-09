const motionGuidelines = [
  ["Fast", "150ms", "Hover states and small feedback"],
  ["Standard", "250ms", "Panels, menus, and state changes"],
  ["Emphasized", "400ms", "Entrances and attention-guiding motion"],
];

const cssProperties = [
  ["transition-property", "Selects the property that transitions.", "transform"],
  ["transition-duration", "Sets how long the transition runs.", "150ms"],
  ["transition-timing-function", "Controls the rate of change.", "ease-out"],
  ["transition-delay", "Waits before a transition begins.", "75ms"],
  ["transform", "Moves, scales, rotates, or skews without changing layout.", "translateY(-4px)"],
  ["opacity", "Fades an element in or out.", "0 to 1"],
  ["animation", "Applies a named keyframe animation.", "pulse 1s ease-in-out infinite"],
];

const motionSteps = [
  {
    title: "Define the purpose",
    context: "Motion is communication, not decoration. Before specifying an effect, connect it to a change in the interface: where something came from, what changed, whether an action succeeded, or whether work is still happening.",
    guidance: "Write the intended message in plain language. If the message is already clear without movement, motion may be unnecessary.",
    question: "What does this movement help someone understand or do?",
  },
  {
    title: "Set the hierarchy",
    context: "People notice movement before much of the surrounding detail. A motion system should therefore establish a visual hierarchy just as type and color do.",
    guidance: "Reserve the strongest transitions for high-priority changes, such as a new panel or completed task. Keep hover and routine state changes subtle.",
    question: "Does this motion guide attention to the right place, or compete with more important content?",
  },
  {
    title: "Choose timing and easing",
    context: "Duration signals scale and distance: a small button state should resolve quickly, while a large surface can take slightly longer. Easing gives the transition character and helps it avoid feeling mechanical.",
    guidance: "Start with a small shared duration scale and a limited set of curves. Use an ease-out for entrances and feedback; avoid bouncy or elastic effects unless they clearly support the brand.",
    question: "Is it responsive, understandable, and natural for this element and its context?",
  },
  {
    title: "Design for interruption",
    context: "Interfaces are rarely experienced one action at a time. A person can click again, change their mind, or navigate away while an animation is running.",
    guidance: "Make state changes interruptible and ensure the latest intent wins. Avoid queues of delayed animations that leave the interface feeling behind the user.",
    question: "If someone acts again before it ends, does the interface respond immediately and predictably?",
  },
  {
    title: "Build accessibly",
    context: "Vestibular disorders, migraines, and attention differences can make certain movement uncomfortable or disorienting. Motion must not be the only way to convey essential information.",
    guidance: "Respect the reduced-motion preference, remove nonessential motion, and avoid flashing, large-scale parallax, and auto-playing loops. Retain clear static states and text feedback.",
    question: "Can someone still use and understand this experience with motion reduced or removed?",
  },
  {
    title: "Protect performance",
    context: "Jank changes how motion feels and can make an otherwise polished interaction frustrating. Performance is part of the experience, especially on lower-powered devices and constrained networks.",
    guidance: "Prefer animating transform and opacity, limit simultaneous effects, and test realistic pages rather than isolated prototypes.",
    question: "Does this remain smooth in the most demanding real-world scenario?",
  },
  {
    title: "Document and review",
    context: "A system is useful when it lets teams make compatible decisions without starting from scratch. Shared vocabulary makes critique more precise and implementation more reliable.",
    guidance: "Document the pattern's purpose, duration, easing, reduced-motion behavior, and interruption rules. Review motion in context with design, engineering, and accessibility partners.",
    question: "Would this motion feel familiar to someone using another part of the site?",
  },
];

export default function Motion() {
  return (
    <section aria-labelledby="motion-heading">
      <h2 id="motion-heading">Motion</h2>
      <p>Use motion to clarify changes and guide attention. Keep it purposeful, quick, and subtle.</p>

      <div className="motion-grid">
        <div className="motion-card">
          <div className="motion-demo motion-demo-enter" aria-hidden="true">
            <span />
          </div>
          <h3>Entrance</h3>
          <p>Fade and lift new content into view.</p>
        </div>
        <div className="motion-card">
          <div className="motion-demo" aria-hidden="true">
            <span className="motion-demo-hover" />
          </div>
          <h3>Hover feedback</h3>
          <p>Use a short transition to confirm interactivity.</p>
        </div>
        <div className="motion-card">
          <div className="motion-demo" aria-hidden="true">
            <span className="motion-demo-loading" />
          </div>
          <h3>Loading</h3>
          <p>Use restrained, continuous motion for progress.</p>
        </div>
      </div>

      <h3>Timing</h3>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Duration</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          {motionGuidelines.map(([token, duration, use]) => (
            <tr key={token}>
              <td>{token}</td>
              <td><code>{duration}</code></td>
              <td>{use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>CSS motion properties</h3>
      <p>Use transitions for changes between two states. Use keyframe animations when an effect needs multiple stages or repeats.</p>
      <h4 className="motion-subheading">Transitions</h4>
      <p>A transition defines which property changes, how long it takes, its easing curve, and an optional delay. Hover or focus either example to compare common UI feedback.</p>
      <div className="motion-property-grid">
        <article className="motion-property-card">
          <h4>Hover lift</h4>
          <p>Hover the button to see <code>transform</code> and <code>box-shadow</code> transition together.</p>
          <button className="motion-property-button" type="button">Hover me</button>
          <pre><code>{`.button {
  transition: transform 150ms ease-out,
    box-shadow 150ms ease-out;
}

.button:hover {
  transform: translateY(-4px);
}`}</code></pre>
        </article>
        <article className="motion-property-card">
  <h4>Color and focus</h4>
  <p>This control transitions its background and text color, while keeping the keyboard focus indicator visible.</p>
  <button className="motion-property-button motion-property-button-secondary" type="button">Focus me</button>
  <pre><code>{`.button {
  transition: background-color 150ms ease-out,
    color 150ms ease-out;
}

.button:hover,
.button:focus-visible {
  background-color: var(--accent);
}`}</code></pre>
        </article>
      </div>

      <h4 className="motion-subheading">Keyframe animations</h4>
      <div className="motion-property-grid">
        <article className="motion-property-card">
  <h4>Loading indicator</h4>
  <p>This loading indicator repeats a named animation with a linear timing function.</p>
  <div className="motion-property-spinner" aria-label="Loading example" role="status" />
          <pre><code>{`.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`}</code></pre>
        </article>
      </div>
      <table className="motion-property-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>What it controls</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {cssProperties.map(([property, description, example]) => (
            <tr key={property}>
              <td><code>{property}</code></td>
              <td>{description}</td>
              <td><code>{example}</code></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Motion design process</h3>
      <ol className="motion-process">
        {motionSteps.map(({ title, context, guidance, question }, index) => (
          <li key={title}>
            <span className="motion-step-number">{index + 1}</span>
            <article>
              <h4>Chapter {index + 1}: {title}</h4>
              <p>{context}</p>
              <p>{guidance}</p>
              <p><strong>Ask:</strong> {question}</p>
            </article>
          </li>
        ))}
      </ol>

      <h3>Learn more</h3>
      <div className="motion-resources">
        <article>
          <h4>Thought leaders</h4>
          <ul>
            <li><a href="https://valhead.com/" target="_blank" rel="noreferrer">Val Head</a> writes and teaches extensively about purposeful interface animation.</li>
            <li><a href="https://www.uxinmotion.net/" target="_blank" rel="noreferrer">Issara Willenskomer</a> founded UX in Motion and developed practical frameworks for motion in product design.</li>
            <li><a href="https://sarahdrasnerdesign.com/" target="_blank" rel="noreferrer">Sarah Drasner</a> shares animation and front-end techniques for building expressive interfaces.</li>
          </ul>
        </article>
        <article>
          <h4>Reference resources</h4>
          <ul>
            <li><a href="https://www.oreilly.com/library/view/designing-interface-animation/9781491935869/" target="_blank" rel="noreferrer">Designing Interface Animation</a> by Val Head for foundations and patterns.</li>
            <li><a href="https://m3.material.io/styles/motion/overview" target="_blank" rel="noreferrer">Material Design motion</a> for a documented system of transitions and principles.</li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank" rel="noreferrer">MDN: prefers-reduced-motion</a> for implementing accessible alternatives.</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html" target="_blank" rel="noreferrer">WCAG: Animation from Interactions</a> for accessibility requirements and rationale.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
