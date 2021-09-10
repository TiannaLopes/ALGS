
const twoumsum = (array, final) => {
    let mapOfNumbers = {};
        let twoIndexes = [];

        for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i;
    }

    for (let i = 0; i < array.length; i++) {
          let target = final - arr[i];
      if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
        twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
      }
        }

      return twoIndexes;
}
