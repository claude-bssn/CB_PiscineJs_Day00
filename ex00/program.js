function twoNumberSum(array, targetSum){
    // écrivez votre code ici.
    let array_result = [];
    let i = 0;
    // iter sur un tableau de données et incrémente l'index i 
    array.forEach(num => {
        i++;
        // iter sur un tableau de données et incrémente l'index j. 
        // vérifie que les valeurs numérique ne s'ajoute pas avec elle même
        // retourn un tableau de tableau de valeur dont le résultat est égale à targetSum 
        let j = 0;
        array.forEach(el => {
            j++;
            if(i > j+1){
                result = num + el;
                if (result == targetSum){
                    array_result.push([num, el]);
                } 
            }
        });
    });
 return array_result;
}
twoNumberSum(array, targetSum);
    // Merci de ne pas effacer la ligne en dessous.
    exports.twoNumberSum =  twoNumberSum;