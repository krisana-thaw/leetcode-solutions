function restoreString(s: string, indices: number[]): string {
    const length = indices.length;
    let result = Array.from({length: 5});
    for(let i=0; i < length; i++){
        result[indices[i]] = s[i];
    }
    return result.join("");
};