let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function (){return Math.floor(Math.random()*11)},
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function (){return Math.floor(Math.random()*11)},
};

let  superChimpTwo = {
     name: "Brad",
     species: "Chimpanzee",
     mass: 11,
     age: 6,
     move: function (){return Math.floor(Math.random()*11)},
};

let dog = {
    name: "Leroy",
    species: "Beagal",
    mass: 14,
    age: 5,
    move: function (){return Math.floor(Math.random()*11)},
};

let bug = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function (){return Math.floor(Math.random()*11)},
};



// After you have created the other object literals, add the astronautID property to each one.

superChimpOne['astronautId'] = 1;
salamander['astronautId'] = 2;
superChimpTwo['astronautId'] = 3;
dog['astronautId'] = 4;
bug['astronautId'] = 5;

// console.log(superChimpOne);
// console.log(salamander);
// console.log(superChimpTwo);
// console.log(dog);
// console.log(bug);

// Create an array to hold the animal objects.
let crew = [];

crew.push(superChimpOne, salamander, superChimpTwo, dog, bug);
// console.log(crew);

// Print out the relevant information about each animal.

function relevantInformation(animal){

    let tempArr = [];

    for (let i = 0; i < animal.length; i++){

    tempArr.push(`${animal[i].name} is a ${animal[i].species}. They are ${animal[i].age} years old and ${animal[i].mass} kilograms. Their ID is ${animal[i].astronautID}.`);

    }

    return tempArr;

}

// Start an animal race!

function fitnessTest(array) {

    let results = [];
  
    for (item in array) {
  
      let steps = 0;
  
      let turn = 0;
  
      while (steps < 20) {
  
        steps += array[item].move();
  
        turn++;
  
      }
  
      let string = `${array[item].name} took ${turn} turns to take 20 steps.`
  
      results.push(string);
  
    }
  
    return results;
  
  }
  
  let resultsArray = fitnessTest(crew);
  
  for (item in resultsArray) {
  
    console.log(resultsArray[item]);
  
  }