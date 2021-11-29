function levDist(str1, str2){
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for(let i = 0; i <= str1.length; i++){
        track[0][i] = i;
    }
    for(let j = 0; j <= str1.length; j++){
        track[j][0] = j;
    }
    for(let j = 1; j <= str2.length; j++){
        for(let i = 1; i <= str1.length; i++){
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1,
                track[j - 1][i] + 1,
                track[j - 1][i - 1] + indicator
            );
        }
    }
    return track[str2.length][str1.length];
}
    levDist(str1, str2);
    // Merci de ne pas effacer la ligne en dessous.
    exports.levDist =  levDist;