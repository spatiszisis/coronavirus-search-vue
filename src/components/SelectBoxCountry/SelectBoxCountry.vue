<template>
  <div class="overflow-hidden rounded-lg shadow-lg bg-white">
    <div class="w-auto">
      <div class="flex justify-between leading-tight p-2 md:p-4">
        <div class="text-left my-5">
          <p class="h1 text-black text-xl font-bold ml-5">
            Coronavirus Worldwide
          </p>
          <p class="h2 text-black text-base font-medium ml-5">
            Updated {{ getDate(date) }}
          </p>
        </div>
        <div class="my-5">
          <SelectBox
            v-model="value"
            v-on:valueSelect="onValueSelected"
            :data="countries"
          />
        </div>
      </div>
      <div class="my-24" v-if="coronaStatistics.length > 0">
        <div
          class="flex justify-around"
          v-for="corona in coronaStatistics.slice(coronaStatistics.length - 1)"
          :key="corona.Slug"
        >
          <div class="text-center">
            <p class="h1 text-black text-xl font-bold ml-5">Confirmed</p>
            <p class="h1 text-black text-base font-medium ml-5">
              {{ corona.Confirmed }}
            </p>
          </div>
          <div class="text-center">
            <p class="h1 text-black text-xl font-bold ml-5">Recovered</p>
            <p class="h1 text-black text-base font-medium ml-5">
              {{ corona.Recovered }}
            </p>
          </div>
          <div class="text-center">
            <p class="h1 text-black text-xl font-bold ml-5">Deaths</p>
            <p class="h1 text-black text-base font-medium ml-5">
              {{ corona.Deaths }}
            </p>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-around my-24">
        <span class="h1 text-black text-xl font-bold">
          Search your Country</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import SelectBox from "./SelectBox/SelectBox.vue";
export default {
  data() {
    return {
      value: {
        Country: "Afghanistan",
        CountryCode: "AF",
      },
      coronaStatistics: [],
      countries: [],
      loading: false,
      date: "",
    };
  },
  components: {
    SelectBox,
  },
  methods: {
    getDate(date) {
      return moment(date).format("ll");
    },
    async onValueSelected(value) {
      this.value = value;

      const response = await fetch(
        `https://api.covid19api.com/country/${this.value.Country}`
      );
      const results = await response.json();
      this.coronaStatistics = results;
    },
  },
  async mounted() {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const results = await response.json();
    this.countries = results.Countries;
    this.date = results.Date;
  },
};
</script>