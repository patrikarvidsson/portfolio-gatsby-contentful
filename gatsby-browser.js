/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/* There seems to be a bug where @font-face through
 * .sass files causes font flickering on some anchor
 * hover. Including that here as .css instead seems
 * to solve it.
 *
 * Issue:
 * https://github.com/gatsbyjs/gatsby/issues/9826
 */

import './src/components/layout.css'

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
}
