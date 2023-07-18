// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  // console.log(index);
  return arr[index];
}

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];

// console.log(selectRandomEntry(idNumbers));

// let selectedCrew = [];
// let repeatedCrew = [];

// while(selectedCrew.length < 3){
//   let i = 0;
//     if (selectedCrew.includes(idNumbers[i])){
//     repeatedCrew.push(selectRandomEntry(idNumbers))
//   }else{
//     selectedCrew.push(selectRandomEntry(idNumbers));
//       i++
//           }
// };

let chosenID = [];

while (chosenID.length < 3) {

  chosenForLaunch = selectRandomEntry(idNumbers);

  if (!chosenID.includes(chosenForLaunch)) {

    chosenID.push(chosenForLaunch);

  }

}

console.log(chosenID);



// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

function name(n){
  for (i=0; i< chosenID.length; i ++){
    let cadetName = [];
    if (animals.includes(chosenID)){
      
    }
  }
}

console.log(`${cadetName[0]}, ${cadetName[1]}, and ${cadetName[2]} are going to space!` )