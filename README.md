# PaulShields.dev

[![CircleCI](https://circleci.com/gh/Pkshields/PaulShields.dev.svg?style=shield)](https://circleci.com/gh/Pkshields/PaulShields.dev)

This is simply the source and GitHub Pages repo for my portfolio website, [PaulShields.dev](https://paulshields.dev).

For the repository containing the hosted version of the site, check [here](https://github.com/Pkshields/pkshields.github.io).

## Development

#### Run local server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Lint the source files

Run a static analysis check over the source files by executing `ng lint`.

## Deployment

Deployment _should not_ be done via a local dev machine and should only executed by the [CI server](https://circleci.com/gh/Pkshields/PaulShields.dev). Any commits to the `master` branch will trigger a GitHub Pages deployment and will push the latest website to the [the appropriate repository](https://github.com/Pkshields/pkshields.github.io). The deployment key, as well as other deployment configuration options, are stored as environment variables against the project on the CI server.

## Projects

The Projects page on this website is structured slightly differently from the others. This website (and repo) contains the screenshots and a text description of each project I have available, but each project links "externally" to its own git repository for its source code and associated resources. How that project structures its resources depends on where the repository is hosted.

### GitHub

- The Project page will link directly to the repository on GitHub, if it is open source.
- Any compiled binaries, demo projects etc. that are available to download are uploaded directly to the repository via a [release](https://help.github.com/en/articles/creating-releases), which can then linked to directly by Project on the website.
- Any web resources such as documentation or a web page based game is provided using a [project based GitHub Pages site](https://pages.github.com/).

### BitBucket

- The Project page will link directly to the repository on BitBucket, if it is open source.
- Any compiled binaries, demo projects etc. that are available to download are uploaded directly to the repository's [Downloads](https://bitbucket.org/blog/new-feature-downloads) page, which can then then linked to directly by Project on the website.
- Any web resources such as documentation or a web page based game is hosted by [Surge](https://surge.sh/), check [this repository](https://bitbucket.org/Pkshields/paulshields.dev-archive/) for more information.
