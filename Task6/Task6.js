// JavaScript source code

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function op1() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    let divisible = numbers.filter(num => num % 3 === 0);
    let newNumbers = numbers.filter(num => num % 3 !== 0);
    console.log("Button 1 result: ", divisible);

}

function op2() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    for (let i = 101; i <= 150; i++) {
        numbers.push(i);
    }
    console.log("Button 2 result: ", numbers);

}

function op3() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i+3);
    }
    console.log("Button 3 result: ", numbers);

}

function op4() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    let newNumbers = numbers.slice(20, 41);
    console.log("Button 4 result: ", newNumbers);

}

function op5() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    shuffleArray(numbers);
    console.log("Button 5 result (shuffled): ", numbers);
    numbers.sort((a, b) => b - a);
    console.log("Button 5 result (sorted)", numbers);

}
