function isPalindrome(x: number): boolean {
    let reverse = 0;
    let numberDup = x;

    while (numberDup > 0) {
      const digit = numberDup % 10;
      reverse = reverse * 10 + digit;
      numberDup = ~~(numberDup / 10);
    }

    return reverse == x;
};