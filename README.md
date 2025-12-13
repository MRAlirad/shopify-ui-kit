# @mralirad/ui-kit

A React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @mralirad/ui-kit
```

## Entry Points

This package provides multiple entry points for better organization and tree-shaking:

- **`@mralirad/ui-kit/components`** - All UI components
- **`@mralirad/ui-kit/helpers`** - Utility helper functions
- **`@mralirad/ui-kit`** - Main entry point (re-exports components for backward compatibility)
- **`@mralirad/ui-kit/styles`** - CSS styles file

**Recommended usage:**

```typescript
// ✅ Recommended - Import from specific entry points
import { Button, Card } from "@mralirad/ui-kit/components";
import { formatDate } from "@mralirad/ui-kit/helpers";

// ✅ Also works - Main entry point (for backward compatibility)
import { Button, Card } from "@mralirad/ui-kit";
```

## Prerequisites

This package requires the following peer dependencies. Make sure they are installed in your project:

```bash
npm install react react-dom tailwindcss classnames
```

For full functionality, you may also need:

```bash
npm install react-hook-form react-icons chart.js react-chartjs-2
# ... and other peer dependencies listed in package.json
```

## Setup

### 1. Install Tailwind CSS

This package uses Tailwind CSS v4. Make sure you have Tailwind CSS configured in your project.

**For Tailwind CSS v4 (Recommended):**

Install Tailwind CSS v4:

```bash
npm install -D tailwindcss@next @tailwindcss/vite
```

Add to your `vite.config.ts` (or `vite.config.js`):

```typescript
import tailwindcss from "@tailwindcss/vite";

export default {
	plugins: [
		// ... other plugins
		tailwindcss(),
	],
};
```

**Important for Tailwind v4:**

The library components use Tailwind utility classes directly in their JSX (like `grid`, `flex`, `gap-4`, `text-xl`, etc.). For these classes to be included in your build, you have two options:

**Option 1: Configure Tailwind to scan library files (Recommended)**

The library components use Tailwind utility classes (like `grid`, `flex`, `gap-4`, `text-xl`, etc.). Tailwind needs to scan these files to include the classes.

Create or update `tailwind.config.js` in your project root:

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		// Add this to scan the library's bundled files
		"./node_modules/@mralirad/ui-kit/dist/**/*.{js,mjs}",
	],
};
```

**Option 2: Use safelist pattern (Alternative)**

If you can't configure content paths, use a safelist pattern in `tailwind.config.js`:

```js
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
		// Pattern matching for common utility classes used by library
		{ pattern: /^(grid|flex|gap-|px-|py-|text-|bg-|border-|items-|justify-)/ },
		// Custom component classes
		"card",
		"btn",
		"skeleton",
	],
};
```

**Important:** Even with Tailwind v4's `@tailwindcss/vite` plugin, you may need to explicitly configure content paths to scan `node_modules` for utility classes used in bundled components.

**For Tailwind CSS v3:**

If you're using Tailwind CSS v3, install it normally:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Import the Library Styles

**Tailwind CSS v4 (Important!):**

For Tailwind v4, you **must** import the styles in your **main CSS file**, not as a JavaScript import. This ensures Tailwind processes the library's CSS directives.

In your main CSS file (e.g., `src/index.css` or `src/app.css`):

```css
@import "tailwindcss";
@import "@mralirad/ui-kit/styles";
```

