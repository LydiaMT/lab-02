'use strict';
const reference = [];

function HornedAnimal1(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  HornedAnimal1.allHornedAnimals.push(this);
}
HornedAnimal1.allHornedAnimals = [];

HornedAnimal1.prototype.renderAnimalImages = function (){
  HornedAnimal1.allHornedAnimals.forEach(animal => {if(!reference.includes(animal.keyword.toLowerCase())){renderAnimalOptions(animal.keyword, reference);}});
  const templateHtmlPotato = $('#mustache-template').html();
  const outputFromMustache = Mustache.render(templateHtmlPotato, this);
  $('#forTemplate').append(outputFromMustache);
};

function HornedAnimal2(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  HornedAnimal2.allHornedAnimals.push(this);
}
HornedAnimal2.allHornedAnimals = [];

HornedAnimal2.prototype.renderAnimalImages = function (){
  HornedAnimal2.allHornedAnimals.forEach(animal => {if(!reference.includes(animal.keyword.toLowerCase())){renderAnimalOptions(animal.keyword, reference);}});
  const templateHtmlPotato = $('#mustache-template').html();
  const outputFromMustache = Mustache.render(templateHtmlPotato, this);
  $('#forTemplate').append(outputFromMustache);
};

$.ajax('data/page-1.json').then(data => {dataFunction(data, HornedAnimal1);});

$.ajax('data/page-2.json').then(data => {dataFunction(data, HornedAnimal2);});

function dataFunction(data, constructor) {
  data.forEach(animal => {
    new constructor(animal.image_url, animal.title, animal.description, animal.keyword, animal.horns);
    if (!reference.includes(animal.keyword.toLowerCase())){
      renderAnimalOptions(animal.keyword, reference);
    }
  });
}

function renderAnimalOptions(dropdownOptions, reference){
  $('select').append('<option>' + dropdownOptions + '</option>');
  reference.push(dropdownOptions.toLowerCase());
}
function insideDropdownChange(event, array){
  $('#forTemplate').empty();
  array.allHornedAnimals.forEach(animal => {
    if (animal.keyword === event.target.value){
      // $('#forTemplate').append(`<img src= ${animal.image_url} >`);
      animal.renderAnimalImages();
    }
  });
}

function firstForDropdownChange(event){
  HornedAnimal1.allHornedAnimals.forEach(animal => {
    if(animal.keyword === event.target.value){
      insideDropdownChange(event, HornedAnimal1);
    }
    else{
      insideDropdownChange(event, HornedAnimal2);
    }
  });
}


$('select').on('change', firstForDropdownChange);
$('#horn1').on('click', function(){$('#forTemplate').empty(); $('select').empty(); reference.length = 0; HornedAnimal1.allHornedAnimals.forEach(animal => {animal.renderAnimalImages();});});

$('#horn2').on('click', function(){$('#forTemplate').empty(); $('select').empty(); reference.length = 0; HornedAnimal2.allHornedAnimals.forEach(animal => {animal.renderAnimalImages();});});


$('#sort').on('click', function() {
  reference.length = 0;
  const imgSort = $('.img-sort');
  for (let i = 0; i < imgSort; i++) {
    reference.push($(`${imgSort[i]}`).html());
  }
  // imgSort.forEach(img => {
  //   reference.push($(`${img}`).attr('src'));
  // });
  // console.log(reference);
  console.log(reference);
});
//   reference.sort(compareAnimals);
//   function compareAnimals (left, right){
//     if(left > right){
//       return 1;
//     } else if(left < right){
//       return -1;
//     } else {
//       return 0;
//     }
// //   }
//   HornedAnimal1.allHornedAnimals.forEach(animal => {
//     if(reference.includes(animal.keyword.toLowerCase())){
//       animal.renderAnimalImages();
// //     }
//   });
// });


// if (!reference.includes(animal.keyword.toLowerCase())){
//   renderAnimalOptions(animal.keyword, reference)