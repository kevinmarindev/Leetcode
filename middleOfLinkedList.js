// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

//! 7/11/25 12minutes
//! could've also used 2 pointers where one advances two steps and one two. One would be at the end and the other would end in the middle.
var middleNode = function (head) {
  let current = head;
  let count = 1;
  while (current.next) {
    current = current.next;
    count++;
  }
  count % 2 == 0 ? (count = count / 2 + 1) : (count = Math.round(count / 2));

  let i = 1;
  current = head;
  while (i < count) {
    current = current.next;
    i++;
  }

  return current;
};
