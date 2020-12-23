<template>
  <div>
    <Navbar />
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <GlobalResults />
      <SelectBoxCountry />
      <div class="grid grid-cols-12 gap-4 my-5">
        <CaseCountryList class="col-span-4" />
        <TableResults class="col-span-8" />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalResults from "./components/GlobalResults/GlobalResults.vue";
import SelectBoxCountry from "./components/SelectBoxCountry/SelectBoxCountry.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import CaseCountryList from "./components/CaseCountryList/CaseCountryList.vue";
import TableResults from "./components/TableResults/TableResults.vue";

export default {
  components: {
    Navbar,
    GlobalResults,
    SelectBoxCountry,
    CaseCountryList,
    TableResults,
  },
};
</script>

<style>
</style>
