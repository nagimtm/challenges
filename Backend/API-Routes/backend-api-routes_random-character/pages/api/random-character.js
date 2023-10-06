import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    id: chance.ip(),
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
    profiession: chance.profession(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json({ character });
}
