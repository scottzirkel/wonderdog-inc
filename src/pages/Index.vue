<template>
  <Layout>
    <div class="flex flex-col md:flex-row items-stretch antialiased">
      <div class="md:w-2/3 px-6 md:px-12 flex flex-col items-stretch justify-between">
        <logo class="py-4 w-64 mx-auto text-gray-700 fill-current"/>
        <p>Ryan Robertson's summer plans are put on hold when he discovers he'll be staying at his grandfather's farm while his parents travel to Europe. Just as he grows accustomed to life without Internet, he and his grandfather are traveling to Brazil in search of the Fountain of Youth. On the way he learns the truth about his family, friends and the secrets of Wonderdog, Inc.</p>
        <div class="py-4 flex flex-wrap items-stretch text-center leading-none">
          <a href="https://scottzirkel.com" class="w-1/2 py-4 flex flex-col items-center justify-center hover:shadow hover:bg-blue-100">
            <h4 class="font-xl font-bold uppercase">Scott Zirkel</h4>
            <h3 class="font-xl">The Writer</h3>
          </a>
          <a href="https://matthebb.com/" class="w-1/2 py-4 flex flex-col items-center justify-center hover:shadow hover:bg-blue-100">
            <h4 class="font-xl font-bold uppercase">Matt Hebb</h4>
            <h3 class="font-xl">The Penciler</h3>
          </a>
          <a href="https://eltoromuerto.blogspot.com/" class="w-1/2 py-4 flex flex-col items-center justify-center hover:shadow hover:bg-blue-100">
            <h4 class="font-xl font-bold uppercase">Jason Worthington</h4>
            <h3 class="font-xl">The Letterer</h3>
          </a>
          <a href="https://catenamanor.com" class="w-1/2 py-4 flex flex-col items-center justify-center hover:shadow hover:bg-blue-100">
            <h4 class="font-xl font-bold uppercase">Tracy Bailey</h4>
            <h3 class="font-xl">The Colorer..er</h3>
          </a>
        </div>
        <p><a href="https://arcanacomics.com/titles/wonderdog-inc/">Buy Now</a></p>
        <p class="text-xs text-center pb-4 leading-tight text-gray-600">
          Copyright © 2010 - {{ (new Date()).getFullYear() }} Scott Zirkel &amp; Arcana Comics. All Rights Reserved.
          Site built by Scott Zirkel
        </p>
      </div>
      <div class="max-w-screen md:w-1/3">
        <g-image class="h-full object-cover object-left" src="@/assets/images/cover.png"/>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '../assets/svgs/Logo.svg'
export default {
  metaInfo: {
    title: 'Wonderdog, Inc'
  },
  components: {
    Logo
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
