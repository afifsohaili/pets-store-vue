<script lang="ts" setup>
import {Pet} from "../api/pets";
import PetCard from "./PetCard.vue";
import {selectedPets, selectPet} from "../store/pets";

const dragOver = e => e.preventDefault()

const handleDrop = (e: Event) => {
  const dragEvent = e as DragEvent
  if (dragEvent.dataTransfer) {
    const pet: Pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    selectPet(pet)
  }
}
</script>

<template>
  <p class="text-white">
    Let's add drag and drop of cards here so Yoyo and her parents can choose and reorder the pet she wants!
  </p>
  <div class="selected-pets" @dragover="dragOver" @drop="handleDrop">
    <pet-card v-for="selectedPet in selectedPets" :pet="selectedPet"/>
  </div>
</template>

<style scoped>
.selected-pets {
  height: 100vh;
  overflow: auto;
}
</style>