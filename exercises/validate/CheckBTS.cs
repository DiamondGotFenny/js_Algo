using System;
 
// C# implementation to check if given Binary tree
// is a BST or not
 
/* Class containing left and right child of current
 node and key value*/
public class Node {
    public int data;
    public Node left, right;
 
    public Node(int item)
    {
        data = item;
        left = right = null;
    }
}
 
public class BinaryTree {
    // Root of the Binary Tree
    public Node root;
 
    /* can give min and max value according to your code or
    can write a function to find min and max value of tree.
  */
 
    /* returns true if given search tree is binary
     search tree (efficient version) */
    public virtual bool BST
    {
        get
        {
            return isBSTUtil(root, int.MinValue,
                             int.MaxValue);
        }
    }
 
    /* Returns true if the given tree is a BST and its
      values are >= min and <= max. */
    public virtual bool isBSTUtil(Node node, int min,
                                  int max)
    {
        /* an empty tree is BST */
        if (node == null) {
            return true;
        }
 
        /* false if this node violates the min/max
         * constraints */
        if (node.data < min || node.data > max) {
            return false;
        }
 
        /* otherwise check the subtrees recursively
        tightening the min/max constraints */
        // Allow only distinct values
        return (
            isBSTUtil(node.left, min, node.data - 1)
            && isBSTUtil(node.right, node.data + 1, max));
    }
 
    /* Driver code */
    public static void Main(string[] args)
    {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(4);
        tree.root.left = new Node(2);
        tree.root.right = new Node(5);
        tree.root.left.left = new Node(1);
        tree.root.left.right = new Node(3);
       
        // Function call
        if (tree.BST) {
            Console.WriteLine("IS BST");
        }
        else {
            Console.WriteLine("Not a BST");
        }
    }
}
 
// This code is contributed by Shrikant13