<template>
  <v-card class="w-auto">
    <v-toolbar color="rgba(31, 41, 55, 1)" dark>
      <v-toolbar-title>Confirmed by Country</v-toolbar-title>
    </v-toolbar>
    <v-list style="overflow-y: auto; height: 40rem">
      <v-list-item v-for="country in countries" :key="country.id">
        <v-list-item-content>
          <v-list-item-title v-text="country.Country"></v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-list-item-content>
          <v-list-item-title
            v-text="country.TotalConfirmed"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
    };
  },
  async mounted() {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const results = await response.json();
    this.countries = results.Countries;

    console.log(this.countries);
  },
};
</script>

<style>
</style>