import {Pet} from "./api";
import {ref} from "vue";

export const sortByAdaptability = ref(false)
export const sortByMaintenance = ref(false)

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
  return targetPet.breed === pet.breed &&
    targetPet.type === pet.type;
}