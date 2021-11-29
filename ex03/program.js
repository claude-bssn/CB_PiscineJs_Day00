function firstNonRepeatingCharacter(string) {
    let obj = {};
    let i =0
    string.trim().split("").map((ch)=>{
        if (obj[ch] === undefined){
            obj[ch] = i;
        }else{
            obj[ch] = false;
        }
        i++;
    });

    const obj_length= Object.keys(obj).length;

    for (const [key,value] of Object.entries(obj)) {
       if(Number.isInteger(value)){
            return value;
        }
    } 
}
firstNonRepeatingCharacter(string)
    // Do not edit the line below.
    exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;