<template lang="">
<div class="">
    <div class="d-flex w-75 m-5">
        <input type="text" class="form-control" placeholder="Enter Name" name="" id="">
        {{data}}
    </div>
</div>
</template>
<script setup>
import store from '../store';
    const data = store.state.title;
</script>
<style lang="">
    
</style>