import {Pet} from "./api";
import {ref} from "vue";
import {loadPreference, savePreferences} from "../utils/save-preferences";

export const sortByAdaptability = ref(loadPreference('sortByAdaptability') || false)
savePreferences(sortByAdaptability, 'sortByAdaptability')
export const sortByMaintenance = ref(loadPreference('sortByMaintenance') || false)
savePreferences(sortByMaintenance, 'sortByMaintenance')

export const isOfType = (type: Pet["type"]) => (pets: Pet[]) => pets.filter(pet => pet.type === type);

export const adaptabilitySort = (pets: Pet[]) => {
  if (!sortByAdaptability.value) {
    return pets;
  }

  return [...pets].sort((pet1, pet2) =>
    pet1.adaptability > pet2.adaptability ? 1 :
      pet1.adaptability < pet2.adaptability ? -1 :
        0);
}

export const maintenanceSort = (pets: Pet[]) => {
  if (!sortByMaintenance.value) {
    return pets;
  }

  return [...pets].sort((pet1, pet2) =>
    pet1.maintenance > pet2.maintenance ? 1 :
      pet1.maintenance < pet2.maintenance ? -1 :
        0);
}

export const checkExistingPet = (targetPet: Pet, pet: Pet) => {
  return targetPet.image === pet.image
}