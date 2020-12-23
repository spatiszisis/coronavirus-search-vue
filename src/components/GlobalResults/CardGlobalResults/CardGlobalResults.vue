<template>
  <div class="col-span-12 md:col-span-12 lg:col-span-4">
    <div class="my-2">
      <div class="overflow-hidden rounded-lg shadow-lg bg-white">
        <div class="flex items-center leading-tight p-2 md:p-4">
          <img :src="require(`@/assets/${image}`)" :alt="image" width="100px" />
          <div class="text-center">
            <p class="h1 text-black text-xl font-bold ml-5">
              {{ leadHeading }}
            </p>
            <p class="h1 text-black text-base font-medium ml-5">
              {{ Number(globalResultValue).toLocaleString() }}
              <span class="text-xs"
                >(+ {{ Number(globalResultValueNew).toLocaleString() }})</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
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