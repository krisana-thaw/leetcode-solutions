function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const map = new Map();
    
    for (let [value, weight] of items1.concat(items2)) {
        if (!map.has(value)) {
            map.set(value, weight)
        } else {
            map.set(value, map.get(value) + weight)
        }
    }

    return Array.from(map.entries()).sort((a,b) => a[0] - b[0])
};