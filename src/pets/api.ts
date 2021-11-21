const PETS_URL = 'https://api.npoint.io/89c46c9444ec3adfef3a';

export interface Pet {
  adaptability: number
  breed: string | undefined
  image: string
  maintenance: number
  type: "cat" | "dog" | "bird"
}

export const fetchPets = async () => {
  const response = await fetch(PETS_URL)
  return response.json()
}
