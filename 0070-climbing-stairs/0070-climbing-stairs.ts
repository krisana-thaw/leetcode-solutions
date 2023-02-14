function climbStairs(n: number): number {
    var fibArr = new Array(n+1);
    fibArr[0] = 0;
    fibArr[1] = 1;

    for(var i = 2; i <= n+1; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr[n+1];
};