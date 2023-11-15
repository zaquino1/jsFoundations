function add7(n){
sum= n+7;
return `the sum of ${n} + 7 = ${sum}`
}


function multiply(a,b){
product = a*b;
return `the product of ${a} * ${b} +  is ${product}`
}


let text="choCoLate"; //internal text to test
function capitalize(text){
return text.charAt(0).toUpperCase() +text.slice(1).toLowerCase()
//slice gets the next characters and then next we lowercase it
}

//use same text as above
function lastletter(text){
return text.slice(-1)
}

