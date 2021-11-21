<script lang="ts" setup>
import PetCard from "./PetCard.vue";
import {addAvailablePet, availableBirds, availableCats, availableDogs, setAvailablePets} from "../store/available-pets";
import {onMounted} from "vue";
import {fetchPets} from "../pets/api";

onMounted(async () => {
  setAvailablePets(await fetchPets())
})

const handleDrop = (e: Event) => {
  const dragEvent = e as DragEvent

  if (dragEvent.dataTransfer) {
    const pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    addAvailablePet(pet)
  }
}
</script>

<template>
  <div class="stack bg-info rounded p-3" @dragover.prevent @drop.prevent="handleDrop">
    <h6 class="text-white">Cats</h6>
    <hr>

    <div class="pets pets--cats">
      <pet-card v-for="cat in availableCats" :pet="cat"/>
    </div>

    <h6 class="text-white">Dogs</h6>
    <hr>
    <div class="pets pets--dogs">
      <pet-card v-for="dog in availableDogs" :pet="dog"/>
    </div>

    <h6 class="text-white">Birds</h6>
    <hr>
    <div class="pets pets--dogs">
      <pet-card v-for="bird in availableBirds" :pet="bird"/>
    </div>
  </div>
</template>
