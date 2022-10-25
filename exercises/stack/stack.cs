 public interface IStack<T>
    {
        bool IsEmpty();
        T Pop();
        void Push(T element);
    }
public class NodeStack<T> : IStack<T>
    {
        private StackNode top;
        private int size = 0;

        public int Size => size;

        //O(1)
        public bool IsEmpty(){
            return top == null;
        }

        //O(1)
        public void Push(T element){
            StackNode node = new StackNode(element, top);
            top = node;
            size++;
        }

        //O(1)
        public T Pop(){
            if(IsEmpty())
                throw new Exception("Stack Underflow");
            else    
            {
                var temp = top.Element;
                top = (StackNode)top.Next;
                size--;

                return temp;
            }
        }

        private class StackNode : Node<T>
        {
            public StackNode(T element, StackNode next) : base(element){
                this.Next = next;
            }
        }
    }

    public class Stack <T> : IStack<T>
    {
        private int top = 0;
        private int size;

        private T[] stack;

        public Stack(int size = 10){
            this.size = size;
            stack = new T[size];
        }

        //O(1)
        public bool IsEmpty(){
            if(top == 0)
                return true;
            else
                return false;
        }

        //O(1)
        public void Push(T element){
            if(top > size)
                throw new Exception("Stack Overflow");
            stack[top] = element;
            top++;
        }

        //O(1)
        public T Pop(){
            if(IsEmpty())
                throw new Exception("Stack Underflow");
            else
            {
                top--;
                return stack[top];
            }
        }
    }

