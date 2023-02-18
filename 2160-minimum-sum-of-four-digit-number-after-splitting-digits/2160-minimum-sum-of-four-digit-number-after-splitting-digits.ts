function minimumSum(num: number): number {
    const numSort = num.toString().split('').sort();
    return (parseInt(numSort[0]+numSort[2])+parseInt(numSort[1]+numSort[3]));
};