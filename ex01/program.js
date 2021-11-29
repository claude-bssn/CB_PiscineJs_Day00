function isPalindrome(string){
    let palindrome = string.split("").reverse().join("")
    if (string === palindrome){
        return true;
    }else{
        return false;
    }
}
    isPalindrome(string);
    // Merci de ne pas effacer la ligne en dessous.
    exports.isPalindrome =  isPalindrome;