**Do NOT import it in JavaScript/TypeScript** like this (this won't work properly):

```typescript
// ❌ This may not process Tailwind directives correctly
import "@mralirad/ui-kit/styles";
```

**Correct way - Import in your CSS file:**

```css
/* src/index.css or src/app.css */
@import "tailwindcss";
@import "@mralirad/ui-kit/styles";

/* Your other styles... */
```

Then import your CSS file in your main entry point (e.g., `main.tsx` or `main.jsx`):

```typescript
import "./index.css"; // This imports both Tailwind and the library styles
```

**Tailwind CSS v3:**

In your `tailwind.config.js`, add the library to your content paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		// Add this line to scan the library
		"./node_modules/@mralirad/ui-kit/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Then import the styles in your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@mralirad/ui-kit/styles";
```

Or in your JavaScript/TypeScript entry point:

```typescript
import "@mralirad/ui-kit/styles";
```

### 3. Use Components

**Import components from the components entry point:**

```typescript
import { Button, Card, Input, Table } from '@mralirad/ui-kit/components';

function App() {
  return (
    <Card title="Welcome">
      <Input label="Name" />
      <Button color="blue" text="Submit" />
    </Card>
  );
}
```

**Import helpers from the helpers entry point:**

```typescript
import { formatDate, formatNumber } from "@mralirad/ui-kit/helpers";
```

**Note:** You can also import from the main entry point (`@mralirad/ui-kit`) for backward compatibility, but using specific entry points is recommended for better tree-shaking.

## Available Components

- Accordion
- Alert
- Badge
- Breadcrumb
- Button
- Card
- Chart
- Checkbox
- DatePicker
- Input
- Modal
- Pagination
- Select
- Table
- Tabs
- Textarea
- Toggle
- ... and more

## Full Example

**1. Create/Update your CSS file** (`src/index.css`):

```css
@import "tailwindcss";
@import "@mralirad/ui-kit/styles";
```

**2. Import CSS in your entry point** (`src/main.tsx` or `src/main.jsx`):

```typescript
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Imports Tailwind + library styles
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use components** (`src/App.tsx`):

```typescript
import { Button, Card, Input } from '@mralirad/ui-kit/components';

function App() {
  return (
    <Card title="Example Form">
      <Input label="Email" type="email" />
      <Button color="blue" text="Submit" />
    </Card>
  );
}

export default App;
```

**Or import helpers:**

```typescript
import { formatDate, formatNumber } from "@mralirad/ui-kit/helpers";
```

## Styling

The library includes its own Tailwind CSS classes. Make sure:

1. ✅ Tailwind CSS is installed and configured
2. ✅ The library styles are imported (`import '@mralirad/ui-kit/styles'`)
3. ✅ Your Tailwind config includes the library in the content paths (for v3)
4. ✅ Your build process processes the CSS through Tailwind

## Troubleshooting

### Styles Not Appearing (Tailwind v4)

**Common Issue:** Utility classes from components (like `grid`, `flex`, `gap-4`) not working.

**Solutions for Tailwind v4:**

1. **Import in CSS file, not JavaScript**: Make sure you're importing in your CSS file:

    ```css
    /* ✅ Correct - in src/index.css */
    @import "tailwindcss";
    @import "@mralirad/ui-kit/styles";
    ```

    ```typescript
    // ❌ Wrong - Don't import CSS in TypeScript/JavaScript
    // import "@mralirad/ui-kit/styles";
    ```

2. **Check import order**: The library import should come **after** `@import "tailwindcss"`:

    ```css
    @import "tailwindcss"; /* Must be first */
    @import "@mralirad/ui-kit/styles"; /* Then library */
    ```

3. **Configure Tailwind to scan library files**: Tailwind v4 needs to scan the library's bundled files to detect utility classes.

    **For Vite projects**, update your `vite.config.ts` to configure the Tailwind plugin:

    ```typescript
    import tailwindcss from "@tailwindcss/vite";

    export default {
    	plugins: [
    		tailwindcss({
    			// This ensures Tailwind scans the library files
    		}),
    	],
    };
    ```

    **Or create/update `tailwind.config.js`** (Tailwind v4 still supports this):

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
    	content: [
    		"./index.html",
    		"./src/**/*.{js,ts,jsx,tsx}",
    		// Add this to scan the library's bundled files
    		"./node_modules/@mralirad/ui-kit/dist/**/*.{js,mjs}",
    	],
    };
    ```

4. **Verify Vite plugin**: Make sure `@tailwindcss/vite` is installed and in your `vite.config.ts`

5. **Restart dev server**: After changing configuration, restart your Vite dev server

6. **Check build output**: In production builds, verify the CSS includes the utility classes

7. **Alternative: Use safelist** (if scanning doesn't work):

    Create `tailwind.config.js`:

    ```js
    export default {
    	content: ["./src/**/*.{js,ts,jsx,tsx}"],
    	safelist: [
    		// Common utility classes used by library components
    		{ pattern: /^(grid|flex|gap-|px-|py-|text-|bg-|border-)/ },
    		"card",
    		"btn",
    	],
    };
    ```

### General Troubleshooting

1. **Check Tailwind is processing the CSS**: Make sure your Tailwind build process is running
2. **Import the styles**: Don't forget to import in your CSS file (not JS/TS)
3. **Check content paths**: For Tailwind v3, ensure the library is in your `content` array
4. **Verify Tailwind version**: This library works best with Tailwind CSS v4, but v3 should also work

### Build Errors

If you get build errors related to Tailwind:

- Make sure `tailwindcss` is installed as a dev dependency
- Check that your Tailwind configuration is correct
- Ensure the CSS import is in the correct location (usually your main entry file)

## License

MIT

## Repository

[GitHub](https://github.com/MRAlirad/shopify-ui-kit)
