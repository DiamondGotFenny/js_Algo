 public static void Main()
    {
        Queue<string> numbers = new Queue<string>();
        numbers.Enqueue("one");
        numbers.Enqueue("two");
        numbers.Enqueue("three");
        numbers.Enqueue("four");
        numbers.Enqueue("five");

        // A queue can be enumerated without disturbing its contents.
        foreach( string number in numbers )
        {
            Console.WriteLine(number);
        }

        Console.WriteLine("\nDequeuing '{0}'", numbers.Dequeue());
        Console.WriteLine("Peek at next item to dequeue: {0}",
            numbers.Peek());
        Console.WriteLine("Dequeuing '{0}'", numbers.Dequeue());

        // Create a copy of the queue, using the ToArray method and the
        // constructor that accepts an IEnumerable<T>.
        Queue<string> queueCopy = new Queue<string>(numbers.ToArray());

        Console.WriteLine("\nContents of the first copy:");
        foreach( string number in queueCopy )
        {
            Console.WriteLine(number);
        }

        // Create an array twice the size of the queue and copy the
        // elements of the queue, starting at the middle of the
        // array.
        string[] array2 = new string[numbers.Count * 2];
        numbers.CopyTo(array2, numbers.Count);

        // Create a second queue, using the constructor that accepts an
        // IEnumerable(Of T).
        Queue<string> queueCopy2 = new Queue<string>(array2);

        Console.WriteLine("\nContents of the second copy, with duplicates and nulls:");
        foreach( string number in queueCopy2 )
        {
            Console.WriteLine(number);
        }

        Console.WriteLine("\nqueueCopy.Contains(\"four\") = {0}",
            queueCopy.Contains("four"));

        Console.WriteLine("\nqueueCopy.Clear()");
        queueCopy.Clear();
        Console.WriteLine("\nqueueCopy.Count = {0}", queueCopy.Count);
    }

    //implementation
    //use array
     public class Queue<T>
    {

        private T[] queue;

        private int head = 0;
        private int tail = 0;
        private int size;

        public Queue(int size = 10)
        {
            this.size = size;
            queue = new T[size];
        }

        //O(1)
        public void Enqueue(T element)
        {
            if (tail > size)
                throw new Exception("Queue Overflow");

            queue[tail] = element;
            if (tail == size)
                tail = 1;
            else
                tail++;
        }

        //O(1)
        public T Dequeue()
        {
            T element = queue[head];
            if (head == size)
                head = 1;
            else
                head++;

            return element;
        }
    }

//without array, use node
 public class NodeQueue<T>
    {
        private QueueNode head;
        private QueueNode tail;

        public void Enqueue(T element)
        {
            var temp = new QueueNode(element); 
            
            if(head == null)
                head = tail = temp;
            else
            {
                tail.Next = temp;
                tail = temp;
            }
        }

        public T Dequeue()
        {
            if(head == null)
                throw new Exception("Queue Empty");

            var temp = head.Element;
            head = (QueueNode)head.Next;

            return temp;
        }
    
        private class QueueNode : Node<T>
        {
            public QueueNode(T element) : base(element){

            }
        }
    }