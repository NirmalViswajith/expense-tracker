let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueGroup = ageGroup.reduce((accumulator, currentValue) => {
  if(accumulator.indexOf(currentValue) == -1){
    accumulator.push(currentValue);
  }
  return accumulator;
},[]);

console.log(uniqueGroup)