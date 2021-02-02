# Installation

## Prerequisites

- Node Version 12 or 14
- NPM
- Yarn

## Development

Run the Headless CMS

```bash
npm install
npm run develop
```

If the `npm install` has node-gyp errors, try `rm -rf node_modules package-lock.json` and try again.

Run the NextJS Frontend

```bash
cd frontend
yarn
yarn dev
```

- Admin panel for headless CMS is at http://localhost:1337
- NextJS site is at http://localhost:3000

Styling is powered by SASS in the frontend/sass directory
