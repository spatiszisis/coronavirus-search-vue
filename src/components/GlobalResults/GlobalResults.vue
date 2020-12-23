<template>
  <div class="grid grid-cols-12 mt-5">
    <CardGlobalResults
      leadHeading="Total Confirmed"
      :globalResultValue="globalResults.TotalConfirmed"
      :globalResultValueNew="globalResults.NewConfirmed"
      image="coronavirus_blue.png"
      class="mr-2"
    />
    <CardGlobalResults
      leadHeading="Total Recovered"
      :globalResultValue="globalResults.TotalRecovered"
      :globalResultValueNew="globalResults.NewRecovered"
      image="coronavirus_green.png"
      class="mr-2"
    />
    <CardGlobalResults
      leadHeading="Total Deaths"
      :globalResultValue="globalResults.TotalDeaths"
      :globalResultValueNew="globalResults.NewDeaths"
      image="coronavirus_red.png"
    />
  </div>
</template>

<script>
import CardGlobalResults from "./CardGlobalResults/CardGlobalResults.vue";

export default {
  data() {
    return {
      globalResults: {},
    };
  },
  components: {
    CardGlobalResults,
  },
  async mounted() {
    const response = await fetch("https://api.covid19api.com/summary");
    const results = await response.json();
    const global = results.Global;

    this.globalResults = global;
  },
};
</script>

<style>
.border-left-primary {
  border-left: 0.25rem solid #4e73df !important;
}
.border-left-success {
  border-left: 0.25rem solid #1cc88a !important;
}
.border-left-danger {
  border-left: 0.25rem solid #e74a3b !important;
}
</style>