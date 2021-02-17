'use strict';

HornedAnimal.allHornedAnimals = [];

$.ajax('data/page-1.json')
  .then(data => {
    dataFunction(data);
  });

function dataFunction(data) {
  data.forEach(animal => {
    new HornedAnimal(animal.image_url, animal.title, animal.description, animal.keyword, animal.horns);
    renderAnimalOptions(animal.keyword);
    renderAnimalImages(animal.image_url);
  });
}
console.log(HornedAnimal.allHornedAnimals);

function HornedAnimal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  HornedAnimal.allHornedAnimals.push(this);
}
function renderAnimalOptions(dummy){
  $('select').append('<option>' + dummy + '</option>');
}

function renderAnimalImages(dummy){
  $('div').append('<img src=' + dummy + '>');
}
function forDropdownChange(event){
  $('div').empty();
  HornedAnimal.allHornedAnimals.forEach(animal => {
    if (animal.keyword === event.target.value){
      $('div').append('<img src=' + animal.image_url + '>');
    }
  });
}
$('select').on('change', forDropdownChange);
