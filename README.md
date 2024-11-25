This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Branching

All branching should be done from develop branch
Merge develop into main only when all code ready and is thorougly tested

## Code formatting

Settings are done under the assumption that you will be using Visual Studio Code as your editor.
If you are using any other editor please see here how to configure prettier https://prettier.io/docs/en/editors
If your editor does not support prettier, you can instead run Prettier with a file watcher https://prettier.io/docs/en/watching-files

### Tailwind config

A prettier extension was added to format tailwind classes always in the same way.
Keep in mind that in .prettierrc we need to keep "prettier-plugin-tailwindcss" always as the last plugin.

Another suggestion, if you are using Visual Studio Code as your editor, is to install Tailwind CSS IntelliSense.
It has helpful suggestions when writing tailwind classes.

Id: bradlc.vscode-tailwindcss
Publisher: Tailwind Labs
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
