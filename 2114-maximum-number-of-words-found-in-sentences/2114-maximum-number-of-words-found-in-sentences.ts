function mostWordsFound(sentences: string[]): number {
    const arr = sentences.map(sentence => { return sentence.split(' ').length});
    arr.sort(function(a, b){
      return b - a;
    });
    return arr[0]
};