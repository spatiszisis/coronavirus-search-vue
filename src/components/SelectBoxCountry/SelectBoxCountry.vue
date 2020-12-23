<template>
  <div class="cols-span-12">
    <div class="rounded-lg shadow-lg bg-white mt-5">
      <div class="py-5 px-2">
        <div
          class="flex justify-center sm:justify-center md:justify-around flex-wrap text-center"
        >
          <div class="my-5 md:text-left">
            <p class="text-black text-xl font-bold ml-5">
              Coronavirus Worldwide
            </p>
            <p class="text-black text-base font-medium ml-5">
              Updated {{ getDate(date) }}
            </p>
          </div>
          <div class="my-5 md:text-left">
            <SelectBox
              v-model="value"
              v-on:valueSelect="onValueSelected"
              :data="countries"
            />
          </div>
        </div>
        <div class="my-5" v-if="coronaStatistics.length > 0">
          <div
            class="flex justify-around flex-wrap"
            v-for="corona in coronaStatistics.slice(
              coronaStatistics.length - 1
            )"
            :key="corona.Slug"
          >
            <div class="text-center">
              <p class="text-black text-xl font-bold">Confirmed</p>
              <p class="text-black text-base font-medium">
                {{ corona.Confirmed }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-black text-xl font-bold">Recovered</p>
              <p class="text-black text-base font-medium">
                {{ corona.Recovered }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-black text-xl font-bold">Deaths</p>
              <p class="text-black text-base font-medium">
                {{ corona.Deaths }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="flex justify-center my-5">
          <span class="h1 text-black text-xl font-bold">
            Search your Country</span
          >
        </div>
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