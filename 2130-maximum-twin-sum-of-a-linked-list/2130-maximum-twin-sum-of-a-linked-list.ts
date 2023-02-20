/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    const arrSet = [];
    let max = 0;
    
    while (head) {
        arrSet.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < (arrSet.length / 2); i++) {
        const sum = arrSet[i] + arrSet[arrSet.length - 1 - i];
        max = Math.max(max, sum);
    }
    
    return max;
};