<template>
  <div class="row mt-5">
    <div class="col-xl-6 col-md-6 mb-4">
      <div class="card shadow">
        <div class="card-header">Search your Country</div>
        <div class="card-body">
          <form @submit.prevent="submitted">
            <div class="form-group">
              <select v-model="val" class="form-control">
                <option value="">Countries</option>
                <option v-for="countrie in countries" :key="countrie.id">
                  {{ countrie.Country }}
                </option>
              </select>
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-success">
                <div
                  class="spinner-border spinner-border-sm"
                  v-if="loading"
                ></div>
                <span v-if="loading" class="px-1">Loading</span>
                <span v-else>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-md-6 mb-4">
      <div
        v-for="cor in corona.slice(corona.length - 1)"
        :key="cor.Slug"
        class="single-result"
      >
        <div class="card shadow">
          <div class="card-header text-gray-800">
            Country: {{ cor.Country }}
          </div>
          <div class="card-body">
            <div class="results">
              <p>
                <span class="text-success">Confirmed:</span>
                {{ cor.Confirmed }}
              </p>
              <p><span class="text-danger">Deaths:</span> {{ cor.Deaths }}</p>
              <p><span class="text-warning">Active:</span> {{ cor.Active }}</p>
              <p>
                <span class="font-weight-normal">Date:</span>
                {{ cor.Date.slice(0, 10) }}
              </p>
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
      val: "",
      corona: [],
      countries: [],
      loading: false,
    };
  },
  methods: {
    async submitted() {
      this.loading = true;

      const response = await fetch(
        `https://api.covid19api.com/country/${this.val}`
      ).finally(() => (this.loading = false));
      const json = await response.json();
      this.corona = json;
    },
  },
  async mounted() {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const json = await response.json();

    this.countries = json.Countries;
  },
};
</script>