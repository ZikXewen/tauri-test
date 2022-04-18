# Tauri-React Test

Testing Tauri with Vite, React, Typescript

By [ZikXewen](https://github.com/ZikXewen). Inspired by [elibro](https://www.youtube.com/watch?v=BbZmLXBDGnU).

## How Did We Get Here?

1. Clone or Follow the instructions in [ Template branch](https://github.com/ZikXewen/tauri-test/tree/template).

2. Make some changes to `src-tauri/tauri.config.json` to minimize the size of our bundle.

   ```
   "allowlist": {
      "notification": {
         "all": true
      }
   }
   ```

3. Add tailwind and tailwind-scrollbar plugin.

   ```
   yarn add -D tailwindcss postcss autoprefixer tailwind-scrollbar
   npx tailwindcss init -p
   ```

4. Configure `tailwind.config.js`

   ```
   module.exports = {
      content: ['index.html', './src/**/*.tsx'],
      theme: {
         extend: {},
      },
      plugins: [require('tailwind-scrollbar')],
   }
   ```

5. Reformat the whole `src` directory. Apart from `src/vite-env.d.ts`

   - `src/index.css` enables tailwind. Imported by `src/main.tsx`

   - `src/App.tsx` contains examples of Tauri's notification API and Tailwind.
