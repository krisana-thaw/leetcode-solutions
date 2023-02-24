function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const rule = {
        type: 0,
        color: 1,
        name: 2
    };
    
    return items.reduce((ans, item) => 
        item[rule[ruleKey]] === ruleValue ? ans + 1 : ans, 0
    );
};