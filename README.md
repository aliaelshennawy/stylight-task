## What does this workflow provide

* Initialize development server using BrowserSync.
* Automatically refresh and reload the browser when assets change.
* Build HTML templates using pug.
* Use PostCSS plugins to speed up your work with CSS. The styles directory and files are follows the architecure descriped by Harry Roberts; [ITCSS](https://itcss.io/). This workflow is configured with the following PostCSS plugins
  * PostCSS dir pseudo class
  * PostCSS import
  * PostCSS logical
  * PostCSS nested
  * PostCSS preset-env
  * PostCSS reporter
  * PostCSS retina-bg-img
* Images optimization through imagemin
* Copying static assets (like images and fonts) from source to final dist directory.
* Generate SVG sprites from the images you provide.
* Babel configured, just drop in the plugins you want to use.
* ESling and prettier
* Git hooks through Husky and Lint staged
* Commit messages forced to follow [Conventional commits](https://conventionalcommits.org).

### Available tasks

These scripts can be run by `yarn SCRIPT_NAME` or `npm run SCRIPT_NAME`. They're available in `package.json` with key: `scripts`

* `snowpack` copies the scripts you configure from `node_modules` to `web_modules`. You will need to run this command every time you install a new dependency
* `test` run the workflow unit tests. You probably will need to override this with your own tests.
* `dev` starts the development server.
* `build` run the necessary scripts to build your application.

## Runing The Application
* Choose from the dropdown the currency you want to convert to
* Write the conversion ammount
* History is saved in local storage so when ever you refresh the page all latest conversions would appear
