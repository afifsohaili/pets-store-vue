<script lang="ts" setup>
import PetCard from "./PetCard.vue";
import {selectPet, selectedPets, swapSelectedPet} from "../store/selected-pets";
import {Pet} from "../pets/api";

/*
This is a handler on the "favorite" pets section. A drop into this dropzone means
the user decides to "favorite" this pet.
 */
const handleSelectPetDrop = (e: Event) => {
  const dragEvent = e as DragEvent
  if (dragEvent.dataTransfer) {
    /*
     Gets the data transferred. This data was set by respective "dragstart" handlers
     on the pet cards when the user starts dragging.
     */
    const pet: Pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    selectPet(pet)
  }
}

/*
This is a handler on the individual cards on the "favorite" pets section.
A drop on the card, instead of on the "favorites" zone, means the user decides to
reorder cards in the "favorite" section.

This swaps the position of the dragged pet card and the pet card in which the
drop happens.
 */
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
  <div class="selected-pets" @dragover.prevent @drop="handleSelectPetDrop">
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