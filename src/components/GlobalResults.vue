<template>
  <div class="row mt-3">
    <div class="col-xl-4 col-md-6 mb-4">
      <div class="card border-left-primary mb-3 shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-primary text-uppercase mb-1"
              >
                Total Confirmed
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ Number(totalConfirmed).toLocaleString() }} Millions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-success text-uppercase mb-1"
              >
                Total Recovered
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ Number(totalRecovered).toLocaleString() }} Millions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 mb-4">
      <div class="card border-left-danger shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-danger text-uppercase mb-1"
              >
                Total Deaths
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ Number(totalDeaths).toLocaleString() }} Millions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalConfirmed: "",
      totalRecovered: "",
      totalDeaths: "",
    };
  },
  async mounted() {
    const response = await fetch("https://api.covid19api.com/summary");
    const results = await response.json();
    const global = results.Global;
    this.totalConfirmed = global.TotalConfirmed;
    this.totalRecovered = global.TotalRecovered;
    this.totalDeaths = global.TotalDeaths;
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