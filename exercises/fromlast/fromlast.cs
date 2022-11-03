// C# program to find N'th node from end of linked list
using System;

public class LinkedList {
	public Node head; // head of the list

	/* Linked List node */
	public class Node {
		public int data;
		public Node next;
		public Node(int d)
		{
			data = d;
			next = null;
		}
	}

	/* Function to get the nth node from the last of a
	linked list */
	void printNthFromLast(int N)
	{
		int len = 0;
		Node temp = head;

		// 1) count the number of nodes in Linked List
		while (temp != null) {
			temp = temp.next;
			len++;
		}

		// check if value of N is not more than length of
		// the linked list
		if (len < N)
			return;

		temp = head;

		// 2) get the (len-N+1)th node from the beginning
		for (int i = 1; i < len - N + 1; i++)
			temp = temp.next;

		Console.WriteLine(temp.data);
	}
 void printNthFromLast_recursive(Node head, int N)
{
     int i = 0;
 
    if (head == null)
        return;
    printNthFromLast(head.next, N);
 
    if (++i == N)
        Console.Write(head.data);
}

void printNthFromLast_twoNodes(int N)
    {
        Node main_ptr = head;
        Node ref_ptr = head;
 
        int count = 0;
        if (head != null) {
            while (count < N) {
                if (ref_ptr == null) {
                    Console.WriteLine(
                        N + " is greater than the no "
                        + " of nodes in the list");
                    return;
                }
                ref_ptr = ref_ptr.next;
                count++;
            }
 
            if (ref_ptr == null) {
                head = head.next;
                if (head != null)
                    Console.WriteLine("Node no. " + N
                                      + " from last is "
                                      + main_ptr.data);
            }
            else {
                while (ref_ptr != null) {
                    main_ptr = main_ptr.next;
                    ref_ptr = ref_ptr.next;
                }
                Console.WriteLine("Node no. " + N
                                  + " from last is "
                                  + main_ptr.data);
            }
        }
    }
	/* Inserts a new Node at front of the list. */
	public void push(int new_data)
	{
		/* 1 & 2: Allocate the Node &
				Put in the data*/
		Node new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	// Driver's code
	public static void Main(String[] args)
	{
		LinkedList llist = new LinkedList();
		llist.push(20);
		llist.push(4);
		llist.push(15);
		llist.push(35);
	
		// Function call
		llist.printNthFromLast(4);
	}
}

// This code is contributed by Rajput-Ji


