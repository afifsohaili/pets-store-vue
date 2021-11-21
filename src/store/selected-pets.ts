import {ref} from "vue";
import {checkExistingPet} from "../pets/filters";
import {removeAvailablePet} from "./available-pets";
import {Pet} from "../pets/api";

export const selectedPets = ref<Pet[]>([])

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
