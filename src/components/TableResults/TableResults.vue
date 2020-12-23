<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="countries" :search="search">
      <template v-slot:[`item.image`]="{ item }">
        <div class="p-2">
          <v-img
            :src="
              'https://www.countryflags.io/' + item.CountryCode + '/flat/64.png'
            "
            :alt="item.name"
            width="30px"
          ></v-img>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "",
          value: "image",
        },
        {
          text: "Country",
          filterable: true,
          value: "Country",
        },
        { text: "Total Confirmed", value: "TotalConfirmed" },
        { text: "New Confirmed", value: "NewConfirmed" },
        { text: "Total Recovered", value: "TotalRecovered" },
        { text: "New Recovered", value: "NewRecovered" },
        { text: "Total Deaths", value: "TotalDeaths" },
        { text: "New Deaths", value: "NewDeaths" },
      ],
      countries: [],
    };
  },
  async mounted() {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const results = await response.json();
    this.countries = results.Countries;
  },
};
</script>

<style>
</style>