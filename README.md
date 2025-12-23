# alx-project-0x00-setup
A Next.js project.

# ALX Project 0x00 – Next.js Setup

## Objective
This project demonstrates how to scaffold a Next.js application using the `create-next-app` CLI tool with predefined options.

## Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
- ESLint

## Project Setup

### Create the Project
```bash
npx create-next-app@latest alx-project-0x00 --typescript

## Basic Routing

This project uses the Next.js Pages Router. Routes are created by adding files
to the `pages/` directory.

- `/` → Home page (`pages/index.tsx`)
- `/landing` → Landing page (`pages/landing.tsx`)
- `/about` → About page (`pages/about.tsx`)

## Using Components

The Card component was reused multiple times on the landing page to
demonstrate component reusability in a Next.js application.


## Rendering Components

Reusable UI components were created in the `components` directory.
These components are not yet rendered on any page and will be used
in subsequent tasks.

