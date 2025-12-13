# @mralirad/ui-kit

A React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @mralirad/ui-kit
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

**For Tailwind CSS v3:**

If you're using Tailwind CSS v3, install it normally:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind to Process the Library

Add the library's CSS to your Tailwind content configuration.

**Tailwind CSS v4:**

In your main CSS file (e.g., `src/index.css` or `src/app.css`), import the library styles:

```css
@import "tailwindcss";
@import "@mralirad/ui-kit/styles";
```

Or if you prefer to import it in your JavaScript/TypeScript:

```typescript
import "@mralirad/ui-kit/styles";
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

```typescript
import { Button, Card, Input, Table } from '@mralirad/ui-kit';

function App() {
  return (
    <Card title="Welcome">
      <Input label="Name" />
      <Button color="blue" text="Submit" />
    </Card>
  );
}
```

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

```typescript
import React from 'react';
import { Button, Card, Input } from '@mralirad/ui-kit';
import '@mralirad/ui-kit/styles'; // Don't forget this!

function App() {
  return (
    <Card title="Example Form">
      <Input label="Email" type="email" />
      <Button color="blue" text="Submit" />
    </Card>
  );
}
```

## Styling

The library includes its own Tailwind CSS classes. Make sure:

1. ✅ Tailwind CSS is installed and configured
2. ✅ The library styles are imported (`import '@mralirad/ui-kit/styles'`)
3. ✅ Your Tailwind config includes the library in the content paths (for v3)
4. ✅ Your build process processes the CSS through Tailwind

## Troubleshooting

### Styles Not Appearing

If styles are not appearing:

1. **Check Tailwind is processing the CSS**: Make sure your Tailwind build process is running
2. **Import the styles**: Don't forget to import `@mralirad/ui-kit/styles` in your entry file
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
