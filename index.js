// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let hq = 42;
    if(block > hq){
    return block - hq;
    }else{
        return hq-block;
    }
}

function distanceFromHqInFeet(block){
    let feet = 264;
let distance = distanceFromHqInBlocks(block);
return distance * feet;

}


function distanceTravelledInFeet(start, end){
    let distance = 264;
    let block = 0;
    if(start > end){
         block = start -end;
    }else{
        block = end - start;
    }

    return block * distance;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);

    if (feet< 400){
        return 0;
    }else if(feet> 400 && feet< 2000){

        return (feet-400) * 0.02;
    }else if (feet > 2000 && feet <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }


  }