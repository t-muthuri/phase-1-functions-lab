function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

  function distanceFromHqInFeet(someValue) {

    let block = distanceFromHqInBlocks(someValue);

    if (block >= 1){
        return block * 264;
    } else {
        return block *- (264);
    }
  }

  function distanceTravelledInFeet(start, destination) {

    let block2 = start - destination;

    if (block2 >= 1){
        return block2 * 264;
    } else { return block2 *- 264;
    }
  }


  function calculatesFarePrice(start, destination) {

    let feet = distanceTravelledInFeet(start, destination);

    let block3 = destination - start;

    if( feet <= 400 ){
        return (block3*feet) * 0
    }else if (feet > 400 && feet <= 2000){
        return (feet - 400 ) * 0.02;
    }else if (feet > 2000 && feet <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
  }