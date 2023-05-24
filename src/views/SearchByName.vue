<template lang="">
<div class="container">
    <div class="d-flex w-75 m-5">
        <input type="text" @change="handleSearch" v-model="keyword" class="form-control" placeholder="Enter Name" name="" id="">
        
    </div>
    <div class="row">
        <div class="col-md-3 my-2" v-for="meal in data" :key="meal.idMeal" >
            <Meal :meal="meal"></Meal>
        </div>
        
    </div>
</div>
</template>
<script setup>
import { computed, ref } from 'vue';
import Meal from '../components/Meal.vue';
import store from '../store';

const keyword = ref('');
const data = computed(() =>store.state.meals)

console.log(data.value);

const handleSearch = () => {
    store.dispatch('getMeals', keyword.value);
}


</script>
<style lang="">
    
</style>