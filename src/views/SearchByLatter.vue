<template lang="">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Search By Latter</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-5">
          <div class="d-flex justify-content-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                @click="handleSearchByLetter(l)"
                class="btn btn-primary mx-1"
                :class="keyword == l ? 'btn-danger' : ''"
                v-for="l in latter"
                :key="l"
              >
                {{ l }}
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-if="data && data.length != 0"
            class="col-md-3 my-2"
            v-for="meal in data"
            :key="meal.idMeal"
          >
            <Meal :meal="meal"></Meal>
          </div>
          <div v-else class="border p-5 text-center">
            <h4>Data Not Found</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import Meal from "../components/Meal.vue";
import store from "../store";

const latter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const keyword = ref("");
const data = computed(() => store.state.meals);

console.log(data.value.length);
const handleSearchByLetter = (key) => {
  keyword.value = key;
  store.dispatch("getMealsByLetter", keyword.value);
};
</script>
<style lang=""></style>
