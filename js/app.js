'use strict';

HornedAnimal.allHornedAnimals = [];

$.ajax('data/page-1.json')
  .then(data => {
    dataFunction(data);
  });
const reference = [];
function dataFunction(data) {
  data.forEach(animal => {
    new HornedAnimal(animal.image_url, animal.title, animal.description, animal.keyword, animal.horns);
    if (!reference.includes(animal.keyword)){
      renderAnimalOptions(animal.keyword, reference);
    }
    renderAnimalImages(animal.image_url);
  });
}

function HornedAnimal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  HornedAnimal.allHornedAnimals.push(this);
}
function renderAnimalOptions(dropdownOptions, refArr){
  $('select').append('<option>' + dropdownOptions + '</option>');
  refArr.push(dropdownOptions);
}
function renderAnimalImages(animalImages){
  $('div').append('<img src=' + animalImages + '>');
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


