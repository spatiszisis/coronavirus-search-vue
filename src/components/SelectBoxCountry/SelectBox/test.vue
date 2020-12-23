<template>
  <div>
    <div class="row mt-5 d-flex justify-content-center">
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
    <div class="row mt-4 d-flex justify-content-center">
      <div
        v-for="cor in corona.slice(corona.length - 4).reverse()"
        :key="cor.Slug"
        class="single-result my-2 col-xl-6 col-md-6"
      >
        <div class="card shadow">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <div>
                <span
                  >Country:
                  <span class="font-weight-bold"> {{ cor.Country }}</span></span
                >
              </div>
              <div>
                <span>{{ getDate(cor.Date) }}</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col text-center">
                <div>
                  <strong class="text-success">Confirmed</strong>
                </div>
                <div>
                  <span>{{ cor.Confirmed }}</span>
                </div>
              </div>
              <div class="col text-center">
                <div>
                  <strong class="text-danger">Deaths</strong>
                </div>
                <div>
                  <span>{{ cor.Deaths }}</span>
                </div>
              </div>
              <div class="col text-center">
                <div>
                  <strong class="text-warning">Active</strong>
                </div>
                <div>
                  <span>{{ cor.Active }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
