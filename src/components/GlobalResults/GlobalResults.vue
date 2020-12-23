<template>
  <div class="flex flex-wrap -mx-1 my-3 md:-mx-2 md:my-3 lg:-mx-5">
    <CardGlobalResults
      leadHeading="Total Confirmed"
      :globalResultValue="globalResults.TotalConfirmed"
      :globalResultValueNew="globalResults.NewConfirmed"
      image="coronavirus_blue.png"
    />
    <CardGlobalResults
      leadHeading="Total Recovered"
      :globalResultValue="globalResults.TotalRecovered"
      :globalResultValueNew="globalResults.NewRecovered"
      image="coronavirus_green.png"
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