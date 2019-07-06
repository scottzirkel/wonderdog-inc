<template>
  <div class="min-h-screen flex flex-col items-center justify-center md:px-8 lg:px-0">
    <main class="bg-white max-w-screen sm:rounded-lg h-1/4 xl:h-1/2 sm:px-12 md:px-0 lg:w-3/4 shadow-2xl overflow-hidden">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
