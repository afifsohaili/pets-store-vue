import {Pet} from "./api";

export const checkExistingPet = (targetPet: Pet, pet: Pet) => {
  return targetPet.breed === pet.breed &&
    targetPet.type === pet.type;
}