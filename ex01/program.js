function isPalindrome(string){
    let palindrome = string.split("").reverse().join("")
    if (string === palindrome){
        return true;
    }else{
        return false;
    }
}
    // Merci de ne pas effacer la ligne en dessous.
    exports.isPalindrome =  isPalindrome;