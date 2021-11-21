<script lang="ts" setup>
import {sortByAdaptability} from "../pets/filters";
import {sortByMaintenance} from "../pets/filters";
</script>

<template>
  <section class="filters mb-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="sortByAdaptability" id="sort-by-adaptability">
      <label class="form-check-label" for="sort-by-adaptability">
        Adaptability
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="sortByMaintenance" id="sort-by-maintenance">
      <label class="form-check-label" for="sort-by-maintenance">
        Maintenance
      </label>
    </div>
  </section>
</template>
