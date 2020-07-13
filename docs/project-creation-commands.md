# Project creation commands

[⬅️ README](../README.md)

## Steps

1. creation command:

`npx create-nx-workspace nx-gatsby`

2. add the gatsby dev dependency to the nx workspace:

`npm i --save-dev @nrwl/gatsby gatsby-cli`

3. create the gatsby site (named as gastby) inside of the nx workspace:

`nx generate @nrwl/gatsby:app gatsby` or `nx g @nrwl/gatsby:app gatsby`

4. running the created (gatsby) site:

`nx serve gatsby`

> to test the production version run it with the flag `--prod`

`nx serve --prod gatsby`

5. add the react dev dependency to the nx workspace:

`npm i --save-dev @nrwl/react`

6. create a react application (named as app) inside of the nx workspace:

`nx generate @nrwl/react:app app` or `nx g @nrwl/react:app app`

7. runninc the created (app) application:

`nx serve app`

8. create a reusable components library:

`nx generate @nrwl/react:lib components` or `nx g @nrwl/react:lib components`

9. create a page title component inside of the components library:

`nx generate @nrwl/react:component --project=components page-title` or `nx g @nrwl/react:component --project=components page-title`

10. check the dependencies graph

`nx dep-graph`
