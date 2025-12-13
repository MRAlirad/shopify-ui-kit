# Publishing Guide for @mra/ui-kit

This guide will help you publish your UI component library to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/) if you don't have one
2. **Enable 2FA or Create Access Token**: npm requires either:
   - **Two-Factor Authentication (2FA)** enabled on your account, OR
   - **Granular Access Token** with publish permissions
3. **Login to npm**: Run `npm login` in your terminal
4. **Verify package name**: The package name `@mra/ui-kit` is a scoped package. Make sure you own the `@mra` scope or use a different scope/name

## Package Configuration

The package is configured with:
- **Entry points**: 
  - CommonJS: `dist/index.js`
  - ES Modules: `dist/index.mjs`
  - TypeScript types: `dist/index.d.ts`
  - Styles: `dist/index.css`
- **Build command**: `npm run build` (runs TypeScript compilation and Rollup bundling)
- **Auto-build before publish**: `prepublishOnly` script ensures the package is built before publishing

## Publishing Steps

### 1. Build the Package

First, make sure everything builds correctly:

```bash
npm run build
```

This will:
- Compile TypeScript files
- Generate type definitions
- Bundle the library using Rollup
- Copy CSS files to dist

### 2. Test the Build Locally (Optional but Recommended)

You can test your package locally before publishing:

```bash
# In your ui-kit directory
npm pack

# This creates a .tgz file. You can install it in another project:
# cd ../test-project
# npm install ../ui-kit/@mra-ui-kit-0.1.0.tgz
```

### 3. Check Package Contents

Verify that the `dist` folder contains:
- `index.js` (CommonJS bundle)
- `index.mjs` (ES Module bundle)
- `index.d.ts` (TypeScript declarations)
- `index.css` (Styles)
- All `.d.ts` files for your components

### 4. Update Version (if needed)

Update the version in `package.json`:

```bash
npm version patch   # 0.1.0 -> 0.1.1 (bug fixes)
npm version minor   # 0.1.0 -> 0.2.0 (new features)
npm version major   # 0.1.0 -> 1.0.0 (breaking changes)
```

Or manually edit the version in `package.json`.

### 5. Publish to npm

#### For Public Package:
```bash
npm publish --access public
```

(Scoped packages like `@mra/ui-kit` are private by default. Use `--access public` to make it public.)

#### For Private Package:
```bash
npm publish
```

Note: Private packages require a paid npm account.

### 6. Verify Publication

Check your package on npm:
```
https://www.npmjs.com/package/@mra/ui-kit
```

## Using the Published Package

After publishing, others can install it:

```bash
npm install @mra/ui-kit
```

Then in their code:

```typescript
// Import components
import { Button, Card, Input } from '@mra/ui-kit';

// Import styles (requires Tailwind CSS configured in the consuming project)
import '@mra/ui-kit/styles';

// Or if you have CSS exports configured differently:
import '@mra/ui-kit/dist/index.css';
```

## Important Notes

1. **Tailwind CSS**: Since your components use Tailwind CSS, consumers need to have Tailwind configured in their project. The CSS file contains Tailwind directives that need to be processed.

2. **Peer Dependencies**: Make sure consumers install the peer dependencies listed in `package.json`. These won't be installed automatically.

3. **CSS Import**: The CSS file uses Tailwind directives. Consumers should import the CSS and ensure their Tailwind configuration processes files from `node_modules/@mra/ui-kit`.

4. **Scoped Packages**: If you need to use a different scope or name, update the `name` field in `package.json` before publishing.

## Troubleshooting

### 403 Forbidden - Two-factor authentication required

If you see this error:
```
403 Forbidden - Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages
```

You have two options:

#### Option 1: Enable 2FA on npm (Recommended)

1. Go to [npm account settings](https://www.npmjs.com/settings/your-username/two-factor-auth)
2. Enable Two-Factor Authentication (2FA)
3. You can use an authenticator app (like Google Authenticator) or SMS
4. After enabling, when you run `npm publish`, you'll be prompted for the 2FA code
5. Try publishing again: `npm publish --access public`

#### Option 2: Create a Granular Access Token

1. Go to [npm tokens page](https://www.npmjs.com/settings/your-username/tokens)
2. Click "Generate New Token" → "Granular Access Token"
3. Configure the token:
   - **Token name**: e.g., "Publish @mra/ui-kit"
   - **Expiration**: Choose your preferred expiration
   - **Select packages**: Choose `@mra/ui-kit` or all packages
   - **Permissions**: Enable "Publish"
   - **Bypass 2FA**: Enable this option (this is the key setting)
4. Copy the token (you won't see it again!)
5. Use the token instead of password:
   ```bash
   npm login
   # Username: your-username
   # Password: (paste your token here, not your password)
   # Email: your-email
   ```
6. Try publishing again: `npm publish --access public`

### Other Common Issues

- **"Package name already exists"**: Choose a different name or scope
- **"You must verify your email"**: Verify your npm account email
- **"Not authorized"**: Make sure you're logged in with `npm login`
- **Build errors**: Check TypeScript and Rollup configuration

## Continuous Publishing

For automated publishing, consider using:
- GitHub Actions
- Semantic Release
- Changesets

These tools can help automate versioning and publishing based on commit messages or PR labels.

