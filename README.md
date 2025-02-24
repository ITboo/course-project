# FormCraft
## FormCraft - the final course project of iTransition Group. An application for creating custom forms and filling out forms created by other users.
![formcraft](https://github.com/user-attachments/assets/41769d6d-4a4e-4585-a030-353a5663c10a)

The application includes:

- Registration and authorization

- Viewing all forms (unauthorized users can only view forms in read-only mode)

- A table with the best forms (based on the number of completions)

- Search by title

- A form builder that supports various types of fields

- Preview mode

- Localization in two languages

- Theme switching

- The ability for an administrator to block a form

## Technology stack: 
TypeScript, React, Node.js, Express, tRPC, Clerk, Formik, zod

## How to start
1. Copy this repo
2. Switch branch to `main`
3. Install dependencies by `npm install`
4. To start backend in dev mode `cd apps/backend && npm run dev`
5. To start frontend in dev mode `cd apps/frontend && npm run dev`

Note: there some monorepo issues with build mode, so I can't deploy it to Render ( due to circular dependencies or so). So, if it possible, check it in dev mode, please.
