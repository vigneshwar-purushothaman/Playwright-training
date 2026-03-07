function checkNumber(num) {
    if (num > 0) {
        return "positive";   
    }
    else if (num < 0) {
        return "negative"
    }
    else {
        return "zero"
    }
    
}

let num = 5
console.log(checkNumber(10))
console.log(checkNumber(-6))
console.log(checkNumber(0))
console.log(checkNumber(num))


