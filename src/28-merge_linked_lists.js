
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(listA, listB) {
    const result = new ListNode(0)
    let currentNode = result
    while(listA !== null && listB !== null) {
      if(listA.val < listB.val) {
        currentNode.next = listA
        listA = listA.next
      } else {
        currentNode.next = listB
        listB = listB.next
      }
      currentNode = currentNode.next
      // console.log('####################')
      // console.log(listA)
      // console.log('--------------------')
      // console.log(listB)
      // console.log('--------------------')
      // console.log(result.next)
      // console.log('####################')
    }

  if (listA) {
    currentNode.next = listA;
  } 
  if (listB) {
    currentNode.next = listB;
  }
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  // console.log(result.next)
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  return result.next
};

const lnA1 = { val: 6, next: null }
const lnA2 = { val: 4, next: lnA1 }
const lnA3 = { val: 2, next: lnA2 }

const lnB1 = { val: 5, next: null }
const lnB2 = { val: 3, next: lnB1 }
const lnB3 = { val: 1, next: lnB2 }
// console.log(lnA3)
// console.log(lnB3)
// console.log(mergeTwoLists(lnA3, lnB3))
mergeTwoLists(lnA3, lnB3)
