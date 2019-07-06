// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = {
    class: 'bg-gray-300'
  }

  head.meta.push({
    name: 'author',
    content: 'Scott Zirkel'
  })

  head.meta.push({
    name: 'description',
    content: 'An original graphic novel from Scott Zirkel, Matt Hebb, Jason Worthington, & Tracy Bailey!'
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary'
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Wonderdog, Inc'
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'An original graphic novel from Scott Zirkel, Matt Hebb, Jason Worthington, & Tracy Bailey!'
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@scottzirkel'
  })

  head.meta.push({
    name: 'og:title',
    content: 'Wonderdog, Inc'
  })

  head.meta.push({
    name: 'og:description',
    content: 'An original graphic novel from Scott Zirkel, Matt Hebb, Jason Worthington, & Tracy Bailey!'
  })
}
