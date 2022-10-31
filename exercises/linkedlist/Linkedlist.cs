using System;
using System.Collections.Generic;
  
class GFG {
  
    // Main Method
    static public void Main()
    {
  
        // Creating a linkedlist
        // Using LinkedList class
        LinkedList<String> my_list = new LinkedList<String>();
  
        // Adding elements in the LinkedList
        // Using AddLast() method
        my_list.AddLast("Zoya");
        my_list.AddLast("Shilpa");
        my_list.AddLast("Rohit");
        my_list.AddLast("Rohan");
        my_list.AddLast("Juhi");
        my_list.AddLast("Zoya");
  
        Console.WriteLine("Best students of XYZ university:");
  
        // Accessing the elements of 
        // LinkedList Using foreach loop
        foreach(string str in my_list)
        {
            Console.WriteLine(str);
        }
    }
}



class SingleLinkedList {
    internal class Node {  
        internal int data;  
        internal Node next;  
        public Node(int d) {  
            data = d;  
            next = null;  
        }  
    } 
    internal class SingleLinkedList {  
        internal Node head;  
    } 
    internal void InsertFront(SingleLinkedList singlyList, int new_data) {    
        Node new_node = new Node(new_data);    
        new_node.next = singlyList.head;    
        singlyList.head = new_node;    
    }  
    internal void InsertLast(SingleLinkedList singlyList, int new_data)    
    {    
        Node new_node = new Node(new_data);    
        if (singlyList.head == null) {    
            singlyList.head = new_node;    
            return;    
        }    
        Node lastNode = GetLastNode(singlyList);    
        lastNode.next = new_node;    
    } 
    internal Node GetLastNode(SingleLinkedList singlyList) {  
        Node temp = singlyList.head;  
        while (temp.next != null) {  
            temp = temp.next;  
        }  
        return temp;  
    } 
    internal void InsertAfter(Node prev_node, int new_data)  
    {  
        if (prev_node == null) {  
            Console.WriteLine("The given previous node Cannot be null");  
            return;  
        }  
        Node new_node = new Node(new_data);  
        new_node.next = prev_node.next;  
        prev_node.next = new_node;  
    }
    internal void DeleteNodebyKey(SingleLinkedList singlyList, int key)  
    {  
        Node temp = singlyList.head;  
        Node prev = null;  
        if (temp != null && temp.data == key) {  
            singlyList.head = temp.next;  
            return;  
        }  
        while (temp != null && temp.data != key) {  
            prev = temp;  
            temp = temp.next;  
        }  
        if (temp == null) {  
            return;  
        }  
        prev.next = temp.next;  
    } 
    public void ReverseLinkedList(SingleLinkedList singlyList)  
    {  
        Node prev = null;  
        Node current = singlyList.head;  
        Node temp = null;  
        while (current != null) {  
            temp = current.next;  
            current.next = prev;  
            prev = current;  
            current = temp;  
        }  
        singlyList.head = prev;  
    } 
}

class DoubleLinkedList{
        internal class DNode {  
        internal int data;  
        internal DNode prev;  
        internal DNode next;  
        public DNode(int d) {  
            data = d;  
            prev = null;  
            next = null;  
        }  
    } 
    internal class DoubleLinkedList {  
    internal DNode head;  
    } 
    internal void InsertFront(DoubleLinkedList doubleLinkedList, int data) {  
    DNode newNode = new DNode(data);  
    newNode.next = doubleLinkedList.head;  
    newNode.prev = null;  
    if (doubleLinkedList.head != null) {  
        doubleLinkedList.head.prev = newNode;  
    }  
    doubleLinkedList.head = newNode;  
    }  
    internal void InsertAfter(DNode prev_node, int data)  
    {  
        if (prev_node == null) {  
            Console.WriteLine("The given prevoius node cannot be null");  
            return;  
        }  
        DNode newNode = new DNode(data);  
        newNode.next = prev_node.next;  
        prev_node.next = newNode;  
        newNode.prev = prev_node;  
        if (newNode.next != null) {  
            newNode.next.prev = newNode;  
        }  
    }
    internal void DeleteNodebyKey(DoubleLinkedList doubleLinkedList, int key)  
    {  
        DNode temp = doubleLinkedList.head;  
        if (temp != null && temp.data == key) {  
            doubleLinkedList.head = temp.next;  
            doubleLinkedList.head.prev = null;  
            return;  
        }  
        while (temp != null && temp.data != key) {  
            temp = temp.next;  
        }  
        if (temp == null) {  
            return;  
        }  
        if (temp.next != null) {  
            temp.next.prev = temp.prev;  
        }  
        if (temp.prev != null) {  
            temp.prev.next = temp.next;  
        }  
    }    
}

 

