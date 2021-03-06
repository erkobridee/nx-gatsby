# Project creation commands

[⬅️ README](../README.md)

## Steps

1. creation command:

`npx create-nx-workspace nx-gatsby`

2. add the gatsby dev dependency to the nx workspace:

`npm i --save-dev @nrwl/gatsby gatsby-cli`

3. create the gatsby site (named as gastby) inside of the nx workspace:

```
nx generate @nrwl/gatsby:app gatsby
nx g @nrwl/gatsby:app gatsby

npm run nx ...
npx nx ...
```

4. running the created (gatsby) site:

`nx serve gatsby`

> to test the production version run it with the flag `--prod`

`nx serve --prod gatsby`

5. add the react dev dependency to the nx workspace:

`npm i --save-dev @nrwl/react`

6. create a react application (named as app) inside of the nx workspace:

```
nx generate @nrwl/react:app app
nx g @nrwl/react:app app

npm run nx ...
npx nx ...
```

7. runninc the created (app) application:

`nx serve app`

8. create a reusable components library:

`nx generate @nrwl/react:lib components` or `nx g @nrwl/react:lib components`

9. create a page title component inside of the components library:

```
nx generate @nrwl/react:component --project=components page-title
nx g @nrwl/react:component --project=components page-title

npm run nx ...
npx nx ...
```

10. check the dependencies graph

`nx dep-graph`

11. create an assets library

```
nx generate @nrwl/workspace:lib assets
nx g @nrwl/workspace:lib assets

npm run nx ...
npx nx ...
```

useful reference: [[YouTube] 9. Shared assets library and nx.json - Nx Workspaces Course, by Nrwl](https://youtu.be/LYjX2V-eQa8), the code of the example is available on the [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

after define the files structure inside of the library folder:

- update the `tsconfig.json` to expose the full content of the lib
- update `nx/enforce-module-boundaries` on `.eslintrc` and `tslint.json` to allow `@nx-gatsby/assets`
- update the lib config on the `workspace.json`
- update the `app` config on the `workspace.json` to map the `assets` library
- update the `nx.json` to map the `assets` lib as an implicity dependency of the `app` and `gatsby` applications
- update the `gatsby-config.js` on the `gatsby` application
  - to map the assets from the `libs/assets`
  - install the plugin `gatsby-plugin-root-import` and map the `libs/assets` with the alias `@nx-gatsby/assets`
