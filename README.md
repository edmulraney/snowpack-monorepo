# Snowpack monorepo

> ✨ POC repo demonstrating tsc project reference problems.

# Pre requisite
To see the issues with `tsc` project references you need to patch `node_modules/@snowpack/plugin-typescript` to remove `--noEmit`
```
-        `${tsc ? tsc : 'tsc'} ${args ? args : ''} --noEmit ${isDev ? '--watch' : ''}`,
+        `${tsc ? tsc : 'tsc'} ${args ? args : ''} ${isDev ? '--watch' : ''}`,
```
# TS issues with TypeScript project references
- `tsc --build` can't correctly display anything other than the *latest* TS issue (they get cached or not displayed): https://github.com/edmulraney/project-references-demo
- `snowpack dev` works the same way `tsc --build --watch` does. 


# Normal README:
## TLDR; demo packages
- `components` - a UI component library
- `launch-kit` - a "framework" which uses `components` 
- `app` - an application which uses the `launch-kit` framework
- `typescript-config` - shared Typescript config
- `prettier-config` - shared Prettier config

This monorepo uses React Fast Refresh, which allows hot module reloading while preserving state. The running `app` will be fast refreshed even if your code change comes from `components` (which isn't a direct dependency of `app`).

![image](https://user-images.githubusercontent.com/5167260/106462300-cb5d7c80-648d-11eb-9dd0-2aa95f8073d2.png)
This screenshot shows HMR updates coming from the different packages while the countdown timer state is preserved.

## Scripts

### yarn install

Installs all dependencies and links the monorepo packages together (yarn workspaces).
### yarn start

Runs the `app` package in development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload with React fast refresh if you make edits in any of the monorepo packages.

### yarn build

Builds all packages. 
