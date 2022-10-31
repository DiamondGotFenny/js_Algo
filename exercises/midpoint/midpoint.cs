// Function to print middle of linked list
void printMiddle()
{
    Node slow_ptr = head;
    Node fast_ptr = head;
     
    if (head != null)
    {
        while (fast_ptr != null &&
               fast_ptr.next != null)
        {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }
        Console.WriteLine("The middle element is [" +
                          slow_ptr.data + "] \n");
    }
}