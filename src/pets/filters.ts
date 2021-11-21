import {Pet} from "./api";
import {ref} from "vue";
import {loadPreference, savePreferences} from "../utils/save-preferences";

// Initialize the ref with the saved preference, defaults to false
export const sortByAdaptability = ref(loadPreference('sortByAdaptability') || false)
// savePreferences remembers the last value the user sets.
// In this case, this was saved to localStorage
savePreferences(sortByAdaptability, 'sortByAdaptability')
// Repeats the same thing for sortByMaintenance
export const sortByMaintenance = ref(loadPreference('sortByMaintenance') || false)
savePreferences(sortByMaintenance, 'sortByMaintenance')

// Used to filter a Pet collection by type
export const isOfType = (type: Pet["type"]) => (pets: Pet[]) => pets.filter(pet => pet.type === type);

// Used to sort a Pet collection based on the pet's adaptability rating
export const adaptabilitySort = (pets: Pet[]) => {
  if (!sortByAdaptability.value) {
    return pets;
  }

  return [...pets].sort((pet1, pet2) =>
    pet1.adaptability > pet2.adaptability ? 1 :
      pet1.adaptability < pet2.adaptability ? -1 :
        0);
}

// Used to sort a Pet collection based on the pet's maintenance rating
export const maintenanceSort = (pets: Pet[]) => {
  if (!sortByMaintenance.value) {
    return pets;
  }

  return [...pets].sort((pet1, pet2) =>
    pet1.maintenance > pet2.maintenance ? 1 :
      pet1.maintenance < pet2.maintenance ? -1 :
        0);
}

// Defines the mechanism for checking the uniqueness of a pet on a given Pet collection
export const checkExistingPet = (targetPet: Pet, pet: Pet) => {
  return targetPet.image === pet.image
}