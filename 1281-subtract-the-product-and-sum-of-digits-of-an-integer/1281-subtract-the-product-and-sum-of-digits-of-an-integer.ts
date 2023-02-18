function subtractProductAndSum(n: number): number {
    const digits = Array.from(String(n), Number);
    const sum = digits.reduce((a,b) => a+b);
    const product = digits.reduce((a,b) => a*b);
    return product-sum;
};