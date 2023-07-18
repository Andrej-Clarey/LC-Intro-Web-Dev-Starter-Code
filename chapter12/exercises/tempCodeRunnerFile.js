nction fitnessTest(array) {

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