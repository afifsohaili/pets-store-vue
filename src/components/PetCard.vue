<script lang="ts" setup>
import {Pet} from "../pets/api";

const props = defineProps<{pet: Pet}>()
const formatBreed = (breed: string | undefined) => breed?.replaceAll('-', ' ')
const dragInit = (e: Event) => {
  const dragEvent = e as DragEvent
  if (dragEvent.dataTransfer) {
    dragEvent.dataTransfer.dropEffect = 'move'
    /*
     Sets the data for transfer. This will be used by the ondrop function
     when the user drops this HTML node on a valid dropzone.
     */
    dragEvent.dataTransfer.setData('text/plain', JSON.stringify(props.pet))
  }
}
</script>

<template>
  <div class="pet-card mb-3 shadow-sm" @dragstart="dragInit" draggable="true">
    <div class="pet-card__body">
      <div class="pet-card__thumb"
           :style="{'background-image': `url('${pet.image}')`}"></div>
      <h5 class="pet-card__title">{{pet.type}}</h5>
      <h6 class="pet-card__subtitle">{{formatBreed(pet.breed)}}</h6>
      <ul class="pet-card__details">
        <li class=""><strong class="">Adaptability</strong>: {{pet.adaptability}}</li>
        <li class=""><strong class="">Maintenance</strong>: {{pet.maintenance}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.pet-card {
  border-radius: 6px;
  background: white;
  overflow: hidden;
}

.pet-card__body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto;
  grid-column-gap: 1rem;
}

.pet-card__thumb {
  background-color: #d9d9d9;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  grid-column: 1 / span 1;
  grid-row: 1 / -1;
}

.pet-card__title {
  text-transform: capitalize;
  margin: 1rem 0 0;
}

.pet-card__subtitle {
  color: #939393;
  text-transform: capitalize;
}

.pet-card__details {
  list-style: none;
  text-indent: 0;
  padding: 0;
}
</style>
