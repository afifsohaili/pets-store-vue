import {ref} from "vue";
import {checkExistingPet} from "../pets/filters";
import {Pet} from "../pets/api";
import {loadPreference, savePreferences} from "../utils/save-preferences";

export const selectedPets = ref<Pet[]>(loadPreference('selectedPets') || [])
savePreferences(selectedPets, 'selectedPets')

export const selectPet = (pet: Pet) => {
  const existingPet = selectedPets.value.find(selectedPet => checkExistingPet(selectedPet, pet))
  if (typeof existingPet != 'undefined') {
    return;
  }
  selectedPets.value.push(pet)
}

export const unselectPet = (pet: Pet) => {
  const index = selectedPets.value.findIndex(selectedPet => checkExistingPet(selectedPet, pet))
  if (index > -1) {
    selectedPets.value.splice(index, 1)
  }
}

export const swapSelectedPet = (pet1: Pet, pet2: Pet) => {
  const index1 = selectedPets.value.findIndex(selectedPet => checkExistingPet(selectedPet, pet1))
  const index2 = selectedPets.value.findIndex(selectedPet => checkExistingPet(selectedPet, pet2))
  if (index1 < 0 || index2 < 0) {
    return
  }
  selectedPets.value.splice(index1, 1, pet2)
  selectedPets.value.splice(index2, 1, pet1)
}
