<script setup lang="ts">
import AvailablePets from "./components/AvailablePets.vue";
import SelectedPets from "./components/SelectedPets.vue";
</script>

<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          Let's Help Yoyo choose her pet!
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 pb-3">
        Sorting options go here...
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <available-pets/>
      </div>

      <div class="col-6">
        <div class="stack bg-info rounded p-3">
          <selected-pets/>
        </div>
      </div>
    </div>
  </div>
</template>