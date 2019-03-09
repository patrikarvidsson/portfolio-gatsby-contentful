# Patrik Arvidsson

This project was based on [gatsby-tailwind-emotion-starter](https://github.com/muhajirframe/gatsby-tailwind-emotion-starter) 

[![Netlify Status](https://api.netlify.com/api/v1/badges/6a92f50e-c237-4bf7-ad9d-a5ff0db0835d/deploy-status)](https://app.netlify.com/sites/patrik/deploys)

## Build environment

Build fails on Netlify with default node `8.15.1`, so make sure environment used
is matching listed versions below. Node version is set in `netlify.toml` so
deploying to Netlify should work itself out automatically. 

- `node` version `11.10.1`
- `yarn` version `1.13.0`
- `npm` version `6.7.0`

## Getting up and running

Install Gatsby CLI:
```sh
npm install --global gatsby-cli
```

Clone project
```sh
git clone https://github.com/patrikarvidsson/patrikarvidsson.com
```

```sh
cd patrikarvidsson.com
```

Rename `.contentful.json.sample` to `.contentful.json` and update with
Contentful API details.

Make sure `graphql` queries matches your content model over at Contentful. This
repo is using a slightly modified version of the Contentful demo that is shown
when signing up.

Install packages from `patrikarvidsson.com` directory.
```sh
yarn
```

## Usage

Start development server
```sh
yarn develop
```

Run format to prettify code
```sh
yarn format
```

Build site
```sh
gatsby build
```

Your built site will be in `/public`. This folder can then be uploaded to a
static host such as Netlify.

### Deploying to Netlify

`netlify.toml` handles all deployment, but you have to manually enter
environmental variables at Netlify if you want to use continuous deployment from
git. Variables to add are `CONTENTFUL_DELIVERY_TOKEN` and `CONTENTFUL_SPACE_ID`.

Install netlify-cli
```sh
npm install --global netlify-cli
```

Deploy to Netlify
``` sh
netlify deploy -p
```

## Details

### Why should I use Tailwind CSS or Emotion JS?

Simply because Tailwind CSS is awesome. If you used
[Tachyons](https://tachyons.io/) before, you know how awesome utility first CSS
can be compared to CSS framework like [Bootstrap](http://getbootstrap.com/).

If you haven't tried a utility first CSS before, I urge you to give it a try. Tailwind is
a great place to start, and it's more customizable than Tachyons.

But, because [Tailwind CSS](https://tailwindcss.com) gives you alot of class as
utilities the file gets bloated very quickly. Most developers solve this by
using something like [purgeCSS](https://github.com/FullHuman/purgecss) and while
it's awesome on it's own you still get into the habit of loading styles the
current page doesn't need.

[More information on how you can control file size](https://tailwindcss.com/docs/controlling-file-size)

We use [Emotion](https://github.com/emotion-js/emotion) because it's equally awesome. CSS-in-JS allows you to only load
the required styles for the particular page you're on, by defining this as
CSS-in-JS. In return, each page CSS footprint is smaller than the magic purgeCSS
can do.

Mindblowing.

### So how do I use it?

```javascript
import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  ${tw`py-8`};
`
const Text = styled.p`
  ${tw`bg-black text-white`};
`

const Home = () => (
  <Container>
    <Text>I am Text component made with Tailwind CSS + EmotionJS</Text>
  </Container>
)

export default Home
```

Furthremore, CSS-in-JS is just awesome. [CSS in JS: Benefits, Drawbacks, and Tooling](https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/)

### Why Gatsby?

Because Gatsby is blazing fast, is highly extensible and the community is
awesome. 

## Credits

Credits goes to [Muhammad Muhajir](https://github.com/muhajirdev), creator
of the boilerplate used for this portfolio.

And to [GatsbyJS](https://www.gatsbyjs.org/),
[TailwindCSS](https://tailwindcss.com/),
[Emotion](https://github.com/emotion-js/emotion),
[Contentful](https://www.contentful.com/) and [Netlify](https://www.netlify.com/).
