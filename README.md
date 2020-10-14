[![Netlify Status](https://api.netlify.com/api/v1/badges/7626b1d0-7d78-4818-95f2-8dd67c2b3b4e/deploy-status)](https://app.netlify.com/sites/hopeful-minsky-25f7e0/deploys)

# next-theme-terminal

This repository is a NextJS port of the popular hugo theme, [hugo-theme-terminal](https://github.com/panr/hugo-theme-terminal).

It uses [Next.js](https://nextjs.org/) v9.5.3 and was bootstrapped using
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It also includes one-click instructions on how to [deploy to Netlify](#how-to-start)
or [deploy to Vercel](https://vercel.com/docs/more/deploy-button).

This port is still under development and has not reached feature parity
with the original theme yet. See the [TODO](#todo) section for more
information on the available features.

### DEMO VERCEL - https://next-theme-terminal.vercel.app

### DEMO NETLIFY - https://hopeful-minsky-25f7e0.netlify.app/

---

## Features

- **5 duotone themes**, depending on your preferences (orange is default, red, blue, green, pink)
- [**Fira Code**](https://github.com/tonsky/FiraCode) as default monospaced font. It's gorgeous!
- **really nice duotone**, custom syntax highlighting based on [**PrismJS**](https://prismjs.com)
- fully responsive

#### Code highlighting (TODO)

A custom syntax highlighting based on PrismJS. All you need to do is to wrap you code like this:

````
```html
  // your code here
```
````

**Supported languages**: bash/shell, css, clike, javascript, apacheconf, actionscript, applescript, c, csharp, cpp, coffeescript, ruby, csp, css-extras, diff, django, docker, elixir, elm, markup-templating, erlang, fsharp, flow, git, go, graphql, less, handlebars, haskell, http, java, json, kotlin, latex, markdown, makefile, objectivec, ocaml, perl, php, php-extras, r, sql, processing, scss, python, jsx, typescript, toml, reason, textile, rust, sass, stylus, scheme, pug, swift, yaml, haml, twig, tsx, vim, visual-basic, wasm.

## How to start

**Option one:** One-click deploy on Vercel or Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/hkennyv/next-theme-terminal)

(If you click this button, it will create a new repo for you that looks
exactly like this one, and sets that repo up immediately for deployment
on Vercel)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hkennyv/next-theme-terminal)

(If you click this button, it will create a new repo for you that looks
exactly like this one, and sets that repo up immediately for deployment
on Netlify)

**Option two:** Manual clone

1. Clone this repo: `git clone git@github.com:hkennyv/next-theme-terminal.git`
2. Change directories into the repository: `cd next-theme-terminal`
3. Install the dependencies and run the development server: `yarn install && yarn dev`
4. View the site at: <http://localhost:3000>

## How to configure (TODO)

To configure the site, edit the `siteconfig.json` file. This allows you to
customize the site at build time without having to modify any code at all.

Here is a complete sample file:

```json
{
  "TODO": "copy final siteconfig.json here when done"
}
```

## Post front-matter

This project uses [gray-matter](https://github.com/jonschlinkert/gray-matter)
to parse YAML front-matter from the markdown content. You should create your
front-matter using the following structure:

```YAML
---
title: My post title
date: 2020-09-28
author: hkennyv
authorTwitter: hkennyv
cover: /images/uploads/hello.jpg
tags:
    - me
    - life
keywords:
    - blog
    - lifestyle
description: A short description of the post!
showFullContent: true
---
```

**\* note:** not all of these paramters are implemented yet, see the
[TODO](#todo) section for a table of which ones are supported

## Add-ons

TODO

## How to (safely) edit the theme

TODO

## Found a bug?

If you spot any bugs, please use [Issue Tracker](https://github.com/hkennyv/next-theme-terminal/issues) or create a new [Pull Request](https://github.com/hkennyv/next-theme-terminal/pulls) to fix the issue.

## New cool idea or feature?

I'd like to keep this mostly in parity with the original hugo theme by
[@panr](https://github.com/panr), so if you havea a feature you'd like to see,
please follow the [instructions here](https://github.com/panr/hugo-theme-terminal#new-cool-idea-or-feature-)
so we can get it into the original theme and this port will follow suit.

## License

Copyright © 2019-2020 Radosław Kozieł ([@panr](https://twitter.com/panr)) and Kenny Huynh ([@hkennyv](https://github.com/hkennyv)).

The theme is released under the MIT License. Check the [original theme license](https://github.com/hkennyv/next-theme-terminal/blob/master/LICENSE) for additional licensing information.

## TODO

Below is a list of features that have yet to be implemented in this port.
I'll try to check them off as I go with the goal of eventually reaching
parity with the original theme. Contributions welcome 😊

- [ ] finish filling out meta tags in <head>
- [ ] finish filling out README
  - [x] instructions on getting started
  - [ ] instructions for development
  - [ ] instructions on adding new content
  - [ ] customization instructions
- [ ] configuration parity of `siteconfig.json` with `config.toml`
  - [ ] color
  - [x] menu configuration
  - [ ] pagination
- [ ] pagination for posts
- [ ] pagination for tags
- [x] tags page
- [x] footer
- [x] front-matter support
  - [x] title
  - [x] date
  - [x] author
  - [x] cover
  - [x] tags
  - [x] description
- [ ] BUG: accent doesn't seem to be getting set for certain CSS classes (code tags, post-meta class)
      it looks like converting the --accent css variable is converted improperly at runtime and doesn't change
- [ ] add-ons (disqus comments, extended header, extended footer)
- [ ] Prismjs parity
  - [x] syntax highlighting for code
  - [ ] code-toolbar plugin (plugin requires DOM -- react no likey)
  - [ ] copy-to-clipboard plugin (plugin requires DOM -- react no likey)
- [x] mobile responsiveness
