/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = 0;
  let newHead = new ListNode(0);
  let cur = newHead;
  while (l1 || l2 || carry > 0) {
    sum += carry;
    carry = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    cur.next = new ListNode(sum);
    cur = cur.next;
    sum = 0;
  }
  return newHead.next;
};
