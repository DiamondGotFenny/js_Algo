public class GFG
{
     
/* Link list Node */
public class Node
{
    public int data;
    public Node next;
}
 
/*This function returns true if given linked
list is circular, else false. */
static bool isCircular( Node head)
{
    // An empty linked list is circular
    if (head == null)
    return true;
 
    // Next of head
    Node node = head.next;
 
    // This loop would stop in both cases (1) If
    // Circular (2) Not circular
    while (node != null && node != head)
    node = node.next;
 
    // If loop stopped because of circular
    // condition
    return (node == head);
}
 
// Utility function to create a new node.
static Node newNode(int data)
{
    Node temp = new Node();
    temp.data = data;
    temp.next = null;
    return temp;
}
 
// Driver's code
public static void Main(String []args)
{
    /* Start with the empty list */
    Node head = newNode(1);
    head.next = newNode(2);
    head.next.next = newNode(3);
    head.next.next.next = newNode(4);
 
    Console.Write(isCircular(head)? "Yes\n" :
                    "No\n" );
 
    // Making linked list circular
    head.next.next.next.next = head;
 
    Console.Write(isCircular(head)? "Yes\n" :
                    "No\n" );
}
}