# Calc-Web Nuxt Monorepo Demo

This is a for fun minimal copy of calc-web created using Nuxt3
Its using PNPM's workspace monorepo for fun. Its also using VueUse just for the sake of playing around.

## Structure
There are two packages in this pnpm workspace, `ui` and `app`:
### ui
A UI Layer. Its a basic nuxt app with no routes, no pages no functions.
Just some components using Tailwind and DaisyUI

### app
The actual app, which extends/consumes the UI layer.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm app dev
```

## Production

Build the application for production:
This will bundle for AWS Lambda. See app's `nuxt.config.ts` nitro preset for more info.

```bash
# pnpm
pnpm build
```
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
