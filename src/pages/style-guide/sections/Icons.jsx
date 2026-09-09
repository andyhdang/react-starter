const icons = [
  { name: "Search", path: "m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" },
  { name: "Menu", path: "M4 6h16M4 12h16M4 18h16" },
  { name: "Close", path: "m6 6 12 12M18 6 6 18" },
  { name: "Chevron down", path: "m6 9 6 6 6-6" },
  { name: "Arrow left", path: "M19 12H5m6 6-6-6 6-6" },
  { name: "Arrow right", path: "M5 12h14m-6-6 6 6-6 6" },
  { name: "Plus", path: "M12 5v14M5 12h14" },
  { name: "Check", path: "m5 12 4 4L19 6" },
  { name: "Edit", path: "m4 20 4.5-1 10-10a2.12 2.12 0 0 0-3-3l-10 10L4 20Zm10.5-13.5 3 3" },
  { name: "Delete", path: "M4 7h16M10 11v6m4-6v6M9 7l1-3h4l1 3m-9 0 1 13h10l1-13" },
  { name: "Home", path: "m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z" },
  { name: "User", path: "M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
  { name: "Bell", path: "M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" },
  { name: "Heart", path: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" },
  { name: "Info", path: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-11v5m0-8h.01" },
  { name: "External link", path: "M14 4h6v6m0-6-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" },
  { name: "Download", path: "M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" },
  { name: "Upload", path: "M12 15V3m0 0 4 4m-4-4-4 4M5 21h14" },
  { name: "Calendar", path: "M6 2v4m12-4v4M4 9h16M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" },
  { name: "Settings", path: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.4-3.5a7.5 7.5 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1l-.4-2.6h-4l-.4 2.6a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.5 7.5 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 2.6h4l.4-2.6a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" },
];

export default function Icons() {
  return (
    <section aria-labelledby="icons-heading">
      <h2 id="icons-heading">Icons</h2>
      <p>Common UI icons use a consistent 24px stroke style and inherit the surrounding text color.</p>
      <div className="icon-grid">
        {icons.map(({ name, path }) => (
          <div className="icon-card" key={name}>
            <svg aria-hidden="true" className="icon-preview" viewBox="0 0 24 24">
              <path d={path} />
            </svg>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
