function finalValueAfterOperations(operations: string[]): number {
    const plus = operations.filter(opr => {return opr === "X++" || opr === "++X"}).length;
    const minus = operations.filter(opr => {return opr === "X--" || opr === "--X"}).length;
    return plus - minus
};