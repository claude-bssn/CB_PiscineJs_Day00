function threeLargestNumbers(array){
    array.sort(function(a,b){
        return a - b;
    });
    return array.slice(Math.max(array.length -3,1))
}
    // Merci de ne pas effacer la ligne en dessous.
    exports.threeLargestNumbers =  threeLargestNumbers;