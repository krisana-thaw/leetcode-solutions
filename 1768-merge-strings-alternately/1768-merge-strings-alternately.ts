function mergeAlternately(word1: string, word2: string): string {
    let res = '';
    while(word1 !== '' || word2 !== ''){
        if(word1 !== '' && word2 === ''){
            res = res + word1;
            word1 = '';
        }else if(word1 === '' && word2 !== ''){
            res = res + word2;
            word2 = '';
        }else{
            const char1 = word1.substring(0, 1);
            const char2 = word2.substring(0, 1);
            res = res + char1 + char2;
            word1 = word1.substring(1);
            word2 = word2.substring(1);
        }
    }
    return res;
};