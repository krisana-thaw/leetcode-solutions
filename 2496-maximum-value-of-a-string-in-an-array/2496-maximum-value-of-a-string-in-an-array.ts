function maximumValue(strs: string[]): number {
    let maxValue = 0;
    for (let str of strs) {
        maxValue = Math.max(maxValue, isNaN(Number(str)) ? str.length : parseInt(str));
    }
    return maxValue;
};