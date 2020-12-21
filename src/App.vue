<template>
  <div class="container-fluid">
    <Header />
    <h4 class="mt-4">Global Results</h4>
    <GlobalResults />
    <SelectBoxCountry />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import GlobalResults from "./components/GlobalResults.vue";
import SelectBoxCountry from "./components/SelectBoxCountry.vue";

export default {
  components: {
    Header,
    GlobalResults,
    SelectBoxCountry,
  },
};
</script>

<style>
body {
  background-color: #eee;
}
</style>
