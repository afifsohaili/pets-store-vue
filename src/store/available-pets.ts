import {computed, ref} from "vue";
import {Pet} from "../pets/api";
import {adaptabilitySort, checkExistingPet, isOfType, maintenanceSort} from "../pets/filters";
import {selectedPets} from "./selected-pets";
import {chain} from "../utils/chain";

export const availablePets = ref<Pet[]>([])

export const setAvailablePets = (newPets: Pet[]) => {
  availablePets.value = newPets
}

const isNotSelected = (pets: Pet[]) => {
  return pets.filter(pet => {
    return selectedPets.value.findIndex(selectedPet => checkExistingPet(pet, selectedPet)) < 0
  })
}

export const availableCats = computed(() => {
  return chain(availablePets.value,
    isOfType('cat'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})

export const availableDogs = computed(() => {
  return chain(availablePets.value,
    isOfType('dog'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})

export const availableBirds = computed(() => {
  return chain(availablePets.value,
    isOfType('bird'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})
