<template lang="">
  <div class="container">
    <Heading title="Search By Name"/>
    <div class="row">
      

        <div class="col-md-6 offset-md-3">
          <div class="my-5">
            <input
              type="text"
              @change="handleSearch"
              v-model="keyword"
              class="form-control"
              placeholder="Enter Name"
            />
          </div>
        </div>
      
    </div>

    <div class="row">
      <div
        class="col-md-3 my-2"
        v-if="data"
        v-for="meal in data"
        :key="meal.idMeal"
      >
        <meal :meal="meal"></meal>
      </div>
      <div v-else class="border p-5 text-center">
        <h4>Data Not Found</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Meal from "../components/Meal.vue";
import Heading from "../components/Heading.vue";
import store from "../store";
import { useRoute } from "vue-router";

const keyword = ref("");
const data = computed(() => {
  return store.state.meals;
});

const route = useRoute();

const handleSearch = () => {
  store.dispatch("getMeals", keyword.value);
};

const name = route.params.name;
if (name) {
  keyword.value = name;
  store.dispatch("getMeals", keyword.value);
}
</script>
<style lang=""></style>
