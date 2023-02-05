function removeOccurrences(s: string, part: string): string {
    while(s.search(part) !== -1){
        const begin = s.substring(0, s.search(part));
        const end = s.substring(s.search(part)+(part.length));
        s = begin + end;
    }
    return s;
};