console.log("Testing");

let car = {speed: 300, model: "Dodge"};
console.log(car.model);

randomNumber = Math.random();
console.log(randomNumber);

function Exercise1(){
    let width = 5;
    let length = 6;

    let area = width * length;
}

function Exercise2(){
    let x = 3;
    let y = 3;
    let sum = x + y;

    if(x == y){
        return sum*3;
    }
    else{
        return sum
    }
    return (x == y) ? sum*3 : sum;
}

function Exercise3(){
    let randomNum1 = Math.floor(Math.random() * 51);
    let randomNum2 = Mathfloor(Math.random() * 51);

    if(randomNum1 == 50 || (randomNum1+randomNum2 ) === 50){
        return true;
    }
    
    else{
        return false;
    }
}

function Exercise4(voltage, current){
    return current * voltage;
}

console.log(Exercise4);


