<script setup lang="ts">
import AvailablePets from "./components/AvailablePets.vue";
import SelectedPets from "./components/SelectedPets.vue";
import PetsFilter from "./components/PetsFilter.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="my-5">Pets Store</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-3">
        <strong>Sort by:</strong>
        <pets-filter/>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-6">
        <available-pets/>
      </div>

      <div class="col-6">
        <div class="stack rounded p-3 selected-pets">
          <selected-pets/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected-pets {
  background: #383838;
}
</style>