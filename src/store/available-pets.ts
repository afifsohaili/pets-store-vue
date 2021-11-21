import {computed, ref} from "vue";
import {Pet} from "../pets/api";
import {adaptabilitySort, checkExistingPet, isOfType, maintenanceSort} from "../pets/filters";
import {selectedPets} from "./selected-pets";
import {chain} from "../utils/chain";

export const availablePets = ref<Pet[]>([])

export const setAvailablePets = (newPets: Pet[]) => {
  availablePets.value = newPets
}

// A filter to check if the pet exists on the "selectedPets" collection
const isNotSelected = (pets: Pet[]) => {
  return pets.filter(pet => {
    return selectedPets.value.findIndex(selectedPet => checkExistingPet(pet, selectedPet)) < 0
  })
}

// Chain different operators to the availablePets collection
// Computes to just non-selected cats sorted to either maintenance or adaptability rating
export const availableCats = computed(() => {
  // `chain` just takes a list of "pipes" of functions that:
  // accepts an array of Pet and returns an array of Pet
  return chain(availablePets.value,
    isOfType('cat'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})

// Same with the above but for dogs
export const availableDogs = computed(() => {
  return chain(availablePets.value,
    isOfType('dog'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})

// Same with the above but for birds
export const availableBirds = computed(() => {
  return chain(availablePets.value,
    isOfType('bird'),
    isNotSelected,
    maintenanceSort,
    adaptabilitySort,
  )
})
