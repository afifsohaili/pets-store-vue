<script lang="ts" setup>
import PetCard from "./PetCard.vue";
import {selectPet, selectedPets, swapSelectedPet} from "../store/selected-pets";
import {Pet} from "../pets/api";

const handleDrop = (e: Event) => {
  const dragEvent = e as DragEvent
  if (dragEvent.dataTransfer) {
    const pet: Pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    selectPet(pet)
  }
}

const reorderFavorites = (e: Event, petToSwap: Pet) => {
  const dragEvent = e as DragEvent
  if (dragEvent.dataTransfer) {
    const draggedPet: Pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    swapSelectedPet(draggedPet, petToSwap)
  }
}
</script>

<template>
  <h5 class="text-white mb-3">
    Favorites
  </h5>
  <div class="selected-pets" @dragover.prevent @drop="handleDrop">
    <p v-if="selectedPets.length === 0" class="text-light">
      No favorites yet. Drag and drop your favorite pet here.
    </p>
    <pet-card v-for="selectedPet in selectedPets" :pet="selectedPet" @dragover.prevent @drop="e => reorderFavorites(e, selectedPet)"/>
  </div>
</template>

<style scoped>
.selected-pets {
  height: 100vh;
  overflow: auto;
}
</style>