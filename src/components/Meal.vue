<template lang="">
  <div class="card rounded-start">
  <img class="card-img-top"  :src="meal.strMealThumb" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{meal.strMeal}}</h5>
    <p class="card-text">{{meal.strInstructions.substring(0,120)}}</p>
  </div>
  <div class="card-body">
   <div class="d-flex justify-content-between" style="">
    <a :href="meal.strYoutube" target="_blank" class="card-link btn btn-danger">YouTube</a>
    <a href="#" class="card-link btn btn-primary">View</a>
   </div>
  </div>
</div>
</template>
<script setup>

// get meal from props
const { meal } = defineProps({
    meal: Object
})

</script>
<style lang="">
    
</style>