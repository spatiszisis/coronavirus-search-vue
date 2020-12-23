<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <article class="overflow-hidden rounded-lg shadow-lg bg-white">
      <header class="flex items-center leading-tight p-2 md:p-4">
        <img :src="require(`@/assets/${image}`)" :alt="image" width="100px" />
        <div class="text-center">
          <p class="h1 text-black text-xl font-bold ml-5">{{ leadHeading }}</p>
          <p class="h1 text-black text-base font-medium ml-5">
            {{ Number(globalResultValue).toLocaleString() }}
            <span class="text-xs"
              >(+ {{ Number(globalResultValueNew).toLocaleString() }})</span
            >
          </p>
        </div>
      </header>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    leadHeading: String,
    globalResultValue: Number,
    globalResultValueNew: Number,
  },
};
</script>

<style>
</style>