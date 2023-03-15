function repeatedCharacter(s: string): string {
    const set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if(set.has(curr)) {
             return curr; 
        }
        set.add(curr);
    }
};