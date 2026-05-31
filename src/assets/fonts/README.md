# 🔤 Custom Fonts Setup

This folder is the home for all locally hosted custom fonts for this application. We prefer local fonts over third-party services (like Google Fonts) for better privacy, offline support, and performance.

## How to add a custom font

### 1. Add your font files

Drop your font files into this directory.

- **Highly Recommended:** Use `.woff2` format for the best compression and modern browser support.

### 2. Define the `@font-face` in your CSS

Open `src/index.css` and add your font declarations at the very top of the file (under the "LOCAL FONTS" section). Remember to use a leading slash `/` for the URL so it points to this public folder.

\`\`\`css
@font-face {
font-family: 'MyNewFont';
src: url('/fonts/myfont-regular.woff2') format('woff2');
font-weight: 400;
font-style: normal;
font-display: swap;
}
\`\`\`

### 3. Update the CSS Variables

In the same `index.css` file, add your new `font-family` name to the front of the relevant system font stack in the `:root` variables:

\`\`\`css
:root {
--sans: 'MyNewFont', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
--heading: 'MyNewFont', var(--sans);
}
\`\`\`

### 4. Preload the font (Crucial for Performance)

To prevent a flash of unstyled text (FOUT), tell the browser to download your main font immediately. Open the root `index.html` file and add a `<link rel="preload">` tag inside the `<head>`:

\`\`\`html

<link rel="preload" href="/fonts/myfont-regular.woff2" as="font" type="font/woff2" crossorigin>
\`\`\`
*(Note: Only preload your 1 or 2 most important fonts, usually the regular weight and the bold weight. Preloading too many fonts will actually slow the site down!)*
