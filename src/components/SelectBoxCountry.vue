<template>
  <!-- <div class="vertical-center"> -->
  <div class="container">
    <div class="row d-flex justify-content-center mt-5">
      <div class="card">
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
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div v-for="cor in corona" :key="cor.LocationID" class="single-result">
        <div class="card">
          <div class="card-header px-5">Country: {{ cor.Country }}</div>
          <div class="card-body px-5">
            <div class="results">
              <p>
                <span class="text-success">Confirmed:</span> {{ cor.Confirmed }}
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
    };
  },
  methods: {
    async submitted() {
      const response = await fetch(
        `https://api.covid19api.com/live/country/${this.val}/status/confirmed`
      );
      const json = await response.json();
      // console.log(json);
      this.corona = json.slice(4, 5);
    },
  },
  created() {
    this.$http
      .get(`https://api.covid19api.com/countries`)
      .then(function (data) {
        this.countries = data.body;
      });
  },
};
</script>

<style>
.vertical-center {
  min-height: 100%;
  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh;
  /* These two lines are counted as one :-)       */
  display: flex;
  align-items: center;
}
</style>
