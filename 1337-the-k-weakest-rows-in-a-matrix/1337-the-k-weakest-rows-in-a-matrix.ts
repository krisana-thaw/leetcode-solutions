function kWeakestRows(mat: number[][], k: number): number[] {
    const map = new Map();
    const res = [];
    let i = 0;
    while(i < mat.length){
        const sumValue = mat[i].reduce((partialSum, a) => partialSum + a, 0);
        map.set(i, sumValue);
        i++;
    }
    const sorted = [...map.entries()].sort((a, b) => a[1] - b[1]);
    for(let x = 0; x < k; x++){
        res.push(sorted[x][0]);    
    }
    return res;
};