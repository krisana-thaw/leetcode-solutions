function sortSentence(s: string): string {
    const sentenceList = s.split(' ');
    
    const map = new Map();
    for(let i = 0; i<sentenceList.length; i++){
        const index = sentenceList[i].substr(sentenceList[i].length - 1);
        const sentence = sentenceList[i].substr(0, sentenceList[i].length - 1);
        map.set((Number(index)-1), sentence);
    }
    
    const result = [...map].sort((a,b) => a[0] - b[0]).map((arr) => arr[1]).join(' ');
    return result;
};








