import {computed, ref} from "vue";
import {Pet} from "../pets/api";
import {checkExistingPet} from "../pets/filters";
import {unselectPet} from "./selected-pets";

export const availablePets = ref<Pet[]>([])

export const setAvailablePets = (newPets: Pet[]) => {
  availablePets.value = newPets
}

export const addAvailablePet = (pet: Pet) => {
  const existingPet = availablePets.value.find(availablePet => checkExistingPet(availablePet, pet))
  if (typeof existingPet != 'undefined') {
    return;
  }
  availablePets.value.push(pet)
  unselectPet(pet)
}

export const removeAvailablePet = (pet: Pet) => {
  const index = availablePets.value.findIndex(availablePet => checkExistingPet(availablePet, pet))
  if (index > -1) {
    availablePets.value.splice(index, 1)
  }
}

export const cats = computed(() => availablePets.value.filter(pet => pet.type === 'cat'))
export const dogs = computed(() => availablePets.value.filter(pet => pet.type === 'dog'))
export const birds = computed(() => availablePets.value.filter(pet => pet.type === 'bird'))
