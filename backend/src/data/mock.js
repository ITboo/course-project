import { faker } from "@faker-js/faker";

const generateTemplate = (count) => {
  let id = 0;
  return {
    id: id,
    title: faker.word.words(),
    description: faker.lorem.sentence(),
    author: faker.person.fullName(), 
    coverUrl: faker.image.urlLoremFlickr({ width: 200, height: 150}),
  };
};

export const generateTemplates = (count = 5) => {
  return Array.from({ length: count }, generateTemplate);
};

