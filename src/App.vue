<template>
  <div>
    <Navbar />
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <GlobalResults />
      <SelectBoxCountry />
    </div>
  </div>
</template>

<script>
import GlobalResults from "./components/GlobalResults/GlobalResults.vue";
import SelectBoxCountry from "./components/SelectBoxCountry/SelectBoxCountry.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    GlobalResults,
    SelectBoxCountry,
  },
};
</script>

<style>
</style>
