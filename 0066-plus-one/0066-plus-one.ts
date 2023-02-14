function plusOne(digits: number[]): number[] {
    let carry = 1
    let digit = 0
  
    digits = digits.reverse()
    
    while (carry) {
        digits[digit] = digits[digit] || 0
        digits[digit] += carry
        if (digits[digit] >= 10) {
            carry = 1
            digits[digit] = digits[digit] % 10
            digit++
        } else { carry = 0 }
    }

    if (carry) { digits.push(1) }
    return digits.reverse()
};