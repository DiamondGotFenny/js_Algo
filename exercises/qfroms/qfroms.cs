// C# program to implement Queue using
// two stacks with costly enQueue()
using System;
using System.Collections;
 //this approach turn stack 1 as queue
class GFG
{
     
public class Queue
{
    public Stack s1 = new Stack();
    public Stack s2 = new Stack();
 
    public void enQueue(int x)
    {
        // Move all elements from s1 to s2
        while (s1.Count > 0)
        {
            s2.Push(s1.Pop());
            //s1.Pop();
        }
 
        // Push item into s1
        s1.Push(x);
 
        // Push everything back to s1
        while (s2.Count > 0)
        {
            s1.Push(s2.Pop());
            //s2.Pop();
        }
    }
 
    // Dequeue an item from the queue
    public int deQueue()
    {
        // if first stack is empty
        if (s1.Count == 0)
        {
            Console.WriteLine("Q is Empty");
             
        }
 
        // Return top of s1
        int x = (int)s1.Peek();
        s1.Pop();
        return x;
    }
};
 
// Driver code
public static void Main()
{
    Queue q = new Queue();
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
 
    Console.Write(q.deQueue()+" ");
    Console.Write(q.deQueue()+" ");
    Console.Write(q.deQueue());
}
}
 
// This code is contributed by
// Subhadeep Gupta


/* C# Program to implement a queue using two stacks */
// Note that Stack class is used for Stack implementation
using System;
using System.Collections.Generic;
 
class GFG
{
    /* class of queue having two stacks */
    public class Queue
    {
        public Stack<int> stack1;
        public Stack<int> stack2;
    }
 
    /* Function to push an item to stack*/
    static void push(Stack<int> top_ref, int new_data)
    {
        // Push the data onto the stack
        top_ref.Push(new_data);
    }
 
    /* Function to pop an item from stack*/
    static int pop(Stack<int> top_ref)
    {
        /*If stack is empty then error */
        if (top_ref.Count == 0)
        {
            Console.WriteLine("Stack Underflow");
            Environment.Exit(0);
        }
 
        // pop the data from the stack
        return top_ref.Pop();
    }
 
    // Function to enqueue an item to the queue
    static void enQueue(Queue q, int x)
    {
        push(q.stack1, x);
    }
 
    /* Function to deQueue an item from queue */
    static int deQueue(Queue q)
    {
        int x;
 
        /* If both stacks are empty then error */
        if (q.stack1.Count == 0 && q.stack2.Count == 0)
        {
            Console.WriteLine("Q is empty");
            Environment.Exit(0);
        }
 
        /* Move elements from stack1 to stack 2 only if
        stack2 is empty */
        if (q.stack2.Count == 0)
        {
            while (q.stack1.Count != 0)
            {
                x = pop(q.stack1);
                push(q.stack2, x);
            }
        }
        x = pop(q.stack2);
        return x;
    }
 
    /* Driver code */
    public static void Main(String []args)
    {
        /* Create a queue with items 1 2 3*/
        Queue q = new Queue();
        q.stack1 = new Stack<int>();
        q.stack2 = new Stack<int>();
        enQueue(q, 1);
        enQueue(q, 2);
        enQueue(q, 3);
 
        /* Dequeue items */
        Console.Write(deQueue(q) + " ");
        Console.Write(deQueue(q) + " ");
        Console.WriteLine(deQueue(q) + " ");
    }
}
 
// This code is contributed by 29AjayKumar