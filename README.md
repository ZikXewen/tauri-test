# Tauri-React Template

Barebone of Tauri-React compatibility.

By [ZikXewen](https://github.com/ZikXewen). Inspired by [elibro](https://www.youtube.com/watch?v=BbZmLXBDGnU).

## How Did We Get Here?

1. Install Tauri [prerequisites](https://tauri.studio/docs/getting-started/prerequisite)

2. Install yarn.

   `npm i -g yarn`

3. Create a React project with Vite.

   `yarn create vite . --template react-ts`

4. Initiate Tauri.

   `yarn add -D @tauri-apps/cli && yarn tauri init`

5. Install cross-env (to make Vite runs without browser).

   `yarn add -D cross-env`

6. Cleanup installments.

   `yarn`

7. Make changes to `package.json`

   ```
   "scripts": {
      "dev": "tauri dev",
      "build": "tauri build",
   }
   ```

8. Make changes to `src-tauri/tauri.conf.json`

   ```
   "build": {
      "distDir": "../dist",
      "devPath": "http://localhost:3000",
      "beforeDevCommand": "yarn cross-env BROWSER=none vite",
      "beforeBuildCommand": "tsc && vite build"
   },
   ```

9. To develop, run `yarn dev`

10. To build a release installer, run `yarn build`
