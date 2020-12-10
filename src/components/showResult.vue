<template>
  <div id="show-res">
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
html {
  background: #cb805e;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#show-res {
  background: #47667c;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 80px;
  box-shadow: 10px 10px 10px #aeafb1;
}

h1 {
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
}
</style>
