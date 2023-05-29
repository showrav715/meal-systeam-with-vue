<script setup>
import { onMounted, ref } from "vue";
import Meal from "../components/Meal.vue";
import store from "../store";

const meals = ref([]);

store.watch(
  (state) => state.meals,
  (val) => {
    meals.value = val;
  }
);

onMounted(async () => {
  store.dispatch("HomeMeal");
});
</script>

<template>
  <div class="container py-5">
    <div v-if="meals && meals.length != 0" class="row">
      <div class="col-md-3 my-2" v-for="meal in meals" :key="meal.idMeal">
        <Meal :meal="meal"></Meal>
      </div>
    </div>
    <div v-else class="w-100 mx-auto ">
      <div class="border p-5 text-center">
        <h4>Loading...</h4>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
