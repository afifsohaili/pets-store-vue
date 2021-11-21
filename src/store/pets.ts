import {computed, ref} from "vue";
import {Pet} from "../api/pets";

export const availablePets = ref<Pet[]>([])
export const selectedPets = ref<Pet[]>([])

export const setAvailablePets = (newPets: Pet[]) => {
  availablePets.value = newPets
}

export const addAvailablePet = (pet: Pet) => {
  const existingPet = availablePets.value.find(availablePet => checkExistingPet(availablePet, pet))
  if (typeof existingPet != 'undefined') {
    return;
  }
  availablePets.value.push(pet)
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

const checkExistingPet = (targetPet: Pet, pet: Pet) => targetPet.breed === pet.breed && targetPet.type === pet.type

export const selectPet = (pet: Pet) => {
  const existingPet = selectedPets.value.find(selectedPet => checkExistingPet(selectedPet, pet))
  if (typeof existingPet != 'undefined') {
    return;
  }
  selectedPets.value.push(pet)
  removeAvailablePet(pet)
}

export const unselectPet = (pet: Pet) => {
  const index = selectedPets.value.findIndex(selectedPet => checkExistingPet(selectedPet, pet))
  if (index > -1) {
    selectedPets.value.splice(index, 1)
  }
}
