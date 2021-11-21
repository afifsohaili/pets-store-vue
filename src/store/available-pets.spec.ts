/**
 * @jest-environment jsdom
 */
import {availableBirds, availableCats, availableDogs, availablePets, setAvailablePets} from "./available-pets";
import {Pet} from "../pets/api";
import faker from 'faker'
import {sortByAdaptability} from "../pets/filters";
import {selectPet, unselectPet} from "./selected-pets";

const generatePet: (type: Pet['type']) => Pet = (type) => ({
  adaptability: faker.datatype.number(),
  breed: faker.random.word(),
  image: faker.random.image(),
  maintenance: faker.datatype.number(),
  type
})

test('setAvailablePets should set the value of availablePets', function () {
  const pets = [generatePet('cat')];
  setAvailablePets(pets)

  expect(availablePets.value).toEqual(pets)
});

test('availableCats should filter out dogs and birds', function () {
  const cat1 = generatePet('cat');
  const cat2 = generatePet('cat');
  const dog = generatePet('dog');
  const bird = generatePet('bird');
  const pets = [cat1, dog, cat2, bird];
  setAvailablePets(pets)

  expect(availableCats.value).toEqual([cat1, cat2])
});

test('availableDogs should filter out cats and birds', function () {
  const cat = generatePet('cat');
  const dog1 = generatePet('dog');
  const dog2 = generatePet('dog');
  const bird = generatePet('bird');
  const pets = [cat, dog1, bird, dog2];
  setAvailablePets(pets)

  expect(availableDogs.value).toEqual([dog1, dog2])
});

test('availableBirds should filter out cats and dogs', function () {
  const cat = generatePet('cat');
  const dog = generatePet('dog');
  const bird1 = generatePet('bird');
  const bird2 = generatePet('bird');
  const pets = [bird1, cat, dog, bird2];
  setAvailablePets(pets)

  expect(availableBirds.value).toEqual([bird1, bird2])
});

test('availableCats should sort by adaptability when sortByAdaptability is true', function () {
  const pet1 = generatePet('cat');
  const pet2 = generatePet('cat');
  const pet3 = generatePet('cat');
  pet1.adaptability = 5
  pet2.adaptability = 3
  pet3.adaptability = 6
  const pets = [pet1, pet2, pet3];
  setAvailablePets(pets)
  sortByAdaptability.value = true
  expect(availableCats.value).toEqual([pet2, pet1, pet3])
});

test('availableDogs should sort by adaptability when sortByAdaptability is true', function () {
  const pet1 = generatePet('dog');
  const pet2 = generatePet('dog');
  const pet3 = generatePet('dog');
  pet1.adaptability = 1
  pet2.adaptability = 2
  pet3.adaptability = 3
  const pets = [pet1, pet2, pet3];
  setAvailablePets(pets)
  sortByAdaptability.value = true
  expect(availableDogs.value).toEqual([pet1, pet2, pet3])
});

test('availableBirds should sort by adaptability when sortByAdaptability is true', function () {
  const pet1 = generatePet('bird');
  const pet2 = generatePet('bird');
  const pet3 = generatePet('bird');
  pet1.adaptability = 5
  pet2.adaptability = 3
  pet3.adaptability = 1
  const pets = [pet1, pet2, pet3];
  setAvailablePets(pets)
  sortByAdaptability.value = true
  expect(availableBirds.value).toEqual([pet3, pet2, pet1])
});

test('availableBirds should exclude selected birds', function () {
  const pet1 = generatePet('bird');
  const pet2 = generatePet('bird');
  const pet3 = generatePet('bird');
  pet1.adaptability = 5
  pet2.adaptability = 3
  pet3.adaptability = 1
  const pets = [pet1, pet2, pet3];
  setAvailablePets(pets)
  selectPet(pet1)
  expect(availableBirds.value).toEqual([pet2, pet3])
  unselectPet(pet1)
  expect(availableBirds.value).toEqual([pet1, pet2, pet3])
});
