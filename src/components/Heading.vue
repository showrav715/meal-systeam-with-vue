<template>
  <div class="row">
        <div class="col-12">
          <h1 class="text-center">{{ title }}</h1>
          <hr />
        </div>
      </div>
</template>

<script setup>
// get props from parent component
const { title } = defineProps({
  title: String,
});
</script>

<style>

</style>