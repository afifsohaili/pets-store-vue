<script lang="ts" setup>
import PetCard from "./PetCard.vue";
import {availableBirds, availableCats, availableDogs, setAvailablePets} from "../store/available-pets";
import {onMounted, ref} from "vue";
import {fetchPets} from "../pets/api";
import {unselectPet} from "../store/selected-pets";

const isLoading = ref(false)
const error = ref('')

onMounted(async () => {
  isLoading.value = true
  try {
    const pets = await fetchPets()
    setAvailablePets(pets)
  } catch(err) {
    console.error(err.message)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})

/*
This ondrop is for handling dragging from "favorites" section to the
"available" section (i.e. the user decides to "unselect" the pet)
 */
const handleDrop = (e: Event) => {
  const dragEvent = e as DragEvent

  if (dragEvent.dataTransfer) {
    const pet = JSON.parse(dragEvent.dataTransfer.getData('text/plain'))
    unselectPet(pet)
  }
}
</script>

<template>
  <div class="stack rounded p-3 available-pets" @dragover.prevent @drop.prevent="handleDrop">
    <div class="text-center" v-if="isLoading">
      <p>Fetching pets...</p>
      <div class="spinner-border" role="status"></div>
    </div>
    <div v-else-if="error.length" class="alert alert-danger">
      Error: {{error}}
    </div>
    <template v-else>
      <h5 class="pets__title mb-4">Cats</h5>
      <div class="pets pets--cats">
        <pet-card v-for="cat in availableCats" :pet="cat" :key="cat.image"/>
      </div>

      <h5 class="pets__title my-4">Dogs</h5>
      <div class="pets pets--dogs">
        <pet-card v-for="dog in availableDogs" :pet="dog" :key="dog.image"/>
      </div>

      <h5 class="pets__title my-4">Birds</h5>
      <div class="pets pets--dogs">
        <pet-card v-for="bird in availableBirds" :pet="bird" :key="bird.image"/>
      </div>
    </template>
  </div>
</template>

<style scoped>
.pets__title {
  background: #f3f3f3;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.available-pets {
  height: 100vh;
  overflow: auto;
}
</style>
