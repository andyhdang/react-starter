import { NavLink, Outlet } from "react-router-dom";
import "./StyleGuide.css";

const sections = [
  { id: "typography", label: "Typography" },
  { id: "monospace", label: "Monospace Styles" },
  { id: "media", label: "Media Defaults" },
  { id: "elevation", label: "Elevation" },
  { id: "accessibility", label: "Accessibility" },
  { id: "tokens", label: "Design Tokens" },
  { id: "icons", label: "Icons" },
  { id: "motion", label: "Motion" },
];

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

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label="Style guide sections">
          <p className="docs-sidebar-label">Sections</p>
          <nav>
            <ul>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <NavLink to={id}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="docs-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
