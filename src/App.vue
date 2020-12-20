<template>
  <div class="container-fluid">
    <Header />
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

<style></style>
