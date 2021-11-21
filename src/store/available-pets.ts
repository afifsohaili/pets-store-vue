import {computed, ref} from "vue";
import {Pet} from "../pets/api";
import {adaptabilitySort, checkExistingPet, isOfType, maintenanceSort} from "../pets/filters";
import {unselectPet} from "./selected-pets";
import {chain} from "../utils/chain";

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

export const availableCats = computed(() => {
  return chain(availablePets.value,
    isOfType('cat'),
    maintenanceSort,
    adaptabilitySort,
  )
})

export const availableDogs = computed(() => {
  return chain(availablePets.value,
    isOfType('dog'),
    maintenanceSort,
    adaptabilitySort,
  )
})

export const availableBirds = computed(() => {
  return chain(availablePets.value,
    isOfType('bird'),
    maintenanceSort,
    adaptabilitySort,
  )
})
