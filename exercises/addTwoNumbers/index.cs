public class ListNode
{
    public int val;
    public ListNode next;

    public ListNode(int x)
    {
        val = x;
    }
}

namespace addTwoNumbers
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
{
    // Create a new linked list to store the result
    ListNode result = new ListNode(0);
    ListNode current = result;

    // Set initial values for the carry and sum
    int carry = 0;
    int sum = 0;

    // Loop through both linked lists until we reach the end
    while (l1 != null || l2 != null)
    {
        // Add the values of the current nodes, if they exist
        sum += carry + (l1?.val ?? 0) + (l2?.val ?? 0);

        // Update the carry for the next iteration
        carry = sum / 10;

        // Create a new node for the result with the current digit
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes in the input lists
        l1 = l1?.next;
        l2 = l2?.next;

        // Reset the sum for the next iteration
        sum = 0;
    }

    // If there is a remaining carry, add a new node to the result
    if (carry > 0)
    {
        current.next = new ListNode(carry);
    }

    // Return the result, starting from the second node (the first node is a placeholder)
    return result.next;
}
}
