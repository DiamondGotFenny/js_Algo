public static int[] Fibonacci_Iterative(int n)  
{  
    int[] fibArray=new int[n]
     fibArray[0]=0;
     fibArray[1]=1;

    for (int i = 2; i < n; i++)  
    {  
       int a=fibArray[i-1];
       int b=fibArray[i-2];
       fibArray.push(a+b);  
    }  
    return fibArray[n]
}

public static void printFib(){
    int firstNumber = 0, SecondNumber = 1, nextNumber, numberOfElements;
            Console.Write("Enter the number of elements to Print : ");
            numberOfElements = int.Parse(Console.ReadLine());
            if(numberOfElements < 2)
            {
                Console.Write("Please Enter a number greater than two");
            }
            else
            {
                //First print first and second number
                Console.Write(firstNumber + " " + SecondNumber + " ");
                //Starts the loop from 2 because 0 and 1 are already printed
                for(int i = 2; i < numberOfElements; i++)
                {
                    nextNumber = firstNumber + SecondNumber;
                    Console.Write(nextNumber + " ");
                    firstNumber = SecondNumber;
                    SecondNumber = nextNumber;
                }
            }
            
            Console.ReadKey();
}

private static int NthFibonacciNumber(int number)
        {
            if ((number == 0) || (number == 1))
            {
                return number;
            }
            else
            {
                return (NthFibonacciNumber(number - 1) + NthFibonacciNumber(number - 2));
            }
        }

static void Main(string[] args)
        {
            Console.Write("Please enter the Nth number of the Fibonacci Series : ");
            int NthNumber = int.Parse(Console.ReadLine());
            //Decrement the Nth Number by 1. This is because the series starts with 0
            NthNumber = NthNumber - 1;
            Console.Write(NthFibonacciNumber(NthNumber));
            Console.ReadKey();
        }
        private static int NthFibonacciNumber(int number)
        {
            int firstNumber = 0, secondNumber = 1, nextNumber = 0;
            // To return the first Fibonacci number  
            if (number == 0)
                return firstNumber;
            for (int i = 2; i <= number; i++)
            {
                nextNumber = firstNumber + secondNumber;
                firstNumber = secondNumber;
                secondNumber = nextNumber;
            }
            return secondNumber;
        }