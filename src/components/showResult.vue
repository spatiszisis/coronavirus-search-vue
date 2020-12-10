<template>
<!-- <div class="vertical-center"> -->
  <div class="container">
    <div class="row d-flex justify-content-center mt-5">
      <div class="card">
        <div class="card-header">
          Search your Country
        </div>
        <div class="card-body">
            <form @submit.prevent="submitted">
              <div class="form-group">
                <select v-model="val" class="form-control">
                  <option value="">Countries</option>
                  <option v-for="countrie in countries" :key="countrie">{{
                                      countrie.Country
                                    }}</option>
                </select>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>   
      </div>
    </div>
  </div>
  <div v-for="cor in corona" :key="cor.LocationID" class="single-result">
    <div class="row d-flex justify-content-center mt-5 py-5">
      <div class="card">
          <div class="card-header">
            Country: {{ cor.Country }}
          </div>
          <div class="card-body">
              <div class="results">
                  <p><span class="font-weight-bold"> Confirmed:</span> {{ cor.Confirmed }}</p>
                  <p><span class="font-weight-bold">Deaths:</span> {{ cor.Deaths }}</p>
                  <p><span class="font-weight-bold">Active:</span> {{ cor.Active }}</p>
                  <p><span class="font-weight-bold">Date:</span> {{ cor.Date.slice(0, 10) }}</p>
                </div>
            </div> 
        </div>
      </div>
  </div>
</div>
<!-- </div> -->
  <!-- <div class="vertical-center"> -->
            <!-- Outer Row -->
            <!-- <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div id="show-res" class="vertical-center">
                              <div class="form">
                                <h1>All Results Corona</h1>
                                <form @submit.prevent="submitted">
                                  <select v-model="val">
                                    <option value="">Countries</option>
                                    <option v-for="countrie in countries" :key="countrie">{{
                                      countrie.Country
                                    }}</option>
                                  </select>
                                  <button class="btn">Submit</button>
                                </form>
                              </div>
                              <div class="results">
                                <div v-for="cor in corona" :key="cor.LocationID" class="single-result">
                                  <h2>Country: {{ cor.Country }}</h2>
                                  <p>Confirmed: {{ cor.Confirmed }}</p>
                                  <p>Deaths: {{ cor.Deaths }}</p>
                                  <p>Active: {{ cor.Active }}</p>
                                  <p>Date: {{ cor.Date.slice(0, 10) }}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- </div> -->
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
      console.log(json);
      this.corona = json.slice(4, 5);
    },
  },
  created() {
    this.$http.get(`https://api.covid19api.com/countries`).then(function(data) {
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

/* #show-res {
  background: #47667c;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 80px;
  box-shadow: 10px 10px 10px #aeafb1;
} */

/* h1 {
  color: #edb13f;
}

.btn {
  background-color: #edb13f;
  border: none;
  color: white;
  width: 90px;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
}

.btn:hover {
  transform: scale(1.1, 1.1);
}

.single-result {
  padding: 10px 10px;
  margin: 20px auto;
  border-radius: 10px;
} */
</style>
