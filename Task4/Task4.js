// JavaScript source code
function createAndSum() {
    let numbers = new Array(101);
    let sum = 0;

    for (let i = 0; i <= 100; i++) {
        numbers[i] = i;
        sum += i;
    }

    document.getElementById("displaySum").textContent = "Sum: " + sum;
    document.getElementById("clicked").style.display = "none";
}