using System;
using System.Collections.Generic;
using System.Linq;

namespace Demo.LearnByDoing.General.Tree
{
    /// <summary>
    /// Traverse a tree using Breadth-first search algorithm.
    /// </summary>
    public class BreadthFirstTraversal
    {
        public static void Main(string[] args)
        {
            TreeNode<int> root = CreateSampleBinaryTree();

            List<int> list = new List<int>();
            TraverseBreadthFirst(root, list);

            PrintListWithHeader("===== Bread-first Traversal =====", list);
        }

        private static void TraverseBreadthFirst(TreeNode<int> root, List<int> list)
        {
            if (root == null) return;

            Queue<TreeNode<int>> queue = new Queue<TreeNode<int>>();
            queue.Enqueue(root);

            while (queue.Count > 0)
            {
                var node = queue.Dequeue();
                list.Add(node.Value);

                if (node.Left != null)
                    queue.Enqueue(node.Left);

                if (node.Right != null)
                    queue.Enqueue(node.Right);
            }
        }
private static void InOrderTraversal(TreeNode<int> node, List<int> list)
{
	if (node == null) return;

	InOrderTraversal(node.Left, list);
	list.Add(node.Value);
	InOrderTraversal(node.Right, list);
}

private static void PreOrderTraversal(TreeNode node, List list)
{
    if (node == null) return;

    list.Add(node.Value);
    PreOrderTraversal(node.Left, list);
    PreOrderTraversal(node.Right, list);
}
        private static void PrintListWithHeader(string header, List<int> list)
        {
            Console.Write("{0}: {1}", header, string.Join(" ", list.Select(val => val.ToString()).ToArray()));
            Console.WriteLine();
        }

        private static TreeNode<int> CreateSampleBinaryTree()
        {
            TreeNode<int> root = new TreeNode<int>(4)
            {
                Left = new TreeNode<int>(2, new TreeNode<int>(1), new TreeNode<int>(3)),
                Right = new TreeNode<int>(6, new TreeNode<int>(5), new TreeNode<int>(7))
            };
            return root;
        }
    }
}



// Iterative Queue based C# program
// to do level order traversal
// of Binary Tree
 
/* Class to represent Tree node */
public class Node {
    public int data;
    public Node left, right;
 
    public Node(int item)
    {
        data = item;
        left = null;
        right = null;
    }
}
 
/* Class to print Level Order Traversal */
public class BinaryTree {
 
    Node root;
 
    /* Given a binary tree. Print
    its nodes in level order using
     array for implementing queue */
    void printLevelOrder()
    {
        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(root);
        while (queue.Count != 0) {
 
            Node tempNode = queue.Dequeue();
            Console.Write(tempNode.data + " ");
 
            /*Enqueue left child */
            if (tempNode.left != null) {
                queue.Enqueue(tempNode.left);
            }
 
            /*Enqueue right child */
            if (tempNode.right != null) {
                queue.Enqueue(tempNode.right);
            }
        }
    }
 
    // Driver code
    public static void Main()
    {
        /* creating a binary tree and entering
        the nodes */
        BinaryTree tree_level = new BinaryTree();
        tree_level.root = new Node(1);
        tree_level.root.left = new Node(2);
        tree_level.root.right = new Node(3);
        tree_level.root.left.left = new Node(4);
        tree_level.root.left.right = new Node(5);
 
        Console.WriteLine("Level order traversal "
                          + "of binary tree is - ");
        tree_level.printLevelOrder();
    }
}
 
/* This code contributed by PrinciRaj1992 */