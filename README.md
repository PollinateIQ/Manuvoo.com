# Manuvoo - Modern Food Service Platform

A comprehensive food service management platform built with React, TypeScript, and Vite.

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Add newsletter section and netlify config"
   git push
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and log in
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify to access your repository
   - Select your repository (ManuvooNew)

3. **Configure build settings** (these should auto-fill from netlify.toml):
   - Build command: `chmod +x netlify-build.sh && ./netlify-build.sh`
   - Publish directory: `dist`
   - Click "Deploy site"

That's it! Netlify will automatically:
- Install Bun
- Install dependencies using Bun
- Build your project with Bun
- Deploy your site
- Give you a live URL

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (first time)
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Using Bun Instead of npm

If you prefer to use Bun for deployment, update the `netlify.toml` file:

```toml
[build]
  command = "bun run build"
  publish = "dist"
  
[build.environment]
  NODE_VERSION = "20"
```

## Local Development

### With npm:
```bash
npm install
npm run dev
```

### With Bun:
```bash
bun install
bun run dev
```

## Build for Production

```bash
npm run build
# or
bun run build
```

The build output will be in the `dist` directory.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
