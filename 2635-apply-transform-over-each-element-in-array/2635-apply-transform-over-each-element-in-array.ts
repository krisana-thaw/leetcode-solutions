function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let i = 0;
    let res = [];
    while(i < arr.length){
        res.push(fn(arr[i], i));
        i++;
    }
    return res;
};