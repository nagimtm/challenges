export function getAnimal(animal = " ") {
  if (animal === "dogs") {
    return `I like ${animal}!`;
  }
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  }
  return `I do not like animals at all!`;
}
