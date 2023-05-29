<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{name:'Home'}" class="nav-link">Home</router-link> 
      </li>
      <li class="nav-item active">
        <router-link :to="{name:'SearchByName' , }" class="nav-link">Search By Name</router-link> 
      </li>
     
      <li class="nav-item active">
        <router-link :to="{name:'SearchByLatter'}" class="nav-link">Search By Latter</router-link> 
      </li>
      <li class="nav-item active">
        <router-link :to="{name:'SearchByMeal'}" class="nav-link">Search By Meal</router-link> 
      </li>
     
     
    </ul>
  </div>
</nav>
        <router-view></router-view>
    </div>
</template>
<script setup>

</script>
<style lang="">
    
</style>