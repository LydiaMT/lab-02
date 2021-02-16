'use strict';

HornedAnimal.allHornedAnimals = [];

$.ajax('data/page-1.json')
  .then(data => {
    dataFunction(data);
  });

function dataFunction(data) {
  data.forEach(animal => {
    new HornedAnimal(animal.image_url, animal.title, animal.description, animal.keyword, animal.horns);
  });
};

function HornedAnimal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  HornedAnimal.allHornedAnimals.push(this);
}


