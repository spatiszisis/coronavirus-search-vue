<template>
  <div>
    <Navbar />
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <GlobalResults />
      <SelectBoxCountry />
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 my-6">
        <CaseCountryList class="mt-5 mb-8 md:col-span-4 md:mr-3" />
        <TableResults class="md:col-span-8 md:my-6" />
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
