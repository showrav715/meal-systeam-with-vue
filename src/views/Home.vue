<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../libs/axiosClient';
import Meal from '../components/Meal.vue';
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
   await axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

  console.log(meals.value);
</script>

<template>
     <div class="container py-5">
        <div class="row">
        <div class="col-md-3 my-2" v-for="meal in meals" :key="meal.idMeal" >
            <Meal :meal="meal"></Meal>
        </div>
    </div>
     </div>
</template>

<style scoped>

</style>
